using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;



namespace SaiArtLatest
{
    public partial class Login : System.Web.UI.Page
    {
        SaiArtLatest obj_WebService = new SaiArtLatest();

        protected void Page_Load(object sender, EventArgs e)
        {
           
        }

        protected void Btn_click_event(object sender, EventArgs e)
        {
           // Response.Redirect("Home.aspx");
            DataSet obj_ds = new DataSet();
            obj_ds = obj_WebService.Login_check(txtLanID.Text, txtPassword.Text);
            if (obj_ds != null)
            {
                if (obj_ds.Tables[0].Rows[0]["Validate"].ToString() == "1")
                {
                    Session.Add("USER_ID", obj_ds.Tables[0].Rows[0]["USER_ID"].ToString());
                    Response.Redirect("Home.aspx");
                }
                else
                {
                    lblError.Text = "Please check the user name or password.";
                }
            }
            else
            {
                lblError.Text = "Please check the user name or password.";
            }
        }

    }
}