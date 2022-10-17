using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace SaiArtLatest
{
    public partial class FinalBookList : System.Web.UI.Page
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
            obj_ds = obj_WebService.Dashboard_Data_FinalList();

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


        protected void lnkBid_Click(object sender, EventArgs e)
        {
            //GridViewRow row = (GridViewRow)((Control)e.CommandSource).NamingContainer;
            //String id = e.CommandArgument.ToString();
            try
            {



                LinkButton lnkbtn = sender as LinkButton;
                GridViewRow gvTask = (GridViewRow)lnkbtn.NamingContainer;

               // LinkButton lnkVisit1 = (LinkButton)grd_print.Rows[gvTask.RowIndex].Cells[0].FindControl("lnkVisit1");
                //Session["HDN_VISITOR_ID"] = lnkVisit1.CommandArgument.ToString();
                HiddenField hdnID = (HiddenField)grdPartyDashboard.Rows[gvTask.RowIndex].Cells[1].FindControl("hdnID");
                //Session["HDN_MEETING_ID"] = hdn_MeetingId.Value;
                //HiddenField hdnagendaId = (HiddenField)grd_print.Rows[gvTask.RowIndex].Cells[1].FindControl("hdnagendaId");
                //Session["HDN_AGENDA_ID"] = hdnagendaId.Value;
                //ScriptManager.RegisterStartupScript(this, typeof(string), "Registering", String.Format("UpdateVisitor_Click1(  " + lnkVisit1.CommandArgument + "," + hdnagendaId.Value + ");", lnkVisit1.CommandArgument), true);

                DataSet obj_ds = new DataSet();
                string str = "";
                obj_ds = obj_WebService.Dashboard_ModelPartyData(Convert.ToInt32(hdnID.Value));

                if (obj_ds.Tables.Contains("Error"))
                {
                    //lblError.Visible = true;
                    // lblError.Text = obj_ds.Tables["Error"].Rows[0]["ErrMsg"].ToString();// "Authentication failed. Please try later.";
                }
                else
                {
                    GridView1.DataSource = obj_ds.Tables[0];
                    GridView1.DataBind();
                }

                ScriptManager.RegisterStartupScript(this, typeof(string), "Registering", String.Format("ShowPopUp();"), true);

               
            }
            catch (Exception ex)
            {
            }

        }

        protected void grdPartyDashboard_RowDataBound(object sender, GridViewRowEventArgs e)
        {

            if (e.Row.RowType == System.Web.UI.WebControls.DataControlRowType.DataRow)
            {

                // when mouse is over the row, save original color to new attribute, and change it to highlight color
                e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#EEFFAA'");

                // when mouse leaves the row, change the bg color to its original value   
                e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");


            }

        }
        protected void GridView1_RowDataBound(object sender, GridViewRowEventArgs e)
        {

            if (e.Row.RowType == System.Web.UI.WebControls.DataControlRowType.DataRow)
            {

                // when mouse is over the row, save original color to new attribute, and change it to highlight color
                e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#EEFFAA'");

                // when mouse leaves the row, change the bg color to its original value   
                e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");


            }

        }
    }
}