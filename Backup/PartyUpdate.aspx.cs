using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace SaiArtLatest
{
    public partial class PartyUpdate : System.Web.UI.Page
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
            obj_ds = obj_WebService.Party_Dashboard("");

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
        
      //  protected void grdPartyDashboard_RowCommand(object sender, GridViewCommandEventArgs e)

        protected void lnk_edit_click(object sender, EventArgs e)
      {

            //if (e.CommandName.ToString().ToUpper() != "PAGE")
            //{
            //    GridViewRow row = (GridViewRow)((Control)e.CommandSource).NamingContainer;
            //    LinkButton lnkBid = (LinkButton)row.FindControl("lnkName");

            //    String id = e.CommandArgument.ToString();
            //    Response.Redirect("~/PartyInsertUpdate.aspx?ID=" + id);
            //}

          LinkButton lnkbtn = sender as LinkButton;
          GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
          string value = grdPartyDashboard.DataKeys[gvrow.RowIndex].Value.ToString();
          HiddenField hdn_partyID = (HiddenField)grdPartyDashboard.Rows[gvrow.RowIndex].Cells[1].FindControl("hdn_partyID");
          Response.Redirect("~/PartyInsertUpdate.aspx?ID=" + hdn_partyID.Value);

        }

        protected void lnkDelete_Click(object sender, EventArgs e)
        {

            LinkButton lnkbtn = sender as LinkButton;
            GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
            string value = grdPartyDashboard.DataKeys[gvrow.RowIndex].Value.ToString();

            HiddenField hdn_partyID = (HiddenField)grdPartyDashboard.Rows[gvrow.RowIndex].Cells[1].FindControl("hdn_partyID");

            DataSet obj_ds = new DataSet();
            obj_ds = obj_WebService.Delete_Party_Master(Convert.ToInt32(hdn_partyID.Value));
            if (obj_ds.Tables[0].Rows[0]["SUCCESS"].ToString() == "1")
            {
                lblErrMsg.Text = "Party Deleted Successfully.";
            }
            if (obj_ds.Tables[0].Rows[0]["SUCCESS"].ToString() == "0")
            {
                lblErrMsg.Text = "You Cannot Delete This Party.";
            }
        }

    }
}