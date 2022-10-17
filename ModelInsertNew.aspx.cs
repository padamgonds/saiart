using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace SaiArtLatest
{
    public partial class ModelInsertNew : System.Web.UI.Page
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
            DataSet obj_ds_VisitorType = new DataSet();
            obj_ds_VisitorType = obj_WebService.DDL_Data();
            //ddlModelSize.Items.Clear();
            ddlModelSize.DataTextField = obj_ds_VisitorType.Tables[0].Columns["MODEL_SIZE"].ToString().Trim();
            ddlModelSize.DataValueField = obj_ds_VisitorType.Tables[0].Columns["ID"].ToString().Trim();
            ddlModelSize.DataSource = obj_ds_VisitorType.Tables[0];
            ddlModelSize.DataBind();
            ddlModelSize.Items.Insert(0, "--Select--");
        }

        /*insert the data but check wherther it is present or not if present then error through*/

        protected void btn_save_click(object sender, EventArgs e)
        {
            try
            {
                DataSet obj_ds = new DataSet();

                obj_ds = obj_WebService.Insert_ModelMaster(txtMOdelName.Text,txtModelQuantity.Text,txtRate.Text,ddlModelSize.SelectedIndex);

                if (obj_ds.Tables.Contains("Error"))
                {
                    lblErrMsg.Visible = true;
                    lblErrMsg.Text = lblErrMsg.Text = obj_ds.Tables["Error"].Rows[0]["ErrMsg"].ToString();
                }
                else
                {
                    lblErrMsg.Visible = true;
                    if (obj_ds.Tables[0].Rows[0]["sucsess"].ToString() == "1")
                    {
                        lblErrMsg.Text = "saved Successfully.";
                    }
                    if (obj_ds.Tables[0].Rows[0]["sucsess"].ToString() == "0")
                    {
                        lblErrMsg.Text = "already added.";
                    }
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
