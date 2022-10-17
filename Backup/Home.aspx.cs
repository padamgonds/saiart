using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace SaiArtLatest
{
    public partial class Home : System.Web.UI.Page
    {
        SaiArtLatest obj_WebService = new SaiArtLatest();
        protected void Page_Load(object sender, EventArgs e)
        {
            SetGridData(); 
        }

        protected void grd9Inch_RowCommand(object sender, GridViewCommandEventArgs e)
        {
        }
        protected void grd9Inch_PageIndexChanging(object sender, GridViewPageEventArgs e)
        { 
        
        }

        protected void grd9Inch_RowDataBound(object sender, GridViewRowEventArgs e)

        { 
        
        }


        protected void grd_12Inch_RowCommand(object sender, GridViewCommandEventArgs e)
        {
        }
        protected void grd_12Inch_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {

        }

        protected void grd_12Inch_RowDataBound(object sender, GridViewRowEventArgs e)
        {

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

              

                /**9inchtotal_available**/
                lbl_dbtotalquantit_avai_9inch.Text = obj_ds.Tables[9].Rows[0]["PRODUCTION_QUN"].ToString();
                //obj_ds.Tables[8].Rows[0]["TOTAL_SHILLAK"].ToString();
               
                /**9inchtotal_production**/
                lbl_totalavai_avai_9inch.Text = obj_ds.Tables[8].Rows[0]["TOTAL_SHILLAK"].ToString();
                //obj_ds.Tables[9].Rows[0]["PRODUCTION_QUN"].ToString();
               


                /**12inchtotal_available**/
                Label5.Text = obj_ds.Tables[10].Rows[0]["TOTAL_SHILLAK"].ToString();
                /**12inchtotal_production**/
                Label3.Text = obj_ds.Tables[11].Rows[0]["PRODUCTION_QUN"].ToString();


                /**14inchtotal_available**/
                Label9.Text = obj_ds.Tables[12].Rows[0]["TOTAL_SHILLAK"].ToString();
                /**14inchtotal_production**/
                Label7.Text = obj_ds.Tables[13].Rows[0]["PRODUCTION_QUN"].ToString();


                /**16inchtotal_available**/
                Label29.Text = obj_ds.Tables[14].Rows[0]["TOTAL_SHILLAK"].ToString();
                /**16inchtotal_production**/
                Label27.Text = obj_ds.Tables[15].Rows[0]["PRODUCTION_QUN"].ToString();


                /**18inchtotal_available**/
                Label13.Text = obj_ds.Tables[16].Rows[0]["TOTAL_SHILLAK"].ToString();
                /**18inchtotal_production**/
                Label11.Text = obj_ds.Tables[17].Rows[0]["PRODUCTION_QUN"].ToString();


                /**22inchtotal_available**/
                Label17.Text = obj_ds.Tables[18].Rows[0]["TOTAL_SHILLAK"].ToString();
                /**22inchtotal_production**/
                Label15.Text = obj_ds.Tables[19].Rows[0]["PRODUCTION_QUN"].ToString();


                /**2feetchtotal_available**/
                Label21.Text = obj_ds.Tables[20].Rows[0]["TOTAL_SHILLAK"].ToString();
                /**9inchtotal_production**/
                Label19.Text = obj_ds.Tables[21].Rows[0]["PRODUCTION_QUN"].ToString();

                /**21/2feetchtotal_available**/
                Label25.Text = obj_ds.Tables[22].Rows[0]["TOTAL_SHILLAK"].ToString();
                /**9inchtotal_production**/
                Label23.Text = obj_ds.Tables[23].Rows[0]["PRODUCTION_QUN"].ToString();

            }
        }

    }
}