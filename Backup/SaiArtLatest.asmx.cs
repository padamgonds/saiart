using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data;

namespace SaiArtLatest
{
    /// <summary>
    /// Summary description for SaiArtLatest
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class SaiArtLatest : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }


        /*  
            * Method Name  - SavePreSignupInfo
            * Created By   - Avinash Chandanshive
            * Modified By  - 
            * Modified On  - 
            * Purpose      - To save Contributors PreSignupData. */

        [WebMethod]

        public DataSet Login_check(string p_user_name, string p_str_password)
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();

            Parameters.Add("@p_user_name", p_user_name);
            Parameters.Add("@p_user_password", p_str_password);

            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.Proc_Login_check, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }



        [WebMethod]

        public DataSet Dashboard_Data()
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();

            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.USP_GET_DASHBOARD, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }


        [WebMethod]

        public DataSet DDL_Data()
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();

            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.USP_GET_DDL, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }


        [WebMethod]

        public DataSet Party_Dashboard(string p_where )
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();


            Parameters.Add("@p_where", p_where);
            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.USP_GET_PARTYDASHBOARD, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }


        [WebMethod]

        public DataSet Get_PartyData(string p_user_Id)
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();

            Parameters.Add("@p_UserID", p_user_Id);
          

            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.USP_GET_PARTYDATA, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }


        [WebMethod]

        public DataSet Insert_Party_Master(string p_FIRST_NAME, string p_LAST_NAME, string p_ADDRESS, string p_MOBILE_NO,
            string p_ALTERNATE_NUMBER, string p_CITY, string p_STATE)
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();

            Parameters.Add("@p_FIRST_NAME", p_FIRST_NAME);
            Parameters.Add("@p_LAST_NAME", p_LAST_NAME);
            Parameters.Add("@p_ADDRESS ", p_ADDRESS);
            Parameters.Add("@p_MOBILE_NO", p_MOBILE_NO);
            Parameters.Add("@p_ALTERNATE_NUMBER", p_ALTERNATE_NUMBER);
            Parameters.Add("@p_CITY", p_CITY);
            Parameters.Add("@p_STATE", p_STATE);

            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.Proc_create_PartyMasterData, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }


        /// <summary>
        /// Priyanka Nikam
        /// Get Model Master Details Frim Model Size
        /// </summary>
        /// <param name="p_user_Id"></param>
        /// <returns></returns>
        [WebMethod]
        public DataSet GetModelMasterData(string p_ModelSizeID)
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();

            Parameters.Add("@p_MODELSIZEID", p_ModelSizeID);


            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.USP_GET_MODELMASTER, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }


        /// <summary>
        /// Priyanka Nikam
        /// Insert Book Party Model Data 
        /// </summary>       
        /// <returns></returns>
        [WebMethod]
        public DataSet Insert_BookParty(int p_PartyID,int p_ModelSizeId,int p_ModelId,int p_quantity,decimal p_Total_Price,int p_Createdby)
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();
 
            Parameters.Add("@P_PARTY_ID", p_PartyID);
            Parameters.Add("@P_MODEL_SIZE", p_ModelSizeId);
            Parameters.Add("@P_MODEL_ID", p_ModelId);
            Parameters.Add("@P_QUANTITY", p_quantity);
            Parameters.Add("@P_TOTAL_PRICE", p_Total_Price);
            Parameters.Add("@P_CREATED_BY", p_Createdby);
           
            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.USP_INSERT_BOOK_PARTY, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }



        [WebMethod]

        public DataSet Insert_ModelMaster(string P_MODELNAME, string P_MODELQuantity, string P_MODELRate, int P_MODELSize)
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();

            Parameters.Add("@P_MODELNAME", P_MODELNAME);
            Parameters.Add("@P_MODELQuantity", P_MODELQuantity);
            Parameters.Add("@P_MODELRate", P_MODELRate);
            Parameters.Add("@P_MODELSize", P_MODELSize);
           
            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.PROC_INSERT_MODELMASTER, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }



        [WebMethod]
        public DataSet GET_BILL_DATA(int p_party_id)
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();

            Parameters.Add("@P_PARTY_ID", p_party_id);
          

            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.PROC_CREATE_BILL, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }

        /*Apurva*/
        [WebMethod]

        public DataSet Update_ModelMaster(int p_id, string P_MODELNAME, string P_MODELQuantity, string P_MODELRate)
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();

            Parameters.Add("@p_id", p_id);
            Parameters.Add("@p_model_name", P_MODELNAME);
            Parameters.Add("@p_model_quanty", P_MODELQuantity);
            Parameters.Add("@p_model_rate", P_MODELRate);
           

            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.PROC_UPDT_MODELMASTER, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }

        /*Apurva*/
        [WebMethod]

        public DataSet Get_ModelMaster(int p_id)
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();

            Parameters.Add("@p_model_id", p_id);
         


            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.PROC_SELECT_MODELUPDATE, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }

        /*****************************************/
        [WebMethod]

        public DataSet Get_PartyMaster(int p_id)
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();

            Parameters.Add("@p_ID", p_id);



            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.PROC_GEt_Party_master, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }

        /*****************************************/

        [WebMethod]

        public DataSet Update_Party_Master(int p_id,string p_FIRST_NAME, string p_LAST_NAME, string p_ADDRESS, string p_MOBILE_NO,
            string p_ALTERNATE_NUMBER, string p_CITY, string p_STATE)
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();

            Parameters.Add("@p_ID", p_id);
            Parameters.Add("@p_firstname", p_FIRST_NAME);
            Parameters.Add("@p_lastname", p_LAST_NAME);
            Parameters.Add("@p_address ", p_ADDRESS);
            Parameters.Add("@p_mobilenumber", p_MOBILE_NO);
            Parameters.Add("@p_altermobilenumber", p_ALTERNATE_NUMBER);
            Parameters.Add("@p_city", p_CITY);
            Parameters.Add("@p_state", p_STATE);

            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.PROC_UPDATE_PARTYMASTER, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }


        [WebMethod]

        public DataSet Delete_ModelMaster(int p_id)
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();

            Parameters.Add("@p_model_id", p_id);

            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.PROC_DELETE_MODELMASTER, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }

        /**********************************************/

        [WebMethod]

        public DataSet Delete_BOOKBILL_FOR_PARTY(int p_PARTYid,int P_MODEL_ID )
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();

            Parameters.Add("@P_PARTY_ID", p_PARTYid);
            Parameters.Add("@P_MODEL_ID", P_MODEL_ID);

            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.PROC_DELETE_BOOKEDBILL, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }



        [WebMethod]

        public DataSet Delete_Party_Master(int p_PARTYid)
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();

            Parameters.Add("@P_PARTY_ID", p_PARTYid);
            //Parameters.Add("@P_MODEL_ID", P_MODEL_ID);

            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.PROC_DELETE_PARTYMASTER, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }


        /// <summary>
        /// Priyanka Nikam
        /// Insert Book Party Model Data 
        /// </summary>       
        /// <returns></returns>
        [WebMethod]
        public DataSet Insert_BookParty_New(DataTable obj_dt_PartyBook, int party_id)
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();

            Parameters.Add("@P_PARTY", obj_dt_PartyBook);
            Parameters.Add("@p_party_id", party_id);
            //Parameters.Add("@P_MODEL_ID", p_ModelId);
            //Parameters.Add("@P_QUANTITY", p_quantity);
            //Parameters.Add("@P_TOTAL_PRICE", p_Total_Price);
            //Parameters.Add("@P_CREATED_BY", p_Createdby);

            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.PROC_INSERT_PARTYMODELALL, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }


        /// <summary>
        /// Priyanka Nikam
        /// Insert Book Party Model Data 
        /// </summary>       
        /// <returns></returns>
        [WebMethod]
        public DataSet Dashboard_PartyData(int party_id)
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();


            Parameters.Add("@PARTY_ID", Convert.ToInt32(party_id));
          

            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.PROC_GET_ALLBOOKDATA_PARTY, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }

        [WebMethod]

        public DataSet Dashboard_Data_FinalList()
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();

            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.PROC_GETALLMASTER_BOOKED, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }

        /// <summary>
        /// Apurva H
        /// Insert Book Party Model Data 
        /// </summary>       
        /// <returns></returns>
        [WebMethod]
        public DataSet Dashboard_ModelPartyData(int Model_id)
        {
            DataAccessLayer obj_Conn = new DataAccessLayer();
            Dictionary<string, object> Parameters = new Dictionary<string, object>();


            Parameters.Add("@P_MODEL_ID", Convert.ToInt32(Model_id));


            DataSet obj_dt_sp = new DataSet();
            try
            {
                obj_Conn.Open();
                obj_dt_sp = obj_Conn.GetDataTablesFromSP(Constant.PROC_GET_MODELVIEW_PARTIES, Parameters);
            }
            catch (Exception ex)
            {
                DataTable obj_ErrTable = new DataTable("Error");

            }
            finally
            {
                obj_Conn.Close();
                obj_Conn.Dispose();
            }
            return obj_dt_sp;
        }

    }
}
