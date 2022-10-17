using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Net.Mail;
using System.Net;


using System.Text;
using System.Security.Cryptography;
using System.IO;
using System.Data;



public class CommonFunction
{


    public void SenEmail(string Eamil, string UID, string Link, string Fname, string Lname)
    {

        try
        {
            string EmailID = ConfigurationManager.AppSettings["Email"].ToString();
            string Password = ConfigurationManager.AppSettings["Password"].ToString();
            MailAddress from = new MailAddress(EmailID, "FU support team");
            MailAddress to = new MailAddress(Eamil);
            MailMessage mm = new MailMessage(from, to);
            mm.From = new MailAddress(EmailID, "FU support");
            mm.Subject = "Reset your password on FantasticYou";


            mm.Body += "Hello " + Fname + " " + Lname + ", <br><br>";

            mm.Body += " We have received a request to reset the password for your account.";

            mm.Body += "<p> <a href='" + Link + "?ID=" + UID + "' style='font-size:13px;color:#00baf0;text-decoration:none' target='_blank'>Click here</a> to <span class='il'>reset</span> your  <span class='il'>password for Fantastic you</span>.</p><br><br>";




            mm.Body += "Thank You<br><br>";
            mm.Body += "Thank You FU Support Team";

            mm.IsBodyHtml = true;
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.gmail.com";
            smtp.EnableSsl = true;
            NetworkCredential NetworkCred = new NetworkCredential(EmailID, Password);
            smtp.UseDefaultCredentials = true;
            smtp.Credentials = NetworkCred;
            smtp.Port = 587;
            smtp.Send(mm);
        }
        catch (Exception Ex)
        {

        }
    }


    public void Welecomemail()
    {


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



    /*  
        * Method Name  - DataTableToJSONWithJavaScriptSerializer
        * Created By   - Avinash Chandanshive
        * Modified By  - 
        * Modified On  - 
        * Purpose      - Convert Response into json.*/

    public string DataTableToJSONWithJavaScriptSerializer(DataTable table)
    {
        System.Web.Script.Serialization.JavaScriptSerializer jsSerializer = new System.Web.Script.Serialization.JavaScriptSerializer();
        List<Dictionary<string, object>> parentRow = new List<Dictionary<string, object>>();
        Dictionary<string, object> childRow;
        try
        {
            if (table != null)
            {
                foreach (DataRow row in table.Rows)
                {
                    childRow = new Dictionary<string, object>();
                    foreach (DataColumn col in table.Columns)
                    {
                        childRow.Add(col.ColumnName, row[col]);
                    }
                    parentRow.Add(childRow);
                }
                return jsSerializer.Serialize(parentRow);
            }
            else
            {
                return "{\"error\":\"1\"}";
            }
        }
        catch (Exception ex)
        {
            return "{\"error\":\"1\"}";
        }


    }



    public string GetJsonDataTwoTables(DataSet ds)
    {
        string jsonOutput = "";

        try
        {
            DataTable dt1 = new DataTable();

            string[] arr = new string[dt1.Rows.Count];
            System.Web.Script.Serialization.JavaScriptSerializer serializer = new System.Web.Script.Serialization.JavaScriptSerializer();
            List<Dictionary<string, object>> tableRows = new List<Dictionary<string, object>>();
            Dictionary<string, object> row;

            int tablecount = ds.Tables.Count;
            for (int i = 0; i < tablecount; i++)
            {
                dt1 = ds.Tables[i];
                if (dt1 != null)
                {

                    foreach (DataRow dr in dt1.Rows)
                    {
                        row = new Dictionary<string, object>();

                        foreach (DataColumn col in dt1.Columns)
                        {
                            row.Add(col.ColumnName, dr[col]);
                        }

                        tableRows.Add(row);
                    }

                }
            }

            serializer.MaxJsonLength = Int32.MaxValue;
            jsonOutput = jsonOutput + serializer.Serialize(tableRows);
            return jsonOutput;
        }

        catch (Exception)
        {
            return null;
        }



    }



    public void SenEmailToUser(string Eamil, string sub, string body, string SenderName)
    {

        try
        {
            string EmailID = ConfigurationManager.AppSettings["Email"].ToString();
            string Password = ConfigurationManager.AppSettings["Password"].ToString();
            MailAddress from = new MailAddress(EmailID, SenderName);
            MailAddress to = new MailAddress(Eamil);
            MailMessage mm = new MailMessage(from, to);
            mm.From = new MailAddress(EmailID, SenderName);
            mm.Subject = sub;

            mm.Body += body;

            mm.IsBodyHtml = false;

            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.gmail.com";
            smtp.EnableSsl = true;
            NetworkCredential NetworkCred = new NetworkCredential(EmailID, Password);
            smtp.UseDefaultCredentials = true;
            smtp.Credentials = NetworkCred;
            smtp.Port = 587;
            smtp.Send(mm);
        }
        catch (Exception Ex)
        {

        }
    }


}
