using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace SaiArtLatest
{
    public partial class BookPartyModelNew : System.Web.UI.Page
    {
        SaiArtLatest obj_WebService = new SaiArtLatest();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                if (Request.QueryString["ID"] != null)
                {
                    SetGridData();
                    BindBillData();
                    DataSet obj_ds_data = new DataSet();
                    if (Request.QueryString["ID"] != null)
                    {
                        obj_ds_data = PopulateData(Request.QueryString["ID"].ToString());
                    }
                }
                else
                {
                    Response.Redirect("~/PartyDashboard.aspx");
                }
            }
        }

      

        protected void grd9Inch_RowDataBound(object sender, GridViewRowEventArgs e)
        {

            if (e.Row.RowType == System.Web.UI.WebControls.DataControlRowType.DataRow)
            {

                // when mouse is over the row, save original color to new attribute, and change it to highlight color
                e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#EEFFAA'");

                // when mouse leaves the row, change the bg color to its original value   
               e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");


            }

        }
        protected void grd_12Inch_RowDataBound(object sender, GridViewRowEventArgs e)
        {

            if (e.Row.RowType == System.Web.UI.WebControls.DataControlRowType.DataRow)
            {

                // when mouse is over the row, save original color to new attribute, and change it to highlight color
                e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#EEFFAA'");

                // when mouse leaves the row, change the bg color to its original value   
                e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");


            }
        }
        protected void grd_14inch_RowDataBound(object sender, GridViewRowEventArgs e)
        {

            if (e.Row.RowType == System.Web.UI.WebControls.DataControlRowType.DataRow)
            {

                // when mouse is over the row, save original color to new attribute, and change it to highlight color
                e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#EEFFAA'");

                // when mouse leaves the row, change the bg color to its original value   
                e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");


            }
        }
        protected void grd_16inch_RowDataBound(object sender, GridViewRowEventArgs e)
        {

            if (e.Row.RowType == System.Web.UI.WebControls.DataControlRowType.DataRow)
            {

                // when mouse is over the row, save original color to new attribute, and change it to highlight color
                e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#EEFFAA'");

                // when mouse leaves the row, change the bg color to its original value   
                e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");


            }
        }
        protected void grd_18Inch_RowDataBound(object sender, GridViewRowEventArgs e)
        {

            if (e.Row.RowType == System.Web.UI.WebControls.DataControlRowType.DataRow)
            {

                // when mouse is over the row, save original color to new attribute, and change it to highlight color
                e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#EEFFAA'");

                // when mouse leaves the row, change the bg color to its original value   
                e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");


            }
        }
        protected void grd_22Inch_RowDataBound(object sender, GridViewRowEventArgs e)
        {

            if (e.Row.RowType == System.Web.UI.WebControls.DataControlRowType.DataRow)
            {

                // when mouse is over the row, save original color to new attribute, and change it to highlight color
                e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#EEFFAA'");

                // when mouse leaves the row, change the bg color to its original value   
                e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");


            }
        }
        protected void grd_2feet_RowDataBound(object sender, GridViewRowEventArgs e)
        {

            if (e.Row.RowType == System.Web.UI.WebControls.DataControlRowType.DataRow)
            {

                // when mouse is over the row, save original color to new attribute, and change it to highlight color
                e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#EEFFAA'");

                // when mouse leaves the row, change the bg color to its original value   
                e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");


            }
        }
        protected void grd_2halfFeet_RowDataBound(object sender, GridViewRowEventArgs e)
        {

            if (e.Row.RowType == System.Web.UI.WebControls.DataControlRowType.DataRow)
            {

                // when mouse is over the row, save original color to new attribute, and change it to highlight color
                e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#EEFFAA'");

                // when mouse leaves the row, change the bg color to its original value   
                e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");


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


        protected void SetGridData()
        {
            DataSet obj_ds = new DataSet();
            obj_ds = obj_WebService.Dashboard_PartyData(Convert.ToInt32(Request.QueryString["ID"].ToString()));

            if (obj_ds.Tables.Contains("Error"))
            {
                //lblError.Visible = true;
                // lblError.Text = obj_ds.Tables["Error"].Rows[0]["ErrMsg"].ToString();// "Authentication failed. Please try later.";
            }
            else
            {

                if (obj_ds.Tables[0].Rows.Count > 0)
                {
                    grd9Inch.DataSource = obj_ds.Tables[0];
                    grd9Inch.DataBind();
                }
                else
                {
                    grd9Inch.DataSource = obj_ds.Tables[8];
                    grd9Inch.DataBind();
                }

                if (obj_ds.Tables[1].Rows.Count > 0)
                {
                    grd_12Inch.DataSource = obj_ds.Tables[1];
                    grd_12Inch.DataBind();
                }
                else
                {
                    grd_12Inch.DataSource = obj_ds.Tables[9];
                    grd_12Inch.DataBind();
                }

                if (obj_ds.Tables[2].Rows.Count > 0)
                {
                    grd_14inch.DataSource = obj_ds.Tables[2];
                    grd_14inch.DataBind();
                }
                else
                {
                    grd_14inch.DataSource = obj_ds.Tables[10];
                    grd_14inch.DataBind();
                }

                if (obj_ds.Tables[3].Rows.Count > 0)
                {
                    grd_16inch.DataSource = obj_ds.Tables[3];
                    grd_16inch.DataBind();
                }
                else
                {
                    grd_16inch.DataSource = obj_ds.Tables[11];
                    grd_16inch.DataBind();
                }
                if (obj_ds.Tables[4].Rows.Count > 0)
                {
                    grd_18Inch.DataSource = obj_ds.Tables[4];
                    grd_18Inch.DataBind();
                }
                else
                {

                    grd_18Inch.DataSource = obj_ds.Tables[12];
                    grd_18Inch.DataBind();

                }

                if (obj_ds.Tables[5].Rows.Count > 0)
                {
                    grd_22Inch.DataSource = obj_ds.Tables[5];
                    grd_22Inch.DataBind();
                }
                else
                {
                    grd_22Inch.DataSource = obj_ds.Tables[13];
                    grd_22Inch.DataBind();
                }

                if (obj_ds.Tables[6].Rows.Count > 0)
                {

                    grd_2feet.DataSource = obj_ds.Tables[6];
                    grd_2feet.DataBind();
                }
                else
                {
                    grd_2feet.DataSource = obj_ds.Tables[14];
                    grd_2feet.DataBind();
                }

                if (obj_ds.Tables[7].Rows.Count > 0)
                {

                    grd_2halfFeet.DataSource = obj_ds.Tables[7];
                    grd_2halfFeet.DataBind();
                }
                else
                {
                    grd_2halfFeet.DataSource = obj_ds.Tables[15];
                    grd_2halfFeet.DataBind();
                }



            }
           
        }

        protected void txt_9inch_TextChanged(object sender, EventArgs e)
        {

            TextBox lnkbtn = sender as TextBox;
            GridViewRow gvTask = (GridViewRow)lnkbtn.NamingContainer;
            TextBox txt_9inch_Qty = (TextBox)grd9Inch.Rows[gvTask.RowIndex].Cells[3].FindControl("txt_9inch_Qty");
            Label lbl_Price = (Label)grd9Inch.Rows[gvTask.RowIndex].Cells[4].FindControl("lbl_Price");
            Label lbl_Total = (Label)grd9Inch.Rows[gvTask.RowIndex].Cells[5].FindControl("lbl_Total");
            Label lbl_Available = (Label)grd9Inch.Rows[gvTask.RowIndex].Cells[2].FindControl("lbl_Available");

            decimal temp = 0;
            decimal dec_unitprice = 0;
            decimal dec_quantity = 0;
            decimal dec_Amount = 0;
            lblErrMsg.Text = "";
            lblErrMsg.Visible = false;
            txt_9inch_Qty.BackColor = System.Drawing.Color.White;
            int parsedValue;
            if (txt_9inch_Qty.Text == "")
            {
                txt_9inch_Qty.Text = "0";
            }

            if (!int.TryParse(txt_9inch_Qty.Text, out parsedValue))
            {
                lblErrMsg.Text = "Quantity Should be Numeric Only.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }

            if (Convert.ToInt16(txt_9inch_Qty.Text) < 0)
            {

                lblErrMsg.Text = "Quantity Should be Positive Numbers Only.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }


            if (Convert.ToInt32(txt_9inch_Qty.Text) <= Convert.ToInt32(lbl_Available.Text))
            {
                if (decimal.TryParse(txt_9inch_Qty.Text, out temp))
                {
                    dec_unitprice = Math.Round(temp);
                }

                if (decimal.TryParse(lbl_Price.Text, out dec_quantity))
                {
                    dec_unitprice = Math.Round(temp);
                }
                dec_Amount = Math.Round(dec_unitprice * dec_quantity, 2);

                lbl_Total.Text = dec_Amount.ToString();

            }

            else
            {
                lblErrMsg.Text = "Quantity Should be Less Than Available Quantity.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;
            }
           
           //txt_9inch_Qty.Focus();


        }

        protected void btnSave_Click(object sender, EventArgs e)
        {
            try
            {
                DataTable obj_dt_PartyBook = new DataTable();
                obj_dt_PartyBook.Columns.AddRange(new DataColumn[5] { new DataColumn("PARTY_ID", typeof(string)), new DataColumn("MODEL_SIZE", typeof(string)),
                    new DataColumn("MODEL_ID", typeof(string)), new DataColumn("QUANTITY", typeof(string)), 
                                                       new DataColumn("TOTAL_PRICE", typeof(string))
                                                       });
                //obj_dt_Update_Bill_Hdr.Rows.Add(str_Doctor_Id, str_Clinic_Id, str_Patient_ID, str_IPD_RefNumber, str_Bill_Number);


                foreach (GridViewRow row in grd9Inch.Rows)
                {
                    if (row.RowType == DataControlRowType.DataRow)
                    {
                        Decimal dec_unitprice = 0, dec_quantity = 0, dec_total_amounts = 0;
                        String dec_txtunitno = "";

                          HiddenField hdn_ModelID = (HiddenField)row.FindControl("hdn_ModelID");
                           HiddenField hdn_Size = (HiddenField)row.FindControl("hdn_Size");
                           TextBox txt_9inch_Qty = (TextBox)row.FindControl("txt_9inch_Qty");
                           Label lbl_Total = (Label)row.FindControl("lbl_Total");
                           Label lbl_Available = (Label)row.FindControl("lbl_Available");

                           HiddenField hdn_Quantity = (HiddenField)row.FindControl("hdn_Quantity");
                           HiddenField hdn_Available = (HiddenField)row.FindControl("hdn_Available");

                           txt_9inch_Qty.BackColor = System.Drawing.Color.White;
                           if (txt_9inch_Qty.Text == "")
                           {
                               txt_9inch_Qty.Text = "0";
                           }
                           if (Convert.ToInt32(txt_9inch_Qty.Text) >= Convert.ToInt32(hdn_Quantity.Value))
                           {
                               obj_dt_PartyBook.Rows.Add(Request.QueryString["ID"].ToString(), hdn_Size.Value, hdn_ModelID.Value, txt_9inch_Qty.Text, lbl_Total.Text);
                           }
                          
                           else if (Convert.ToInt32(txt_9inch_Qty.Text) <= Convert.ToInt32(lbl_Available.Text))
                           {
                              
                                   obj_dt_PartyBook.Rows.Add(Request.QueryString["ID"].ToString(), hdn_Size.Value, hdn_ModelID.Value, txt_9inch_Qty.Text, lbl_Total.Text);
                              
                           }
                           else
                           {
                               lblErrMsg.Text = "Quantity Should be Less Than Available Quantity.";
                               lblErrMsg.Visible = true;
                              //txt_9inch_Qty.Focus();
                               txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                               return;
                           }
                    }
                }
                foreach (GridViewRow row in grd_12Inch.Rows)
                {
                    if (row.RowType == DataControlRowType.DataRow)
                    {
                        Decimal dec_unitprice = 0, dec_quantity = 0, dec_total_amounts = 0;
                        String dec_txtunitno = "";

                        HiddenField hdn_ModelID = (HiddenField)row.FindControl("hdn_ModelID1");
                        HiddenField hdn_Size = (HiddenField)row.FindControl("hdn_Size1");
                        TextBox txt_9inch_Qty = (TextBox)row.FindControl("txt_9inch_Qty1");
                        Label lbl_Total = (Label)row.FindControl("lbl_Total1");
                        Label lbl_Available = (Label)row.FindControl("lbl_Available1");
                        txt_9inch_Qty.BackColor = System.Drawing.Color.White;
                        HiddenField hdn_Quantity = (HiddenField)row.FindControl("hdn_Quantity1");
                        HiddenField hdn_Available = (HiddenField)row.FindControl("hdn_Available1");

                        txt_9inch_Qty.BackColor = System.Drawing.Color.White;
                        if (txt_9inch_Qty.Text == "")
                        {
                            txt_9inch_Qty.Text = "0";
                        }
                        if (Convert.ToInt32(txt_9inch_Qty.Text) >= Convert.ToInt32(hdn_Quantity.Value))
                        {
                            obj_dt_PartyBook.Rows.Add(Request.QueryString["ID"].ToString(), hdn_Size.Value, hdn_ModelID.Value, txt_9inch_Qty.Text, lbl_Total.Text);
                        }

                        else if (Convert.ToInt32(txt_9inch_Qty.Text) <= Convert.ToInt32(lbl_Available.Text))
                        {
                            obj_dt_PartyBook.Rows.Add(Request.QueryString["ID"].ToString(), hdn_Size.Value, hdn_ModelID.Value, txt_9inch_Qty.Text, lbl_Total.Text);
                        }
                        else
                        {
                            lblErrMsg.Text = "Quantity Should be Less Than Available Quantity.";
                            lblErrMsg.Visible = true;
                           //txt_9inch_Qty.Focus();
                            txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                            return;
                        }
                    }
                }

                foreach (GridViewRow row in grd_14inch.Rows)
                {
                    if (row.RowType == DataControlRowType.DataRow)
                    {
                        Decimal dec_unitprice = 0, dec_quantity = 0, dec_total_amounts = 0;
                        String dec_txtunitno = "";

                        HiddenField hdn_ModelID = (HiddenField)row.FindControl("hdn_ModelID2");
                        HiddenField hdn_Size = (HiddenField)row.FindControl("hdn_Size2");
                        TextBox txt_9inch_Qty = (TextBox)row.FindControl("txt_9inch_Qty2");
                        Label lbl_Total = (Label)row.FindControl("lbl_Total2");
                        Label lbl_Available = (Label)row.FindControl("lbl_Available2");
                        txt_9inch_Qty.BackColor = System.Drawing.Color.White;
                        HiddenField hdn_Quantity = (HiddenField)row.FindControl("hdn_Quantity2");
                        HiddenField hdn_Available = (HiddenField)row.FindControl("hdn_Available2");

                        txt_9inch_Qty.BackColor = System.Drawing.Color.White;
                        if (txt_9inch_Qty.Text == "")
                        {
                            txt_9inch_Qty.Text = "0";
                        }
                        if (Convert.ToInt32(txt_9inch_Qty.Text) >= Convert.ToInt32(hdn_Quantity.Value))
                        {
                            obj_dt_PartyBook.Rows.Add(Request.QueryString["ID"].ToString(), hdn_Size.Value, hdn_ModelID.Value, txt_9inch_Qty.Text, lbl_Total.Text);
                        }

                        else if (Convert.ToInt32(txt_9inch_Qty.Text) <= Convert.ToInt32(lbl_Available.Text))
                        {
                            obj_dt_PartyBook.Rows.Add(Request.QueryString["ID"].ToString(), hdn_Size.Value, hdn_ModelID.Value, txt_9inch_Qty.Text, lbl_Total.Text);
                        }
                        else
                        {
                            lblErrMsg.Text = "Quantity Should be Less Than Available Quantity.";
                            lblErrMsg.Visible = true;
                           //txt_9inch_Qty.Focus();
                            txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                            return;
                        }
                    }
                }

                foreach (GridViewRow row in grd_16inch.Rows)
                {
                    if (row.RowType == DataControlRowType.DataRow)
                    {
                        Decimal dec_unitprice = 0, dec_quantity = 0, dec_total_amounts = 0;
                        String dec_txtunitno = "";

                        HiddenField hdn_ModelID = (HiddenField)row.FindControl("hdn_ModelID3");
                        HiddenField hdn_Size = (HiddenField)row.FindControl("hdn_Size3");
                        TextBox txt_9inch_Qty = (TextBox)row.FindControl("txt_9inch_Qty3");
                        Label lbl_Total = (Label)row.FindControl("lbl_Total3");
                        Label lbl_Available = (Label)row.FindControl("lbl_Available3");
                        txt_9inch_Qty.BackColor = System.Drawing.Color.White;
                        HiddenField hdn_Quantity = (HiddenField)row.FindControl("hdn_Quantity3");
                        HiddenField hdn_Available = (HiddenField)row.FindControl("hdn_Available3");

                        txt_9inch_Qty.BackColor = System.Drawing.Color.White;
                        if (txt_9inch_Qty.Text == "")
                        {
                            txt_9inch_Qty.Text = "0";
                        }
                        if (Convert.ToInt32(txt_9inch_Qty.Text) >= Convert.ToInt32(hdn_Quantity.Value))
                        {
                            obj_dt_PartyBook.Rows.Add(Request.QueryString["ID"].ToString(), hdn_Size.Value, hdn_ModelID.Value, txt_9inch_Qty.Text, lbl_Total.Text);
                        }

                        else if (Convert.ToInt32(txt_9inch_Qty.Text) <= Convert.ToInt32(lbl_Available.Text))
                        {
                            obj_dt_PartyBook.Rows.Add(Request.QueryString["ID"].ToString(), hdn_Size.Value, hdn_ModelID.Value, txt_9inch_Qty.Text, lbl_Total.Text);
                        }
                        else
                        {
                            lblErrMsg.Text = "Quantity Should be Less Than Available Quantity.";
                            lblErrMsg.Visible = true;
                           //txt_9inch_Qty.Focus();
                            txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                            return;
                        }
                    }
                }

                foreach (GridViewRow row in grd_18Inch.Rows)
                {
                    if (row.RowType == DataControlRowType.DataRow)
                    {
                        Decimal dec_unitprice = 0, dec_quantity = 0, dec_total_amounts = 0;
                        String dec_txtunitno = "";

                        HiddenField hdn_ModelID = (HiddenField)row.FindControl("hdn_ModelID4");
                        HiddenField hdn_Size = (HiddenField)row.FindControl("hdn_Size4");
                        TextBox txt_9inch_Qty = (TextBox)row.FindControl("txt_9inch_Qty4");
                        Label lbl_Total = (Label)row.FindControl("lbl_Total4");
                        Label lbl_Available = (Label)row.FindControl("lbl_Available4");
                        txt_9inch_Qty.BackColor = System.Drawing.Color.White;
                        HiddenField hdn_Quantity = (HiddenField)row.FindControl("hdn_Quantity4");
                        HiddenField hdn_Available = (HiddenField)row.FindControl("hdn_Available4");

                        txt_9inch_Qty.BackColor = System.Drawing.Color.White;
                        if (txt_9inch_Qty.Text == "")
                        {
                            txt_9inch_Qty.Text = "0";
                        }
                        if (Convert.ToInt32(txt_9inch_Qty.Text) >= Convert.ToInt32(hdn_Quantity.Value))
                        {
                            obj_dt_PartyBook.Rows.Add(Request.QueryString["ID"].ToString(), hdn_Size.Value, hdn_ModelID.Value, txt_9inch_Qty.Text, lbl_Total.Text);
                        }

                        else if (Convert.ToInt32(txt_9inch_Qty.Text) <= Convert.ToInt32(lbl_Available.Text))
                        {
                            obj_dt_PartyBook.Rows.Add(Request.QueryString["ID"].ToString(), hdn_Size.Value, hdn_ModelID.Value, txt_9inch_Qty.Text, lbl_Total.Text);
                        }
                        else
                        {
                            lblErrMsg.Text = "Quantity Should be Less Than Available Quantity.";
                            lblErrMsg.Visible = true;
                           //txt_9inch_Qty.Focus();
                            txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                            return;
                        }
                    }
                }


                foreach (GridViewRow row in grd_22Inch.Rows)
                {
                    if (row.RowType == DataControlRowType.DataRow)
                    {
                        Decimal dec_unitprice = 0, dec_quantity = 0, dec_total_amounts = 0;
                        String dec_txtunitno = "";

                        HiddenField hdn_ModelID = (HiddenField)row.FindControl("hdn_ModelID5");
                        HiddenField hdn_Size = (HiddenField)row.FindControl("hdn_Size5");
                        TextBox txt_9inch_Qty = (TextBox)row.FindControl("txt_9inch_Qty5");
                        Label lbl_Total = (Label)row.FindControl("lbl_Total5");
                        Label lbl_Available = (Label)row.FindControl("lbl_Available5");
                        txt_9inch_Qty.BackColor = System.Drawing.Color.White;
                        HiddenField hdn_Quantity = (HiddenField)row.FindControl("hdn_Quantity5");
                        HiddenField hdn_Available = (HiddenField)row.FindControl("hdn_Available5");

                        txt_9inch_Qty.BackColor = System.Drawing.Color.White;
                        if (txt_9inch_Qty.Text == "")
                        {
                            txt_9inch_Qty.Text = "0";
                        }
                        if (Convert.ToInt32(txt_9inch_Qty.Text) >= Convert.ToInt32(hdn_Quantity.Value))
                        {
                            obj_dt_PartyBook.Rows.Add(Request.QueryString["ID"].ToString(), hdn_Size.Value, hdn_ModelID.Value, txt_9inch_Qty.Text, lbl_Total.Text);
                        }

                        else if (Convert.ToInt32(txt_9inch_Qty.Text) <= Convert.ToInt32(lbl_Available.Text))
                        {
                            obj_dt_PartyBook.Rows.Add(Request.QueryString["ID"].ToString(), hdn_Size.Value, hdn_ModelID.Value, txt_9inch_Qty.Text, lbl_Total.Text);
                        }
                        else
                        {
                            lblErrMsg.Text = "Quantity Should be Less Than Available Quantity.";
                            lblErrMsg.Visible = true;
                           //txt_9inch_Qty.Focus();
                            txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                            return;
                        }
                    }
                }

                foreach (GridViewRow row in grd_2feet.Rows)
                {
                    if (row.RowType == DataControlRowType.DataRow)
                    {
                        Decimal dec_unitprice = 0, dec_quantity = 0, dec_total_amounts = 0;
                        String dec_txtunitno = "";

                        HiddenField hdn_ModelID = (HiddenField)row.FindControl("hdn_ModelID6");
                        HiddenField hdn_Size = (HiddenField)row.FindControl("hdn_Size6");
                        TextBox txt_9inch_Qty = (TextBox)row.FindControl("txt_9inch_Qty6");
                        Label lbl_Total = (Label)row.FindControl("lbl_Total6");
                        Label lbl_Available = (Label)row.FindControl("lbl_Available6");
                        txt_9inch_Qty.BackColor = System.Drawing.Color.White;
                        HiddenField hdn_Quantity = (HiddenField)row.FindControl("hdn_Quantity6");
                        HiddenField hdn_Available = (HiddenField)row.FindControl("hdn_Available6");

                        txt_9inch_Qty.BackColor = System.Drawing.Color.White;
                        if (txt_9inch_Qty.Text == "")
                        {
                            txt_9inch_Qty.Text = "0";
                        }
                        if (Convert.ToInt32(txt_9inch_Qty.Text) >= Convert.ToInt32(hdn_Quantity.Value))
                        {
                            obj_dt_PartyBook.Rows.Add(Request.QueryString["ID"].ToString(), hdn_Size.Value, hdn_ModelID.Value, txt_9inch_Qty.Text, lbl_Total.Text);
                        }

                        else if (Convert.ToInt32(txt_9inch_Qty.Text) <= Convert.ToInt32(lbl_Available.Text))
                        {
                            obj_dt_PartyBook.Rows.Add(Request.QueryString["ID"].ToString(), hdn_Size.Value, hdn_ModelID.Value, txt_9inch_Qty.Text, lbl_Total.Text);
                        }
                        else
                        {
                            lblErrMsg.Text = "Quantity Should be Less Than Available Quantity.";
                            lblErrMsg.Visible = true;
                           //txt_9inch_Qty.Focus();
                            txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                            return;
                        }
                    }
                }


                foreach (GridViewRow row in grd_2halfFeet.Rows)
                {
                    if (row.RowType == DataControlRowType.DataRow)
                    {
                        Decimal dec_unitprice = 0, dec_quantity = 0, dec_total_amounts = 0;
                        String dec_txtunitno = "";

                        HiddenField hdn_ModelID = (HiddenField)row.FindControl("hdn_ModelID7");
                        HiddenField hdn_Size = (HiddenField)row.FindControl("hdn_Size7");
                        TextBox txt_9inch_Qty = (TextBox)row.FindControl("txt_9inch_Qty7");
                        Label lbl_Total = (Label)row.FindControl("lbl_Total7");
                        Label lbl_Available = (Label)row.FindControl("lbl_Available7");
                        txt_9inch_Qty.BackColor = System.Drawing.Color.White;


                        HiddenField hdn_Quantity = (HiddenField)row.FindControl("hdn_Quantity7");
                        HiddenField hdn_Available = (HiddenField)row.FindControl("hdn_Available7");

                        txt_9inch_Qty.BackColor = System.Drawing.Color.White;
                        if (txt_9inch_Qty.Text == "")
                        {
                            txt_9inch_Qty.Text = "0";
                        }
                        if (Convert.ToInt32(txt_9inch_Qty.Text) >= Convert.ToInt32(hdn_Quantity.Value))
                        {
                            obj_dt_PartyBook.Rows.Add(Request.QueryString["ID"].ToString(), hdn_Size.Value, hdn_ModelID.Value, txt_9inch_Qty.Text, lbl_Total.Text);
                        }

                        else if (Convert.ToInt32(txt_9inch_Qty.Text) <= Convert.ToInt32(lbl_Available.Text))
                        {
                            obj_dt_PartyBook.Rows.Add(Request.QueryString["ID"].ToString(), hdn_Size.Value, hdn_ModelID.Value, txt_9inch_Qty.Text, lbl_Total.Text);
                        }
                        else
                        {
                            lblErrMsg.Text = "Quantity Should be Less Than Available Quantity.";
                            lblErrMsg.Visible = true;
                           //txt_9inch_Qty.Focus();
                            txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                            return;
                        }
                    }
                }

                DataSet obj_ds = new DataSet();

                obj_ds = obj_WebService.Insert_BookParty_New(obj_dt_PartyBook, Convert.ToInt32(Request.QueryString["ID"].ToString()));
                SetGridData();
                BindBillData();
                lblErrMsg.Text = "Party Data Saved Successfully.";
                lblErrMsg.Visible = true;
                return;

            }
            catch (Exception ex)
            {
                lblErrMsg.Text = ex.Message;
            }
        
        }

        protected void txt_12Inch_TextChanged(object sender, EventArgs e)
        {

            TextBox lnkbtn = sender as TextBox;
            GridViewRow gvTask = (GridViewRow)lnkbtn.NamingContainer;
            TextBox txt_9inch_Qty = (TextBox)grd_12Inch.Rows[gvTask.RowIndex].Cells[3].FindControl("txt_9inch_Qty1");
            Label lbl_Price = (Label)grd_12Inch.Rows[gvTask.RowIndex].Cells[4].FindControl("lbl_Price1");
            Label lbl_Total = (Label)grd_12Inch.Rows[gvTask.RowIndex].Cells[5].FindControl("lbl_Total1");
            Label lbl_Available = (Label)grd_12Inch.Rows[gvTask.RowIndex].Cells[2].FindControl("lbl_Available1");

            decimal temp = 0;
            decimal dec_unitprice = 0;
            decimal dec_quantity = 0;
            decimal dec_Amount = 0;
            lblErrMsg.Text = "";
            lblErrMsg.Visible = false;
            txt_9inch_Qty.BackColor = System.Drawing.Color.White;
            int parsedValue;
            if (txt_9inch_Qty.Text == "")
            {
                txt_9inch_Qty.Text = "0";
            }
            if (!int.TryParse(txt_9inch_Qty.Text, out parsedValue))
            {

                lblErrMsg.Text = "Quantity Should be Numeric Only.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }
            if (Convert.ToInt16(txt_9inch_Qty.Text) < 0)
            {

                lblErrMsg.Text = "Quantity Should be Positive Numbers Only.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }

            if (Convert.ToInt32(txt_9inch_Qty.Text) <= Convert.ToInt32(lbl_Available.Text))
            {
                if (decimal.TryParse(txt_9inch_Qty.Text, out temp))
                {
                    dec_unitprice = Math.Round(temp);
                }

                if (decimal.TryParse(lbl_Price.Text, out dec_quantity))
                {
                    dec_unitprice = Math.Round(temp);
                }
                dec_Amount = Math.Round(dec_unitprice * dec_quantity, 2);

                lbl_Total.Text = dec_Amount.ToString();

            }
            else
            {
                lblErrMsg.Text = "Quantity Should be Less Than Available Quantity.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }
           //txt_9inch_Qty.Focus();


        }

        protected void txt_14inch_TextChanged(object sender, EventArgs e)
        {

            TextBox lnkbtn = sender as TextBox;
            GridViewRow gvTask = (GridViewRow)lnkbtn.NamingContainer;
            TextBox txt_9inch_Qty = (TextBox)grd_14inch.Rows[gvTask.RowIndex].Cells[3].FindControl("txt_9inch_Qty2");
            Label lbl_Price = (Label)grd_14inch.Rows[gvTask.RowIndex].Cells[4].FindControl("lbl_Price2");
            Label lbl_Total = (Label)grd_14inch.Rows[gvTask.RowIndex].Cells[5].FindControl("lbl_Total2");
            Label lbl_Available = (Label)grd_14inch.Rows[gvTask.RowIndex].Cells[2].FindControl("lbl_Available2");

            decimal temp = 0;
            decimal dec_unitprice = 0;
            decimal dec_quantity = 0;
            decimal dec_Amount = 0;
            lblErrMsg.Text = "";
            lblErrMsg.Visible = false;
            txt_9inch_Qty.BackColor = System.Drawing.Color.White;
            int parsedValue;
            if (txt_9inch_Qty.Text == "")
            {
                txt_9inch_Qty.Text = "0";
            }
            if (!int.TryParse(txt_9inch_Qty.Text, out parsedValue))
            {

                lblErrMsg.Text = "Quantity Should be Numeric Only.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }
            if (Convert.ToInt16(txt_9inch_Qty.Text) < 0)
            {

                lblErrMsg.Text = "Quantity Should be Positive Numbers Only.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }

            if (Convert.ToInt32(txt_9inch_Qty.Text) <= Convert.ToInt32(lbl_Available.Text))
            {
                if (decimal.TryParse(txt_9inch_Qty.Text, out temp))
                {
                    dec_unitprice = Math.Round(temp);
                }

                if (decimal.TryParse(lbl_Price.Text, out dec_quantity))
                {
                    dec_unitprice = Math.Round(temp);
                }
                dec_Amount = Math.Round(dec_unitprice * dec_quantity, 2);

                lbl_Total.Text = dec_Amount.ToString();

            }
            else
            {
                lblErrMsg.Text = "Quantity Should be Less Than Available Quantity.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }
           //txt_9inch_Qty.Focus();


        }
        protected void txt_16inch_TextChanged(object sender, EventArgs e)
        {

            TextBox lnkbtn = sender as TextBox;
            GridViewRow gvTask = (GridViewRow)lnkbtn.NamingContainer;
            TextBox txt_9inch_Qty = (TextBox)grd_16inch.Rows[gvTask.RowIndex].Cells[3].FindControl("txt_9inch_Qty3");
            Label lbl_Price = (Label)grd_16inch.Rows[gvTask.RowIndex].Cells[4].FindControl("lbl_Price3");
            Label lbl_Total = (Label)grd_16inch.Rows[gvTask.RowIndex].Cells[5].FindControl("lbl_Total3");
            Label lbl_Available = (Label)grd_16inch.Rows[gvTask.RowIndex].Cells[2].FindControl("lbl_Available3");

            decimal temp = 0;
            decimal dec_unitprice = 0;
            decimal dec_quantity = 0;
            decimal dec_Amount = 0;
            lblErrMsg.Text = "";
            lblErrMsg.Visible = false;
            txt_9inch_Qty.BackColor = System.Drawing.Color.White;
            int parsedValue;
            if (txt_9inch_Qty.Text == "")
            {
                txt_9inch_Qty.Text = "0";
            }
            if (!int.TryParse(txt_9inch_Qty.Text, out parsedValue))
            {

                lblErrMsg.Text = "Quantity Should be Numeric Only.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }
            if (Convert.ToInt16(txt_9inch_Qty.Text) < 0)
            {

                lblErrMsg.Text = "Quantity Should be Positive Numbers Only.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }

            if (Convert.ToInt32(txt_9inch_Qty.Text) <= Convert.ToInt32(lbl_Available.Text))
            {
                if (decimal.TryParse(txt_9inch_Qty.Text, out temp))
                {
                    dec_unitprice = Math.Round(temp);
                }

                if (decimal.TryParse(lbl_Price.Text, out dec_quantity))
                {
                    dec_unitprice = Math.Round(temp);
                }
                dec_Amount = Math.Round(dec_unitprice * dec_quantity, 2);

                lbl_Total.Text = dec_Amount.ToString();

            }
            else
            {
                lblErrMsg.Text = "Quantity Should be Less Than Available Quantity.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }
           //txt_9inch_Qty.Focus();


        }
        protected void txt_18Inch_TextChanged(object sender, EventArgs e)
        {

            TextBox lnkbtn = sender as TextBox;
            GridViewRow gvTask = (GridViewRow)lnkbtn.NamingContainer;
            TextBox txt_9inch_Qty = (TextBox)grd_18Inch.Rows[gvTask.RowIndex].Cells[3].FindControl("txt_9inch_Qty4");
            Label lbl_Price = (Label)grd_18Inch.Rows[gvTask.RowIndex].Cells[4].FindControl("lbl_Price4");
            Label lbl_Total = (Label)grd_18Inch.Rows[gvTask.RowIndex].Cells[5].FindControl("lbl_Total4");
            Label lbl_Available = (Label)grd_18Inch.Rows[gvTask.RowIndex].Cells[2].FindControl("lbl_Available4");

            decimal temp = 0;
            decimal dec_unitprice = 0;
            decimal dec_quantity = 0;
            decimal dec_Amount = 0;
            lblErrMsg.Text = "";
            lblErrMsg.Visible = false;
            txt_9inch_Qty.BackColor = System.Drawing.Color.White;
            int parsedValue;
            if (txt_9inch_Qty.Text == "")
            {
                txt_9inch_Qty.Text = "0";
            }
            if (!int.TryParse(txt_9inch_Qty.Text, out parsedValue))
            {

                lblErrMsg.Text = "Quantity Should be Numeric Only.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }
            if (Convert.ToInt16(txt_9inch_Qty.Text) < 0)
            {

                lblErrMsg.Text = "Quantity Should be Positive Numbers Only.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }

            if (Convert.ToInt32(txt_9inch_Qty.Text) <= Convert.ToInt32(lbl_Available.Text))
            {
                if (decimal.TryParse(txt_9inch_Qty.Text, out temp))
                {
                    dec_unitprice = Math.Round(temp);
                }

                if (decimal.TryParse(lbl_Price.Text, out dec_quantity))
                {
                    dec_unitprice = Math.Round(temp);
                }
                dec_Amount = Math.Round(dec_unitprice * dec_quantity, 2);

                lbl_Total.Text = dec_Amount.ToString();

            }
            else
            {
                lblErrMsg.Text = "Quantity Should be Less Than Available Quantity.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }

           //txt_9inch_Qty.Focus();

        }

        protected void txt_22Inch_TextChanged(object sender, EventArgs e)
        {

            TextBox lnkbtn = sender as TextBox;
            GridViewRow gvTask = (GridViewRow)lnkbtn.NamingContainer;
            TextBox txt_9inch_Qty = (TextBox)grd_22Inch.Rows[gvTask.RowIndex].Cells[3].FindControl("txt_9inch_Qty5");
            Label lbl_Price = (Label)grd_22Inch.Rows[gvTask.RowIndex].Cells[4].FindControl("lbl_Price5");
            Label lbl_Total = (Label)grd_22Inch.Rows[gvTask.RowIndex].Cells[5].FindControl("lbl_Total5");
            Label lbl_Available = (Label)grd_22Inch.Rows[gvTask.RowIndex].Cells[2].FindControl("lbl_Available5");

            decimal temp = 0;
            decimal dec_unitprice = 0;
            decimal dec_quantity = 0;
            decimal dec_Amount = 0;
            lblErrMsg.Text = "";
            lblErrMsg.Visible = false;
            txt_9inch_Qty.BackColor = System.Drawing.Color.White;
            int parsedValue;
            if (txt_9inch_Qty.Text == "")
            {
                txt_9inch_Qty.Text = "0";
            }
            if (!int.TryParse(txt_9inch_Qty.Text, out parsedValue))
            {

                lblErrMsg.Text = "Quantity Should be Numeric Only.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }
            if (Convert.ToInt16(txt_9inch_Qty.Text) < 0)
            {

                lblErrMsg.Text = "Quantity Should be Positive Numbers Only.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }


            if (Convert.ToInt32(txt_9inch_Qty.Text) <= Convert.ToInt32(lbl_Available.Text))
            {
                if (decimal.TryParse(txt_9inch_Qty.Text, out temp))
                {
                    dec_unitprice = Math.Round(temp);
                }

                if (decimal.TryParse(lbl_Price.Text, out dec_quantity))
                {
                    dec_unitprice = Math.Round(temp);
                }
                dec_Amount = Math.Round(dec_unitprice * dec_quantity, 2);

                lbl_Total.Text = dec_Amount.ToString();

            }
            else
            {
                lblErrMsg.Text = "Quantity Should be Less Than Available Quantity.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }
           //txt_9inch_Qty.Focus();


        }

        protected void txt_2feet_TextChanged(object sender, EventArgs e)
        {

            TextBox lnkbtn = sender as TextBox;
            GridViewRow gvTask = (GridViewRow)lnkbtn.NamingContainer;
            TextBox txt_9inch_Qty = (TextBox)grd_2feet.Rows[gvTask.RowIndex].Cells[3].FindControl("txt_9inch_Qty6");
            Label lbl_Price = (Label)grd_2feet.Rows[gvTask.RowIndex].Cells[4].FindControl("lbl_Price6");
            Label lbl_Total = (Label)grd_2feet.Rows[gvTask.RowIndex].Cells[5].FindControl("lbl_Total6");
            Label lbl_Available = (Label)grd_2feet.Rows[gvTask.RowIndex].Cells[2].FindControl("lbl_Available6");

            decimal temp = 0;
            decimal dec_unitprice = 0;
            decimal dec_quantity = 0;
            decimal dec_Amount = 0;
            lblErrMsg.Text = "";
            lblErrMsg.Visible = false;
            txt_9inch_Qty.BackColor = System.Drawing.Color.White;
            int parsedValue;
            if (txt_9inch_Qty.Text == "")
            {
                txt_9inch_Qty.Text = "0";
            }
            if (!int.TryParse(txt_9inch_Qty.Text, out parsedValue))
            {

                lblErrMsg.Text = "Quantity Should be Numeric Only.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }
            if (Convert.ToInt16(txt_9inch_Qty.Text) < 0)
            {

                lblErrMsg.Text = "Quantity Should be Positive Numbers Only.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }

            if (Convert.ToInt32(txt_9inch_Qty.Text) <= Convert.ToInt32(lbl_Available.Text))
            {
                if (decimal.TryParse(txt_9inch_Qty.Text, out temp))
                {
                    dec_unitprice = Math.Round(temp);
                }

                if (decimal.TryParse(lbl_Price.Text, out dec_quantity))
                {
                    dec_unitprice = Math.Round(temp);
                }
                dec_Amount = Math.Round(dec_unitprice * dec_quantity, 2);

                lbl_Total.Text = dec_Amount.ToString();

            }
            else
            {
                lblErrMsg.Text = "Quantity Should be Less Than Available Quantity.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }

           //txt_9inch_Qty.Focus();

        }

        protected void txt_2halfFeet_TextChanged(object sender, EventArgs e)
        {

            TextBox lnkbtn = sender as TextBox;
            GridViewRow gvTask = (GridViewRow)lnkbtn.NamingContainer;
            TextBox txt_9inch_Qty = (TextBox)grd_2halfFeet.Rows[gvTask.RowIndex].Cells[3].FindControl("txt_9inch_Qty7");
            Label lbl_Price = (Label)grd_2halfFeet.Rows[gvTask.RowIndex].Cells[4].FindControl("lbl_Price7");
            Label lbl_Total = (Label)grd_2halfFeet.Rows[gvTask.RowIndex].Cells[5].FindControl("lbl_Total7");
            Label lbl_Available = (Label)grd_2halfFeet.Rows[gvTask.RowIndex].Cells[2].FindControl("lbl_Available7");

            decimal temp = 0;
            decimal dec_unitprice = 0;
            decimal dec_quantity = 0;
            decimal dec_Amount = 0;
            lblErrMsg.Text = "";
            lblErrMsg.Visible = false;
            txt_9inch_Qty.BackColor = System.Drawing.Color.White;
            int parsedValue;
            if (txt_9inch_Qty.Text == "")
            {
                txt_9inch_Qty.Text = "0";
            }
            if (!int.TryParse(txt_9inch_Qty.Text, out parsedValue))
            {

                lblErrMsg.Text = "Quantity Should be Numeric Only.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }
            if (Convert.ToInt16(txt_9inch_Qty.Text) < 0)
            {

                lblErrMsg.Text = "Quantity Should be Positive Numbers Only.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }


            if (Convert.ToInt32(txt_9inch_Qty.Text) <= Convert.ToInt32(lbl_Available.Text))
            {
                if (decimal.TryParse(txt_9inch_Qty.Text, out temp))
                {
                    dec_unitprice = Math.Round(temp);
                }

                if (decimal.TryParse(lbl_Price.Text, out dec_quantity))
                {
                    dec_unitprice = Math.Round(temp);
                }
                dec_Amount = Math.Round(dec_unitprice * dec_quantity, 2);

                lbl_Total.Text = dec_Amount.ToString();

            }
            else
            {
                lblErrMsg.Text = "Quantity Should be Less Than Available Quantity.";
                lblErrMsg.Visible = true;
               //txt_9inch_Qty.Focus();
                txt_9inch_Qty.BackColor = System.Drawing.Color.Red;
                return;

            }

           ////txt_9inch_Qty.Focus();

        }


        DataSet PopulateData(string Id)
        {
            DataSet obj_ds_data = obj_WebService.Get_PartyData(Id);
            if (obj_ds_data.Tables.Contains("Error"))
            {
                lblErrMsg.Visible = true;
                lblErrMsg.Text = obj_ds_data.Tables["Error"].Rows[0]["ErrMsg"].ToString();// "Authentication failed. Please try later.";
            }

            else
            {

                if (obj_ds_data.Tables[0].Rows.Count > 0)
                {
                    
                    lbl_PartyId.Text = obj_ds_data.Tables[0].Rows[0]["PARTY_ID"].ToString();
                    lbl_Name.Text = obj_ds_data.Tables[0].Rows[0]["NAME"].ToString();
                    //txtparty_name.Text = obj_ds_data.Tables[0].Rows[0]["NAME"].ToString();
                   // txtparty_number.Text = obj_ds_data.Tables[0].Rows[0]["PARTY_ID"].ToString();
                    lbl_partyname.Text = obj_ds_data.Tables[0].Rows[0]["NAME"].ToString();
                    lblDate.Text = System.DateTime.Today.ToString("dd-MMM-yyyy").Trim();
                    lblAddress.Text = obj_ds_data.Tables[0].Rows[0]["ADDRESS"].ToString();
                    lblMobile.Text = obj_ds_data.Tables[0].Rows[0]["MOBILE_NO"].ToString();

                }

            }
            return obj_ds_data;
        }

        protected void BindBillData()
        {
            DataSet obj_ds_data_bill = new DataSet();

            if (Convert.ToInt32(Request.QueryString["ID"].ToString()) != 0)
            {
                obj_ds_data_bill = obj_WebService.GET_BILL_DATA(Convert.ToInt32(Request.QueryString["ID"].ToString()));
                grdPartyDashboard.DataSource = obj_ds_data_bill.Tables[0];
                grdPartyDashboard.DataBind();

                //if (grdPartyDashboard.Rows.Count == 0)
                //{
                //   // Button1.Enabled = false;
                //    Button1.Style.Add("readonly", "readonly");
                //}
                //else
                //{
                //    Button1.Enabled = true;
                //   // Button1.Style.Add("readonly", "readonly");
                //}

                GridView2.DataSource = obj_ds_data_bill.Tables[1];
                GridView2.DataBind();

                if (obj_ds_data_bill.Tables[2].Rows.Count > 0)
                {
                    GridView3.DataSource = obj_ds_data_bill.Tables[2];
                    GridView3.DataBind();
                }
                if (obj_ds_data_bill.Tables[3].Rows.Count > 0)
                {
                    lbl_totalAmt.Text = obj_ds_data_bill.Tables[3].Rows[0]["TOTAL_PRICE"].ToString();
                    lbl_quantity_buy.Text = obj_ds_data_bill.Tables[3].Rows[0]["TOTAL_QUN"].ToString();
                }
                if (GridView2.Rows.Count == 0)
                {
                    //Button1.Enabled = false;
                    Button1.Visible = false;
                }
                else
                {
                    //Button1.Enabled = true;
                    Button1.Visible = true;
                }

            }
        }


        /*****************************************/

        protected void lnkDelete_Click(object sender, EventArgs e)
        {

            LinkButton lnkbtn = sender as LinkButton;
            GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
            string value = grdPartyDashboard.DataKeys[gvrow.RowIndex].Value.ToString();

            DataSet obj_ds = new DataSet();
            obj_ds = obj_WebService.Delete_BOOKBILL_FOR_PARTY(Convert.ToInt32(Request.QueryString["ID"].ToString()), Convert.ToInt32(value));

            lblErrMsg.Text = "Model Deleted Sucessfully.";
            BindBillData();
            SetGridData();
        }

    }
}