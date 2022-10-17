using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace SaiArtLatest
{
    public partial class HomeUpdate : System.Web.UI.Page
    {
        SaiArtLatest obj_WebService = new SaiArtLatest();
        protected void Page_Load(object sender, EventArgs e)
        {
            SetGridData();
        }

        //protected void grd9Inch_RowCommand(object sender, GridViewCommandEventArgs e)
        //{

        //    if (e.CommandName.ToString().ToUpper() != "PAGE")
        //    {
        //        GridViewRow row = (GridViewRow)((Control)e.CommandSource).NamingContainer;
        //        LinkButton lnkEdit1 = (LinkButton)row.FindControl("lnkEdit1");
              
        //        String id = e.CommandArgument.ToString();
        //        //  Session["PAST"] = "";

        //        Response.Redirect("~/ModelInsertUpdate.aspx?ID=" + id);
        //    }
        //}


        /**9inch click edit and delete****/

        protected void lnk_edit9inch_click(object sender, EventArgs e)
        {
            LinkButton lnkbtn = sender as LinkButton;
            GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
            string value = grd9Inch.DataKeys[gvrow.RowIndex].Value.ToString();
            Response.Redirect("~/ModelInsertUpdate.aspx?ID=" + value);
            
        }

        protected void lnkDelete9inch_Click(object sender, EventArgs e)
        {

            LinkButton lnkbtn = sender as LinkButton;
            GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
            string value = grd9Inch.DataKeys[gvrow.RowIndex].Value.ToString();

            DataSet obj_ds = new DataSet();
            obj_ds = obj_WebService.Delete_ModelMaster(Convert.ToInt32(value));

            if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "1")
            {
                Response.Redirect("HomeUpdate.aspx");
            }
            if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "0")
            {
                lblerror.Text = "This module already booked by party.";
            }

        }

        /**12inch click edit and delete****/

        protected void lnk_edit12inch_click(object sender, EventArgs e)
        {
            LinkButton lnkbtn = sender as LinkButton;
            GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
            string value = grd_12Inch.DataKeys[gvrow.RowIndex].Value.ToString();
            Response.Redirect("~/ModelInsertUpdate.aspx?ID=" + value);

        }

        protected void lnkDelete12inch_Click(object sender, EventArgs e)
        {

            LinkButton lnkbtn = sender as LinkButton;
            GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
            string value = grd_12Inch.DataKeys[gvrow.RowIndex].Value.ToString();

            DataSet obj_ds = new DataSet();
            obj_ds = obj_WebService.Delete_ModelMaster(Convert.ToInt32(value));

            if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "1")
            {
                Response.Redirect("HomeUpdate.aspx");
            }
            if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "0")
            {
                lblerror.Text = "This module already booked by party.";
            }

        }


        /**16inch click edit and delete****/
        protected void lnk_edit14inch_click(object sender, EventArgs e)
        {
            LinkButton lnkbtn = sender as LinkButton;
            GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
            string value = grd_14inch.DataKeys[gvrow.RowIndex].Value.ToString();
            Response.Redirect("~/ModelInsertUpdate.aspx?ID=" + value);

        }

        protected void lnkDelete14inch_Click(object sender, EventArgs e)
        {

            LinkButton lnkbtn = sender as LinkButton;
            GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
            string value = grd_14inch.DataKeys[gvrow.RowIndex].Value.ToString();

            DataSet obj_ds = new DataSet();
            obj_ds = obj_WebService.Delete_ModelMaster(Convert.ToInt32(value));

            if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "1")
            {
                Response.Redirect("HomeUpdate.aspx");
            }
            if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "0")
            {
                lblerror.Text = "This module already booked by party.";
            }

        }

        /**16inch click edit and delete****/
        protected void lnk_edit16inch_click(object sender, EventArgs e)
        {
            LinkButton lnkbtn = sender as LinkButton;
            GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
            string value = grd_16inch.DataKeys[gvrow.RowIndex].Value.ToString();
            Response.Redirect("~/ModelInsertUpdate.aspx?ID=" + value);

        }

        protected void lnkDelete16inch_Click(object sender, EventArgs e)
        {

            LinkButton lnkbtn = sender as LinkButton;
            GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
            string value = grd_16inch.DataKeys[gvrow.RowIndex].Value.ToString();

            DataSet obj_ds = new DataSet();
            obj_ds = obj_WebService.Delete_ModelMaster(Convert.ToInt32(value));

            if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "1")
            {
                Response.Redirect("HomeUpdate.aspx");
            }
            if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "0")
            {
                lblerror.Text = "This module already booked by party.";
            }

        }


        /**18inch click edit and delete****/

        protected void lnk_edit18inch_click(object sender, EventArgs e)
        {
            LinkButton lnkbtn = sender as LinkButton;
            GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
            string value = grd_18Inch.DataKeys[gvrow.RowIndex].Value.ToString();
            Response.Redirect("~/ModelInsertUpdate.aspx?ID=" + value);

        }
        protected void lnkDelete18inch_Click(object sender, EventArgs e)
        {

            LinkButton lnkbtn = sender as LinkButton;
            GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
            string value = grd_18Inch.DataKeys[gvrow.RowIndex].Value.ToString();

            DataSet obj_ds = new DataSet();
            obj_ds = obj_WebService.Delete_ModelMaster(Convert.ToInt32(value));

            if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "1")
            {
                Response.Redirect("HomeUpdate.aspx");
            }
            if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "0")
            {
                lblerror.Text = "This module already booked by party.";
            }

        }


        /**22inch click edit and delete****/
        protected void lnk_edit22inch_click(object sender, EventArgs e)
        {
            LinkButton lnkbtn = sender as LinkButton;
            GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
            string value = grd_22Inch.DataKeys[gvrow.RowIndex].Value.ToString();
            Response.Redirect("~/ModelInsertUpdate.aspx?ID=" + value);

        }

        protected void lnkDelete22inch_Click(object sender, EventArgs e)
        {

            LinkButton lnkbtn = sender as LinkButton;
            GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
            string value = grd_22Inch.DataKeys[gvrow.RowIndex].Value.ToString();

            DataSet obj_ds = new DataSet();
            obj_ds = obj_WebService.Delete_ModelMaster(Convert.ToInt32(value));

            if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "1")
            {
                Response.Redirect("HomeUpdate.aspx");
            }
            if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "0")
            {
                lblerror.Text = "This module already booked by party.";
            }

        }

        /**2feet click edit and delete****/
        protected void lnk_edit2feet_click(object sender, EventArgs e)
        {
            LinkButton lnkbtn = sender as LinkButton;
            GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
            string value = grd_2feet.DataKeys[gvrow.RowIndex].Value.ToString();
            Response.Redirect("~/ModelInsertUpdate.aspx?ID=" + value);

        }

        protected void lnkDelete2feet_Click(object sender, EventArgs e)
        {

            LinkButton lnkbtn = sender as LinkButton;
            GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
            string value = grd_2feet.DataKeys[gvrow.RowIndex].Value.ToString();

            DataSet obj_ds = new DataSet();
            obj_ds = obj_WebService.Delete_ModelMaster(Convert.ToInt32(value));

            if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "1")
            {
                Response.Redirect("HomeUpdate.aspx");
            }
            if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "0")
            {
                lblerror.Text = "This module already booked by party.";
            }

        }


        protected void lnk_edit2half_click(object sender, EventArgs e)
        {
            LinkButton lnkbtn = sender as LinkButton;
            GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
            string value = grd_2halfFeet.DataKeys[gvrow.RowIndex].Value.ToString();
            Response.Redirect("~/ModelInsertUpdate.aspx?ID=" + value);

        }

        protected void lnkDelete2half_Click(object sender, EventArgs e)
        {

            LinkButton lnkbtn = sender as LinkButton;
            GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
            string value = grd_2halfFeet.DataKeys[gvrow.RowIndex].Value.ToString();

            DataSet obj_ds = new DataSet();
            obj_ds = obj_WebService.Delete_ModelMaster(Convert.ToInt32(value));

            if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "1")
            {
                Response.Redirect("HomeUpdate.aspx");
            }
            if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "0")
            {
                lblerror.Text = "This module already booked by party.";
            }

        }


        protected void SetGridData()
        {
            DataSet obj_ds = new DataSet();
            obj_ds = obj_WebService.Dashboard_Data();

            if (obj_ds.Tables.Contains("Error"))
            {
                //lblError.Visible = true;
                // lblError.Text = obj_ds.Tables["Error"].Rows[0]["ErrMsg"].ToString();// "Authentication failed. Please try later.";
            }
            else
            {


                grd9Inch.DataSource = obj_ds.Tables[0];
                grd9Inch.DataBind();


                grd_12Inch.DataSource = obj_ds.Tables[1];
                grd_12Inch.DataBind();

                grd_14inch.DataSource = obj_ds.Tables[2];
                grd_14inch.DataBind();

                grd_16inch.DataSource = obj_ds.Tables[3];
                grd_16inch.DataBind();

                grd_18Inch.DataSource = obj_ds.Tables[4];
                grd_18Inch.DataBind();

                grd_22Inch.DataSource = obj_ds.Tables[5];
                grd_22Inch.DataBind();

                grd_2feet.DataSource = obj_ds.Tables[6];
                grd_2feet.DataBind();


                grd_2halfFeet.DataSource = obj_ds.Tables[7];
                grd_2halfFeet.DataBind();

            }
        }


    }
}