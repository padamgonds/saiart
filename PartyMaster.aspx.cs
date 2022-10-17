using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace SaiArtLatest
{
    public partial class PartyMaster : System.Web.UI.Page
    {
        SaiArtLatest obj_WebService = new SaiArtLatest();

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btn_submit_click(object sender, EventArgs e)
        {
            DataSet obj_ds = new DataSet();
            obj_ds = obj_WebService.Insert_Party_Master(txtFirstname.Text, txtlastname.Text, txtAddress.Text,
                txtMobilenumber.Text, txtalt_mob.Text, txt_city.Text, txt_state.Text);

            if (obj_ds != null)
            {
                if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "1")
                {
                    lblErrMsg.Text = "Party added successfully.";
                }
                else
                {
                    lblErrMsg.Text = "Party already added.";
                }
            }

        }
    }
}