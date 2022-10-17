using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace SaiArtLatest
{
    public partial class ModelInsertUpdate : System.Web.UI.Page
    {
        SaiArtLatest obj_WebService = new SaiArtLatest();
        protected void Page_Load(object sender, EventArgs e)
        {

            if (!IsPostBack)
            {
                SetDDlData();
            }
        }

        private void SetDDlData()
        {
            string id = Request.QueryString["ID"];
            DataSet obj_ds = new DataSet();
            obj_ds = obj_WebService.Get_ModelMaster(Convert.ToInt32(id));
            txtSize.Text = obj_ds.Tables[0].Rows[0]["MODEL_SIZE"].ToString().Trim();
            txtMOdelName.Text = obj_ds.Tables[0].Rows[0]["MODEL_NAME"].ToString().Trim();
            txtModelQuantity.Text = obj_ds.Tables[0].Rows[0]["MODEL_QUANTITY"].ToString().Trim();
            txtRate.Text = obj_ds.Tables[0].Rows[0]["MODEL_PRIZE"].ToString().Trim();
            
        }

        /*insert the data but check wherther it is present or not if present then error through*/

        protected void btn_save_click(object sender, EventArgs e)
        {
            try
            {
                DataSet obj_ds = new DataSet();
                string id = Request.QueryString["ID"];
                obj_ds = obj_WebService.Update_ModelMaster(Convert.ToInt32(id), txtMOdelName.Text, txtModelQuantity.Text, txtRate.Text);

                if (obj_ds.Tables.Contains("Error"))
                {
                    lblErrMsg.Visible = true;
                    lblErrMsg.Text = lblErrMsg.Text = obj_ds.Tables["Error"].Rows[0]["ErrMsg"].ToString();
                }
                else
                {
                    lblErrMsg.Visible = true;
                    lblErrMsg.Text = "Updated Successfully.";
                    //if (obj_ds.Tables[0].Rows[0]["sucsess"].ToString() == "1")
                    //{
                    //    lblErrMsg.Text = "saved Successfully.";
                    //}
                    //if (obj_ds.Tables[0].Rows[0]["sucsess"].ToString() == "0")
                    //{
                    //    lblErrMsg.Text = "already added.";
                    //}
                }

            }
            catch (Exception ex)
            {
                lblErrMsg.Text = ex.Message;
            }
        }

        protected void btn_cancel(object sender, EventArgs e)
        {
            Response.Redirect("Home.aspx");
        }
        
    }
}