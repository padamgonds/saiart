using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.IO;
using System.Security.Cryptography;
using System.Text;

/// <summary>
/// Summary description for DataAcessLayer
/// </summary>
public class DataAccessLayer : IDisposable
{

    SqlConnection _connection = null;
    SqlTransaction _transaction = null;

    public DataAccessLayer(string connectionstring)
    {
        _connection = new SqlConnection(connectionstring);
    }

    public DataAccessLayer()
    {
        _connection = new SqlConnection(GetAppSetting("mycon"));
    }

    public void Dispose()
    {
        // Close connection
        if (_connection.State != ConnectionState.Closed) { _connection.Close(); }

    }

    #region Connection Members

    // Open connection
    public void Open()
    {
        try
        {
            _connection.Open();
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    // Is connection open
    public bool IsConnected
    {
        get { return (_connection != null && _connection.State != ConnectionState.Closed); }
    }

    // In transaction
    public bool InTransaction
    {
        get { return _transaction != null; }
    }

    // Close connection
    public void Close()
    {
        if (_connection != null && _connection.State == System.Data.ConnectionState.Open)
            _connection.Close();
    }

    #endregion

    #region Transaction Members

    // Begin transaction
    public bool BeginTransaction()
    {
        if (!IsConnected)
            return false;

        _transaction = _connection.BeginTransaction();

        return true;

    }

    // Commit transaction
    public bool CommitTransaction()
    {

        if (_transaction != null)
        {
            _transaction.Commit();
            _transaction = null;
            return true;
        }
        else
        {
            return false;
        }
    }

    // Rollback transaction
    public bool RollbackTransaction()
    {
        if (_transaction != null)
        {
            _transaction.Rollback();
            _transaction = null;
            return true;
        }
        else
        {
            return false;
        }
    }

    #endregion

    #region Standard Commands

    // Create db command
    private SqlCommand CreateDbCommand(string commandText, Dictionary<string, object> parameters, CommandType cmdType)
    {
        // Create command
        SqlCommand cmd = new SqlCommand(commandText, _connection, _transaction);
        cmd.CommandType = cmdType;
        cmd.CommandTimeout = 0;

        // Add parameters
        if (parameters != null)
            AddDbCommandParams(cmd, parameters);

        return cmd;
    }

    // Add params (db dependant)
    private void AddDbCommandParams(SqlCommand cmd, Dictionary<string, object> parameters)
    {

        Dictionary<string, object> newParams = new Dictionary<string, object>();

        // Render nulls
        foreach (string key in parameters.Keys)

            // Null check must be done first
            if (parameters[key] == null)
                newParams.Add(key, DBNull.Value);
            else if (parameters[key].GetType() == typeof(DateTime))
                if (Convert.ToDateTime(parameters[key]) == System.DateTime.MinValue)
                    newParams.Add(key, DBNull.Value);
                else
                    newParams.Add(key, parameters[key]);
            else
                newParams.Add(key, parameters[key]);


        // Add parameters to command
        foreach (string key in newParams.Keys)
        {
            cmd.Parameters.AddWithValue(key, newParams[key]);
        }

    }

    public int ExecuteCommandNonQuery(string commandtext, Dictionary<string, object> parameters)
    {
        int rowsAffected = 0;
        if (!IsConnected)
        {
            // Create db command
            SqlCommand cmd = CreateDbCommand(commandtext, parameters, CommandType.Text);
            try
            {
                Open();
                // Execute command
                rowsAffected = cmd.ExecuteNonQuery();
                Close();
            }
            catch
            {
                return rowsAffected;
            }

        }
        return rowsAffected;
    }

    public object ExecuteCommandScaler(string commandtext, Dictionary<string, object> parameters)
    {
        object returnVal = null;
        if (!IsConnected)
        {
            // Create cmd
            SqlCommand cmd = CreateDbCommand(commandtext, parameters, CommandType.Text);
            try
            {
                Open();
                // Return scaler result
                returnVal = cmd.ExecuteScalar();
                Close();
            }
            catch (Exception ex)
            {
                return returnVal;
            }

        }
        return returnVal;
    }
    //***********if Not connected
    public DataTable GetDataTable(string commandtext, Dictionary<string, object> parameters)
    {
        if (!IsConnected)
        {
            // Create cmd
            SqlCommand cmd = CreateDbCommand(commandtext, parameters, CommandType.Text);

            // Prepare adapter
            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
            // Fill dataTable
            DataTable dataTab = new DataTable();
            try
            {
                adapter.Fill(dataTab);
                return dataTab;
            }
            catch
            {
                return null;
            }
        }
        return null;
    }
    //*************for DataTable
    public DataTable GetDataTableFromSP(string commandtext, Dictionary<string, object> parameters)
    {
        if (IsConnected)
        {
            // Create command
            SqlCommand cmd = CreateDbCommand(commandtext, parameters, CommandType.StoredProcedure);

            // Prepare adapter
            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
            // Fill dataTable
            DataTable dataTab = new DataTable();
            try
            {
                adapter.Fill(dataTab);
                return dataTab;
            }
            catch
            {
                return null;
            }
        }
        return null;
    }
    //****************for DataSet
    public DataSet GetDataTablesFromSP(string commandtext, Dictionary<string, object> parameters)
    {
        if (IsConnected)
        {
            // Create command
            SqlCommand cmd = CreateDbCommand(commandtext, parameters, CommandType.StoredProcedure);

            // Prepare adapter
            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
            // Fill dataTable
            DataSet dataSet = new DataSet();
            try
            {
                adapter.Fill(dataSet);
                return dataSet;
            }
            catch
            {
                return null;
            }
        }
        return null;
    }


    #endregion

    public interface IDispose
    {
        void Dispose();
    }

    private string GetAppSetting(string name)
    {
        try
        {

            return ConfigurationManager.ConnectionStrings[name].ConnectionString;

        }
        catch
        {
            //try
            //{
            //    return Settings.Default.MainConnectionString;
            //    return "";
            //}
            //catch { return ""; }
            return null;
        }
    }

    public string Encrypt(string clearText)
    {
        string EncryptionKey = ConfigurationManager.AppSettings["KEY"].ToString();
        byte[] clearBytes = Encoding.Unicode.GetBytes(clearText);
        using (Aes encryptor = Aes.Create())
        {
            Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
            encryptor.Key = pdb.GetBytes(32);
            encryptor.IV = pdb.GetBytes(16);
            using (MemoryStream ms = new MemoryStream())
            {
                using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateEncryptor(), CryptoStreamMode.Write))
                {
                    cs.Write(clearBytes, 0, clearBytes.Length);
                    cs.Close();
                }
                clearText = Convert.ToBase64String(ms.ToArray());
            }
        }
        return clearText;
    }

    public string Decrypt(string cipherText)
    {
        string EncryptionKey = ConfigurationManager.AppSettings["KEY"].ToString();
        byte[] cipherBytes = Convert.FromBase64String(cipherText);
        using (Aes encryptor = Aes.Create())
        {
            Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
            encryptor.Key = pdb.GetBytes(32);
            encryptor.IV = pdb.GetBytes(16);
            using (MemoryStream ms = new MemoryStream())
            {
                using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateDecryptor(), CryptoStreamMode.Write))
                {
                    cs.Write(cipherBytes, 0, cipherBytes.Length);
                    cs.Close();
                }
                cipherText = Encoding.Unicode.GetString(ms.ToArray());
            }
        }
        return cipherText;
    }


}

