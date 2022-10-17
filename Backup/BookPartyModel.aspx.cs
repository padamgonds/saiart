using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace SaiArtLatest
{
    public partial class BookPartyModel : System.Web.UI.Page
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
                SetDDlData();
                Session["MODEL_PRIZE"] = null;
                BindBillData();
            }
        }

        protected void BindBillData()
        {
            DataSet obj_ds_data_bill = new DataSet();

            if (Convert.ToInt32(txtparty_number.Text.Trim())!=0)
            {
                obj_ds_data_bill = obj_WebService.GET_BILL_DATA(Convert.ToInt32(txtparty_number.Text.Trim()));
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
                }

            }
        }


        protected void SetDDlData()
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
                    txtparty_name.Text = obj_ds_data.Tables[0].Rows[0]["NAME"].ToString();
                    txtparty_number.Text = obj_ds_data.Tables[0].Rows[0]["PARTY_ID"].ToString();
                    lbl_partyname.Text = obj_ds_data.Tables[0].Rows[0]["NAME"].ToString();
                    lblDate.Text = System.DateTime.Today.ToString("dd-MMM-yyyy").Trim();
                    lblAddress.Text = obj_ds_data.Tables[0].Rows[0]["ADDRESS"].ToString();
                    lblMobile.Text = obj_ds_data.Tables[0].Rows[0]["MOBILE_NO"].ToString();
                    
                }

            }
            return obj_ds_data;
        }

        //Priyanka Nikam
        protected void ddlModelSize_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (ddlModelSize.SelectedItem.ToString() != "--Select--")
            {
                DataSet objds = obj_WebService.GetModelMasterData(ddlModelSize.SelectedValue);
                if (objds.Tables.Contains("Error"))
                {
                    lblErrMsg.Visible = true;
                    lblErrMsg.Text = objds.Tables["Error"].Rows[0]["ErrMsg"].ToString();
                }
                else
                {
                    if (objds.Tables[0].Rows.Count > 0)
                    {
                        ddlModelName.Items.Clear();
                        ddlModelName.DataTextField = objds.Tables[0].Columns["MODEL_NAME"].ToString().Trim();
                        ddlModelName.DataValueField = objds.Tables[0].Columns["ID"].ToString().Trim();
                        ddlModelName.DataSource = objds.Tables[0];
                        ddlModelName.DataBind();
                        ddlModelName.Items.Insert(0, "--Select--");
                    }
                    else
                    {
                        ddlModelName.Items.Clear();
                    }
                }
            }

        }

        protected void ddlModelName_SelectedIndexChanged(object sender, EventArgs e)
        {

           
            if (ddlModelSize.SelectedItem.ToString() != "--Select--" && ddlModelName.SelectedItem.ToString() != "--Select--")
            {
                DataSet objds = obj_WebService.GetModelMasterData(ddlModelSize.SelectedValue);
                if (objds.Tables.Contains("Error"))
                {
                    lblErrMsg.Visible = true;
                    lblErrMsg.Text = objds.Tables["Error"].Rows[0]["ErrMsg"].ToString();
                }
                else
                {
                    if (objds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow item in objds.Tables[0].Rows)
                        {
                            if (item["ID"].ToString() == ddlModelName.SelectedValue.ToString())
                            {
                               // hdn_MODEL_PRIZE.Value = item["MODEL_PRIZE"].ToString();
                                Session["MODEL_PRIZE"] = item["MODEL_PRIZE"].ToString();
                                txtModelRate.Text = item["MODEL_PRIZE"].ToString();
                                break;
                            }
                        }
                    }
                    else
                    {
                        Session["MODEL_PRIZE"] = 0;
                    }
                }
            }
          

        }
        
        
        protected void txtQuantity_TextChanged(object sender, EventArgs e)
        {
            if (txtQuantity.Text != "")
            {
                int parsedValue;
                if (!int.TryParse(txtQuantity.Text, out parsedValue))
                {
                    lblErrMsg.Text = "Model Quantity should be numeric.";
                    txtQuantity.BorderColor = System.Drawing.Color.Red;
                    return;
                }
                else
                {
                    int ModelPrice = Convert.ToInt32(Session["MODEL_PRIZE"]);
                    int quantity = Convert.ToInt32(txtQuantity.Text);
                    int total = ModelPrice * quantity;
                    txt_amount.Text = total.ToString();
                    lblErrMsg.Text = "";
                    txtQuantity.BorderColor = System.Drawing.Color.LightGray;
                }

            }
            else
            {
                txt_amount.Text = "";
            }
        }
       


        protected void btnSave_Click(object sender, EventArgs e)
        {
            try
            {
                DataSet obj_ds = new DataSet();

                obj_ds = obj_WebService.Insert_BookParty(Convert.ToInt32(txtparty_number.Text.Trim()), 
                                                            Convert.ToInt32(ddlModelSize.SelectedValue), 
                                                            Convert.ToInt32(ddlModelName.SelectedValue),
                                                            Convert.ToInt32(txtQuantity.Text), 
                                                            Convert.ToDecimal(txtModelRate.Text),
                                                            Convert.ToInt32(Session["USER_ID"])
                                                    );

                if (obj_ds.Tables.Contains("Error"))
                {
                    lblErrMsg.Visible = true;
                    lblErrMsg.Text = lblErrMsg.Text = obj_ds.Tables["Error"].Rows[0]["ErrMsg"].ToString();
                }
                else
                {
                    lblErrMsg.Visible = true;
                    if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "1")
                    {
                        lblErrMsg.Text = "Saved Successfully.";
                        BindBillData();
                    }

                    if (obj_ds.Tables[0].Rows[0]["sucess"].ToString() == "0")
                    {
                        lblErrMsg.Text = "Please Check Available Model Quantity.";
                        BindBillData();
                    }    
                }
                
            }
            catch (Exception ex)
            {
                lblErrMsg.Text = ex.Message;
            }
        }

        protected void btn_cancel_click(object sender, EventArgs e)
        {
            Response.Redirect("PartyDashboard.aspx");
        }
        

        /*****************************************/

        protected void lnkDelete_Click(object sender, EventArgs e)
        {

            LinkButton lnkbtn = sender as LinkButton;
            GridViewRow gvrow = lnkbtn.NamingContainer as GridViewRow;
            string value = grdPartyDashboard.DataKeys[gvrow.RowIndex].Value.ToString();

            DataSet obj_ds = new DataSet();
            obj_ds = obj_WebService.Delete_BOOKBILL_FOR_PARTY(Convert.ToInt32(Request.QueryString["ID"].ToString()),Convert.ToInt32(value));

            lblErrMsg.Text = "model deleted sucessfully.";
            BindBillData();
        }

    }
}