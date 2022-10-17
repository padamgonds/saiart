using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;


namespace SaiArtLatest
{
    public partial class PartyDashboard : System.Web.UI.Page
    {
        SaiArtLatest obj_WebService = new SaiArtLatest();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                SetGridData();
            }
        }
        protected void SetGridData()
        {
            DataSet obj_ds = new DataSet();
            string str = "";
            obj_ds = obj_WebService.Party_Dashboard(txt_search.Text);

            if (obj_ds.Tables.Contains("Error"))
            {
                //lblError.Visible = true;
                // lblError.Text = obj_ds.Tables["Error"].Rows[0]["ErrMsg"].ToString();// "Authentication failed. Please try later.";
            }
            else
            {
                grdPartyDashboard.DataSource = obj_ds.Tables[0];
                grdPartyDashboard.DataBind();
            }
        }

        protected void grdPartyDashboard_RowCommand(object sender, GridViewCommandEventArgs e)
        {

            if (e.CommandName.ToString().ToUpper() != "PAGE")
            {
                GridViewRow row = (GridViewRow)((Control)e.CommandSource).NamingContainer;
                LinkButton lnkBid = (LinkButton)row.FindControl("lnkName");

                String id = e.CommandArgument.ToString();
                //  Session["PAST"] = "";
                //var plainTextBytes = Encoding.UTF8.GetBytes(id.Trim());
                //string encodedText = Convert.ToBase64String(plainTextBytes);
                Response.Redirect("~/BookPartyModelNew.aspx?ID=" + id);
            }
        }



        protected void btn_search_click(object sender, EventArgs e)
        {
            try
            {
                DataSet obj_ds = new DataSet();

                obj_ds = obj_WebService.Party_Dashboard(txt_search.Text);

                grdPartyDashboard.DataSource = obj_ds.Tables[0];
                grdPartyDashboard.DataBind();
            }
            catch
            {
            }
        }

        protected void grdPartyDashboard_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            DataSet obj_ds = new DataSet();
            string str = "";
            obj_ds = obj_WebService.Party_Dashboard(txt_search.Text);


            grdPartyDashboard.PageIndex = e.NewPageIndex;

            grdPartyDashboard.DataSource = obj_ds.Tables[0];
            grdPartyDashboard.DataBind();
        }
    }
}