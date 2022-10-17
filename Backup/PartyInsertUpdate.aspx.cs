using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace SaiArtLatest
{
    public partial class PartyInsertUpdate : System.Web.UI.Page
    {

        SaiArtLatest obj_WebService = new SaiArtLatest();

        protected void Page_Load(object sender, EventArgs e)
        {

            if (!IsPostBack)
            {
                if (Request.QueryString["ID"] != null)
                {
                    DataSet obj_ds_data = new DataSet();
                    if (Request.QueryString["ID"] != null)
                    {
                        obj_ds_data = PopulateData(Request.QueryString["ID"].ToString());
                    }
                }
            }
        }


        DataSet PopulateData(string Id)
        {
            DataSet obj_ds_data = obj_WebService.Get_PartyMaster(Convert.ToInt32(Id));
            if (obj_ds_data.Tables.Contains("Error"))
            {
                lblErrMsg.Visible = true;
                lblErrMsg.Text = obj_ds_data.Tables["Error"].Rows[0]["ErrMsg"].ToString();// "Authentication failed. Please try later.";
            }

            else
            {

                if (obj_ds_data.Tables[0].Rows.Count > 0)
                {
                    //txtparty_name.Text = obj_ds_data.Tables[0].Rows[0]["NAME"].ToString();
                    //txtparty_number.Text = obj_ds_data.Tables[0].Rows[0]["PARTY_ID"].ToString();

                    txtparty_num.Text = obj_ds_data.Tables[0].Rows[0]["PARTY_ID"].ToString();
                    txtFirstname.Text =obj_ds_data.Tables[0].Rows[0]["FIRST_NAME"].ToString();
                    txtlastname.Text = obj_ds_data.Tables[0].Rows[0]["LAST_NAME"].ToString();
                    txtAddress.Text = obj_ds_data.Tables[0].Rows[0]["ADDRESS"].ToString();
                    txtMobilenumber.Text = obj_ds_data.Tables[0].Rows[0]["MOBILE_NO"].ToString();
                    txtalt_mob.Text = obj_ds_data.Tables[0].Rows[0]["ALTERNATE_NUMBER"].ToString();
                    txt_city.Text = obj_ds_data.Tables[0].Rows[0]["CITY"].ToString();
                    txt_state.Text = obj_ds_data.Tables[0].Rows[0]["STATE"].ToString();

                }
            }
            return obj_ds_data;
        }



        protected void btn_submit_click(object sender, EventArgs e)
        {
            DataSet obj_ds = new DataSet();
            obj_ds = obj_WebService.Update_Party_Master(Convert.ToInt32( Request.QueryString["ID"].ToString()),
                txtFirstname.Text, txtlastname.Text, txtAddress.Text,
                txtMobilenumber.Text, txtalt_mob.Text, txt_city.Text, txt_state.Text);

            if (obj_ds != null)
            {
                if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "1")
                {
                    lblErrMsg.Text = "Party Updated successfully.";
                }

                Response.Redirect("PartyDashboard.aspx");
            }

        }
    }
}