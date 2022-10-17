

//  Domain Url 
var domain = "";
var hostName = window.location.host;
if (location.protocol == "http:") {
    domain = "http://" + hostName + "/";
}
else {
    domain = "https://" + hostName + "/";
}
var completeDomain = "./";
// Module Url
var LoadURL = domain + "Service/";
var completeDomain = "./";


$(window).load(function () {
    //alert('window');
    var sales_Lead_Update = $('#ctl00_ContentPlaceHolder1_hdn_sales_Lead_Update').val();
    // alert(sales_Lead_Update);
    var sales_spoc_Update = $('#ctl00_ContentPlaceHolder1_hdn_sales_spoc_Update').val();
    //alert(sales_spoc_Update);
    var Delivery_Update = $('#ctl00_ContentPlaceHolder1_hdn_Delivery_Update').val();
    //  alert(Delivery_Update);
    var Competency_Update = $('#ctl00_ContentPlaceHolder1_hdn_Competency_Update').val();
    // alert(Competency_Update);
    var SBUHead_Update = $('#ctl00_ContentPlaceHolder1_hdn_SBUHead_Update').val();
    var SBUFinanceHead_Update = $('#ctl00_ContentPlaceHolder1_hdn_SBUFinanceHead_Update').val();
    var SRManagement_Update = $('#ctl00_ContentPlaceHolder1_hdn_SRManagement_Update').val();
    var SBUDelHead_Update = $('#ctl00_ContentPlaceHolder1_hdn_SBUDelHead_Update').val();


    var SalesRegional_Update = $('#ctl00_ContentPlaceHolder1_hdn_SalesRegional_Update').val();


    if (sales_Lead_Update != "" && sales_Lead_Update != null) {
        BindSalesLeadExist(sales_Lead_Update);
    }
    if (sales_spoc_Update != "" && sales_spoc_Update != null) {
        BindSalesSpocExist(sales_spoc_Update);
    }
    if (Delivery_Update != "" && Delivery_Update != null) {
        BindDeliveryExist(Delivery_Update);
    }
    if (Competency_Update != "" && Competency_Update != null) {
        BindCompetency_UpdateExist(Competency_Update);
    }
    if (SBUHead_Update != "" && SBUHead_Update != null) {
        BindSBUHead_UpdateExist(SBUHead_Update);
    }
    if (SBUFinanceHead_Update != "" && SBUFinanceHead_Update != null) {
        BindSBUFinanceHead_UpdateExist(SBUFinanceHead_Update);
    }
    if (SRManagement_Update != "" && SRManagement_Update != null) {
        BindSRManagement_UpdateExist(SRManagement_Update);
    }
    if (SBUDelHead_Update != "" && SBUDelHead_Update != null) {
        BindSBUDelHead_UpdateExist(SBUDelHead_Update);
    }

    if (SalesRegional_Update != "" && SalesRegional_Update != null) {
        BindSalesRegional_UpdateExist(SalesRegional_Update);
    }


    /*****************************************/
    var type = document.getElementById("ctl00_ContentPlaceHolder1_hdn_date_is_save").value;
    //  alert(type);
    if (type == "Y") {
        $('#collapseTwo').removeClass('class');
        $('#collapseTwo').addClass("panel-collapse collapse in");


        $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    }

});

//bind sales bidmanagement lead
function BindSalesLeadExist(Lead_Data) {
    var var_lead_data = Lead_Data;
    var str_html = "";
    var str_Start_html = "";
    var str_End_html = "";
    var str_main_HTML = "";
    var splt_data_rows = var_lead_data.split(',');

    var row_counter = 0;
    var row_number = 0;

    // var str_main_HTML = "";

    str_Start_html += "<div class='form-group sales_class remove_app'>";
    str_Start_html += "<label ID='lblSalesManagemntLead" + row_number + "' class='col-lg-3 col-sm-3 control-label userlabel'>Bid Management Lead</label>";
    str_Start_html += " <div class='col-lg-9 col-sm-9'>";
    str_Start_html += "<div class='row'>";


    str_End_html += "<div class='col-lg-2 col-sm-2'>";
    str_End_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + row_number + ",this);'></span>";
    str_End_html += "  </div>";
    str_End_html += " </div>";
    str_End_html += "  </div>";
    str_End_html += " </div>";
    str_End_html += " </div>";


    for (var i = 0; i < splt_data_rows.length; i++) {

        var spltstr1 = splt_data_rows[i];
        var spltstr2 = spltstr1.split("@@");

        if (row_counter == 2) {

            str_main_HTML += str_Start_html + str_html + str_End_html;

            str_Start_html = "";
            str_html = "";
            str_End_html = "";

            str_Start_html += "<div class='form-group sales_class remove_app'>";
            str_Start_html += "<label ID='lblSalesManagemntLead" + row_number + "' class='col-lg-3 col-sm-3 control-label userlabel'>Bid Management Lead</label>";
            str_Start_html += " <div class='col-lg-9 col-sm-9'>";
            str_Start_html += "   <div class='row'>";

            str_End_html += "   <div class='col-lg-2 col-sm-2'>";

            str_End_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + row_number + ",this);'></span>";
            str_End_html += "  </div>";
            str_End_html += " </div>";
            str_End_html += "  </div>";
            str_End_html += " </div>";
            str_End_html += " </div>";
            row_counter = 0;

        }
        if (spltstr2[2] == "P") {
            str_html += "   <div class='col-lg-5 col-sm-5'>  <input name='txtSalesManagemntLead' type='text' value='" + spltstr2[0] + "' ID='txtSalesManagemntLeadPri" + i + "' class='form-control si_sd_s Admin_textbox' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSalesManagemntLeadPri" + i + "\")' />";

            str_html += "   <input name='emp_id' type='hidden' ID='txtSalesManagemntLeadPri" + row_number + "_hdn' value='" + spltstr2[1] + "' />";
            str_html += "   <input  name='org_emp_id' type='hidden' ID='txtSalesManagemntLeadPri" + row_number + "_org_hdn' />";
            str_html += "   <input  name='cnd_emp_id' type='hidden' ID='txtSalesManagemntLeadPri" + row_number + "_hdn_cnd' Value='1' />";
            str_html += "   <ul id='lbSalesManagemntLeadPri" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
            str_html += "  class='serch-li'>";
            str_html += "   </ul>";
            str_html += "</div>";
        }

        if (spltstr2[2] == "S") {
            str_html += " <div class='col-lg-5 col-sm-5'><input name='txtSalesManagemntLead_sec' type='text' id='txtSalesManagemntLeadSec" + row_number + "' value='" + spltstr2[0] + "' class='si_sd_s form-control' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSalesManagemntLeadSec" + i + "\")' />";
            str_html += "  <input name='emp_id_sec' type='hidden' id='txtSalesManagemntLeadSec" + row_number + "_hdn' value='" + spltstr2[1] + "'  />";
            str_html += "  <input name='org_emp_id' type='hidden' id='txtSalesManagemntLeadSec" + row_number + "_org_hdn' />";
            str_html += "  <input name='cnd_emp_id' type='hidden' id='txtSalesManagemntLeadSec" + row_number + "_hdn_cnd'  Value='1' />";
            str_html += "  <ul id='lbSalesManagemntLeadSec" + row_number + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
            str_html += "      class='serch-li'>";
            str_html += "  </ul>";
            str_html += "</div>";
        }
        row_counter++;
        row_number++;
    }

    str_main_HTML += str_Start_html + str_html + str_End_html;
    $('#ctl00_ContentPlaceHolder1_div_SalesManagemntLead').append(str_main_HTML);
}


/*****************************************************************/
//BindSalesSpocExist

function BindSalesSpocExist(sales_spoc_Update) {

    // var var_lead_data = sales_spoc_Update;

    var str_html = "";
    var str_Start_html = "";
    var str_End_html = "";
    var str_main_HTML = "";
    //var splt_data_rows = var_lead_data.split(',');

    var row_counter = 0;
    var row_number = 0;


    str_Start_html += "<div class='form-group sales_Team_Main remove_app'>";
    str_Start_html += "<label ID='lblSalesManagemntLead" + row_number + "' class='col-lg-3 col-sm-3 control-label userlabel'>Sales SPOC</label>";
    str_Start_html += " <div class='col-lg-9 col-sm-9'>";
    str_Start_html += "   <div class='row'>";


    str_End_html += "   <div class='col-lg-2 col-sm-2'>";

    str_End_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + row_number + ",this);'></span>";
    str_End_html += "  </div>";
    str_End_html += " </div>";
    str_End_html += "  </div>";
    str_End_html += " </div>";

    var var_lead_data = sales_spoc_Update;

    var splt_data_rows = var_lead_data.split(',');

    for (var i = 0; i < splt_data_rows.length; i++) {

        var spltstr1 = splt_data_rows[i];
        var spltstr2 = spltstr1.split("@@");

        if (row_counter == 2) {

            str_main_HTML += str_Start_html + str_html + str_End_html;

            str_Start_html = "";
            str_html = "";
            str_End_html = "";

            str_Start_html += "<div class='form-group sales_Team_Main remove_app'>";
            str_Start_html += "<label ID='lblSalesManagemntLead" + row_number + "' class='col-lg-3 col-sm-3 control-label userlabel'>Sales SPOC</label>";
            str_Start_html += " <div class='col-lg-9 col-sm-9'>";
            str_Start_html += "   <div class='row'>";

            str_End_html += "   <div class='col-lg-2 col-sm-2'>";

            str_End_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + row_number + ",this);'></span>";
            str_End_html += "  </div>";
            str_End_html += " </div>";
            str_End_html += "  </div>";
            str_End_html += " </div>";
            row_counter = 0;
        }


        if (spltstr2[2] == "P") {

            str_html += "   <div class='col-lg-5 col-sm-5'>";
            str_html += "     <input name='txtSalesTeam' type='text' ID='txtSalesTeamPri" + i + "' value='" + spltstr2[0] + "'  class='form-control sales_Team Admin_textbox' autocomplete='off'  onkeyup='keyUPBidTeam_Admin(this,\"lbSalesTeamPri" + i + "\")' />";
            str_html += "   <input name='emp_id' type='hidden' ID='txtSalesTeamPri" + i + "_hdn' value='" + spltstr2[1] + "' />";
            str_html += "   <input name='org_emp_id' type='hidden' ID='txtSalesTeamPri" + i + "_org_hdn' />";
            str_html += "   <input name='cnd_emp_id' type='hidden' ID='txtSalesTeamPri" + i + "_hdn_cnd' Value='1' />";
            str_html += "   <ul id='lbSalesTeamPri" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
            str_html += "  class='serch-li'>";
            str_html += "   </ul>";
            str_html += "</div>";
        }
        if (spltstr2[2] == "S") {
            str_html += "<div class='col-lg-5 col-sm-5'>";
            str_html += "<input name='txtSalesTeamsec' type='text' id='txtSalesTeamSec" + i + "' value='" + spltstr2[0] + "'  class='form-control sales_Team' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSalesTeamSec" + i + "\")' />";
            str_html += "  <input name='emp_idTeamSec' type='hidden' id='txtSalesTeamSec" + i + "_hdn' value='" + spltstr2[1] + "' />";
            str_html += "  <input name='org_emp_id' type='hidden' id='txtSalesTeamSec" + i + "_org_hdn' />";
            str_html += "  <input name='cnd_emp_id' type='hidden' id='txtSalesTeamSec" + i + "_hdn_cnd'  Value='1' />";
            str_html += "  <ul id='lbSalesTeamSec" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
            str_html += "  class='serch-li'>";
            str_html += "  </ul>";
            str_html += " </div>";
        }
        row_counter++;
        row_number++;
    }

    str_main_HTML += str_Start_html + str_html + str_End_html;
    $('#ctl00_ContentPlaceHolder1_div_SalesTeam').append(str_main_HTML);
}


/*****************************************************************/

function BindDeliveryExist(Delivery_Update) {

    var str_html = "";
    var str_Start_html = "";
    var str_End_html = "";
    var str_main_HTML = "";

    var row_counter = 0;
    var row_number = 0;

    str_Start_html += "<div class='form-group Delivery_Ad_class_Main remove_app'>";
    str_Start_html += "<label ID='lblDeliveryAdmin" + row_number + "' class='col-lg-2  col-sm-2 control-label userlabel'>Delivery</label>";
    str_Start_html += " <div class='col-lg-9 col-sm-9'>";
    str_Start_html += "   <div class='row'>";

    str_Start_html += "<div class='col-lg-4 col-sm-4'>";
    str_Start_html += " <select id='ddlDeliveryAreaAdmin" + row_number + "'  class='form-control Admin_textbox' >";
    str_Start_html += " <option value='0'> --Select-- </option></select>";
    str_Start_html += "</div>";

    str_End_html += "  </div>";
    str_End_html += " </div>";
    str_End_html += "   <div class='col-lg-1 col-sm-1'>";
    str_End_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + row_number + ",this);'></span>";
    str_End_html += " </div>";
    str_End_html += " </div>";


    var var_lead_data = Delivery_Update;
    var splt_data_rows = var_lead_data.split(',');

    for (var i = 0; i < splt_data_rows.length; i++) {

        var spltstr1 = splt_data_rows[i];
        var spltstr2 = spltstr1.split("@@");
        var m = 0;

        if (row_counter == 2) {

            str_main_HTML += str_Start_html + str_html + str_End_html;

            str_Start_html = "";
            str_html = "";
            str_End_html = "";

            str_Start_html += "<div class='form-group Delivery_Ad_class_Main remove_app'>";
            str_Start_html += "<label ID='lblDeliveryAdmin" + row_number + "' class='col-lg-2 col-sm-2 control-label userlabel'>Delivery</label>";
            str_Start_html += " <div class='col-lg-9 col-sm-9'>";
            str_Start_html += "   <div class='row'>";

            str_Start_html += "<div class='col-lg-4 col-sm-4'>";
            str_Start_html += " <select id='ddlDeliveryAreaAdmin" + row_number + "'  class='form-control Admin_textbox' >";
            str_Start_html += " <option value='0'> --Select-- </option></select>";
            str_Start_html += "</div>";

            str_End_html += "  </div>";
            str_End_html += " </div>";
            str_End_html += "   <div class='col-lg-1 col-sm-1'>";
            str_End_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + row_number + ",this);'></span>";
            str_End_html += " </div>";
            str_End_html += " </div>";
            row_counter = 0;
        }


        if (spltstr2[2] == "P") {


            str_html += "     <div class='col-lg-4 col-sm-4'>";
            str_html += " <input name='txtDelivery' type='text' ID='txtDeliveryAdminPri" + i + "' value='" + spltstr2[0] + "' class='form-control Delivery_Ad_class Admin_textbox' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbDeliveryAdminPri" + i + "\")' />";
            str_html += "   <input name='emp_id' type='hidden' ID='txtDeliveryAdminPri" + i + "_hdn' value='" + spltstr2[1] + "' />";
            str_html += "   <input name='org_emp_id' type='hidden' ID='txtDeliveryAdminPri" + i + "_org_hdn' />";
            str_html += "   <input name='emp_id__' type='hidden' ID='txtDeliveryAdminPri" + i + "_hdn_cnd' Value='1' />";
            str_html += "   <ul id='lbDeliveryAdminPri" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
            str_html += "  class='serch-li'>";
            str_html += "   </ul>";
            str_html += "</div>";

            //
            //alert('split::' + row_number);

            AddDelivery_DDL("ddlDeliveryAreaAdmin" + row_number, spltstr2[3]);

        }
        if (spltstr2[2] == "S") {
            str_html += "<div class='col-lg-4 col-sm-4'>";
            str_html += "<input name='txtDeliverysec' type='text' id='txtDeliveryAdminSec" + i + "' value='" + spltstr2[0] + "' class='form-control Delivery_Ad_class' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbDeliveryAdminSec" + i + "\")' />";
            str_html += "  <input name='emp_idDeliverySec' type='hidden' id='txtDeliveryAdminSec" + i + "_hdn' value='" + spltstr2[1] + "' />";
            str_html += "  <input name='org_emp_id' type='hidden' id='txtDeliveryAdminSec" + i + "_org_hdn' />";
            str_html += "  <input name='emp_idCnd' type='hidden' id='txtDeliveryAdminSec" + i + "_hdn_cnd'  Value='1' />";
            str_html += "  <ul id='lbDeliveryAdminSec" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
            str_html += "      class='serch-li'>";
            str_html += "  </ul>";
            str_html += "  </div>";
        }

        row_counter++;
        row_number++;
    }
    str_main_HTML += str_Start_html + str_html + str_End_html;
    // alert(str_main_HTML);
    $('#ctl00_ContentPlaceHolder1_AddDelivery_Server_Div').append(str_main_HTML);
}


/*********************************************************************/

function BindCompetency_UpdateExist(Delivery_Update) {
    //alert(Delivery_Update);
    var str_html = "";
    var str_Start_html = "";
    var str_End_html = "";
    var str_main_HTML = "";

    var row_counter = 0;
    var row_number = 0;

    var var_lead_data = Delivery_Update;
    var str_html = "";
    var splt_data_rows = var_lead_data.split(',');


    str_Start_html += "<div class='form-group AddCompetency_class_Main remove_app'>";
    str_Start_html += "<label ID='lblCompetencyAdmin" + row_number + "' class='col-lg-2 col-sm-2 control-label userlabel'>Competency</label>";
    str_Start_html += " <div class='col-lg-9 col-sm-9'>";
    str_Start_html += "   <div class='row'>";

    str_Start_html += "<div class='col-lg-4 col-sm-4'>";
    str_Start_html += " <select id='ddlCompetencyAdmin" + row_number + "'  class='form-control Admin_textbox' >";
    str_Start_html += " <option value='0'> --Select-- </option>";
    str_Start_html += " </select>";
    str_Start_html += "</div>";

    str_End_html += " </div>";
    str_End_html += "  </div>";
    str_End_html += "   <div class='col-lg-1 col-sm-1'>";
    str_End_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + row_number + ",this);'></span>";
    str_End_html += " </div>";
    str_End_html += " </div>";

    for (var i = 0; i < splt_data_rows.length; i++) {

        var spltstr1 = splt_data_rows[i];
        var spltstr2 = spltstr1.split("@@");

        if (row_counter == 2) {

            str_main_HTML += str_Start_html + str_html + str_End_html;

            str_Start_html = "";
            str_html = "";
            str_End_html = "";

            str_Start_html += "<div class='form-group AddCompetency_class_Main remove_app'>";
            str_Start_html += "<label ID='lblCompetencyAdmin" + row_number + "' class='col-lg-2 col-sm-2 control-label userlabel'>Competency</label>";
            str_Start_html += " <div class='col-lg-9 col-sm-9'>";
            str_Start_html += "   <div class='row'>";


            str_Start_html += "<div class='col-lg-4 col-sm-4'>";
            str_Start_html += " <select id='ddlCompetencyAdmin" + row_number + "'  class='form-control' >";
            str_Start_html += " <option value='0'> --Select-- </option>";
            str_Start_html += " </select>";
            str_Start_html += "</div>";

            str_End_html += " </div>";
            str_End_html += "  </div>";
            str_End_html += "   <div class='col-lg-1 col-sm-1'>";
            str_End_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + row_number + ",this);'></span>";
            str_End_html += " </div>";
            str_End_html += " </div>";

            row_counter = 0;
        }


        if (spltstr2[2] == "P") {
            //alert('split::'+spltstr2[3]);
            AddCompeteoncy_DDL("ddlCompetencyAdmin" + i, spltstr2[3]);

            str_html += "     <div class='col-lg-4 col-sm-4'>";
            str_html += "     <input name='txtCompetency' type='text' ID='txtCompetencyAdminPri" + i + "'  value='" + spltstr2[0] + "' class='form-control AddCompetency_class Admin_textbox' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbCompetencyAdminPri" + i + "\")' />";
            str_html += "   <input name='emp_id' type='hidden' ID='txtCompetencyAdminPri" + i + "_hdn'  value='" + spltstr2[1] + "'/>";
            str_html += "   <input name='org_emp_id' type='hidden' ID='txtCompetencyAdminPri" + i + "_org_hdn' />";
            str_html += "   <input name='cnd_emp_id' type='hidden' ID='txtCompetencyAdminPri" + i + "_hdn_cnd' Value='1' />";
            str_html += "   <ul id='lbCompetencyAdminPri" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
            str_html += "  class='serch-li'>";
            str_html += "   </ul>";
            str_html += "</div>";

        }
        if (spltstr2[2] == "S") {
            str_html += "<div class='col-lg-4 col-sm-4'>";
            str_html += "<input name='txtCompetencysec' type='text' id='txtCompetencyAdminSec" + i + "' value='" + spltstr2[0] + "' class='form-control AddCompetency_class' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbCompetencyAdminSec" + i + "\")' />";
            str_html += "  <input name='emp_idCompetencySec' type='hidden' id='txtCompetencyAdminSec" + i + "_hdn' value='" + spltstr2[1] + "' />";
            str_html += "  <input name='org_emp_id' type='hidden' id='txtCompetencyAdminSec" + i + "_org_hdn' />";
            str_html += "  <input name='cnd_emp_id' type='hidden' id='txtCompetencyAdminSec" + i + "_hdn_cnd'  Value='1' />";
            str_html += "  <ul id='lbCompetencyAdminSec" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
            str_html += "      class='serch-li'>";
            str_html += "  </ul>";
            str_html += " </div>";

        }

        row_counter++;
        row_number++;


    }
    str_main_HTML += str_Start_html + str_html + str_End_html;
    $('#ctl00_ContentPlaceHolder1_Add_Competancy_Div').append(str_main_HTML);
}

/******************************************************************************************/
function BindSBUHead_UpdateExist(SBUHead_Update) {

    var str_html = "";
    var str_Start_html = "";
    var str_End_html = "";
    var str_main_HTML = "";
    var row_counter = 0;
    var row_number = 0;

    str_Start_html += "<div class='form-group AddSBUHead_class_Main remove_app'>";
    str_Start_html += "<label ID='lblSBUHead_Admin" + row_number + "' class='col-lg-2 col-sm-2 control-label userlabel'>SBU Head</label>";
    str_Start_html += " <div class='col-lg-9 col-sm-9'>";
    str_Start_html += "   <div class='row'>";

    str_End_html += " </div>";
    str_End_html += "  </div>";
    str_End_html += "<div class='col-lg-1 col-sm-1'>";
    str_End_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + row_number + ",this);'></span>";
    str_End_html += "</div>";
    str_End_html += " </div>";



    var var_lead_data = SBUHead_Update;
    var splt_data_rows = var_lead_data.split(',');

    for (var i = 0; i < splt_data_rows.length; i++) {

        var spltstr1 = splt_data_rows[i];
        var spltstr2 = spltstr1.split("@@");

        if (row_counter == 2) {

            str_main_HTML += str_Start_html + str_html + str_End_html;

            str_Start_html = "";
            str_html = "";
            str_End_html = "";


            str_Start_html += "<div class='form-group AddSBUHead_class_Main remove_app'>";
            str_Start_html += "<label ID='lblSBUHead_Admin" + row_number + "' class='col-lg-2 col-sm-2 control-label userlabel'>SBU Head</label>";
            str_Start_html += " <div class='col-lg-9 col-sm-9'>";
            str_Start_html += "   <div class='row'>";

            str_End_html += " </div>";
            str_End_html += "  </div>";
            str_End_html += "<div class='col-lg-1 col-sm-1'>";
            str_End_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + row_number + ",this);'></span>";
            str_End_html += "</div>";
            str_End_html += " </div>";
            row_counter = 0;
        }

        if (spltstr2[2] == "P") {
            str_html += "     <div class='col-lg-4 col-sm-4'></div>";
            str_html += "     <div class='col-lg-4 col-sm-4'>";
            str_html += "     <input name='txtCompetency' type='text' ID='txtSBUHead_AdminPri" + i + "' value='" + spltstr2[0] + "' class='form-control AddSBUHead_class Admin_textbox' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSBUHead_AdminPri" + i + "\")' />";

            str_html += "   <input name='emp_id' type='hidden' ID='txtSBUHead_AdminPri" + i + "_hdn' value='" + spltstr2[1] + "'/>";
            str_html += "   <input name='org_emp_id' type='hidden' ID='txtSBUHead_AdminPri" + i + "_org_hdn' />";
            str_html += "   <input name='cnd_emp_id' type='hidden' ID='txtSBUHead_AdminPri" + i + "_hdn_cnd' Value='1' />";
            str_html += "   <ul id='lbSBUHead_AdminPri" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
            str_html += "  class='serch-li'>";
            str_html += "   </ul>";
            str_html += "</div>";
        }

        if (spltstr2[2] == "S") {
            str_html += "<div class='col-lg-4 col-sm-4'>";
            str_html += "<input name='txtCompetencysec' type='text' id='txtSBUHead_AdminSec" + i + "' value='" + spltstr2[0] + "' class='form-control AddSBUHead_class' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSBUHead_AdminSec" + i + "\")' />";
            str_html += "  <input name='emp_idCompetencySec' type='hidden' id='txtSBUHead_AdminSec" + i + "_hdn' value='" + spltstr2[1] + "' />";
            str_html += "  <input name='org_emp_id' type='hidden' id='txtSBUHead_AdminSec" + i + "_org_hdn' />";
            str_html += "  <input name='cnd_emp_id' type='hidden' id='txtSBUHead_AdminSec" + i + "_hdn_cnd'  Value='1' />";
            str_html += "  <ul id='lbSBUHead_AdminSec" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
            str_html += "      class='serch-li'>";
            str_html += "  </ul>";
            str_html += " </div>";
        }
        row_counter++;
        row_number++;

    }
    str_main_HTML += str_Start_html + str_html + str_End_html;
    $('#ctl00_ContentPlaceHolder1_Add_SBUhead_div').append(str_main_HTML);
}

/***************************************************************************/

function BindSBUFinanceHead_UpdateExist(SBUFinanceHead_Update) {

    var str_html = "";
    var str_Start_html = "";
    var str_End_html = "";
    var str_main_HTML = "";
    var row_counter = 0;
    var row_number = 0;

    str_Start_html += "<div class='form-group SBUFinanceHead_class_Main remove_app'>";
    str_Start_html += "<label ID='lblSBUFianaceHead_Admin" + row_number + "' class='col-lg-2 control-label userlabel'>SBU Finance Head</label>";
    str_Start_html += "<div class='col-lg-9 col-sm-9'>";
    str_Start_html += "<div class='row'>";
    str_Start_html += "<div class='col-lg-4 col-sm-4'></div>";


    str_End_html += "</div>";
    str_End_html += "</div>";
    str_End_html += "<div class='col-lg-1 col-sm-1'>";
    str_End_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + row_number + ",this);'></span>";
    str_End_html += "</div>";
    str_End_html += " </div>";



    var var_lead_data = SBUFinanceHead_Update;
    var str_html = "";
    var splt_data_rows = var_lead_data.split(',');

    for (var i = 0; i < splt_data_rows.length; i++) {

        var spltstr1 = splt_data_rows[i];
        var spltstr2 = spltstr1.split("@@");

        if (row_counter == 2) {

            str_main_HTML += str_Start_html + str_html + str_End_html;

            str_Start_html = "";
            str_html = "";
            str_End_html = "";

            str_Start_html += "<div class='form-group SBUFinanceHead_class_Main remove_app'>";
            str_Start_html += "<label ID='lblSBUFianaceHead_Admin" + row_number + "' class='col-lg-2 col-sm-2 control-label userlabel'>SBU Finance Head</label>";
            str_Start_html += " <div class='col-lg-9 col-sm-9'>";
            str_Start_html += "   <div class='row'>";
            str_Start_html += "     <div class='col-lg-4 col-sm-4'></div>";

            str_End_html += " </div>";
            str_End_html += "  </div>";
            str_End_html += "<div class='col-lg-1 col-sm-1'>";
            str_End_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + row_number + ",this);'></span>";
            str_End_html += "</div>";
            str_End_html += " </div>";
            row_counter = 0;
        }

        if (spltstr2[2] == "P") {

            str_html += "     <div class='col-lg-4 col-sm-4'>";
            str_html += "     <input name='txtCompetency' type='text' ID='txtSBUFianaceHead_AdminPri" + i + "' value='" + spltstr2[0] + "'  class='form-control SBUFinanceHead_class Admin_textbox' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSBUFianaceHead_AdminPri" + i + "\")' />";

            str_html += "   <input name='emp_id' type='hidden' ID='txtSBUFianaceHead_AdminPri" + i + "_hdn' value='" + spltstr2[1] + "'  />";
            str_html += "   <input name='org_emp_id' type='hidden' ID='txtSBUFianaceHead_AdminPri" + i + "_org_hdn' />";
            str_html += "   <input name='cnd_emp_id' type='hidden' ID='txtSBUFianaceHead_AdminPri" + i + "_hdn_cnd' Value='1' />";
            str_html += "   <ul id='lbSBUFianaceHead_AdminPri" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
            str_html += "  class='serch-li'>";
            str_html += "   </ul>";
            str_html += "</div>";

        }

        if (spltstr2[2] == "S") {
            str_html += "<div class='col-lg-4 col-sm-4'>";
            str_html += "<input name='txtCompetency_sec' type='text' id='txtSBUFianaceHead_AdminSec" + i + "' value='" + spltstr2[0] + "'  class='form-control SBUFinanceHead_class' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSBUFianaceHead_AdminSec" + i + "\")' />";
            str_html += "  <input name='emp_idCompetencySec' type='hidden' id='txtSBUFianaceHead_AdminSec" + i + "_hdn' value='" + spltstr2[1] + "'  />";
            str_html += "  <input name='org_emp_id' type='hidden' id='txtSBUFianaceHead_AdminSec" + i + "_org_hdn' />";
            str_html += "  <input name='cnd_emp_id' type='hidden' id='txtSBUFianaceHead_AdminSec" + i + "_hdn_cnd'  Value='1' />";
            str_html += "  <ul id='lbSBUFianaceHead_AdminSec" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
            str_html += "class='serch-li'>";
            str_html += "  </ul>";
            str_html += " </div>";
        }
        row_counter++;
        row_number++;
    }
    str_main_HTML += str_Start_html + str_html + str_End_html;

    $('#ctl00_ContentPlaceHolder1_Add_SBUFianaceHead_div').append(str_main_HTML);

}
/*******************************************************************/

function BindSRManagement_UpdateExist(SRManagement_Update) {

    var str_html = "";
    var str_Start_html = "";
    var str_End_html = "";
    var str_main_HTML = "";
    var row_counter = 0;
    var row_number = 0;

    str_Start_html += "<div class='form-group SrManagement_class_Main remove_app'>";
    str_Start_html += "<label ID='lblSr_Management_Admin" + row_number + "' class='col-lg-2 col-sm-2 control-label userlabel'>Sr. Management</label>";
    str_Start_html += " <div class='col-lg-9 col-sm-9'>";
    str_Start_html += "   <div class='row'>";
    str_Start_html += "     <div class='col-lg-4 col-sm-4'></div>";

    str_End_html += " </div>";
    str_End_html += "  </div>";
    str_End_html += "<div class='col-lg-1 col-sm-1'>";
    str_End_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + row_number + ",this);'></span>";
    str_End_html += "</div>";
    str_End_html += " </div>";



    var var_lead_data = SRManagement_Update;
    var str_html = "";
    var splt_data_rows = var_lead_data.split(',');

    for (var i = 0; i < splt_data_rows.length; i++) {

        var spltstr1 = splt_data_rows[i];
        var spltstr2 = spltstr1.split("@@");


        if (row_counter == 2) {

            str_main_HTML += str_Start_html + str_html + str_End_html;

            str_Start_html = "";
            str_html = "";
            str_End_html = "";


            str_Start_html += "<div class='form-group SrManagement_class_Main remove_app'>";
            str_Start_html += "<label ID='lblSr_Management_Admin" + row_number + "' class='col-lg-2 col-sm-2 control-label userlabel'>Sr. Management</label>";
            str_Start_html += " <div class='col-lg-9 col-sm-9'>";
            str_Start_html += "   <div class='row'>";
            str_Start_html += "     <div class='col-lg-4 col-sm-4'></div>";

            str_End_html += " </div>";
            str_End_html += "  </div>";
            str_End_html += "<div class='col-lg-1 col-sm-1'>";
            str_End_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + row_number + ",this);'></span>";
            str_End_html += "</div>";
            str_End_html += " </div>";
            row_counter = 0;
        }


        if (spltstr2[2] == "P") {


            str_html += "     <div class='col-lg-4 col-sm-4'>";
            str_html += "     <input name='txtSrManagementPri' type='text' ID='txtSr_Management_AdminPri" + i + "' value='" + spltstr2[0] + "' class='form-control SrManagement_class Admin_textbox' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSr_Management_AdminPri" + i + "\")' />";

            str_html += "   <input name='emp_idSrManagementPri'  type='hidden' ID='txtSr_Management_AdminPri" + i + "_hdn' value='" + spltstr2[1] + "'/>";
            str_html += "   <input name='org_emp_id' type='hidden' ID='txtSr_Management_AdminPri" + i + "_org_hdn' />";
            str_html += "   <input name='cnd_emp_id' type='hidden' ID='txtSr_Management_AdminPri" + i + "_hdn_cnd' Value='1' />";
            str_html += "   <ul id='lbSr_Management_AdminPri" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
            str_html += "  class='serch-li'>";
            str_html += "   </ul>";
            str_html += "</div>";

        }
        if (spltstr2[2] == "S") {
            str_html += "<div class='col-lg-4 col-sm-4'>";
            str_html += "<input name='txtSrManagementSec' type='text' id='txtSr_Management_AdminSec" + i + "' class='form-control SrManagement_class' value='" + spltstr2[0] + "' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSr_Management_AdminSec" + i + "\")' />";
            str_html += "  <input name='emp_idSrManagementSec' type='hidden' id='txtSr_Management_AdminSec" + i + "_hdn' value='" + spltstr2[1] + "' />";
            str_html += "  <input name='org_emp_id' type='hidden' id='txtSr_Management_AdminSec" + i + "_org_hdn' />";
            str_html += "  <input name='cnd_emp_id' type='hidden' id='txtSr_Management_AdminSec" + i + "_hdn_cnd'  Value='1' />";
            str_html += "  <ul id='lbSr_Management_AdminSec" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
            str_html += "      class='serch-li'>";
            str_html += "  </ul>";
            str_html += " </div>";

        }
        row_counter++;
        row_number++;
    }
    str_main_HTML += str_Start_html + str_html + str_End_html;
    $('#ctl00_ContentPlaceHolder1_Add_SrManagement').append(str_main_HTML);

}
/******************************************************************************************/
function BindSBUDelHead_UpdateExist(SBUDelHead_Update) {
    //alert("function");
    var str_html = "";
    var str_Start_html = "";
    var str_End_html = "";
    var str_main_HTML = "";
    var row_counter = 0;
    var row_number = 0;

    str_Start_html += "<div class='form-group AddSBUDelHead_class_Main remove_app'>";
    str_Start_html += "<label ID='lblSBUDelHead_Admin" + row_number + "' class='col-lg-2 col-sm-2 control-label userlabel'>SBU Delivery Head</label>";
    str_Start_html += " <div class='col-lg-9 col-sm-9'>";
    str_Start_html += "   <div class='row'>";

    str_End_html += " </div>";
    str_End_html += "  </div>";
    str_End_html += "<div class='col-lg-1 col-sm-1'>";
    str_End_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + row_number + ",this);'></span>";
    str_End_html += "</div>";
    str_End_html += " </div>";



    var var_lead_data = SBUDelHead_Update;
    var splt_data_rows = var_lead_data.split(',');

    for (var i = 0; i < splt_data_rows.length; i++) {

        var spltstr1 = splt_data_rows[i];
        var spltstr2 = spltstr1.split("@@");

        if (row_counter == 2) {

            str_main_HTML += str_Start_html + str_html + str_End_html;

            str_Start_html = "";
            str_html = "";
            str_End_html = "";


            str_Start_html += "<div class='form-group AddSBUDelHead_class_Main remove_app'>";
            str_Start_html += "<label ID='lblSBUDelHead_Admin" + row_number + "' class='col-lg-2 col-sm-2 control-label userlabel'>SBU Delivery Head</label>";
            str_Start_html += " <div class='col-lg-9 col-sm-9'>";
            str_Start_html += "   <div class='row'>";

            str_End_html += " </div>";
            str_End_html += "  </div>";
            str_End_html += "<div class='col-lg-1 col-sm-1'>";
            str_End_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + row_number + ",this);'></span>";
            str_End_html += "</div>";
            str_End_html += " </div>";
            row_counter = 0;
        }

        if (spltstr2[2] == "P") {
            str_html += "     <div class='col-lg-4 col-sm-4'></div>";
            str_html += "     <div class='col-lg-4 col-sm-4'>";
            str_html += "     <input name='txtCompetency' type='text' ID='txtSBUDelHead_AdminPri" + i + "' value='" + spltstr2[0] + "' class='form-control AddSBUDelHead_class Admin_textbox' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSBUDelHead_AdminPri" + i + "\")' />";

            str_html += "   <input name='emp_id' type='hidden' ID='txtSBUDelHead_AdminPri" + i + "_hdn' value='" + spltstr2[1] + "'/>";
            str_html += "   <input name='org_emp_id' type='hidden' ID='txtSBUDelHead_AdminPri" + i + "_org_hdn' />";
            str_html += "   <input name='cnd_emp_id' type='hidden' ID='txtSBUDelHead_AdminPri" + i + "_hdn_cnd' Value='1' />";
            str_html += "   <ul id='lbSBUDelHead_AdminPri" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
            str_html += "  class='serch-li'>";
            str_html += "   </ul>";
            str_html += "</div>";
        }

        if (spltstr2[2] == "S") {
            str_html += "<div class='col-lg-4 col-sm-4'>";
            str_html += "<input name='txtCompetencysec' type='text' id='txtSBUDelHead_AdminSec" + i + "' value='" + spltstr2[0] + "' class='form-control AddSBUDelHead_class' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSBUDelHead_AdminSec" + i + "\")' />";
            str_html += "  <input name='emp_idCompetencySec' type='hidden' id='txtSBUDelHead_AdminSec" + i + "_hdn' value='" + spltstr2[1] + "' />";
            str_html += "  <input name='org_emp_id' type='hidden' id='txtSBUDelHead_AdminSec" + i + "_org_hdn' />";
            str_html += "  <input name='cnd_emp_id' type='hidden' id='txtSBUDelHead_AdminSec" + i + "_hdn_cnd'  Value='1' />";
            str_html += "  <ul id='lbSBUDelHead_AdminSec" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
            str_html += "      class='serch-li'>";
            str_html += "  </ul>";
            str_html += " </div>";
        }
        row_counter++;
        row_number++;

    }
    str_main_HTML += str_Start_html + str_html + str_End_html;
    $('#ctl00_ContentPlaceHolder1_Add_SBUDelhead_div').append(str_main_HTML);
}


//14-sept code added for the 
/*******************************************************************/

function BindSalesRegional_UpdateExist(SalesRegional_Update) {

    var str_html = "";
    var str_Start_html = "";
    var str_End_html = "";
    var str_main_HTML = "";
    var row_counter = 0;
    var row_number = 0;

    str_Start_html += "<div class='form-group SalesRegional_class_Main remove_app'>";
    str_Start_html += "<label ID='lblSalesRegional" + row_number + "' class='col-lg-2 col-sm-2 control-label userlabel'>Sales Regional Head</label>";
    str_Start_html += " <div class='col-lg-9 col-sm-9'>";
    str_Start_html += "   <div class='row'>";
    str_Start_html += "     <div class='col-lg-4 col-sm-4'></div>";

    str_End_html += " </div>";
    str_End_html += "  </div>";
    str_End_html += "<div class='col-lg-1 col-sm-1'>";
    str_End_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + row_number + ",this);'></span>";
    str_End_html += "</div>";
    str_End_html += " </div>";



    var var_lead_data = SalesRegional_Update;
    var str_html = "";
    var splt_data_rows = var_lead_data.split(',');

    for (var i = 0; i < splt_data_rows.length; i++) {

        var spltstr1 = splt_data_rows[i];
        var spltstr2 = spltstr1.split("@@");


        if (row_counter == 2) {

            str_main_HTML += str_Start_html + str_html + str_End_html;

            str_Start_html = "";
            str_html = "";
            str_End_html = "";


            str_Start_html += "<div class='form-group SalesRegional_class_Main remove_app'>";
            str_Start_html += "<label ID='lblSalesRegional" + row_number + "' class='col-lg-2 col-sm-2 control-label userlabel'>Sales Regional Head</label>";
            str_Start_html += " <div class='col-lg-9 col-sm-9'>";
            str_Start_html += "   <div class='row'>";
            str_Start_html += "     <div class='col-lg-4 col-sm-4'></div>";

            str_End_html += " </div>";
            str_End_html += "  </div>";
            str_End_html += "<div class='col-lg-1 col-sm-1'>";
            str_End_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + row_number + ",this);'></span>";
            str_End_html += "</div>";
            str_End_html += " </div>";
            row_counter = 0;
        }


        if (spltstr2[2] == "P") {


            str_html += "     <div class='col-lg-4 col-sm-4'>";
            str_html += "     <input name='txtSalesRegionalPri' type='text' ID='txtSalesRegionalPri" + i + "' value='" + spltstr2[0] + "' class='form-control AddSalesRegional_class Admin_textbox' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lblSalesRegionalpri" + i + "\")' />";

            str_html += "   <input name='emp_idSalesRegionalPri'  type='hidden' ID='txtSalesRegionalPri" + i + "_hdn' value='" + spltstr2[1] + "'/>";
            str_html += "   <input name='org_emp_id' type='hidden' ID='txtSalesRegionalPri" + i + "_org_hdn' />";
            str_html += "   <input name='cnd_emp_id' type='hidden' ID='txtSalesRegionalPri" + i + "_hdn_cnd' Value='1' />";
            str_html += "   <ul id='lblSalesRegionalpri" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
            str_html += "  class='serch-li'>";
            str_html += "   </ul>";
            str_html += "</div>";

        }
        if (spltstr2[2] == "S") {
            str_html += "<div class='col-lg-4 col-sm-4'>";
            str_html += "<input name='txtSalesRegionalSec' type='text' id='txtSalesRegionalSec" + i + "' class='form-control AddSalesRegional_class' value='" + spltstr2[0] + "' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lblSalesRegionalSec" + i + "\")' />";
            str_html += "  <input name='emp_idSalesRegionalSec' type='hidden' id='txtSalesRegionalSec" + i + "_hdn' value='" + spltstr2[1] + "' />";
            str_html += "  <input name='org_emp_id' type='hidden' id='txtSalesRegionalSec" + i + "_org_hdn' />";
            str_html += "  <input name='cnd_emp_id' type='hidden' id='txtSalesRegionalSec" + i + "_hdn_cnd'  Value='1' />";
            str_html += "  <ul id='lblSalesRegionalSec" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
            str_html += "      class='serch-li'>";
            str_html += "  </ul>";
            str_html += " </div>";

        }
        row_counter++;
        row_number++;
    }
    str_main_HTML += str_Start_html + str_html + str_End_html;
    $('#ctl00_ContentPlaceHolder1_AddSalesRegional_Div').append(str_main_HTML);

}
/******************************************************************************************/

/*****************************************************************/
/*     Method Name        - GetBidDetailMasterData
*     Created By         - siddharam
*     Created On         - 4 Jul 2017
*     Modified By        - 
*     Modified On        - 
*     Purpose            - This method is used to GetCustomerView and bind it to page
*/

$(document).ready(function () {

    var returnData = '';
    $.ajax({
        type: 'POST',
        //url: "http://localhost:30360/Service/BidDeskService.asmx/GetBidDetailMasterData_Admin",
        url: LoadURL + "BidDeskService.asmx/GetBidDetailMasterData_Admin",
        async: false,
        success: function (response) {
            returnData = response;
            //alert(returnData.length);
        },
        error: function (jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            console.log("ajax error : " + msg);
        }

    });

});

//bid team domain//

$('html').click(function (e) {
    if (e.target.id != 'dynamictext_add_7')
        $('#lbcdgreviewteam1_add_7').attr('style', 'display:none');

    if ($(e.target).hasClass("serch-li")) {
        //alert("yes");
    } else {
        $(".serch-li").attr('style', 'display:none');
    }
});




/*  Method Name - keyUPBidTeam_Admin
*  Created By - siddharam 
*  Created On - 04 Jul 2017
*  Modified By - 
*  Modified On - 
*  Purpose - This function is used to get ajax call to the BidTeamSearchPeople.aspx page & listbox is used to get all listbox id purpose.    
*/
function keyUPBidTeam_Admin(ele, listbox) {
    // alert('s');
    // listbox =+"'"+ listbox+"'";

    var id = $(ele).attr("id");
    globalid = id;
    var bidmanager = $('#' + id).val();
    //alert(globalid);

    document.getElementById(globalid + "_hdn_cnd").value = 0;
    document.getElementById(globalid + "_hdn").value = "";
    //alert(document.getElementById(globalid + "_hdn_cnd").value);

    if (bidmanager.length > 2) {
        $.ajax({
            url: "./BidTeamAjaxCall.aspx",
            type: "POST",
            data: { Val: bidmanager },
            success: function (response) {
                if (response != 'fail') {
                    var data = $.parseJSON(response);
                    $('#' + listbox).html('');
                    //class1 is defined for the alternate color for the listbox purpose.


                    var class1 = '';
                    for (var i = 0; i < data.length; i++) {

                        if (i % 2 == 0) {
                            class1 = "gray";
                        }
                        else {
                            class1 = "light";
                        }

                        $('#' + listbox).append('<li class="inner-li ' + class1 + '" style="height: 105px;cursor:pointer;" id="' + data[i].EMPNAME + '" onclick="getempid(this,\'' + data[i].EMPLOYEE_ID + '\');">' + data[i].EMPNAME + " (" + data[i].EMPLOYEE_ID + ")" + '</br>' + data[i].EMAILID + '</li>');
                        $('#' + listbox).attr('style', 'background-color: #f8fcee;');

                    }
                }
            }
        });
    }
}


// This function is used for onclick event of the list box to get EMPLOYEE_ID & text box ID purpose. 

function getempid(val, uid) {
    var id = $(val).attr("id")

    document.getElementById(globalid).value = id;
    document.getElementById(globalid + "_hdn").value = uid;
    document.getElementById(globalid + "_hdn_cnd").value = 1;
}

/*****************************************************************/



function AddCompeteoncy_DDL(ddlid, selected_op) {

    $.ajax({
        url: "./BidTeamAjaxCall_New.aspx",
        type: "POST",
        data: { Val: 'CDG' },
        success: function (response) {

            if (response != 'fail') {

                $('#div_left').waitMe({
                    effect: 'ios',
                    bg: 'rgba(255,255,255,0.7)',
                    color: '#000',
                    sizeW: '',
                    sizeH: '',
                    source: ''
                });

                var Result = $.parseJSON(response);
                if (Result.length > 0) {
                    var obj1 = Result;

                    for (var i = 0; i < obj1.length; i++) {
                        if (selected_op == obj1[i].ID) {
                            //alert('selected:'+selected_op);
                            //alert('ID:'+obj1[i].ID);
                            $('#' + ddlid).append($("<option value='" + obj1[i].ID + "' selected>" + obj1[i].CDG_NAME + "</option>"));
                        }
                        else {
                            $('#' + ddlid).append($("<option value='" + obj1[i].ID + "'>" + obj1[i].CDG_NAME + "</option>"));
                        }
                    }
                }
            }
        }
    });
    setTimeout(function () { $('#div_left').waitMe('hide'); }, 4000);
}




function AddDelivery_DDL(ddlid, selected_op) {

    //alert('selected val::' + selected_op);
    //alert(ddlid);
    $.ajax({
        url: "./BidTeamAjaxCall_New.aspx",
        type: "POST",
        data: { Val: 'IBU' },
        success: function (response) {

            if (response != 'fail') {


                $('#div_left').waitMe({
                    effect: 'ios',
                    bg: 'rgba(255,255,255,0.7)',
                    color: '#000',
                    sizeW: '',
                    sizeH: '',
                    source: ''
                });

                var Result = $.parseJSON(response);
                if (Result.length > 0) {
                    var obj1 = Result;
                    for (var i = 0; i < obj1.length; i++) {

                        //alert(obj1[i].CODEVALUE);

                        if (selected_op == obj1[i].CODEVALUE) {
                            //alert('yes');
                            $('#' + ddlid).append($("<option value='" + obj1[i].CODEVALUE + "' selected>" + obj1[i].CODEDESC + "</option>"));
                        }
                        else {
                            //alert('no');
                            $('#' + ddlid).append($("<option value='" + obj1[i].CODEVALUE + "'>" + obj1[i].CODEDESC + "</option>"));
                        }

                    }
                }
            }
        }
        //setTimeout(function () { $('#div_left').waitMe('hide'); }, 3000);
    });
    setTimeout(function () { $('#div_left').waitMe('hide'); }, 4000);
}


/*function AddCompeteoncy_DDL(ddlid,selected_op) {
//var ele = $(ddlid);
//  alert(selected_op);

$.ajax({
type: "POST",
url: LoadURL + "BidDeskService.asmx/CDG_List_IBU_DDL_Client",

success: function (Result) {
console.log("Result : " + JSON.stringify(Result));
//var Result = $.parseJSON(Result);

//alert(Result);
//  $.each(Result.d, function (key, value) {
if (Result.tb2.length > 0) {
var obj1 = Result.tb2;
for (var i = 0; i < obj1.length; i++) {
if (selected_op == obj1[i].ID) {
$('#' + ddlid).append($("<option val='" + obj1[i].ID + "' selected>" + obj1[i].CDG_NAME + "</option>"));
}
else {
$('#' + ddlid).append($("<option val='" + obj1[i].ID + "'>" + obj1[i].CDG_NAME + "</option>"));
}
}
}
},
error: function (Result) {
// alert("Error");
}
});
}*/


/*function AddDelivery_DDL(ddlid,selected_option) {
//var ele = $(ddlid);
// alert(ele);
var SBU_Id = $('#ctl00_ContentPlaceHolder1_Hdn_cluster').val();
   
$.ajax({
type: "POST",
// data: SBU_Id,
url: LoadURL + "BidDeskService.asmx/CDG_List_IBU_DDL_Client",
data:
{
SBU_Id: SBU_Id
},
async: true,
success: function (Result) {
// console.log("Result : " + JSON.stringify(Result));

alert(JSON.stringify(Result));
if (Result.tb1.length > 0) {
var obj1 = Result.tb1;
for (var i = 0; i < obj1.length; i++) {
                   
if (obj1[i].CODEVALUE == selected_option) {
$('#' + ddlid).append($("<option val='" + obj1[i].CODEVALUE + "' selected>" + obj1[i].CODEDESC + "</option>"));
}
else {

$('#' + ddlid).append($("<option val='" + obj1[i].CODEVALUE + "'>" + obj1[i].CODEDESC + "</option>"));
}
}
}


},
error: function (Result) {
//  alert("Error");
}
});
} */

/************************************************************************/

function ResetRedColorBorder() {

    $('#ctl00_ContentPlaceHolder1_txtLegalPrimary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtFinancePrimary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtEMDPrimary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtBGPrimary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtLOAPrimary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtPOAPrimary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadPri').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtSalesTeam').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtDeliveryPrimary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtCompetencyPrimary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtSBUHeadPrimary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadPrimary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtSrManagementPrimary').css('border-color', 'lightgray');

    $('#ctl00_ContentPlaceHolder1_ddlDeliveryArea').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_ddlCompetencyArea').css('border-color', 'lightgray');

    $('#ctl00_ContentPlaceHolder1_txtLegalSecondary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtFinanceSecondary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtEMDSecondary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtBGSecondary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtLOASecondary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtPOASecondary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadSec').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtSalesTeamSec').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtDeliverySecondary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtCompetencySecondary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtSBUHeadSecondary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadSecondary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtSrManagementSecondary').css('border-color', 'lightgray');


    $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadPrimary').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadSecondary').css('border-color', 'lightgray');

    $('#ctl00_ContentPlaceHolder1_txtsalesRegionalPri').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtsalesRegionalSec').css('border-color', 'lightgray');


    //--Dynamic controls 
    var ele = $('.sales_class');
    for (var i = 0; i < ele.length; i++) {
        var txtSalesManagemntLead_name = $(ele[i]).find("input[name='txtSalesManagemntLead']");
        var txtSalesManagemntLead_sec = $(ele[i]).find("input[name='txtSalesManagemntLead_sec']");
        txtSalesManagemntLead_name.css('border-color', 'lightgray');
        txtSalesManagemntLead_sec.css('border-color', 'lightgray');
    }

    var ele_SalesSpoc = $('.sales_Team_Main');
    for (var j = 0; j < ele_SalesSpoc.length; j++) {
        var txt_SalesSpoc_name = $(ele_SalesSpoc[j]).find("input[name='txtSalesTeam']");
        var txt_SalesSpoc_sec_name = $(ele_SalesSpoc[j]).find("input[name='txtSalesTeamsec']");
        txt_SalesSpoc_name.css('border-color', 'lightgray');
        txt_SalesSpoc_sec_name.css('border-color', 'lightgray');
    }

    var ele_Delivery = $('.Delivery_Ad_class_Main');
    for (var i = 0; i < ele_Delivery.length; i++) {
        var txt_Delivery_name = $(ele_Delivery[i]).find("input[name='txtDelivery']");
        var txt_Delivery_sec = $(ele_Delivery[i]).find("input[name='txtDeliverysec']");       
        txt_Delivery_name.css('border-color', 'lightgray');
        txt_Delivery_sec.css('border-color', 'lightgray');
        $('#ddlDeliveryAreaAdmin' + i * 2).css('border-color', 'lightgray');
    }

    var ele_Competency = $('.AddCompetency_class_Main');
    for (var i = 0; i < ele_Competency.length; i++) {
        var txt_ele_Competency_name = $(ele_Competency[i]).find("input[name='txtCompetency']");        
        var txt_ele_Competency_sec = $(ele_Competency[i]).find("input[name='txtCompetencysec']");
        txt_ele_Competency_name.css('border-color', 'lightgray');
        txt_ele_Competency_sec.css('border-color', 'lightgray');
        $('#ddlCompetencyAdmin' + i * 2).css('border-color', 'lightgray');
    }


    var ele_Competency = $('.AddSBUHead_class_Main');
    for (var i = 0; i < ele_Competency.length; i++) {
        var txt_ele_Competency_name = $(ele_Competency[i]).find("input[name='txtCompetency']");
        var txt_SBUHEAD_SEC = $(ele_Competency[i]).find("input[name='txtCompetencysec']");
        txt_ele_Competency_name.css('border-color', 'lightgray');
        txt_SBUHEAD_SEC.css('border-color', 'lightgray');
    }


    var ele_Competency = $('.SBUFinanceHead_class_Main');
    for (var i = 0; i < ele_Competency.length; i++) {
        var txt_ele_Competency_name = $(ele_Competency[i]).find("input[name='txtCompetency']");
        var txt_SBUFINHEAD_Sec = $(ele_Competency[i]).find("input[name='txtCompetency_sec']");
        txt_ele_Competency_name.css('border-color', 'lightgray');
        txt_SBUFINHEAD_Sec.css('border-color', 'lightgray');
    }

    var ele_Competency = $('.SrManagement_class_Main');
    for (var i = 0; i < ele_Competency.length; i++) {
        var txt_ele_Competency_name = $(ele_Competency[i]).find("input[name='txtSrManagementPri']");
        var txtSrManagemntLead_sec = $(ele_Competency[i]).find("input[name='txtSrManagementSec']");
        txt_ele_Competency_name.css('border-color', 'lightgray');
        txtSrManagemntLead_sec.css('border-color', 'lightgray');
    }

    var ele_Competency = $('.AddSBUDelHead_class_Main');
    for (var i = 0; i < ele_Competency.length; i++) {

        var txt_ele_Competency_name = $(ele_Competency[i]).find("input[name='txtCompetency']");
        var txt_SBUDelHEAD_SEC = $(ele_Competency[i]).find("input[name='txtCompetencysec']");
        txt_ele_Competency_name.css('border-color', 'lightgray');
        txt_SBUDelHEAD_SEC.css('border-color', 'lightgray');
    }

    var ele_Competency = $('.SalesRegional_class_Main ');
    for (var i = 0; i < ele_Competency.length; i++) {
        var txt_ele_Competency_name = $(ele_Competency[i]).find("input[name='txtSalesRegionalPri']");
        var txt_SBUDelHEAD_SEC = $(ele_Competency[i]).find("input[name='txtSalesRegionalSec']");
        txt_ele_Competency_name.css('border-color', 'lightgray');
        txt_SBUDelHEAD_SEC.css('border-color', 'lightgray');
    }

}


/***********on click of save the data will get**************/
function Get_dyanamicFieldData() {

    ResetRedColorBorder();
    /***************validation for the all static fields which are present on page****************************/
    /***textbox value get **********/
    var txtLegalPrimary = $('#ctl00_ContentPlaceHolder1_txtLegalPrimary').val().trim();
    var txtFinancePrimary = $('#ctl00_ContentPlaceHolder1_txtFinancePrimary').val().trim();
    var txtEMDPrimary = $('#ctl00_ContentPlaceHolder1_txtEMDPrimary').val().trim();
    var txtBGPrimary = $('#ctl00_ContentPlaceHolder1_txtBGPrimary').val().trim();
    var txtLOAPrimary = $('#ctl00_ContentPlaceHolder1_txtLOAPrimary').val().trim();
    var txtPOAPrimary = $('#ctl00_ContentPlaceHolder1_txtPOAPrimary').val().trim();
    var txtSalesManagemntLeadPri = $('#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadPri').val().trim();
    var txtSalesTeam = $('#ctl00_ContentPlaceHolder1_txtSalesTeam').val().trim();
    var txtDeliveryPrimary = $('#ctl00_ContentPlaceHolder1_txtDeliveryPrimary').val().trim();
    var txtCompetencyPrimary = $('#ctl00_ContentPlaceHolder1_txtCompetencyPrimary').val().trim();
    var txtSBUHeadPrimary = $('#ctl00_ContentPlaceHolder1_txtSBUHeadPrimary').val().trim();
    var txtSBUFinanceHeadPrimary = $('#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadPrimary').val().trim();
    var txtSrManagementPrimary = $('#ctl00_ContentPlaceHolder1_txtSrManagementPrimary').val().trim();
    var txtSBUDelHeadPrimary = $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadPrimary').val().trim();
    /***Hidden fields value get **********/

    var txtLegalPrimary_hdn = $('#ctl00_ContentPlaceHolder1_txtLegalPrimary_hdn').val().trim();
    var txtFinancePrimary_hdn = $('#ctl00_ContentPlaceHolder1_txtFinancePrimary_hdn').val().trim();
    var txtEMDPrimary_hdn = $('#ctl00_ContentPlaceHolder1_txtEMDPrimary_hdn').val().trim();
    var txtBGPrimary_hdn = $('#ctl00_ContentPlaceHolder1_txtBGPrimary_hdn').val().trim();
    var txtLOAPrimary_hdn = $('#ctl00_ContentPlaceHolder1_txtLOAPrimary_hdn').val().trim();
    var txtPOAPrimary_hdn = $('#ctl00_ContentPlaceHolder1_txtPOAPrimary_hdn').val().trim();
    var txtSalesManagemntLeadPri_hdn = $('#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadPri_hdn').val().trim();
    var txtSalesTeam_hdn = $('#ctl00_ContentPlaceHolder1_txtSalesTeam_hdn').val().trim();

    var txtDeliveryPrimary_hdn = $('#ctl00_ContentPlaceHolder1_txtDeliveryPrimary_hdn').val().trim();
    var txtCompetencyPrimary_hdn = $('#ctl00_ContentPlaceHolder1_txtCompetencyPrimary_hdn').val().trim();
    var txtSBUHeadPrimary_hdn = $('#ctl00_ContentPlaceHolder1_txtSBUHeadPrimary_hdn').val().trim();
    var txtSBUFinanceHeadPrimary_hdn = $('#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadPrimary_hdn').val().trim();
    var txtSrManagementPrimary_hdn = $('#ctl00_ContentPlaceHolder1_txtSrManagementPrimary_hdn').val().trim();

    /*************************************/
    var txtLegalPrimary_Hidden = $('#ctl00_ContentPlaceHolder1_txtLegalPrimary_hdn').val().trim();
    var txtFinancePrimary_Hidden = $('#ctl00_ContentPlaceHolder1_txtFinancePrimary_hdn').val().trim();
    var txtEMDPrimary_Hidden = $('#ctl00_ContentPlaceHolder1_txtEMDPrimary_hdn').val().trim();
    var txtBGPrimary_Hidden = $('#ctl00_ContentPlaceHolder1_txtBGPrimary_hdn').val().trim();
    var txtLOAPrimary_Hidden = $('#ctl00_ContentPlaceHolder1_txtLOAPrimary_hdn').val().trim();
    var txtPOAPrimary_Hidden = $('#ctl00_ContentPlaceHolder1_txtPOAPrimary_hdn').val().trim();
    var txtSalesManagemntLeadPri_Hidden = $('#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadPri_hdn').val().trim();
    var txtSalesTeam_Hidden = $('#ctl00_ContentPlaceHolder1_txtSalesTeam_hdn').val().trim();
    var txtDeliveryPrimary_Hidden = $('#ctl00_ContentPlaceHolder1_txtDeliveryPrimary_hdn').val().trim();
    var txtCompetencyPrimary_Hidden = $('#ctl00_ContentPlaceHolder1_txtCompetencyPrimary_hdn').val().trim();
    var txtSBUHeadPrimary_Hidden = $('#ctl00_ContentPlaceHolder1_txtSBUHeadPrimary_hdn').val().trim();
    var txtSBUFinanceHeadPrimary_Hidden = $('#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadPrimary_hdn').val().trim();
    var txtSrManagementPrimary_Hidden = $('#ctl00_ContentPlaceHolder1_txtSrManagementPrimary_hdn').val().trim();
    var txtSBUDelHeadPrimary_hdn = $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadPrimary_hdn').val().trim();
    /***Hidden fields value get **********/

    var txtLegalPrimary_hdn_Hidden = $('#ctl00_ContentPlaceHolder1_txtLegalSecondary_hdn').val().trim();
    var txtFinancePrimary_hdn_Hidden = $('#ctl00_ContentPlaceHolder1_txtFinanceSecondary_hdn').val().trim();
    var txtEMDPrimary_hdn_Hidden = $('#ctl00_ContentPlaceHolder1_txtEMDSecondary_hdn').val().trim();
    var txtBGPrimary_hdn_Hidden = $('#ctl00_ContentPlaceHolder1_txtBGSecondary_hdn').val().trim();
    var txtLOAPrimary_hdn_Hidden = $('#ctl00_ContentPlaceHolder1_txtLOASecondary_hdn').val().trim();
    var txtPOAPrimary_hdn_Hidden = $('#ctl00_ContentPlaceHolder1_txtPOASecondary_hdn').val().trim();
    var txtSalesManagemntLeadPri_hdn_Hidden = $('#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadSec_hdn').val().trim();
    var txtSalesTeam_hdn_Hidden = $('#ctl00_ContentPlaceHolder1_txtSalesTeamSec_hdn').val().trim();

    var txtDeliveryPrimary_hdn_Hidden = $('#ctl00_ContentPlaceHolder1_txtDeliverySecondary_hdn').val().trim();
    var txtCompetencyPrimary_hdn_Hidden = $('#ctl00_ContentPlaceHolder1_txtCompetencySecondary_hdn').val().trim();
    var txtSBUHeadPrimary_hdn_Hidden = $('#ctl00_ContentPlaceHolder1_txtSBUHeadSecondary_hdn').val().trim();
    var txtSBUFinanceHeadPrimary_hdn_Hidden = $('#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadSecondary_hdn').val().trim();
    var txtSrManagementPrimary_hdn_Hidden = $('#ctl00_ContentPlaceHolder1_txtSrManagementSecondary_hdn').val().trim();
    var txtSBUDelHeadPrimary_Hidden = $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadPrimary_hdn').val().trim();
    var txtSBUDelHeadPrimary_hdn_Hidden = $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadSecondary_hdn').val().trim();

    var ddl_delivery = $('#ctl00_ContentPlaceHolder1_ddlDeliveryArea').val().trim();
    var ddlCompetencyArea = $('#ctl00_ContentPlaceHolder1_ddlCompetencyArea').val().trim();

    /******************************************************************************************************************************************/
    var txtsalesRegionalPri = $('#ctl00_ContentPlaceHolder1_txtsalesRegionalPri').val().trim();
    var txtsalesRegionalSec = $('#ctl00_ContentPlaceHolder1_txtsalesRegionalSec').val().trim();

    var txtsalesRegionalPri_Hdn = $('#ctl00_ContentPlaceHolder1_txtsalesRegionalPri_hdn').val().trim();
    var txtsalesRegionalSec_Hdn = $('#ctl00_ContentPlaceHolder1_txtsalesRegionalSec_hdn').val().trim();

    //alert(ddl_delivery);
    //alert(txtLegalPrimary);
    //alert(txtLegalPrimary_hdn);

    if (txtLegalPrimary == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter Legal.");
        $('#ctl00_ContentPlaceHolder1_txtLegalPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (txtFinancePrimary == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter Finance.");
        $('#ctl00_ContentPlaceHolder1_txtFinancePrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (txtEMDPrimary == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter Earnest Money Deposit (EMD) .");
        $('#ctl00_ContentPlaceHolder1_txtEMDPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (txtBGPrimary == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter Bank Guarantee (BG).");
        $('#ctl00_ContentPlaceHolder1_txtBGPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (txtLOAPrimary == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter Letter of Authorization (LOA).");
        $('#ctl00_ContentPlaceHolder1_txtLOAPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (txtPOAPrimary == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter Power of Attorney (POA).");
        $('#ctl00_ContentPlaceHolder1_txtPOAPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (txtSalesManagemntLeadPri == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter Bid Management Lead.");
        $('#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadPri').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }

    else if (txtSalesTeam == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter Sales SPOC.");
        $('#ctl00_ContentPlaceHolder1_txtSalesTeam').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (ddl_delivery == 0) {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Delivery Area.");
        $('#ctl00_ContentPlaceHolder1_ddlDeliveryArea').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }

    else if (txtDeliveryPrimary == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter Delivery.");
        $('#ctl00_ContentPlaceHolder1_txtDeliveryPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }

    else if (ddlCompetencyArea == 0) {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Competency Area.");
        $('#ctl00_ContentPlaceHolder1_ddlCompetencyArea').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }

    else if (txtCompetencyPrimary == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter Competency.");
        $('#ctl00_ContentPlaceHolder1_txtCompetencyPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }

    else if (txtSBUHeadPrimary == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter SBU Head.");
        $('#ctl00_ContentPlaceHolder1_txtSBUHeadPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }

    else if (txtSBUFinanceHeadPrimary == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter SBU Finance Head.");
        $('#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }

    else if (txtSrManagementPrimary == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter Sr. Management.");
        $('#ctl00_ContentPlaceHolder1_txtSrManagementPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }

    else if (txtSBUDelHeadPrimary == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter SBU Delivery Head.");
        $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }

    else if (txtsalesRegionalPri == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter Sales Regional Head.");
        $('#ctl00_ContentPlaceHolder1_txtsalesRegionalPri').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }

    /*******************************************/
    else if (txtLegalPrimary != "" && txtLegalPrimary_hdn == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Legal From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtLegalPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (($("#ctl00_ContentPlaceHolder1_txtLegalSecondary").val().trim()) != "" && ($("#ctl00_ContentPlaceHolder1_txtLegalSecondary_hdn").val().trim()) == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Legal From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtLegalSecondary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (txtFinancePrimary != "" && txtFinancePrimary_hdn == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Finance From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtFinancePrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (($("#ctl00_ContentPlaceHolder1_txtFinanceSecondary").val().trim()) != "" && ($("#ctl00_ContentPlaceHolder1_txtFinanceSecondary_hdn").val().trim()) == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Finance From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtFinanceSecondary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (txtEMDPrimary != "" && txtEMDPrimary_hdn == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Earnest Money Deposit (EMD) From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtEMDPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (($("#ctl00_ContentPlaceHolder1_txtEMDSecondary").val().trim()) != "" && ($("#ctl00_ContentPlaceHolder1_txtEMDSecondary_hdn").val().trim()) == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Earnest Money Deposit (EMD) From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtEMDSecondary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (txtBGPrimary != "" && txtBGPrimary_hdn == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Bank Guarantee (BG) From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtBGPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (($("#ctl00_ContentPlaceHolder1_txtBGSecondary").val().trim()) != "" && ($("#ctl00_ContentPlaceHolder1_txtBGSecondary_hdn").val().trim()) == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Bank Guarantee (BG) From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtBGSecondary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (txtLOAPrimary != "" && txtLOAPrimary_hdn == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Letter of Authorization (LOA) From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtLOAPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (($("#ctl00_ContentPlaceHolder1_txtLOASecondary").val().trim()) != "" && ($("#ctl00_ContentPlaceHolder1_txtLOASecondary_hdn").val().trim()) == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Letter of Authorization (LOA) From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtLOASecondary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (txtPOAPrimary != "" && txtPOAPrimary_hdn == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Power of Attorney (POA) From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtPOAPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (($("#ctl00_ContentPlaceHolder1_txtPOASecondary").val().trim()) != "" && ($("#ctl00_ContentPlaceHolder1_txtPOASecondary_hdn").val().trim()) == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Power of Attorney (POA) From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtPOASecondary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (txtSalesManagemntLeadPri != "" && txtSalesManagemntLeadPri_hdn == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Bid Management Lead From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadPri').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (($("#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadSec").val().trim()) != "" && ($("#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadSec_hdn").val().trim()) == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Bid Management Lead From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadSec').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }

    else if (txtSalesTeam != "" && txtSalesTeam_hdn == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Sales SPOC From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtSalesTeam').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (($("#ctl00_ContentPlaceHolder1_txtSalesTeamSec").val().trim()) != "" && ($("#ctl00_ContentPlaceHolder1_txtSalesTeamSec_hdn").val().trim()) == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Sales SPOC From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtSalesTeamSec').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (txtDeliveryPrimary != "" && txtDeliveryPrimary_hdn == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Delivery From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtDeliveryPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (($("#ctl00_ContentPlaceHolder1_txtDeliverySecondary").val().trim()) != "" && ($("#ctl00_ContentPlaceHolder1_txtDeliverySecondary_hdn").val().trim()) == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Delivery From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtDeliverySecondary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }

    else if (txtCompetencyPrimary != "" && txtCompetencyPrimary_hdn == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Competency From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtCompetencyPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (($("#ctl00_ContentPlaceHolder1_txtCompetencySecondary").val().trim()) != "" && ($("#ctl00_ContentPlaceHolder1_txtCompetencySecondary_hdn").val().trim()) == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Competency From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtCompetencySecondary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (txtSBUHeadPrimary != "" && txtSBUHeadPrimary_hdn == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select SBU Head From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtSBUHeadPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (($("#ctl00_ContentPlaceHolder1_txtSBUHeadSecondary").val().trim()) != "" && ($("#ctl00_ContentPlaceHolder1_txtSBUHeadSecondary_hdn").val().trim()) == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select SBU Head From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtSBUHeadSecondary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (txtSBUFinanceHeadPrimary != "" && txtSBUFinanceHeadPrimary_hdn == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select SBU Finance Head From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (($("#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadSecondary").val().trim()) != "" && ($("#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadSecondary_hdn").val().trim()) == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select SBU Finance Head From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadSecondary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }

    else if (txtSrManagementPrimary != "" && txtSrManagementPrimary_hdn == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Sr. Management From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtSrManagementPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    else if (($("#ctl00_ContentPlaceHolder1_txtSrManagementSecondary").val().trim()) != "" && ($("#ctl00_ContentPlaceHolder1_txtSrManagementSecondary_hdn").val().trim()) == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Sr. Management From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtSrManagementSecondary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }

    /*****************************************************************************/

    else if (($("#ctl00_ContentPlaceHolder1_txtSBUDelHeadPrimary").val().trim()) != "" && ($("#ctl00_ContentPlaceHolder1_txtSBUDelHeadPrimary_hdn").val().trim()) == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select SBU Delivery Head From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadPrimary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }


    else if (($("#ctl00_ContentPlaceHolder1_txtSBUDelHeadSecondary").val().trim()) != "" && ($("#ctl00_ContentPlaceHolder1_txtSBUDelHeadSecondary_hdn").val().trim()) == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select SBU Delivery Head From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadSecondary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    /*****************************************************************************/

    else if (($("#ctl00_ContentPlaceHolder1_txtsalesRegionalPri").val().trim()) != "" && ($("#ctl00_ContentPlaceHolder1_txtsalesRegionalPri_hdn").val().trim()) == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Sales Regional Head From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtsalesRegionalPri').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }


    else if (($("#ctl00_ContentPlaceHolder1_txtsalesRegionalSec").val().trim()) != "" && ($("#ctl00_ContentPlaceHolder1_txtsalesRegionalSec_hdn").val().trim()) == "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Sales Regional Head From Employee Finder.");
        $('#ctl00_ContentPlaceHolder1_txtsalesRegionalSec').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }


    /********************************************************/
    else if (txtLegalPrimary_Hidden == txtLegalPrimary_hdn_Hidden && txtLegalPrimary != "" && $('#ctl00_ContentPlaceHolder1_txtLegalSecondary').val() != "") {


        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Legal Primary SPOC and Legal Secondary SPOC should be different.");
        $('#ctl00_ContentPlaceHolder1_txtLegalPrimary').css('border-color', 'red');
        $('#ctl00_ContentPlaceHolder1_txtLegalSecondary').css('border-color', 'red');
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;

    }
    else if (txtFinancePrimary_Hidden == txtFinancePrimary_hdn_Hidden && txtFinancePrimary != "" && $('#ctl00_ContentPlaceHolder1_txtFinanceSecondary').val() != "") {



        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Finance Primary SPOC and Finance Secondary SPOC should be different.");
        $('#ctl00_ContentPlaceHolder1_txtFinancePrimary').css('border-color', 'red');
        $('#ctl00_ContentPlaceHolder1_txtFinanceSecondary').css('border-color', 'red');
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;

    }
    else if (txtEMDPrimary_Hidden == txtEMDPrimary_hdn_Hidden && txtEMDPrimary != "" && $('#ctl00_ContentPlaceHolder1_txtEMDSecondary').val() != "") {



        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Earnest Money Deposit (EMD) Primary SPOC and Earnest Money Deposit (EMD) Secondary SPOC should be different.");
        $('#ctl00_ContentPlaceHolder1_txtEMDPrimary').css('border-color', 'red');
        $('#ctl00_ContentPlaceHolder1_txtEMDSecondary').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;

    }
    else if (txtBGPrimary_Hidden == txtBGPrimary_hdn_Hidden && txtBGPrimary != "" && $('#ctl00_ContentPlaceHolder1_txtBGSecondary').val() != "") {



        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Bank Guarantee (BG) Primary SPOC and Bank Guarantee (BG) Secondary SPOC should be different.");
        $('#ctl00_ContentPlaceHolder1_txtBGPrimary').css('border-color', 'red');
        $('#ctl00_ContentPlaceHolder1_txtBGSecondary').css('border-color', 'red');
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;

    }

    else if (txtLOAPrimary_Hidden == txtLOAPrimary_hdn_Hidden && txtLOAPrimary != "" && $('#ctl00_ContentPlaceHolder1_txtLOASecondary').val() != "") {



        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Letter of Authorization (LOA) Primary SPOC and Letter of Authorization (LOA) Secondary SPOC should be different.");
        $('#ctl00_ContentPlaceHolder1_txtLOAPrimary').css('border-color', 'red');
        $('#ctl00_ContentPlaceHolder1_txtLOASecondary').css('border-color', 'red');
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;

    }

    else if (txtPOAPrimary_Hidden == txtPOAPrimary_hdn_Hidden && txtPOAPrimary != "" && $('#ctl00_ContentPlaceHolder1_txtPOASecondary').val() != "") {


        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Power of Attorney (POA) Primary SPOC and Power of Attorney (POA) Secondary SPOC should be different.");
        $('#ctl00_ContentPlaceHolder1_txtPOAPrimary').css('border-color', 'red');
        $('#ctl00_ContentPlaceHolder1_txtPOASecondary').css('border-color', 'red');
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;

    }

    else if (txtSalesManagemntLeadPri_Hidden == txtSalesManagemntLeadPri_hdn_Hidden && txtSalesManagemntLeadPri != "" && $('#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadSec').val() != "") {



        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Bid Management Lead Primary SPOC and Bid Management Lead Secondary SPOC should be different.");
        $('#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadPri').css('border-color', 'red');
        $('#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadSec').css('border-color', 'red');
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;

    }

    else if (txtSalesTeam_Hidden == txtSalesTeam_hdn_Hidden && txtSalesTeam != "" && $('#ctl00_ContentPlaceHolder1_txtSalesTeamSec').val() != "") {



        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Sales SPOC Primary SPOC and Sales SPOC Secondary SPOC should be different.");
        $('#ctl00_ContentPlaceHolder1_txtSalesTeam').css('border-color', 'red');
        $('#ctl00_ContentPlaceHolder1_txtSalesTeamSec').css('border-color', 'red');
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;

    }
    else if (txtDeliveryPrimary_Hidden == txtDeliveryPrimary_hdn_Hidden && txtDeliveryPrimary != "" && $('#ctl00_ContentPlaceHolder1_txtDeliverySecondary').val() != "") {



        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Delivery Primary SPOC and Delivery Secondary SPOC should be different.");
        $('#ctl00_ContentPlaceHolder1_txtDeliveryPrimary').css('border-color', 'red');
        $('#ctl00_ContentPlaceHolder1_txtDeliverySecondary').css('border-color', 'red');
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;

    }

    else if (txtCompetencyPrimary_Hidden == txtCompetencyPrimary_hdn_Hidden && txtCompetencyPrimary != "" && $('#ctl00_ContentPlaceHolder1_txtCompetencySecondary').val() != "") {


        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Competency Primary SPOC and Competency Secondary SPOC should be different.");
        $('#ctl00_ContentPlaceHolder1_txtCompetencyPrimary').css('border-color', 'red');
        $('#ctl00_ContentPlaceHolder1_txtCompetencySecondary').css('border-color', 'red');
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;

    }
    else if (txtSBUHeadPrimary_Hidden == txtSBUHeadPrimary_hdn_Hidden && txtSBUHeadPrimary != "" && $('#ctl00_ContentPlaceHolder1_txtSBUHeadSecondary').val() != "") {


        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("SBU Head Primary SPOC and SBU Head Secondary SPOC should be different.");
        $('#ctl00_ContentPlaceHolder1_txtSBUHeadPrimary').css('border-color', 'red');
        $('#ctl00_ContentPlaceHolder1_txtSBUHeadSecondary').css('border-color', 'red');
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;

    }

    else if (txtSBUFinanceHeadPrimary_Hidden == txtSBUFinanceHeadPrimary_hdn_Hidden && txtSBUFinanceHeadPrimary != "" && $('#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadSecondary').val() != "") {

        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("SBU Finance Head Primary SPOC and SBU Finance Head Secondary SPOC should be different.");
        $('#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadPrimary').css('border-color', 'red');
        $('#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadSecondary').css('border-color', 'red');
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }

    else if (txtSrManagementPrimary_Hidden == txtSrManagementPrimary_hdn_Hidden && txtSrManagementPrimary != "" && $('#ctl00_ContentPlaceHolder1_txtSrManagementSecondary').val() != "") {
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Sr. Management Primary SPOC and Sr. Management Secondary SPOC should be different.");
        $('#ctl00_ContentPlaceHolder1_txtSrManagementPrimary').css('border-color', 'red');
        $('#ctl00_ContentPlaceHolder1_txtSrManagementSecondary').css('border-color', 'red');
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;

    }


    else if (($('#ctl00_ContentPlaceHolder1_txtSBUDelHeadPrimary_hdn').val() == $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadSecondary_hdn').val()) && $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadPrimary_hdn').val() != "" && $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadSecondary_hdn').val() != "") {


        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("SBU Delivery Head Primary SPOC and SBU Delivery Head Secondary SPOC should be different.");
        $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadPrimary').css('border-color', 'red');
        $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadSecondary').css('border-color', 'red');
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;

    }


    else if (txtsalesRegionalPri_Hdn == txtsalesRegionalSec_Hdn && txtsalesRegionalPri != "" && txtsalesRegionalSec != "") {

        $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
        $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Sales Regional Head Primary SPOC and Sales Regional Head Secondary SPOC should be different.");
        $('#ctl00_ContentPlaceHolder1_txtsalesRegionalPri').css('border-color', 'red');
        $('#ctl00_ContentPlaceHolder1_txtsalesRegionalSec').css('border-color', 'red');

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;

    }

    /********************************************************/
    else {

        /*****************get data for bid management lead purpose***************/
        var var_salesUser = "";
        var var_is_pri_sec = "P";
        var ele = $('.sales_class');


        var Array_BidMangment_lead_pri = [];
        var Array_BidMangment_lead_sec = [];
        var Array_BidManagment_lead_textbox = [];

        var Array_SalesSPOC_pri = [];
        var Array_SalesSPOC_sec = [];
        var Array_SalesSPOC_sec_textbox = [];

        var Array_Delivery_pri = [];
        var Array_Delivery_sec = [];
        var Array_Delivery_textbox = [];

        var Array_Competency_pri = [];
        var Array_Competency_sec = [];
        var Array_Competency_textbox = [];

        var Array_SBUHead_pri = [];
        var Array_SBUHead_sec = [];
        var Array_SBUHead_Textbox = [];

        var Array_SBUFinanceHead_pri = [];
        var Array_SBUFinanceHead_sec = [];
        var Array_SBUFinanceHead_textbox = [];

        var Array_SrManagement_pri = [];
        var Array_SrManagement_sec = [];
        var Array_SrManagement_textbox = [];

        var Array_SBUDelHead_pri = [];
        var Array_SBUDelHead_textbox = [];

        var Array_Sales_Regional = [];
        var Array_Sales_Regional_textbox = [];

        var Array_AllEmp = [];
        var Array_AllEmp_Textbox = [];

        /***************************************/

        /*********************************************** Priyanka Nikam (Start) ************************************/
        /************* Same Employee use multiple time validation **************************************************/



        //Multiple Roles Cannot be assigned to same Person
        /*Legal*/
        if ($.inArray(txtLegalPrimary_Hidden, Array_AllEmp) == -1) {
            Array_AllEmp.push(txtLegalPrimary_Hidden);
            Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtLegalPrimary');
        }
        else {
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
            $('#ctl00_ContentPlaceHolder1_txtLegalPrimary').css('border-color', 'red');
            /*For set red border to same employess*/
            for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtLegalPrimary_Hidden) {
                    $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                }
            }

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }
        if (txtLegalPrimary_hdn_Hidden != "" && txtLegalPrimary_hdn_Hidden != undefined) {
            if ($.inArray(txtLegalPrimary_hdn_Hidden, Array_AllEmp) == -1) {
                Array_AllEmp.push(txtLegalPrimary_hdn_Hidden);
                Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtLegalSecondary');
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                $('#ctl00_ContentPlaceHolder1_txtLegalSecondary').css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtLegalPrimary_hdn_Hidden) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
        }

        /*Finance*/
        if ($.inArray(txtFinancePrimary_Hidden, Array_AllEmp) == -1) {
            Array_AllEmp.push(txtFinancePrimary_Hidden);
            Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtFinancePrimary');
        }
        else {
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
            $('#ctl00_ContentPlaceHolder1_txtFinancePrimary').css('border-color', 'red');
            /*For set red border to same employess*/
            for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtFinancePrimary_Hidden) {
                    $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                }
            }

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }

        if (txtFinancePrimary_hdn_Hidden != "" && txtFinancePrimary_hdn_Hidden != undefined) {
            if ($.inArray(txtFinancePrimary_hdn_Hidden, Array_AllEmp) == -1) {
                Array_AllEmp.push(txtFinancePrimary_hdn_Hidden);
                Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtFinanceSecondary');
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                $('#ctl00_ContentPlaceHolder1_txtFinanceSecondary').css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtFinancePrimary_hdn_Hidden) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }
        }

        /*EMD */

        if ($.inArray(txtEMDPrimary_Hidden, Array_AllEmp) == -1) {
            Array_AllEmp.push(txtEMDPrimary_Hidden);
            Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtEMDPrimary');
        }
        else {
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
            $('#ctl00_ContentPlaceHolder1_txtEMDPrimary').css('border-color', 'red');

            /*For set red border to same employess*/
            for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtEMDPrimary_Hidden) {
                    $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                }
            }

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }
        if (txtEMDPrimary_hdn_Hidden != "" && txtEMDPrimary_hdn_Hidden != undefined) {
            if ($.inArray(txtEMDPrimary_hdn_Hidden, Array_AllEmp) == -1) {
                Array_AllEmp.push(txtEMDPrimary_hdn_Hidden);
                Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtEMDSecondary');
            }
            else {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                $('#ctl00_ContentPlaceHolder1_txtEMDSecondary').css('border-color', 'red');

                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtEMDPrimary_hdn_Hidden) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
        }

        /*BG*/

        if ($.inArray(txtBGPrimary_Hidden, Array_AllEmp) == -1) {
            Array_AllEmp.push(txtBGPrimary_Hidden);
            Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtBGPrimary');
        }
        else {
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
            $('#ctl00_ContentPlaceHolder1_txtBGPrimary').css('border-color', 'red');
            /*For set red border to same employess*/
            for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtBGPrimary_Hidden) {
                    $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                }
            }

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }
        if (txtBGPrimary_hdn_Hidden != "" && txtBGPrimary_hdn_Hidden != undefined) {
            if ($.inArray(txtBGPrimary_hdn_Hidden, Array_AllEmp) == -1) {
                Array_AllEmp.push(txtBGPrimary_hdn_Hidden);
                Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtBGSecondary');
            }
            else {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                $('#ctl00_ContentPlaceHolder1_txtBGSecondary').css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtBGPrimary_hdn_Hidden) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
        }

        /*LOA*/

        if ($.inArray(txtLOAPrimary_Hidden, Array_AllEmp) == -1) {
            Array_AllEmp.push(txtLOAPrimary_Hidden);
            Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtLOAPrimary');
        }
        else {
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
            $('#ctl00_ContentPlaceHolder1_txtLOAPrimary').css('border-color', 'red');
            /*For set red border to same employess*/
            for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtLOAPrimary_Hidden) {
                    $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                }
            }

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }
        if (txtLOAPrimary_hdn_Hidden != "" && txtLOAPrimary_hdn_Hidden != undefined) {
            if ($.inArray(txtLOAPrimary_hdn_Hidden, Array_AllEmp) == -1) {
                Array_AllEmp.push(txtLOAPrimary_hdn_Hidden);
                Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtLOASecondary');
            }
            else {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                $('#ctl00_ContentPlaceHolder1_txtLOASecondary').css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtLOAPrimary_hdn_Hidden) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
        }

        /*POA*/

        if ($.inArray(txtPOAPrimary_Hidden, Array_AllEmp) == -1) {
            Array_AllEmp.push(txtPOAPrimary_Hidden);
            Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtPOAPrimary');
        }
        else {
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
            $('#ctl00_ContentPlaceHolder1_txtPOAPrimary').css('border-color', 'red');
            /*For set red border to same employess*/
            for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtPOAPrimary_Hidden) {
                    $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                }
            }

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }
        if (txtPOAPrimary_hdn_Hidden != "" && txtPOAPrimary_hdn_Hidden != undefined) {
            if ($.inArray(txtPOAPrimary_hdn_Hidden, Array_AllEmp) == -1) {
                Array_AllEmp.push(txtPOAPrimary_hdn_Hidden);
                Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtPOASecondary');
            }
            else {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                $('#ctl00_ContentPlaceHolder1_txtPOASecondary').css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtPOAPrimary_hdn_Hidden) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
        }
        /* Bid Management Lead - Server Side control*/
        if ($.inArray(txtSalesManagemntLeadPri_Hidden, Array_AllEmp) == -1) {
            Array_AllEmp.push(txtSalesManagemntLeadPri_Hidden);
            Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtSalesManagemntLeadPri');
        }
        else {

            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
            $('#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadPri').css('border-color', 'red');
            /*For set red border to same employess*/
            for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtSalesManagemntLeadPri_Hidden) {
                    $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                }
            }
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }
        if (txtSalesManagemntLeadPri_hdn_Hidden != "" && txtSalesManagemntLeadPri_hdn_Hidden != undefined) {
            if ($.inArray(txtSalesManagemntLeadPri_hdn_Hidden, Array_AllEmp) == -1) {
                Array_AllEmp.push(txtSalesManagemntLeadPri_hdn_Hidden);
                Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtSalesManagemntLeadSec');
            }
            else {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                $('#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadSec').css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtSalesManagemntLeadPri_hdn_Hidden) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                    }
                }
                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
        }
        /*Sales Spoc -Server Side control*/
        if ($.inArray(txtSalesTeam_Hidden, Array_AllEmp) == -1) {
            Array_AllEmp.push(txtSalesTeam_Hidden);
            Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtSalesTeam');
        }
        else {
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
            $('#ctl00_ContentPlaceHolder1_txtSalesTeam').css('border-color', 'red');
            /*For set red border to same employess*/
            for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtSalesTeam_Hidden) {
                    $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                }
            }

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }
        if (txtSalesTeam_hdn_Hidden != "" && txtSalesTeam_hdn_Hidden != undefined) {
            if ($.inArray(txtSalesTeam_hdn_Hidden, Array_AllEmp) == -1) {
                Array_AllEmp.push(txtSalesTeam_hdn_Hidden);
                Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtSalesTeamSec');
            }
            else {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                $('#ctl00_ContentPlaceHolder1_txtSalesTeamSec').css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtSalesTeam_hdn_Hidden) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
        }

        /*Delivery - Server Side control*/
        if ($.inArray(txtDeliveryPrimary_Hidden, Array_AllEmp) == -1) {
            Array_AllEmp.push(txtDeliveryPrimary_Hidden);
            Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtDeliveryPrimary');
        }
        else {
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
            $('#ctl00_ContentPlaceHolder1_txtDeliveryPrimary').css('border-color', 'red');
            /*For set red border to same employess*/
            for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtDeliveryPrimary_Hidden) {
                    $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                }
            }

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }
        if (txtDeliveryPrimary_hdn_Hidden != "" && txtDeliveryPrimary_hdn_Hidden != undefined) {
            if ($.inArray(txtDeliveryPrimary_hdn_Hidden, Array_AllEmp) == -1) {
                Array_AllEmp.push(txtDeliveryPrimary_hdn_Hidden);
                Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtDeliverySecondary');
            }
            else {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                $('#ctl00_ContentPlaceHolder1_txtDeliverySecondary').css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtDeliveryPrimary_hdn_Hidden) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
        }

        /*competency -Server Side control*/
        if ($.inArray(txtCompetencyPrimary_Hidden, Array_AllEmp) == -1) {
            Array_AllEmp.push(txtCompetencyPrimary_Hidden);
            Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtCompetencyPrimary');
        }
        else {
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
            $('#ctl00_ContentPlaceHolder1_txtCompetencyPrimary').css('border-color', 'red');
            /*For set red border to same employess*/
            for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtCompetencyPrimary_Hidden) {
                    $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                }
            }

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }
        if (txtCompetencyPrimary_hdn_Hidden != "" && txtCompetencyPrimary_hdn_Hidden != undefined) {
            if ($.inArray(txtCompetencyPrimary_hdn_Hidden, Array_AllEmp) == -1) {
                Array_AllEmp.push(txtCompetencyPrimary_hdn_Hidden);
                Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtCompetencySecondary');
            }
            else {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                $('#ctl00_ContentPlaceHolder1_txtCompetencySecondary').css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtCompetencyPrimary_hdn_Hidden) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
        }

        /*SBU Head - Server Side control*/
        if ($.inArray(txtSBUHeadPrimary_Hidden, Array_AllEmp) == -1) {
            Array_AllEmp.push(txtSBUHeadPrimary_Hidden);
            Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtSBUHeadPrimary');
        }
        else {
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
            $('#ctl00_ContentPlaceHolder1_txtSBUHeadPrimary').css('border-color', 'red');
            /*For set red border to same employess*/
            for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtSBUHeadPrimary_Hidden) {
                    $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                }
            }

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }
        if (txtSBUHeadPrimary_hdn_Hidden != "" && txtSBUHeadPrimary_hdn_Hidden != undefined) {
            if ($.inArray(txtSBUHeadPrimary_hdn_Hidden, Array_AllEmp) == -1) {
                Array_AllEmp.push(txtSBUHeadPrimary_hdn_Hidden);
                Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtSBUHeadSecondary');
            }
            else {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                $('#ctl00_ContentPlaceHolder1_txtSBUHeadSecondary').css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtSBUHeadPrimary_hdn_Hidden) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
        }

        /*SBU Finance Head - Server Side control*/
        if ($.inArray(txtSBUFinanceHeadPrimary_Hidden, Array_AllEmp) == -1) {
            Array_AllEmp.push(txtSBUFinanceHeadPrimary_Hidden);
            Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtSBUFinanceHeadPrimary');
        }
        else {
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
            $('#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadPrimary').css('border-color', 'red');
            /*For set red border to same employess*/
            for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtSBUFinanceHeadPrimary_Hidden) {
                    $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                }
            }

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }
        if (txtSBUFinanceHeadPrimary_hdn_Hidden != "" && txtSBUFinanceHeadPrimary_hdn_Hidden != undefined) {
            if ($.inArray(txtSBUFinanceHeadPrimary_hdn_Hidden, Array_AllEmp) == -1) {
                Array_AllEmp.push(txtSBUFinanceHeadPrimary_hdn_Hidden);
                Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtSBUFinanceHeadSecondary');
            }
            else {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                $('#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadSecondary').css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtSBUFinanceHeadPrimary_hdn_Hidden) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
        }

        /*Sr Management - Server Side control*/
        if ($.inArray(txtSrManagementPrimary_Hidden, Array_AllEmp) == -1) {
            Array_AllEmp.push(txtSrManagementPrimary_Hidden);
            Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtSrManagementPrimary');
        }
        else {
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
            $('#ctl00_ContentPlaceHolder1_txtSrManagementPrimary').css('border-color', 'red');
            /*For set red border to same employess*/
            for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtSrManagementPrimary_Hidden) {
                    $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                }
            }

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }
        if (txtSrManagementPrimary_hdn_Hidden != "" && txtSrManagementPrimary_hdn_Hidden != undefined) {
            if ($.inArray(txtSrManagementPrimary_hdn_Hidden, Array_AllEmp) == -1) {
                Array_AllEmp.push(txtSrManagementPrimary_hdn_Hidden);
                Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtSrManagementSecondary');
            }
            else {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                $('#ctl00_ContentPlaceHolder1_txtSrManagementSecondary').css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtSrManagementPrimary_hdn_Hidden) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
        }

        /*SBU Delivery Head - Server Side control*/
        if ($.inArray(txtSBUDelHeadPrimary_Hidden, Array_AllEmp) == -1) {
            Array_AllEmp.push(txtSBUDelHeadPrimary_Hidden);
            Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtSBUDelHeadPrimary');
        }
        else {
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
            $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadPrimary').css('border-color', 'red');
            /*For set red border to same employess*/
            for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == txtSBUDelHeadPrimary_Hidden) {
                    $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                }
            }
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }
        if ($('#ctl00_ContentPlaceHolder1_txtSBUDelHeadSecondary_hdn').val() != "" && $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadSecondary_hdn').val() != undefined) {
            if ($.inArray($('#ctl00_ContentPlaceHolder1_txtSBUDelHeadSecondary_hdn').val(), Array_AllEmp) == -1) {
                Array_AllEmp.push($('#ctl00_ContentPlaceHolder1_txtSBUDelHeadSecondary_hdn').val());
                Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtSBUDelHeadSecondary');
            }
            else {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadSecondary').css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadSecondary_hdn').val()) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
        }


        /*Sales Regional Head - Server Side control*/
        if ($.inArray($('#ctl00_ContentPlaceHolder1_txtsalesRegionalPri_hdn').val(), Array_AllEmp) == -1) {
            Array_AllEmp.push($('#ctl00_ContentPlaceHolder1_txtsalesRegionalPri_hdn').val());
            Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtsalesRegionalPri');
        }
        else {
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
            $('#ctl00_ContentPlaceHolder1_txtsalesRegionalPri').css('border-color', 'red');
            /*For set red border to same employess*/
            for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == $('#ctl00_ContentPlaceHolder1_txtsalesRegionalPri_hdn').val()) {
                    $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                }
            }

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }
        if ($('#ctl00_ContentPlaceHolder1_txtsalesRegionalSec_hdn').val() != "" && $('#ctl00_ContentPlaceHolder1_txtsalesRegionalSec_hdn').val() != undefined) {
            if ($.inArray($('#ctl00_ContentPlaceHolder1_txtsalesRegionalSec_hdn').val(), Array_AllEmp) == -1) {
                Array_AllEmp.push($('#ctl00_ContentPlaceHolder1_txtsalesRegionalSec_hdn').val());
                Array_AllEmp_Textbox.push('ctl00_ContentPlaceHolder1_txtsalesRegionalSec');
            }
            else {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                $('#ctl00_ContentPlaceHolder1_txtsalesRegionalSec').css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == $('#ctl00_ContentPlaceHolder1_txtsalesRegionalSec_hdn').val()) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
        }

        /*******Priyanka Nikam (End)*******************************************************************************/


        //bid managment lead static fields validaton on non-static textbox purpose.


        var val_bid_mng_lead_pri = $('#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadPri_hdn').val();
        var val_bid_mng_lead_sec = $('#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadSec_hdn').val();

        if ($.inArray(val_bid_mng_lead_pri, Array_BidMangment_lead_pri) == -1) {
            Array_BidMangment_lead_pri.push(val_bid_mng_lead_pri);
            Array_BidManagment_lead_textbox.push('ctl00_ContentPlaceHolder1_txtSalesManagemntLeadPri');
        }
        else {

            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Bid Management Lead SPOC assigned same Employee multiple times.");
            $('#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadPri').css('border-color', 'red');

            /*For set red border to same employess Bid Management*/
            for (var k = 0; k < Array_BidManagment_lead_textbox.length; k++) {
                if ($('#' + Array_BidManagment_lead_textbox[k] + '_hdn').val() == val_bid_mng_lead_pri) {
                    $('#' + Array_BidManagment_lead_textbox[k]).css('border-color', 'red');
                    break;
                }
            }
            /***************************************************/

            $("html, body").animate({
                scrollTop: 0
            }, 600);

            return false;
        }
        if (val_bid_mng_lead_sec != "" && val_bid_mng_lead_sec != undefined) {
            if ($.inArray(val_bid_mng_lead_sec, Array_BidMangment_lead_pri) == -1) {
                Array_BidMangment_lead_pri.push(val_bid_mng_lead_sec);
                Array_BidManagment_lead_textbox.push('ctl00_ContentPlaceHolder1_txtSalesManagemntLeadSec');
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Bid Management Lead SPOC assigned same Employee multiple times.");
                $('#ctl00_ContentPlaceHolder1_txtSalesManagemntLeadSec').css('border-color', 'red');

                /*For set red border to same employess Bid Management*/
                for (var k = 0; k < Array_BidManagment_lead_textbox.length; k++) {
                    if ($('#' + Array_BidManagment_lead_textbox[k] + '_hdn').val() == val_bid_mng_lead_sec) {
                        $('#' + Array_BidManagment_lead_textbox[k]).css('border-color', 'red');
                        break;
                    }
                }
                /***************************************************/

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }
        }

        for (var i = 0; i < ele.length; i++) {

            var txtSalesManagemntLead_name = $(ele[i]).find("input[name='txtSalesManagemntLead']");
            // alert($(txtSalesManagemntLead_name).attr('id'));

            var txtSalesManagemntLead_sec = $(ele[i]).find("input[name='txtSalesManagemntLead_sec']");
            var var_emp_id = $(ele[i]).find("input[name='emp_id']");
            var V_org_emp_id = $(ele[i]).find("input[name='org_emp_id']");
            var V_secondary = $(ele[i]).find("input[name='emp_id_sec']");

            /***********validation for bid management lead purpose********/

            txtSalesManagemntLead_name.css('border-color', 'lightgray');
            txtSalesManagemntLead_sec.css('border-color', 'lightgray');

            if (var_emp_id.val() == "" || var_emp_id.val() == undefined) {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Bid Management Lead from Employee Finder.");
                txtSalesManagemntLead_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            if (txtSalesManagemntLead_name.val() == "" && var_emp_id.val() != "") {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter Bid Management Lead.");
                txtSalesManagemntLead_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
            if (txtSalesManagemntLead_name.val() != "" && var_emp_id.val() == "") {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Bid Management Lead from Employee Finder.");
                txtSalesManagemntLead_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
            if ((txtSalesManagemntLead_sec.val() == "" || txtSalesManagemntLead_sec.val() == undefined) && V_secondary.val() != "") {             //Priyanka 
                V_secondary.val('');
            }
            else if (txtSalesManagemntLead_sec.val() != "" && V_secondary.val() == "") {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Bid Management Lead from Employee Finder.");
                txtSalesManagemntLead_sec.css('border-color', 'red');



                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }


            /*******************************************************************/
            //validation for bid management lead.Same user can not insert multiple-times


            if ($.inArray(var_emp_id.val(), Array_BidMangment_lead_pri) == -1) {
                Array_BidMangment_lead_pri.push(var_emp_id.val());
                Array_BidManagment_lead_textbox.push($(txtSalesManagemntLead_name).attr('id'));
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Bid Management Lead SPOC assigned same Employee multiple times.");
                txtSalesManagemntLead_name.css('border-color', 'red');

                /*For set red border to same employess Bid Management*/
                for (var k = 0; k < Array_BidManagment_lead_textbox.length; k++) {
                    if ($('#' + Array_BidManagment_lead_textbox[k] + '_hdn').val() == var_emp_id.val()) {
                        $('#' + Array_BidManagment_lead_textbox[k]).css('border-color', 'red');
                        break;
                    }
                }
                /***************************************************/
                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }
            if (V_secondary.val() != "" && V_secondary.val() != undefined) {
                if ($.inArray(V_secondary.val(), Array_BidMangment_lead_pri) == -1) {
                    Array_BidMangment_lead_pri.push(V_secondary.val());
                    Array_BidManagment_lead_textbox.push($(txtSalesManagemntLead_sec).attr('id'));
                }
                else {

                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Bid Management Lead SPOC assigned same Employee multiple times.");
                    txtSalesManagemntLead_sec.css('border-color', 'red');

                    /*For set red border to same employess*/
                    for (var k = 0; k < Array_BidManagment_lead_textbox.length; k++) {
                        if ($('#' + Array_BidManagment_lead_textbox[k] + '_hdn').val() == V_secondary.val()) {
                            $('#' + Array_BidManagment_lead_textbox[k]).css('border-color', 'red');
                            break;
                        }
                    }
                    /***************************************************/

                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);

                    return false;
                }
            }
            /*************************multiple role same emp************/
            /**PRIMARY**/
            if ($.inArray(var_emp_id.val(), Array_AllEmp) == -1) {
                Array_AllEmp.push(var_emp_id.val());
                Array_AllEmp_Textbox.push($(txtSalesManagemntLead_name).attr('id'));
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                txtSalesManagemntLead_name.css('border-color', 'red');

                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val() == var_emp_id.val()) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

            /**SECONDARY**/
            if (V_secondary.val() != "" && V_secondary.val() != undefined) {
                if ($.inArray(V_secondary.val(), Array_AllEmp) == -1) {
                    Array_AllEmp.push(V_secondary.val());
                    Array_AllEmp_Textbox.push($(txtSalesManagemntLead_sec).attr('id'));
                }
                else {

                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                    txtSalesManagemntLead_sec.css('border-color', 'red');

                    /*For set red border to same employess*/
                    for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                        if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val() == V_secondary.val()) {
                            $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                            break;
                        }
                    }

                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);

                    return false;
                }
            }


            /***********************************************/
            if (var_emp_id.val() != "" && var_emp_id.val() != undefined) {

                var_salesUser += "UNIT_ID" + "^@|" + 1 + "#" + "ROLE_ID" + "^@|" + 70 + "#" + "AREA" + "^@|" + "" + "#" + "EMPLOYEE_ID" + "^@|" + var_emp_id.val() + "#" + "IS_PRI_SEC" + "^@|" + "P" + "#" + "PRI_EMP" + "^@|" + "" + "$$";
            }
            var_salesUser += "UNIT_ID" + "^@|" + 1 + "#" + "ROLE_ID" + "^@|" + 70 + "#" + "AREA" + "^@|" + "" + "#" + "EMPLOYEE_ID" + "^@|" + V_secondary.val() + "#" + "IS_PRI_SEC" + "^@|" + "S" + "#" + "PRI_EMP" + "^@|" + var_emp_id.val() + "$$";

        }

        document.getElementById('ctl00_ContentPlaceHolder1_hdn_sales_Lead_Dynamic').value = var_salesUser;

        /*************************************************get data for Sales Spoc******************************************************/
        var var_salesUser_SalesSpoc = "";
        var var_is_pri_sec_SalesSpoc = "P";
        var ele_SalesSpoc = $('.sales_Team_Main');


        //validation check the static validation push in array and check with this non-static field.
        var val_SalesTeam_pri_hdn = $('#ctl00_ContentPlaceHolder1_txtSalesTeam_hdn').val();
        var val_SalesTeam_sec_hdn = $('#ctl00_ContentPlaceHolder1_txtSalesTeamSec_hdn').val();

        if ($.inArray(val_SalesTeam_pri_hdn, Array_SalesSPOC_pri) == -1) {
            Array_SalesSPOC_pri.push(val_SalesTeam_pri_hdn);
            Array_SalesSPOC_sec_textbox.push('ctl00_ContentPlaceHolder1_txtSalesTeam');
        }
        else {

            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Sales SPOC assigned same Employee multiple times.");
            $('#ctl00_ContentPlaceHolder1_txtSalesTeam').css('border-color', 'red');
            /*For set red border to same employess in Sales Spoc*/
            for (var k = 0; k < Array_SalesSPOC_sec_textbox.length; k++) {
                if ($('#' + Array_SalesSPOC_sec_textbox[k] + '_hdn').val() == val_SalesTeam_pri_hdn.val()) {
                    $('#' + Array_SalesSPOC_sec_textbox[k]).css('border-color', 'red');
                    break;
                }
            }
            /*****************************************/
            $("html, body").animate({
                scrollTop: 0
            }, 600);

            return false;
        }
        if (val_SalesTeam_sec_hdn != "" && val_SalesTeam_sec_hdn != undefined) {
            if ($.inArray(val_SalesTeam_sec_hdn, Array_SalesSPOC_pri) == -1) {
                Array_SalesSPOC_pri.push(val_SalesTeam_sec_hdn);
                Array_SalesSPOC_sec_textbox.push('ctl00_ContentPlaceHolder1_txtSalesTeamSec');
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Sales SPOC assigned same Employee multiple times.");
                $('#ctl00_ContentPlaceHolder1_txtSalesTeamSec').css('border-color', 'red');
                /*For set red border to same employess in Sales Spoc*/
                for (var k = 0; k < Array_SalesSPOC_sec_textbox.length; k++) {
                    if ($('#' + Array_SalesSPOC_sec_textbox[k] + '_hdn').val() == val_SalesTeam_sec_hdn.val()) {
                        $('#' + Array_SalesSPOC_sec_textbox[k]).css('border-color', 'red');
                        break;
                    }
                }
                /*****************************************/

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }
        }

        /*************************************************/


        for (var j = 0; j < ele_SalesSpoc.length; j++) {

            var txt_SalesSpoc_name = $(ele_SalesSpoc[j]).find("input[name='txtSalesTeam']");

            var txt_SalesSpoc_sec_name = $(ele_SalesSpoc[j]).find("input[name='txtSalesTeamsec']");

            var var_emp_id_SalesSpoc = $(ele_SalesSpoc[j]).find("input[name='emp_id']");
            var V_org_emp_id_SalesSpoc = $(ele_SalesSpoc[j]).find("input[name='org_emp_id']");
            var V_secondary_SalesSpoc = $(ele_SalesSpoc[j]).find("input[name='emp_idTeamSec']");


            txt_SalesSpoc_name.css('border-color', 'lightgray');
            txt_SalesSpoc_sec_name.css('border-color', 'lightgray');
            /***********validation for Sales Spoc purpose********/

            if (var_emp_id_SalesSpoc.val() == "" || var_emp_id_SalesSpoc.val() == undefined) {


                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Sales SPOC from Employee Finder.");
                txt_SalesSpoc_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            if (txt_SalesSpoc_name.val() == "" && var_emp_id_SalesSpoc.val() != "") {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter Sales SPOC.");
                txt_SalesSpoc_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            if (txt_SalesSpoc_name.val() != "" && var_emp_id_SalesSpoc.val() == "") {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Sales SPOC from Employee Finder.");
                txt_SalesSpoc_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }


            if ((txt_SalesSpoc_sec_name.val() == "" || txt_SalesSpoc_sec_name.val() == undefined) && V_secondary_SalesSpoc.val() != "") {

                V_secondary_SalesSpoc.val('');
            }
            else if (txt_SalesSpoc_sec_name.val() != "" && V_secondary_SalesSpoc.val() == "") {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Sales SPOC from Employee Finder.");
                txt_SalesSpoc_sec_name.css('border-color', 'red');
                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }


            /*******************************************************************/
            //validation for same employess in Sales Spoc 
            if ($.inArray(var_emp_id_SalesSpoc.val(), Array_SalesSPOC_pri) == -1) {
                Array_SalesSPOC_pri.push(var_emp_id_SalesSpoc.val());
                Array_SalesSPOC_sec_textbox.push($(txt_SalesSpoc_name).attr('id'));
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Sales SPOC assigned same Employee multiple times.");
                txt_SalesSpoc_name.css('border-color', 'red');
                /*For set red border to same employess in Sales Spoc*/
                for (var k = 0; k < Array_SalesSPOC_sec_textbox.length; k++) {
                    if ($('#' + Array_SalesSPOC_sec_textbox[k] + '_hdn').val() == var_emp_id_SalesSpoc.val()) {
                        $('#' + Array_SalesSPOC_sec_textbox[k]).css('border-color', 'red');
                        break;
                    }
                }
                /*****************************************/

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

            if (V_secondary_SalesSpoc.val() != "" && V_secondary_SalesSpoc.val() != undefined) {

                if ($.inArray(V_secondary_SalesSpoc.val(), Array_SalesSPOC_pri) == -1) {
                    Array_SalesSPOC_pri.push(V_secondary_SalesSpoc.val());
                    Array_SalesSPOC_sec_textbox.push($(txt_SalesSpoc_sec_name).attr('id'));
                }
                else {

                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Sales SPOC assigned same Employee multiple times.");
                    txt_SalesSpoc_sec_name.css('border-color', 'red');
                    /*For set red border to same employess in Sales Spoc*/
                    for (var k = 0; k < Array_SalesSPOC_sec_textbox.length; k++) {
                        if ($('#' + Array_SalesSPOC_sec_textbox[k] + '_hdn').val() == V_secondary_SalesSpoc.val()) {
                            $('#' + Array_SalesSPOC_sec_textbox[k]).css('border-color', 'red');
                            break;
                        }
                    }
                    /*****************************************/

                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);

                    return false;
                }
            }

            /*********************************************************************************/
            if ($.inArray(var_emp_id_SalesSpoc.val(), Array_AllEmp) == -1) {
                Array_AllEmp.push(var_emp_id_SalesSpoc.val());
                Array_AllEmp_Textbox.push($(txt_SalesSpoc_name).attr('id'));

            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                txt_SalesSpoc_name.css('border-color', 'red');

                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val() == var_emp_id_SalesSpoc.val()) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

            if (V_secondary_SalesSpoc.val() != "" && V_secondary_SalesSpoc.val() != undefined) {

                if ($.inArray(V_secondary_SalesSpoc.val(), Array_AllEmp) == -1) {
                    Array_AllEmp.push(V_secondary_SalesSpoc.val());
                    Array_AllEmp_Textbox.push($(txt_SalesSpoc_sec_name).attr('id'));
                }
                else {

                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                    txt_SalesSpoc_sec_name.css('border-color', 'red');
                    /*For set red border to same employess*/
                    for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                        if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val() == V_secondary_SalesSpoc.val()) {
                            $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                            break;
                        }
                    }

                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);

                    return false;
                }
            }


            /***********************************************/

            if (var_emp_id_SalesSpoc.val() != "" && var_emp_id_SalesSpoc.val() != undefined) {

                var_salesUser_SalesSpoc += "UNIT_ID" + "^@|" + 1 + "#" + "ROLE_ID" + "^@|" + 69 + "#" + "AREA" + "^@|" + "" + "#" + "EMPLOYEE_ID" + "^@|" + var_emp_id_SalesSpoc.val() + "#" + "IS_PRI_SEC" + "^@|" + "P" + "#" + "PRI_EMP" + "^@|" + "" + "$$";
            }
            //if (V_secondary_SalesSpoc.val() != "" && V_secondary_SalesSpoc.val() != undefined) {

            var_salesUser_SalesSpoc += "UNIT_ID" + "^@|" + 1 + "#" + "ROLE_ID" + "^@|" + 69 + "#" + "AREA" + "^@|" + "" + "#" + "EMPLOYEE_ID" + "^@|" + V_secondary_SalesSpoc.val() + "#" + "IS_PRI_SEC" + "^@|" + "S" + "#" + "PRI_EMP" + "^@|" + var_emp_id_SalesSpoc.val() + "$$";
            //}

        }
        document.getElementById('ctl00_ContentPlaceHolder1_hdn_sales_spoc_Dynamic').value = var_salesUser_SalesSpoc;





        /***************************************************get data for Delivery************************************************/

        var var_salesUser_Delivery = "";
        var var_is_pri_sec_Delivery = "P";
        var ele_Delivery = $('.Delivery_Ad_class_Main');


        //validation check the static validation push in array and check with this non-static field.
        var val_DeliveryPrimary_pri_hdn = $('#ctl00_ContentPlaceHolder1_txtDeliveryPrimary_hdn').val();
        var val_DeliverySecondary_hdn = $('#ctl00_ContentPlaceHolder1_txtDeliverySecondary_hdn').val();


        if ($.inArray(val_DeliveryPrimary_pri_hdn, Array_Delivery_pri) == -1) {
            Array_Delivery_pri.push(val_DeliveryPrimary_pri_hdn);
            Array_Delivery_textbox.push('ctl00_ContentPlaceHolder1_txtDeliveryPrimary');
        }
        else {

            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Delivery assigned same Employee multiple times.");
            $('#ctl00_ContentPlaceHolder1_txtDeliveryPrimary').css('border-color', 'red');
            /*For set red border to same employess in Delivery*/
            for (var k = 0; k < Array_Delivery_textbox.length; k++) {
                if ($('#' + Array_Delivery_textbox[k] + '_hdn').val().trim() == val_DeliveryPrimary_pri_hdn) {
                    $('#' + Array_Delivery_textbox[k]).css('border-color', 'red');
                    break;
                }
            }

            $("html, body").animate({
                scrollTop: 0
            }, 600);

            return false;
        }
        if (val_DeliverySecondary_hdn != "" && val_DeliverySecondary_hdn != undefined) {
            if ($.inArray(val_DeliverySecondary_hdn, Array_Delivery_pri) == -1) {
                Array_Delivery_pri.push(val_DeliverySecondary_hdn);
                Array_Delivery_textbox.push('ctl00_ContentPlaceHolder1_txtDeliverySecondary');
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Delivery assigned same Employee multiple times.");
                $('#ctl00_ContentPlaceHolder1_txtDeliverySecondary').css('border-color', 'red');

                /*For set red border to same employess in Delivery*/
                for (var k = 0; k < Array_Delivery_textbox.length; k++) {
                    if ($('#' + Array_Delivery_textbox[k] + '_hdn').val().trim() == val_DeliverySecondary_hdn) {
                        $('#' + Array_Delivery_textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

        }


        for (var i = 0; i < ele_Delivery.length; i++) {

            var txt_Delivery_name = $(ele_Delivery[i]).find("input[name='txtDelivery']");
            var var_emp_id_Delivery = $(ele_Delivery[i]).find("input[name='emp_id']");
            var V_org_emp_id_Delivery = $(ele_Delivery[i]).find("input[name='org_emp_id']");
            var V_secondary_Delivery = $(ele_Delivery[i]).find("input[name='emp_idDeliverySec']");

            var v_drop_down = $("#ddlDeliveryAreaAdmin" + i * 2 + " option:selected").val();



            var txt_Delivery_sec = $(ele_Delivery[i]).find("input[name='txtDeliverysec']");

            /***********validation for Sales Spoc purpose********/
            txt_Delivery_name.css('border-color', 'lightgray');
            txt_Delivery_sec.css('border-color', 'lightgray');

            $('#ddlDeliveryAreaAdmin' + i * 2).css('border-color', 'lightgray');


            if (v_drop_down == 0) {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Delivery Area.");

                $('#ddlDeliveryAreaAdmin' + i * 2).css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            if (var_emp_id_Delivery.val() == "" || var_emp_id_Delivery.val() == undefined) {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Delivery from Employee Finder.");
                txt_Delivery_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            if (txt_Delivery_name.val() == "" && var_emp_id_Delivery.val() != "") {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter Delivery .");
                txt_Delivery_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }


            if (txt_Delivery_name.val() != "" && var_emp_id_Delivery.val() == "") {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Delivery from Employee Finder.");
                txt_Delivery_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
            if (txt_Delivery_sec.val() == "" && V_secondary_Delivery.val() != "") {           //Priyanka 2-Aug-2017

                V_secondary_Delivery.val('');
            }
            else if (txt_Delivery_sec.val() != "" && V_secondary_Delivery.val() == "") {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Delivery from Employee Finder.");
                txt_Delivery_sec.css('border-color', 'red');
                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            /*******************************************************************/
            //validation for same employee in delivery 
            if ($.inArray(var_emp_id_Delivery.val(), Array_Delivery_pri) == -1) {
                Array_Delivery_pri.push(var_emp_id_Delivery.val());
                Array_Delivery_textbox.push($(txt_Delivery_name).attr('id'));
            }
            else {
                // alert('1pri');
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Delivery assigned same Employee multiple times.");
                txt_Delivery_name.css('border-color', 'red');
                /*For set red border to same employess in Deleivery*/
                for (var k = 0; k < Array_Delivery_textbox.length; k++) {
                    if ($('#' + Array_Delivery_textbox[k] + '_hdn').val().trim() == var_emp_id_Delivery.val()) {
                        $('#' + Array_Delivery_textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

            if (V_secondary_Delivery.val() != "" && V_secondary_Delivery.val() != undefined) {
                if ($.inArray(V_secondary_Delivery.val(), Array_Delivery_pri) == -1) {
                    Array_Delivery_pri.push(V_secondary_Delivery.val());
                    Array_Delivery_textbox.push($(txt_Delivery_sec).attr('id'));
                }
                else {
                    //alert('1sec');
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Delivery assigned same Employee multiple times.");
                    txt_Delivery_sec.css('border-color', 'red');
                    /*For set red border to same employess in Deleivery*/
                    for (var k = 0; k < Array_Delivery_textbox.length; k++) {
                        if ($('#' + Array_Delivery_textbox[k] + '_hdn').val().trim() == V_secondary_Delivery.val()) {
                            $('#' + Array_Delivery_textbox[k]).css('border-color', 'red');
                            break;
                        }
                    }

                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);

                    return false;
                }
            }
            /*****************************************************************************/
            if ($.inArray(var_emp_id_Delivery.val(), Array_AllEmp) == -1) {
                Array_AllEmp.push(var_emp_id_Delivery.val());
                Array_AllEmp_Textbox.push($(txt_Delivery_name).attr('id'));
            }
            else {
                // alert('1pri');
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                txt_Delivery_name.css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == var_emp_id_Delivery.val()) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

            if (V_secondary_Delivery.val() != "" && V_secondary_Delivery.val() != undefined) {
                if ($.inArray(V_secondary_Delivery.val(), Array_AllEmp) == -1) {
                    Array_AllEmp.push(V_secondary_Delivery.val());
                    Array_AllEmp_Textbox.push($(txt_Delivery_sec).attr('id'));
                }
                else {
                    //alert('1sec');
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                    txt_Delivery_sec.css('border-color', 'red');

                    /*For set red border to same employess*/
                    for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                        if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == V_secondary_Delivery.val()) {
                            $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                            break;
                        }
                    }

                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);

                    return false;
                }
            }
            /**********************************************************************/

            if (var_emp_id_Delivery.val() != "" && var_emp_id_Delivery.val() != undefined) {

                var_salesUser_Delivery += "UNIT_ID" + "^@|" + 1 + "#" + "ROLE_ID" + "^@|" + 77 + "#" + "AREA" + "^@|" + v_drop_down + "#" + "EMPLOYEE_ID" + "^@|" + var_emp_id_Delivery.val() + "#" + "IS_PRI_SEC" + "^@|" + "P" + "#" + "PRI_EMP" + "^@|" + "" + "$$";
            }

            var_salesUser_Delivery += "UNIT_ID" + "^@|" + 1 + "#" + "ROLE_ID" + "^@|" + 77 + "#" + "AREA" + "^@|" + v_drop_down + "#" + "EMPLOYEE_ID" + "^@|" + V_secondary_Delivery.val() + "#" + "IS_PRI_SEC" + "^@|" + "S" + "#" + "PRI_EMP" + "^@|" + var_emp_id_Delivery.val() + "$$";



        }

        // alert(var_salesUser_Delivery);
        document.getElementById('ctl00_ContentPlaceHolder1_hdn_Delivery_Dynamic').value = var_salesUser_Delivery;


        /******************************************************get Competency Data**********************************************************/

        var var_salesUser_Competency = "";
        var var_is_pri_sec_Competency = "P";
        var ele_Competency = $('.AddCompetency_class_Main');

        //validation check the static validation push in array and check with this non-static field.
        var val_CompetencyPrimary_hdn = $('#ctl00_ContentPlaceHolder1_txtCompetencyPrimary_hdn').val();
        var val_CompetencySecondary_hdn = $('#ctl00_ContentPlaceHolder1_txtCompetencySecondary_hdn').val();

        if ($.inArray(val_CompetencyPrimary_hdn, Array_Competency_pri) == -1) {
            Array_Competency_pri.push(val_CompetencyPrimary_hdn);
            Array_Competency_textbox.push('ctl00_ContentPlaceHolder1_txtCompetencyPrimary');
        }
        else {
            // alert('1pri');
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Competency assigned same Employee multiple times.");
            $('#ctl00_ContentPlaceHolder1_txtCompetencyPrimary').css('border-color', 'red');
            /*For set red border to same employess*/
            for (var k = 0; k < Array_Competency_textbox.length; k++) {
                if ($('#' + Array_Competency_textbox[k] + '_hdn').val().trim() == val_CompetencyPrimary_hdn) {
                    $('#' + Array_Competency_textbox[k]).css('border-color', 'red');
                    break;
                }
            }

            $("html, body").animate({
                scrollTop: 0
            }, 600);

            return false;
        }

        if (val_CompetencySecondary_hdn != "" && val_CompetencySecondary_hdn != undefined) {
            if ($.inArray(val_CompetencySecondary_hdn, Array_Competency_pri) == -1) {
                Array_Competency_pri.push(val_CompetencySecondary_hdn);
                Array_Competency_textbox.push('ctl00_ContentPlaceHolder1_txtCompetencySecondary');
            }
            else {
                // alert('1sec');
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Competency assigned same Employee multiple times.");
                $('#ctl00_ContentPlaceHolder1_txtCompetencySecondary').css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_Competency_textbox.length; k++) {
                    if ($('#' + Array_Competency_textbox[k] + '_hdn').val().trim() == val_CompetencySecondary_hdn) {
                        $('#' + Array_Competency_textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

        }


        for (var i = 0; i < ele_Competency.length; i++) {

            var txt_ele_Competency_name = $(ele_Competency[i]).find("input[name='txtCompetency']");
            var var_emp_id_ele_Competency = $(ele_Competency[i]).find("input[name='emp_id']");
            var V_org_emp_id_ele_Competency = $(ele_Competency[i]).find("input[name='org_emp_id']");
            var V_secondary_ele_Competency = $(ele_Competency[i]).find("input[name='emp_idCompetencySec']");
            var v_drop_down = $("#ddlCompetencyAdmin" + i * 2 + " option:selected").val();


            var txt_ele_Competency_sec = $(ele_Competency[i]).find("input[name='txtCompetencysec']");


            txt_ele_Competency_name.css('border-color', 'lightgray');
            txt_ele_Competency_sec.css('border-color', 'lightgray');

            $('#ddlCompetencyAdmin' + i * 2).css('border-color', 'lightgray');

            if (v_drop_down == 0) {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Competency Area.");

                $('#ddlCompetencyAdmin' + i * 2).css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }


            /***********validation for Competency purpose********/

            if (var_emp_id_ele_Competency.val() == "" || var_emp_id_ele_Competency.val() == undefined) {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Competency from Employee Finder.");
                txt_ele_Competency_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            if (txt_ele_Competency_name.val() == "" && var_emp_id_ele_Competency.val() != "") {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter Competency .");
                txt_ele_Competency_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }


            if (txt_ele_Competency_name.val() != "" && var_emp_id_ele_Competency.val() == "") {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Competency from Employee Finder.");
                txt_ele_Competency_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
            if (txt_ele_Competency_sec.val() == "" && V_secondary_ele_Competency.val() != "") {           //Priyanka 2-Aug-2017

                V_secondary_ele_Competency.val('');
            }
            else if (txt_ele_Competency_sec.val() != "" && V_secondary_ele_Competency.val() == "") {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Competency from Employee Finder.");
                txt_ele_Competency_sec.css('border-color', 'red');
                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }


            /*******************************************************************/
            //validation for  same employee used multiple times in Competency*/

            if ($.inArray(var_emp_id_ele_Competency.val(), Array_Competency_pri) == -1) {
                Array_Competency_pri.push(var_emp_id_ele_Competency.val());
                Array_Competency_textbox.push($(txt_ele_Competency_name).attr('id'));
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Competency assigned same Employee multiple times.");
                txt_ele_Competency_name.css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_Competency_textbox.length; k++) {
                    if ($('#' + Array_Competency_textbox[k] + '_hdn').val().trim() == var_emp_id_ele_Competency.val()) {
                        $('#' + Array_Competency_textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

            if (V_secondary_ele_Competency.val() != "" && V_secondary_ele_Competency.val() != undefined) {

                if ($.inArray(V_secondary_ele_Competency.val(), Array_Competency_pri) == -1) {
                    Array_Competency_pri.push(V_secondary_ele_Competency.val());
                    Array_Competency_textbox.push($(txt_ele_Competency_sec).attr('id'));
                }
                else {

                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Competency assigned same Employee multiple times.");
                    txt_ele_Competency_sec.css('border-color', 'red');
                    /*For set red border to same employess*/
                    for (var k = 0; k < Array_Competency_textbox.length; k++) {
                        if ($('#' + Array_Competency_textbox[k] + '_hdn').val().trim() == V_secondary_ele_Competency.val()) {
                            $('#' + Array_Competency_textbox[k]).css('border-color', 'red');
                            break;
                        }
                    }
                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);

                    return false;
                }
            }
            /********************************************************************************************/
            /*Validation for same employee used multiple times*/
            if ($.inArray(var_emp_id_ele_Competency.val(), Array_AllEmp) == -1) {
                Array_AllEmp.push(var_emp_id_ele_Competency.val());
                Array_AllEmp_Textbox.push($(txt_ele_Competency_name).attr('id'));
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                txt_ele_Competency_name.css('border-color', 'red');

                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == var_emp_id_ele_Competency.val()) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

            if (V_secondary_ele_Competency.val() != "" && V_secondary_ele_Competency.val() != undefined) {

                if ($.inArray(V_secondary_ele_Competency.val(), Array_AllEmp) == -1) {
                    Array_AllEmp.push(V_secondary_ele_Competency.val());
                    Array_AllEmp_Textbox.push($(txt_ele_Competency_sec).attr('id'));
                }
                else {

                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                    txt_ele_Competency_sec.css('border-color', 'red');

                    /*For set red border to same employess*/
                    for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                        if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == V_secondary_ele_Competency.val()) {
                            $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                            break;
                        }
                    }

                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);

                    return false;
                }
            }




            /********************************************************************************************/

            if (var_emp_id_ele_Competency.val() != "" && var_emp_id_ele_Competency.val() != undefined) {

                var_salesUser_Competency += "UNIT_ID" + "^@|" + 1 + "#" + "ROLE_ID" + "^@|" + 78 + "#" + "AREA" + "^@|" + v_drop_down + "#" + "EMPLOYEE_ID" + "^@|" + var_emp_id_ele_Competency.val() + "#" + "IS_PRI_SEC" + "^@|" + "P" + "#" + "PRI_EMP" + "^@|" + "" + "$$";
            }


            var_salesUser_Competency += "UNIT_ID" + "^@|" + 1 + "#" + "ROLE_ID" + "^@|" + 78 + "#" + "AREA" + "^@|" + v_drop_down + "#" + "EMPLOYEE_ID" + "^@|" + V_secondary_ele_Competency.val() + "#" + "IS_PRI_SEC" + "^@|" + "S" + "#" + "PRI_EMP" + "^@|" + var_emp_id_ele_Competency.val() + "$$";

        }
        document.getElementById('ctl00_ContentPlaceHolder1_hdn_Competency_Dynamic').value = var_salesUser_Competency;



        /*****************************************************get SBU Head Data**********************************************************/

        var var_salesUser_Competency = "";
        var var_is_pri_sec_Competency = "P";
        var ele_Competency = $('.AddSBUHead_class_Main');

        //validation check the static validation push in array and check with this non-static field.
        var val_SBUHeadPrimary_hdn = $('#ctl00_ContentPlaceHolder1_txtSBUHeadPrimary_hdn').val();
        var val_SBUHeadSecondary_hdn = $('#ctl00_ContentPlaceHolder1_txtSBUHeadSecondary_hdn').val();

        if ($.inArray(val_SBUHeadPrimary_hdn, Array_SBUHead_pri) == -1) {
            Array_SBUHead_pri.push(val_SBUHeadPrimary_hdn);
            Array_SBUHead_Textbox.push('ctl00_ContentPlaceHolder1_txtSBUHeadPrimary');
        }
        else {
            // alert('1pri');
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("SBU Head assigned same Employee multiple times.");
            $('#ctl00_ContentPlaceHolder1_txtSBUHeadPrimary').css('border-color', 'red');

            /*For set red border to same employess*/
            for (var k = 0; k < Array_SBUHead_Textbox.length; k++) {
                if ($('#' + Array_SBUHead_Textbox[k] + '_hdn').val().trim() == val_SBUHeadPrimary_hdn.val()) {
                    $('#' + Array_SBUHead_Textbox[k]).css('border-color', 'red');
                    break;
                }
            }

            $("html, body").animate({
                scrollTop: 0
            }, 600);

            return false;
        }

        if (val_SBUHeadSecondary_hdn != "" && val_SBUHeadSecondary_hdn != undefined) {
            if ($.inArray(val_SBUHeadSecondary_hdn, Array_SBUHead_pri) == -1) {
                Array_SBUHead_pri.push(val_SBUHeadSecondary_hdn);
                Array_SBUHead_Textbox.push('ctl00_ContentPlaceHolder1_txtSBUHeadSecondary');
            }
            else {
                // alert('1sec');
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("SBU Head assigned same Employee multiple times.");
                $('#ctl00_ContentPlaceHolder1_txtSBUHeadSecondary').css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_SBUHead_Textbox.length; k++) {
                    if ($('#' + Array_SBUHead_Textbox[k] + '_hdn').val().trim() == val_SBUHeadSecondary_hdn.val()) {
                        $('#' + Array_SBUHead_Textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

        }

        for (var i = 0; i < ele_Competency.length; i++) {

            var txt_ele_Competency_name = $(ele_Competency[i]).find("input[name='txtCompetency']");
            var var_emp_id_ele_Competency = $(ele_Competency[i]).find("input[name='emp_id']");
            var V_org_emp_id_ele_Competency = $(ele_Competency[i]).find("input[name='org_emp_id']");
            var V_secondary_ele_Competency = $(ele_Competency[i]).find("input[name='emp_idCompetencySec']");

            var txt_SBUHEAD_SEC = $(ele_Competency[i]).find("input[name='txtCompetencysec']");
            /***********validation for SBU Head purpose********/
            txt_ele_Competency_name.css('border-color', 'lightgray');
            txt_SBUHEAD_SEC.css('border-color', 'lightgray');

            if (var_emp_id_ele_Competency.val() == "" || var_emp_id_ele_Competency.val() == undefined) {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select SBU Head from Employee Finder.");
                txt_ele_Competency_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            if (txt_ele_Competency_name.val() == "" && var_emp_id_ele_Competency.val() != "") {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter SBU Head.");
                txt_ele_Competency_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }


            if (txt_ele_Competency_name.val() != "" && var_emp_id_ele_Competency.val() == "") {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select SBU Head from Employee Finder.");
                txt_ele_Competency_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            if (txt_SBUHEAD_SEC.val() == "" && V_secondary_ele_Competency.val() != "") {           //Priyanka 2-Aug-2017

                V_secondary_ele_Competency.val('');
            }
            else if (txt_SBUHEAD_SEC.val() != "" && V_secondary_ele_Competency.val() == "") {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select SBU Head from Employee Finder.");
                txt_SBUHEAD_SEC.css('border-color', 'red');
                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            //validation for 

            // alert('p:::'+var_emp_id_ele_Competency.val());
            //alert('s::::::'+V_secondary_ele_Competency.val());

            if ($.inArray(var_emp_id_ele_Competency.val(), Array_SBUHead_pri) == -1) {
                Array_SBUHead_pri.push(var_emp_id_ele_Competency.val());
                Array_SBUHead_Textbox.push($(txt_ele_Competency_name).attr('id'));
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("SBU Head assigned same Employee multiple times.");
                txt_ele_Competency_name.css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_SBUHead_Textbox.length; k++) {
                    if ($('#' + Array_SBUHead_Textbox[k] + '_hdn').val().trim() == var_emp_id_ele_Competency.val()) {
                        $('#' + Array_SBUHead_Textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            if (V_secondary_ele_Competency.val() != "" && V_secondary_ele_Competency.val() != undefined) {

                if ($.inArray(V_secondary_ele_Competency.val(), Array_SBUHead_pri) == -1) {
                    Array_SBUHead_pri.push(V_secondary_ele_Competency.val());
                    Array_SBUHead_Textbox.push($(txt_SBUHEAD_SEC).attr('id'));
                }
                else {

                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("SBU Head assigned same Employee multiple times.");
                    txt_SBUHEAD_SEC.css('border-color', 'red');
                    /*For set red border to same employess*/
                    for (var k = 0; k < Array_SBUHead_Textbox.length; k++) {
                        if ($('#' + Array_SBUHead_Textbox[k] + '_hdn').val().trim() == V_secondary_ele_Competency.val()) {
                            $('#' + Array_SBUHead_Textbox[k]).css('border-color', 'red');
                            break;
                        }
                    }

                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);
                    return false;
                }
            }
            /****************************************************************************************************/


            if ($.inArray(var_emp_id_ele_Competency.val(), Array_AllEmp) == -1) {
                Array_AllEmp.push(var_emp_id_ele_Competency.val());
                Array_AllEmp_Textbox.push($(txt_ele_Competency_name).attr('id'));

            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                txt_ele_Competency_name.css('border-color', 'red');

                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == var_emp_id_ele_Competency.val()) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

            if (V_secondary_ele_Competency.val() != "" && V_secondary_ele_Competency.val() != undefined) {

                if ($.inArray(V_secondary_ele_Competency.val(), Array_AllEmp) == -1) {
                    Array_AllEmp.push(V_secondary_ele_Competency.val());
                    Array_AllEmp_Textbox.push($(txt_SBUHEAD_SEC).attr('id'));
                }
                else {

                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                    txt_SBUHEAD_SEC.css('border-color', 'red');

                    /*For set red border to same employess*/
                    for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                        if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == V_secondary_ele_Competency.val()) {
                            $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                            break;
                        }
                    }

                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);

                    return false;
                }
            }



            /*********************************************************************************************/
            if (var_emp_id_ele_Competency.val() != "" && var_emp_id_ele_Competency.val() != undefined) {

                var_salesUser_Competency += "UNIT_ID" + "^@|" + 1 + "#" + "ROLE_ID" + "^@|" + 79 + "#" + "AREA" + "^@|" + "" + "#" + "EMPLOYEE_ID" + "^@|" + var_emp_id_ele_Competency.val() + "#" + "IS_PRI_SEC" + "^@|" + "P" + "#" + "PRI_EMP" + "^@|" + "" + "$$";
            }


            var_salesUser_Competency += "UNIT_ID" + "^@|" + 1 + "#" + "ROLE_ID" + "^@|" + 79 + "#" + "AREA" + "^@|" + "" + "#" + "EMPLOYEE_ID" + "^@|" + V_secondary_ele_Competency.val() + "#" + "IS_PRI_SEC" + "^@|" + "S" + "#" + "PRI_EMP" + "^@|" + var_emp_id_ele_Competency.val() + "$$";

        }
        document.getElementById('ctl00_ContentPlaceHolder1_hdn_SBUHead_Dynamic').value = var_salesUser_Competency;


        /**************************************************get SBU Fianance Head Data************************************************/

        var var_salesUser_Competency = "";
        var var_is_pri_sec_Competency = "P";
        var ele_Competency = $('.SBUFinanceHead_class_Main');


        //validation check the static validation push in array and check with this non-static field.
        var val_SBUFinanceHeadPrimary_hdn = $('#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadPrimary_hdn').val();
        var val_SBUFinanceHeadSecondary_hdn = $('#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadSecondary_hdn').val();

        if ($.inArray(val_SBUFinanceHeadPrimary_hdn, Array_SBUFinanceHead_pri) == -1) {
            Array_SBUFinanceHead_pri.push(val_SBUFinanceHeadPrimary_hdn);
            Array_SBUFinanceHead_textbox.push('ctl00_ContentPlaceHolder1_txtSBUFinanceHeadPrimary');
        }
        else {
            // alert('1pri');
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("SBU Finance Head assigned same Employee multiple times.");
            $('#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadPrimary').css('border-color', 'red');

            /*For set red border to same employess*/
            for (var k = 0; k < Array_SBUFinanceHead_textbox.length; k++) {
                if ($('#' + Array_SBUFinanceHead_textbox[k] + '_hdn').val().trim() == val_SBUFinanceHeadPrimary_hdn) {
                    $('#' + Array_SBUFinanceHead_textbox[k]).css('border-color', 'red');
                    break;
                }
            }

            $("html, body").animate({
                scrollTop: 0
            }, 600);

            return false;
        }

        if (val_SBUFinanceHeadSecondary_hdn != "" && val_SBUFinanceHeadSecondary_hdn != undefined) {
            if ($.inArray(val_SBUFinanceHeadSecondary_hdn, Array_SBUFinanceHead_pri) == -1) {
                Array_SBUFinanceHead_pri.push(val_SBUFinanceHeadSecondary_hdn);
                Array_SBUFinanceHead_textbox.push('ctl00_ContentPlaceHolder1_txtSBUFinanceHeadSecondary');
            }
            else {
                // alert('1sec');
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("SBU Finance Head assigned same Employee multiple times.");
                $('#ctl00_ContentPlaceHolder1_txtSBUFinanceHeadSecondary').css('border-color', 'red');

                /*For set red border to same employess*/
                for (var k = 0; k < Array_SBUFinanceHead_textbox.length; k++) {
                    if ($('#' + Array_SBUFinanceHead_textbox[k] + '_hdn').val().trim() == val_SBUFinanceHeadSecondary_hdn) {
                        $('#' + Array_SBUFinanceHead_textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

        }



        for (var i = 0; i < ele_Competency.length; i++) {

            var txt_ele_Competency_name = $(ele_Competency[i]).find("input[name='txtCompetency']");
            var var_emp_id_ele_Competency = $(ele_Competency[i]).find("input[name='emp_id']");
            var V_org_emp_id_ele_Competency = $(ele_Competency[i]).find("input[name='org_emp_id']");
            var V_secondary_ele_Competency = $(ele_Competency[i]).find("input[name='emp_idCompetencySec']");

            var txt_SBUFINHEAD_Sec = $(ele_Competency[i]).find("input[name='txtCompetency_sec']");

            /***********validation for SBU Finance Head purpose********/
            txt_ele_Competency_name.css('border-color', 'lightgray');
            txt_SBUFINHEAD_Sec.css('border-color', 'lightgray');

            if (var_emp_id_ele_Competency.val() == "" || var_emp_id_ele_Competency.val() == undefined) {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select SBU Finance Head from Employee Finder.");
                txt_ele_Competency_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            if (txt_ele_Competency_name.val() == "" && var_emp_id_ele_Competency.val() != "") {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter SBU Finance Head.");
                txt_ele_Competency_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }


            if (txt_ele_Competency_name.val() != "" && var_emp_id_ele_Competency.val() == "") {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select SBU Finance Head from Employee Finder.");
                txt_ele_Competency_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
            if (txt_SBUFINHEAD_Sec.val() == "" && V_secondary_ele_Competency.val() != "") {           //Priyanka 2-Aug-2017

                V_secondary_ele_Competency.val('');
            }
            else if (txt_SBUFINHEAD_Sec.val() != "" && V_secondary_ele_Competency.val() == "") {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select SBU Finance Head from Employee Finder.");
                txt_SBUFINHEAD_Sec.css('border-color', 'red');
                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }


            //validation for 
            if ($.inArray(var_emp_id_ele_Competency.val(), Array_SBUFinanceHead_pri) == -1) {
                Array_SBUFinanceHead_pri.push(var_emp_id_ele_Competency.val());
                Array_SBUFinanceHead_textbox.push($(txt_ele_Competency_name).attr('id'));
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("SBU Finance Head assigned same Employee multiple times.");
                txt_ele_Competency_name.css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_SBUFinanceHead_textbox.length; k++) {
                    if ($('#' + Array_SBUFinanceHead_textbox[k] + '_hdn').val().trim() == var_emp_id_ele_Competency.val()) {
                        $('#' + Array_SBUFinanceHead_textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

            if (V_secondary_ele_Competency.val() != "" && V_secondary_ele_Competency.val() != undefined) {
                if ($.inArray(V_secondary_ele_Competency.val(), Array_SBUFinanceHead_pri) == -1) {
                    Array_SBUFinanceHead_pri.push(V_secondary_ele_Competency.val());
                    Array_SBUFinanceHead_textbox.push($(txt_SBUFINHEAD_Sec).attr('id'));
                }
                else {

                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("SBU Finance Head assigned same Employee multiple times.");
                    txt_SBUFINHEAD_Sec.css('border-color', 'red');
                    /*For set red border to same employess*/
                    for (var k = 0; k < Array_SBUFinanceHead_textbox.length; k++) {
                        if ($('#' + Array_SBUFinanceHead_textbox[k] + '_hdn').val().trim() == V_secondary_ele_Competency.val()) {
                            $('#' + Array_SBUFinanceHead_textbox[k]).css('border-color', 'red');
                            break;
                        }
                    }

                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);

                    return false;
                }
            }
            /*******************************************************************************************************************/

            if ($.inArray(var_emp_id_ele_Competency.val(), Array_AllEmp) == -1) {
                Array_AllEmp.push(var_emp_id_ele_Competency.val());
                Array_AllEmp_Textbox.push($(txt_ele_Competency_name).attr('id'));
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                txt_ele_Competency_name.css('border-color', 'red');

                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == var_emp_id_ele_Competency.val()) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

            if (V_secondary_ele_Competency.val() != "" && V_secondary_ele_Competency.val() != undefined) {
                if ($.inArray(V_secondary_ele_Competency.val(), Array_AllEmp) == -1) {
                    Array_AllEmp.push(V_secondary_ele_Competency.val());
                    Array_AllEmp_Textbox.push($(txt_SBUFINHEAD_Sec).attr('id'));
                }
                else {

                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                    txt_SBUFINHEAD_Sec.css('border-color', 'red');

                    /*For set red border to same employess*/
                    for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                        if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == V_secondary_ele_Competency.val()) {
                            $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                            break;
                        }
                    }

                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);

                    return false;
                }
            }


            /*******************************************************************************************************************/

            if (var_emp_id_ele_Competency.val() != "" && var_emp_id_ele_Competency.val() != undefined) {

                var_salesUser_Competency += "UNIT_ID" + "^@|" + 1 + "#" + "ROLE_ID" + "^@|" + 80 + "#" + "AREA" + "^@|" + "" + "#" + "EMPLOYEE_ID" + "^@|" + var_emp_id_ele_Competency.val() + "#" + "IS_PRI_SEC" + "^@|" + "P" + "#" + "PRI_EMP" + "^@|" + "" + "$$";
            }

            var_salesUser_Competency += "UNIT_ID" + "^@|" + 1 + "#" + "ROLE_ID" + "^@|" + 80 + "#" + "AREA" + "^@|" + "" + "#" + "EMPLOYEE_ID" + "^@|" + V_secondary_ele_Competency.val() + "#" + "IS_PRI_SEC" + "^@|" + "S" + "#" + "PRI_EMP" + "^@|" + var_emp_id_ele_Competency.val() + "$$";

        }
        document.getElementById('ctl00_ContentPlaceHolder1_hdn_SBUFinanceHead_Dynamic').value = var_salesUser_Competency;



        /******************************************get Sr. Management Data**********************************************/

        var var_salesUser_Competency = "";
        var var_is_pri_sec_Competency = "P";
        var ele_Competency = $('.SrManagement_class_Main');


        //validation check the static validation push in array and check with this non-static field.
        var val_SrManagement_pri_hdn = $('#ctl00_ContentPlaceHolder1_txtSrManagementPrimary_hdn').val();
        var val_SrManagement_sec_hdn = $('#ctl00_ContentPlaceHolder1_txtSrManagementSecondary_hdn').val();

        if ($.inArray(val_SrManagement_pri_hdn, Array_SrManagement_pri) == -1) {
            Array_SrManagement_pri.push(val_SrManagement_pri_hdn);
            Array_SrManagement_textbox.push('ctl00_ContentPlaceHolder1_txtSrManagementPrimary');
        }
        else {

            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Sr.Management assigned same Employee multiple times.");
            $('#ctl00_ContentPlaceHolder1_txtSrManagementPrimary').css('border-color', 'red');

            /*For set red border to same employess*/
            for (var k = 0; k < Array_SrManagement_textbox.length; k++) {
                if ($('#' + Array_SrManagement_textbox[k] + '_hdn').val().trim() == val_SrManagement_pri_hdn) {
                    $('#' + Array_SrManagement_textbox[k]).css('border-color', 'red');
                    break;
                }
            }
            $("html, body").animate({
                scrollTop: 0
            }, 600);

            return false;
        }
        if (val_SrManagement_sec_hdn != "" && val_SrManagement_sec_hdn != undefined) {
            if ($.inArray(val_SrManagement_sec_hdn, Array_SrManagement_pri) == -1) {
                Array_SrManagement_pri.push(val_SrManagement_sec_hdn);
                Array_SrManagement_textbox.push('ctl00_ContentPlaceHolder1_txtSrManagementSecondary');
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Sr.Management assigned same Employee multiple times.");
                $('#ctl00_ContentPlaceHolder1_txtSrManagementSecondary').css('border-color', 'red');

                /*For set red border to same employess*/
                for (var k = 0; k < Array_SrManagement_textbox.length; k++) {
                    if ($('#' + Array_SrManagement_textbox[k] + '_hdn').val().trim() == val_SrManagement_sec_hdn) {
                        $('#' + Array_SrManagement_textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

        }




        for (var i = 0; i < ele_Competency.length; i++) {

            var txt_ele_Competency_name = $(ele_Competency[i]).find("input[name='txtSrManagementPri']");
            var var_emp_id_ele_Competency = $(ele_Competency[i]).find("input[name='emp_idSrManagementPri']");
            var V_org_emp_id_ele_Competency = $(ele_Competency[i]).find("input[name='org_emp_id']");
            var V_secondary_ele_Competency = $(ele_Competency[i]).find("input[name='emp_idSrManagementSec']");


            var txtSrManagemntLead_sec = $(ele_Competency[i]).find("input[name='txtSrManagementSec']");

            /***********validation for Sr. Management purpose********/
            txt_ele_Competency_name.css('border-color', 'lightgray');
            txtSrManagemntLead_sec.css('border-color', 'lightgray');

            if (var_emp_id_ele_Competency.val() == "" || var_emp_id_ele_Competency.val() == undefined) {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Sr. Management from Employee Finder.");
                txt_ele_Competency_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            if (txt_ele_Competency_name.val() == "" && var_emp_id_ele_Competency.val() != "") {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter Sr. Management.");
                txt_ele_Competency_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            if (txt_ele_Competency_name.val() != "" && var_emp_id_ele_Competency.val() == "") {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Sr. Management from Employee Finder.");
                txt_ele_Competency_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
            if ((txtSrManagemntLead_sec.val() == "") && V_secondary_ele_Competency.val() != "") {           //Priyanka 2-Aug-2017

                V_secondary_ele_Competency.val('');
            }
            else if (txtSrManagemntLead_sec.val() != "" && V_secondary_ele_Competency.val() == "") {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Sr. Management from Employee Finder.");
                txtSrManagemntLead_sec.css('border-color', 'red');
                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            /***********************************************/
            //validation for
            // alert(Array_SrManagement_pri);
            if ($.inArray(var_emp_id_ele_Competency.val(), Array_SrManagement_pri) == -1) {
                Array_SrManagement_pri.push(var_emp_id_ele_Competency.val());
                Array_SrManagement_textbox.push($(txt_ele_Competency_name).attr('id'));

            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Sr.Management assigned same employee multiple times.");
                txt_ele_Competency_name.css('border-color', 'red');

                /*For set red border to same employess*/
                for (var k = 0; k < Array_SrManagement_textbox.length; k++) {
                    if ($('#' + Array_SrManagement_textbox[k] + '_hdn').val().trim() == var_emp_id_ele_Competency.val()) {
                        $('#' + Array_SrManagement_textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

            if (V_secondary_ele_Competency.val() != "" && V_secondary_ele_Competency.val() != undefined) {

                if ($.inArray(V_secondary_ele_Competency.val(), Array_SrManagement_pri) == -1) {
                    Array_SrManagement_pri.push(V_secondary_ele_Competency.val());
                    Array_SrManagement_textbox.push($(txtSrManagemntLead_sec).attr('id'));
                }
                else {

                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Sr.Management assigned same employee multiple times.");
                    txtSrManagemntLead_sec.css('border-color', 'red');

                    /*For set red border to same employess*/
                    for (var k = 0; k < Array_SrManagement_textbox.length; k++) {
                        if ($('#' + Array_SrManagement_textbox[k] + '_hdn').val().trim() == V_secondary_ele_Competency.val()) {
                            $('#' + Array_SrManagement_textbox[k]).css('border-color', 'red');
                            break;
                        }
                    }

                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);

                    return false;
                }
            }
            /****************************************************************************************/
            if ($.inArray(var_emp_id_ele_Competency.val(), Array_AllEmp) == -1) {
                Array_AllEmp.push(var_emp_id_ele_Competency.val());
                Array_AllEmp_Textbox.push($(txt_ele_Competency_name).attr('id'));
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                txt_ele_Competency_name.css('border-color', 'red');

                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == var_emp_id_ele_Competency.val()) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

            if (V_secondary_ele_Competency.val() != "" && V_secondary_ele_Competency.val() != undefined) {

                if ($.inArray(V_secondary_ele_Competency.val(), Array_AllEmp) == -1) {
                    Array_AllEmp.push(V_secondary_ele_Competency.val());
                    Array_AllEmp_Textbox.push($(txtSrManagemntLead_sec).attr('id'));
                }
                else {

                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                    txtSrManagemntLead_sec.css('border-color', 'red');

                    /*For set red border to same employess*/
                    for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                        if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == V_secondary_ele_Competency.val()) {
                            $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                            break;
                        }
                    }

                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);

                    return false;
                }
            }


            /****************************************************************************************/
            if (var_emp_id_ele_Competency.val() != "" && var_emp_id_ele_Competency.val() != undefined) {

                var_salesUser_Competency += "UNIT_ID" + "^@|" + 1 + "#" + "ROLE_ID" + "^@|" + 81 + "#" + "AREA" + "^@|" + "" + "#" + "EMPLOYEE_ID" + "^@|" + var_emp_id_ele_Competency.val() + "#" + "IS_PRI_SEC" + "^@|" + "P" + "#" + "PRI_EMP" + "^@|" + "" + "$$";
            }

            var_salesUser_Competency += "UNIT_ID" + "^@|" + 1 + "#" + "ROLE_ID" + "^@|" + 81 + "#" + "AREA" + "^@|" + "" + "#" + "EMPLOYEE_ID" + "^@|" + V_secondary_ele_Competency.val() + "#" + "IS_PRI_SEC" + "^@|" + "S" + "#" + "PRI_EMP" + "^@|" + var_emp_id_ele_Competency.val() + "$$";


        }
        document.getElementById('ctl00_ContentPlaceHolder1_hdn_SRManagement_Dynamic').value = var_salesUser_Competency;


        /*****************************************************get SBU Delivery Head Data**********************************************************/

        var var_salesUser_Competency = "";
        var var_is_pri_sec_Competency = "P";
        var ele_Competency = $('.AddSBUDelHead_class_Main');

        //validation check the static validation push in array and check with this non-static field.
        var val_SBUDelHeadPrimary_hdn = $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadPrimary_hdn').val();
        var val_SBUDelHeadSecondary_hdn = $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadSecondary_hdn').val();

        if ($.inArray(val_SBUDelHeadPrimary_hdn, Array_SBUDelHead_pri) == -1) {
            Array_SBUDelHead_pri.push(val_SBUDelHeadPrimary_hdn);
            Array_SBUDelHead_textbox.push('ctl00_ContentPlaceHolder1_txtSBUDelHeadPrimary');
        }
        else {

            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("SBU Delivery Head assigned same Employee multiple times.");
            $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadPrimary').css('border-color', 'red');
            /*For set red border to same employess*/
            for (var k = 0; k < Array_SBUDelHead_textbox.length; k++) {
                if ($('#' + Array_SBUDelHead_textbox[k] + '_hdn').val().trim() == val_SBUDelHeadPrimary_hdn) {
                    $('#' + Array_SBUDelHead_textbox[k]).css('border-color', 'red');
                    break;
                }
            }
            $("html, body").animate({
                scrollTop: 0
            }, 600);

            return false;
        }

        if (val_SBUDelHeadSecondary_hdn != "" && val_SBUDelHeadSecondary_hdn != undefined) {
            if ($.inArray(val_SBUDelHeadSecondary_hdn, Array_SBUDelHead_pri) == -1) {
                Array_SBUDelHead_pri.push(val_SBUDelHeadSecondary_hdn);
                Array_SBUDelHead_textbox.push('ctl00_ContentPlaceHolder1_txtSBUDelHeadSecondary');
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("SBU Delivery Head assigned same Employee multiple times.");
                $('#ctl00_ContentPlaceHolder1_txtSBUDelHeadSecondary').css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_SBUDelHead_textbox.length; k++) {
                    if ($('#' + Array_SBUDelHead_textbox[k] + '_hdn').val().trim() == val_SBUDelHeadSecondary_hdn) {
                        $('#' + Array_SBUDelHead_textbox[k]).css('border-color', 'red');
                        break;
                    }
                }
                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

        }

        for (var i = 0; i < ele_Competency.length; i++) {

            var txt_ele_Competency_name = $(ele_Competency[i]).find("input[name='txtCompetency']");
            var var_emp_id_ele_Competency = $(ele_Competency[i]).find("input[name='emp_id']");
            var V_org_emp_id_ele_Competency = $(ele_Competency[i]).find("input[name='org_emp_id']");
            var V_secondary_ele_Competency = $(ele_Competency[i]).find("input[name='emp_idCompetencySec']");

            var txt_SBUDelHEAD_SEC = $(ele_Competency[i]).find("input[name='txtCompetencysec']");
            /***********validation for SBU Head purpose********/
            txt_ele_Competency_name.css('border-color', 'lightgray');
            txt_SBUDelHEAD_SEC.css('border-color', 'lightgray');

            if (var_emp_id_ele_Competency.val() == "" || var_emp_id_ele_Competency.val() == undefined) {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select SBU Delivery Head from Employee Finder.");
                txt_ele_Competency_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            if (txt_ele_Competency_name.val() == "" && var_emp_id_ele_Competency.val() != "") {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter SBU Delivery Head.");
                txt_ele_Competency_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }


            if (txt_ele_Competency_name.val() != "" && var_emp_id_ele_Competency.val() == "") {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select SBU Delivery Head from Employee Finder.");
                txt_ele_Competency_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            // alert('sec'+txt_SBUDelHEAD_SEC.val());

            if (txt_SBUDelHEAD_SEC.val() == "" && V_secondary_ele_Competency.val() != "") {           //Priyanka 2-Aug-2017

                V_secondary_ele_Competency.val('');
            }
            else if (txt_SBUDelHEAD_SEC.val() != "" && V_secondary_ele_Competency.val() == "") {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select SBU Delivery Head from Employee Finder.");
                txt_SBUDelHEAD_SEC.css('border-color', 'red');
                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            //validation for 


            if ($.inArray(var_emp_id_ele_Competency.val(), Array_SBUDelHead_pri) == -1) {
                Array_SBUDelHead_pri.push(var_emp_id_ele_Competency.val());
                Array_SBUDelHead_textbox.push($(txt_ele_Competency_name).attr('id'));
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("SBU Delivery Head assigned same Employee multiple times.");
                txt_ele_Competency_name.css('border-color', 'red');

                /*For set red border to same employess*/
                for (var k = 0; k < Array_SBUDelHead_textbox.length; k++) {
                    if ($('#' + Array_SBUDelHead_textbox[k] + '_hdn').val().trim() == var_emp_id_ele_Competency.val()) {
                        $('#' + Array_SBUDelHead_textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

            if (V_secondary_ele_Competency.val() != "" && V_secondary_ele_Competency.val() != undefined) {

                if ($.inArray(V_secondary_ele_Competency.val(), Array_SBUDelHead_pri) == -1) {
                    Array_SBUDelHead_pri.push(V_secondary_ele_Competency.val());
                    Array_SBUDelHead_textbox.push($(txt_SBUDelHEAD_SEC).attr('id'));
                }
                else {

                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("SBU Delivery Head assigned same Employee multiple times.");
                    txt_SBUDelHEAD_SEC.css('border-color', 'red');

                    /*For set red border to same employess*/
                    for (var k = 0; k < Array_SBUDelHead_textbox.length; k++) {
                        if ($('#' + Array_SBUDelHead_textbox[k] + '_hdn').val().trim() == V_secondary_ele_Competency.val()) {
                            $('#' + Array_SBUDelHead_textbox[k]).css('border-color', 'red');
                            break;
                        }
                    }
                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);

                    return false;
                }
            }
            /***********************************************************************************************/


            if ($.inArray(var_emp_id_ele_Competency.val(), Array_AllEmp) == -1) {
                Array_AllEmp.push(var_emp_id_ele_Competency.val());
                Array_AllEmp_Textbox.push($(txt_ele_Competency_name).attr('id'));
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                txt_ele_Competency_name.css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == var_emp_id_ele_Competency.val()) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

            if (V_secondary_ele_Competency.val() != "" && V_secondary_ele_Competency.val() != undefined) {

                if ($.inArray(V_secondary_ele_Competency.val(), Array_AllEmp) == -1) {
                    Array_AllEmp.push(V_secondary_ele_Competency.val());
                    Array_AllEmp_Textbox.push($(txt_SBUDelHEAD_SEC).attr('id'));
                }
                else {

                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                    txt_SBUDelHEAD_SEC.css('border-color', 'red');
                    /*For set red border to same employess*/
                    for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                        if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == V_secondary_ele_Competency.val()) {
                            $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                            break;
                        }
                    }
                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);

                    return false;
                }
            }


            /*********************************************************************************************/

            if (var_emp_id_ele_Competency.val() != "" && var_emp_id_ele_Competency.val() != undefined) {

                var_salesUser_Competency += "UNIT_ID" + "^@|" + 1 + "#" + "ROLE_ID" + "^@|" + 96 + "#" + "AREA" + "^@|" + "" + "#" + "EMPLOYEE_ID" + "^@|" + var_emp_id_ele_Competency.val() + "#" + "IS_PRI_SEC" + "^@|" + "P" + "#" + "PRI_EMP" + "^@|" + "" + "$$";
            }


            var_salesUser_Competency += "UNIT_ID" + "^@|" + 1 + "#" + "ROLE_ID" + "^@|" + 96 + "#" + "AREA" + "^@|" + "" + "#" + "EMPLOYEE_ID" + "^@|" + V_secondary_ele_Competency.val() + "#" + "IS_PRI_SEC" + "^@|" + "S" + "#" + "PRI_EMP" + "^@|" + var_emp_id_ele_Competency.val() + "$$";

        }
        document.getElementById('ctl00_ContentPlaceHolder1_hdn_SBUDelHead_Dynamic').value = var_salesUser_Competency;


        /*****************************************************get Sales Regional Head Data**********************************************************/

        var var_salesUser_Competency = "";
        var var_is_pri_sec_Competency = "P";
        var ele_Competency = $('.SalesRegional_class_Main ');

        //validation check the static validation push in array and check with this non-static field.
        var val_salesRegionalPri_hdn = $('#ctl00_ContentPlaceHolder1_txtsalesRegionalPri_hdn').val();
        var val_salesRegionalSec_hdn = $('#ctl00_ContentPlaceHolder1_txtsalesRegionalSec_hdn').val();

        if ($.inArray(val_salesRegionalPri_hdn, Array_Sales_Regional) == -1) {
            Array_Sales_Regional.push(val_salesRegionalPri_hdn);
            Array_Sales_Regional_textbox.push('ctl00_ContentPlaceHolder1_txtsalesRegionalPri');
        }
        else {

            $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
            $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Sales Regional Head assigned same Employee multiple times.");
            $('#ctl00_ContentPlaceHolder1_txtsalesRegionalPri').css('border-color', 'red');
            /*For set red border to same employess*/
            for (var k = 0; k < Array_Sales_Regional_textbox.length; k++) {
                if ($('#' + Array_Sales_Regional_textbox[k] + '_hdn').val().trim() == val_salesRegionalPri_hdn) {
                    $('#' + Array_Sales_Regional_textbox[k]).css('border-color', 'red');
                    break;
                }
            }
            $("html, body").animate({
                scrollTop: 0
            }, 600);

            return false;
        }

        if (val_salesRegionalSec_hdn != "" && val_salesRegionalSec_hdn != undefined) {
            if ($.inArray(val_salesRegionalSec_hdn, Array_Sales_Regional) == -1) {
                Array_Sales_Regional.push(val_salesRegionalSec_hdn);
                Array_Sales_Regional_textbox.push('ctl00_ContentPlaceHolder1_txtsalesRegionalSec');
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Sales Regional Head assigned same Employee multiple times.");
                $('#ctl00_ContentPlaceHolder1_txtsalesRegionalSec').css('border-color', 'red');
                /*For set red border to same employess*/
                for (var k = 0; k < Array_Sales_Regional_textbox.length; k++) {
                    if ($('#' + Array_Sales_Regional_textbox[k] + '_hdn').val().trim() == val_salesRegionalSec_hdn) {
                        $('#' + Array_Sales_Regional_textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

        }

        for (var i = 0; i < ele_Competency.length; i++) {

            var txt_ele_Competency_name = $(ele_Competency[i]).find("input[name='txtSalesRegionalPri']");
            var var_emp_id_ele_Competency = $(ele_Competency[i]).find("input[name='emp_idSalesRegionalPri']");
            var V_org_emp_id_ele_Competency = $(ele_Competency[i]).find("input[name='cnd_emp_id']");
            var V_secondary_ele_Competency = $(ele_Competency[i]).find("input[name='emp_idSalesRegionalSec']");

            var txt_SBUDelHEAD_SEC = $(ele_Competency[i]).find("input[name='txtSalesRegionalSec']");
            /***********validation for SBU Head purpose********/

            txt_ele_Competency_name.css('border-color', 'lightgray');
            txt_SBUDelHEAD_SEC.css('border-color', 'lightgray');


            if (var_emp_id_ele_Competency.val() == "" || var_emp_id_ele_Competency.val() == undefined) {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Sales Regional Head from Employee Finder.");
                txt_ele_Competency_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            if (txt_ele_Competency_name.val() == "" && var_emp_id_ele_Competency.val() != "") {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please enter Sales Regional Head.");
                txt_ele_Competency_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }


            if (txt_ele_Competency_name.val() != "" && var_emp_id_ele_Competency.val() == "") {
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Sales Regional Head from Employee Finder.");
                txt_ele_Competency_name.css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            if (txt_SBUDelHEAD_SEC.val() == "" && V_secondary_ele_Competency.val() != "") {           //Priyanka 2-Aug-2017

                V_secondary_ele_Competency.val('');
            }
            else if (txt_SBUDelHEAD_SEC.val() != "" && V_secondary_ele_Competency.val() == "") {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Please select Sales Regional Head from Employee Finder.");
                //txt_SBUDelHEAD_SEC.css('border-color', 'red');
                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            //validation for 


            if ($.inArray(var_emp_id_ele_Competency.val(), Array_Sales_Regional) == -1) {
                Array_Sales_Regional.push(var_emp_id_ele_Competency.val());
                Array_Sales_Regional_textbox.push($(txt_ele_Competency_name).attr('id'));
            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Sales Regional Head assigned same Employee multiple times.");
                txt_ele_Competency_name.css('border-color', 'red');

                /*For set red border to same employess*/
                for (var k = 0; k < Array_Sales_Regional_textbox.length; k++) {
                    if ($('#' + Array_Sales_Regional_textbox[k] + '_hdn').val().trim() == var_emp_id_ele_Competency.val()) {
                        $('#' + Array_Sales_Regional_textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

            if (V_secondary_ele_Competency.val() != "" && V_secondary_ele_Competency.val() != undefined) {

                if ($.inArray(V_secondary_ele_Competency.val(), Array_Sales_Regional) == -1) {
                    Array_Sales_Regional.push(V_secondary_ele_Competency.val());
                    Array_Sales_Regional_textbox.push($(txt_SBUDelHEAD_SEC).attr('id'));
                }
                else {

                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Sales Regional Head assigned same Employee multiple times.");
                    txt_SBUDelHEAD_SEC.css('border-color', 'red');
                    /*For set red border to same employess*/
                    for (var k = 0; k < Array_Sales_Regional_textbox.length; k++) {
                        if ($('#' + Array_Sales_Regional_textbox[k] + '_hdn').val().trim() == V_secondary_ele_Competency.val()) {
                            $('#' + Array_Sales_Regional_textbox[k]).css('border-color', 'red');
                            break;
                        }
                    }

                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);

                    return false;
                }
            }
            /***********************************************************************************************/


            if ($.inArray(var_emp_id_ele_Competency.val(), Array_AllEmp) == -1) {
                Array_AllEmp.push(var_emp_id_ele_Competency.val());
                Array_AllEmp_Textbox.push($(txt_ele_Competency_name).attr('id'));

            }
            else {

                $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                txt_ele_Competency_name.css('border-color', 'red');

                /*For set red border to same employess*/
                for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                    if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == var_emp_id_ele_Competency.val()) {
                        $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                        break;
                    }
                }

                $("html, body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            }

            if (V_secondary_ele_Competency.val() != "" && V_secondary_ele_Competency.val() != undefined) {

                if ($.inArray(V_secondary_ele_Competency.val(), Array_AllEmp) == -1) {
                    Array_AllEmp.push(V_secondary_ele_Competency.val());
                    Array_AllEmp_Textbox.push($(txt_SBUDelHEAD_SEC).attr('id'));
                }
                else {

                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
                    $("#ctl00_ContentPlaceHolder1_lblErrMsg").append("Multiple roles cannot be assigned to same person.");
                    txt_SBUDelHEAD_SEC.css('border-color', 'red');
                    /*For set red border to same employess*/
                    for (var k = 0; k < Array_AllEmp_Textbox.length; k++) {
                        if ($('#' + Array_AllEmp_Textbox[k] + '_hdn').val().trim() == V_secondary_ele_Competency.val()) {
                            $('#' + Array_AllEmp_Textbox[k]).css('border-color', 'red');
                            break;
                        }
                    }

                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);

                    return false;
                }
            }


            /*********************************************************************************************/

            if (var_emp_id_ele_Competency.val() != "" && var_emp_id_ele_Competency.val() != undefined) {

                var_salesUser_Competency += "UNIT_ID" + "^@|" + 1 + "#" + "ROLE_ID" + "^@|" + 97 + "#" + "AREA" + "^@|" + "" + "#" + "EMPLOYEE_ID" + "^@|" + var_emp_id_ele_Competency.val() + "#" + "IS_PRI_SEC" + "^@|" + "P" + "#" + "PRI_EMP" + "^@|" + "" + "$$";
            }


            var_salesUser_Competency += "UNIT_ID" + "^@|" + 1 + "#" + "ROLE_ID" + "^@|" + 97 + "#" + "AREA" + "^@|" + "" + "#" + "EMPLOYEE_ID" + "^@|" + V_secondary_ele_Competency.val() + "#" + "IS_PRI_SEC" + "^@|" + "S" + "#" + "PRI_EMP" + "^@|" + var_emp_id_ele_Competency.val() + "$$";

        }
        document.getElementById('ctl00_ContentPlaceHolder1_hdn_SalesRegional_Dynamic').value = var_salesUser_Competency;

        /***********************************************************************************************************************************/

    }

}


/****************************************************************/
/****************************************************************/
/****************************************************************/
/*************Sales Lead ADD the dynamic fields to div**********/
function Click_SalesLead(Sales_Class) {
    var ele = $('.' + Sales_Class);

    var i;
    i = ele.length;

    var str_html = "";

    str_html += "<div class='form-group sales_class remove_app'>";
    str_html += "<label ID='lblSalesManagemntLead" + i + "' class='col-lg-3 col-sm-3 control-label userlabel'>Bid Management Lead</label>";
    str_html += " <div class='col-lg-9 col-sm-9'>";
    str_html += "   <div class='row'>";
    str_html += "     <div class='col-lg-5 col-sm-5'>";
    str_html += "     <input name='txtSalesManagemntLead' type='text' ID='txtSalesManagemntLeadPri" + i + "' class='form-control si_sd_s Admin_textbox' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSalesManagemntLeadPri" + i + "\")' />";

    str_html += "   <input name='emp_id' type='hidden' ID='txtSalesManagemntLeadPri" + i + "_hdn' />";
    str_html += "   <input  name='org_emp_id' type='hidden' ID='txtSalesManagemntLeadPri" + i + "_org_hdn' />";
    str_html += "   <input  name='cnd_emp_id' type='hidden' ID='txtSalesManagemntLeadPri" + i + "_hdn_cnd' Value='1' />";
    str_html += "   <ul id='lbSalesManagemntLeadPri" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
    str_html += "  class='serch-li'>";
    str_html += "   </ul>";
    str_html += "</div>";
    str_html += "<div class='col-lg-5 col-sm-5'>";
    str_html += "<input name='txtSalesManagemntLead_sec' type='text' id='txtSalesManagemntLeadSec" + i + "' class='form-control si_sd_s' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSalesManagemntLeadSec" + i + "\")' />";
    str_html += "  <input name='emp_id_sec' type='hidden' id='txtSalesManagemntLeadSec" + i + "_hdn'  />";
    str_html += "  <input name='org_emp_id' type='hidden' id='txtSalesManagemntLeadSec" + i + "_org_hdn' />";
    str_html += "  <input name='cnd_emp_id' type='hidden' id='txtSalesManagemntLeadSec" + i + "_hdn_cnd'  Value='1' />";
    str_html += "  <ul id='lbSalesManagemntLeadSec" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
    str_html += "      class='serch-li'>";
    str_html += "  </ul>";
    str_html += " </div>";

    str_html += "   <div class='col-lg-2 col-sm-2'>";
    //str_html += "<asp:Button ID='Button3"+i+"' class='btn btn-primary' runat='server' Text='-' />";
    str_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + i + ",this);'></span>";
    str_html += "  </div>";
    str_html += " </div>";
    str_html += "  </div>";
    str_html += " </div>";
    // alert(str_html);
    $('#ctl00_ContentPlaceHolder1_div_SalesManagemntLead').append(str_html);
}

/*************Sales Spoc ADD the dynamic fields to div**********/
function Click_Sales_Spoc(Sales_Spoc) {
    var ele1 = $('.' + Sales_Spoc);
    //alert('ele' + ele1);
    var a;

    a = ele1.length;
    // alert('a' + a);
    var str_html = "";

    str_html += "<div class='form-group sales_Team_Main remove_app'>";
    str_html += "<label ID='lblSalesManagemntLead" + a + "' class='col-lg-3 control-label userlabel'>Sales SPOC</label>";
    str_html += " <div class='col-lg-9 col-sm-9'>";
    str_html += "   <div class='row'>";
    str_html += "     <div class='col-lg-5 col-sm-5'>";
    str_html += "     <input name='txtSalesTeam' type='text' ID='txtSalesTeamPri" + a + "' class='form-control sales_Team Admin_textbox' autocomplete='off'  onkeyup='keyUPBidTeam_Admin(this,\"lbSalesTeamPri" + a + "\")' />";

    str_html += "   <input name='emp_id' type='hidden' ID='txtSalesTeamPri" + a + "_hdn' />";
    str_html += "   <input name='org_emp_id' type='hidden' ID='txtSalesTeamPri" + a + "_org_hdn' />";
    str_html += "   <input name='cnd_emp_id' type='hidden' ID='txtSalesTeamPri" + a + "_hdn_cnd' Value='1' />";
    str_html += "   <ul id='lbSalesTeamPri" + a + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
    str_html += "  class='serch-li'>";
    str_html += "   </ul>";
    str_html += "</div>";

    var b = a;
    b = b + 1;

    str_html += "<div class='col-lg-5 col-sm-5'>";
    str_html += "<input name='txtSalesTeamsec' type='text' id='txtSalesTeamSec" + b + "' class='form-control sales_Team' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSalesTeamSec" + b + "\")' />";
    str_html += "  <input name='emp_idTeamSec' type='hidden' id='txtSalesTeamSec" + b + "_hdn'  />";
    str_html += "  <input name='org_emp_id' type='hidden' id='txtSalesTeamSec" + b + "_org_hdn' />";
    str_html += "  <input name='cnd_emp_id' type='hidden' id='txtSalesTeamSec" + b + "_hdn_cnd'  Value='1' />";
    str_html += "  <ul id='lbSalesTeamSec" + b + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
    str_html += "  class='serch-li'>";
    str_html += "  </ul>";
    str_html += " </div>";

    str_html += "   <div class='col-lg-2 col-sm-2'>";
    //str_html += "<asp:Button ID='Button3"+i+"' class='btn btn-primary' runat='server' Text='-' />";

    str_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + a + ",this);'></span>";
    str_html += "  </div>";
    str_html += " </div>";
    str_html += "  </div>";
    str_html += " </div>";

    $('#ctl00_ContentPlaceHolder1_div_SalesTeam').append(str_html);

}

/*******************Delivery ADD the dynamic fields to div******************/

function Click_Delivery(Delivery_class) {

    var ele = $('.' + Delivery_class);
    //alert($('.' + Delivery_class).last().html());
    var i;
    i = ele.length;
    //alert(i);
    i = i + i;

    var str_html = "";

    str_html += "<div class='form-group Delivery_Ad_class_Main remove_app'>";
    str_html += "<label ID='lblDeliveryAdmin" + i + "' class='col-lg-2 col-sm-2 control-label userlabel'>Delivery</label>";
    str_html += " <div class='col-lg-9 col-sm-9'>";
    str_html += "   <div class='row'>";

    str_html += "<div class='col-lg-4 col-sm-4'>";
    str_html += " <select id='ddlDeliveryAreaAdmin" + i + "'  class='form-control Admin_textbox'>";
    str_html += " <option value='0'> --Select-- </option></select>";
    str_html += "</div>";

    str_html += "     <div class='col-lg-4 col-sm-4'>";
    str_html += "     <input name='txtDelivery' type='text' ID='txtDeliveryAdminPri" + i + "' class='form-control Delivery_Ad_class Admin_textbox' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbDeliveryAdminPri" + i + "\")' />";
    str_html += "   <input name='emp_id' type='hidden' ID='txtDeliveryAdminPri" + i + "_hdn' />";
    str_html += "   <input name='org_emp_id' type='hidden' ID='txtDeliveryAdminPri" + i + "_org_hdn' />";
    str_html += "   <input name='emp_id__' type='hidden' ID='txtDeliveryAdminPri" + i + "_hdn_cnd' Value='1' />";
    str_html += "   <ul id='lbDeliveryAdminPri" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
    str_html += "  class='serch-li'>";
    str_html += "   </ul>";
    str_html += "</div>";

    var b = i;
    b = b + 1;

    str_html += "<div class='col-lg-4 col-sm-4'>";
    str_html += "<input name='txtDeliverysec' type='text' id='txtDeliveryAdminSec" + b + "' class='form-control Delivery_Ad_class' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbDeliveryAdminSec" + b + "\")' />";
    str_html += "  <input name='emp_idDeliverySec' type='hidden' id='txtDeliveryAdminSec" + b + "_hdn'  />";
    str_html += "  <input name='org_emp_id' type='hidden' id='txtDeliveryAdminSec" + b + "_org_hdn' />";
    str_html += "  <input name='emp_idCnd' type='hidden' id='txtDeliveryAdminSec" + b + "_hdn_cnd'  Value='1' />";
    str_html += "  <ul id='lbDeliveryAdminSec" + b + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
    str_html += "      class='serch-li'>";
    str_html += "  </ul>";
    str_html += "  </div>";


    str_html += "  </div>";

    str_html += " </div>";


    str_html += "   <div class='col-lg-1 col-sm-1'>";
    str_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + i + ",this);'></span>";
    str_html += " </div>";
    str_html += " </div>";


    AddDelivery_DDL("ddlDeliveryAreaAdmin" + i, "");


    $('#ctl00_ContentPlaceHolder1_AddDelivery_Server_Div').append(str_html);

}


/*******************Competency ADD the dynamic fields to div******************/

function Click_Competency(Competency_class) {
    var ele = $('.' + Competency_class);

    var i;
    i = ele.length;
    i = i + i;
    var str_html = "";

    str_html += "<div class='form-group AddCompetency_class_Main remove_app'>";
    str_html += "<label ID='lblCompetencyAdmin" + i + "' class='col-lg-2 col-sm-2 control-label userlabel'>Competency</label>";
    str_html += " <div class='col-lg-9 col-sm-9'>";
    str_html += "   <div class='row'>";

    str_html += "<div class='col-lg-4 col-sm-4'>";
    str_html += " <select id='ddlCompetencyAdmin" + i + "'  class='form-control Admin_textbox'>";
    str_html += " <option value='0'> --Select-- </option>";
    str_html += " </select>";
    str_html += "</div>";

    str_html += "     <div class='col-lg-4 col-sm-4'>";
    str_html += "     <input name='txtCompetency' type='text' ID='txtCompetencyAdminPri" + i + "' class='form-control AddCompetency_class Admin_textbox' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbCompetencyAdminPri" + i + "\")' />";

    str_html += "   <input name='emp_id' type='hidden' ID='txtCompetencyAdminPri" + i + "_hdn' />";
    str_html += "   <input name='org_emp_id' type='hidden' ID='txtCompetencyAdminPri" + i + "_org_hdn' />";
    str_html += "   <input name='cnd_emp_id' type='hidden' ID='txtCompetencyAdminPri" + i + "_hdn_cnd' Value='1' />";
    str_html += "   <ul id='lbCompetencyAdminPri" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
    str_html += "  class='serch-li'>";
    str_html += "   </ul>";
    str_html += "</div>";

    var b = i;
    b = b + 1;


    str_html += "<div class='col-lg-4 col-sm-4'>";
    str_html += "<input name='txtCompetencysec' type='text' id='txtCompetencyAdminSec" + b + "' class='form-control AddCompetency_class' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbCompetencyAdminSec" + b + "\")' />";
    str_html += "  <input name='emp_idCompetencySec' type='hidden' id='txtCompetencyAdminSec" + b + "_hdn'  />";
    str_html += "  <input name='org_emp_id' type='hidden' id='txtCompetencyAdminSec" + b + "_org_hdn' />";
    str_html += "  <input name='cnd_emp_id' type='hidden' id='txtCompetencyAdminSec" + b + "_hdn_cnd'  Value='1' />";
    str_html += "  <ul id='lbCompetencyAdminSec" + b + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
    str_html += "      class='serch-li'>";
    str_html += "  </ul>";
    str_html += " </div>";


    str_html += " </div>";
    str_html += "  </div>";

    str_html += "   <div class='col-lg-1 col-sm-1'>";
    str_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + i + ",this);'></span>";
    str_html += " </div>";
    str_html += " </div>";

    AddCompeteoncy_DDL("ddlCompetencyAdmin" + i, "");
    //0Add_Competancy_Div.InnerHtml = str_html;
    $('#ctl00_ContentPlaceHolder1_Add_Competancy_Div').append(str_html);

}

/*******************SBU Head ADD the dynamic fields to div******************/
function Click_SBUHead(SBUHead_class) {
    var ele = $('.' + SBUHead_class);

    var i;
    i = ele.length;
    var str_html = "";

    str_html += "<div class='form-group AddSBUHead_class_Main remove_app'>";
    str_html += "<label ID='lblSBUHead_Admin" + i + "' class='col-lg-2 col-sm-2 control-label userlabel'>SBU Head</label>";
    str_html += " <div class='col-lg-9 col-sm-9'>";
    str_html += "   <div class='row'>";
    str_html += "     <div class='col-lg-4 col-sm-4'></div>";

    str_html += "     <div class='col-lg-4 col-sm-4'>";
    str_html += "     <input name='txtCompetency' type='text' ID='txtSBUHead_AdminPri" + i + "' class='form-control AddSBUHead_class Admin_textbox' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSBUHead_AdminPri" + i + "\")' />";

    str_html += "   <input name='emp_id' type='hidden' ID='txtSBUHead_AdminPri" + i + "_hdn' />";
    str_html += "   <input name='org_emp_id' type='hidden' ID='txtSBUHead_AdminPri" + i + "_org_hdn' />";
    str_html += "   <input name='cnd_emp_id' type='hidden' ID='txtSBUHead_AdminPri" + i + "_hdn_cnd' Value='1' />";
    str_html += "   <ul id='lbSBUHead_AdminPri" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
    str_html += "  class='serch-li'>";
    str_html += "   </ul>";
    str_html += "</div>";
    str_html += "<div class='col-lg-4 col-sm-4'>";
    str_html += "<input name='txtCompetencysec' type='text' id='txtSBUHead_AdminSec" + i + "' class='form-control AddSBUHead_class' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSBUHead_AdminSec" + i + "\")' />";
    str_html += "  <input name='emp_idCompetencySec' type='hidden' id='txtSBUHead_AdminSec" + i + "_hdn'  />";
    str_html += "  <input name='org_emp_id' type='hidden' id='txtSBUHead_AdminSec" + i + "_org_hdn' />";
    str_html += "  <input name='cnd_emp_id' type='hidden' id='txtSBUHead_AdminSec" + i + "_hdn_cnd'  Value='1' />";
    str_html += "  <ul id='lbSBUHead_AdminSec" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
    str_html += "      class='serch-li'>";
    str_html += "  </ul>";
    str_html += " </div>";

    str_html += " </div>";
    str_html += "  </div>";

    str_html += "<div class='col-lg-1 col-sm-1'>";
    str_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + i + ",this);'></span>";
    str_html += "</div>";

    str_html += " </div>";

    $('#ctl00_ContentPlaceHolder1_Add_SBUhead_div').append(str_html);

}

/**************SBU Finance Head************/

function Click_SBUFinanceHead(SBUFinanceHead_class) {
    var ele = $('.' + SBUFinanceHead_class);

    var i;
    i = ele.length;
    var str_html = "";

    str_html += "<div class='form-group SBUFinanceHead_class_Main remove_app'>";
    str_html += "<label ID='lblSBUFianaceHead_Admin" + i + "' class='col-lg-2 col-sm-2 control-label userlabel'>SBU Finance Head</label>";
    str_html += " <div class='col-lg-9 col-sm-9'>";
    str_html += "   <div class='row'>";

    str_html += "     <div class='col-lg-4 col-sm-4'></div>";
    str_html += "     <div class='col-lg-4 col-sm-4'>";
    str_html += "     <input name='txtCompetency' type='text' ID='txtSBUFianaceHead_AdminPri" + i + "' class='form-control SBUFinanceHead_class Admin_textbox' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSBUFianaceHead_AdminPri" + i + "\")' />";

    str_html += "   <input name='emp_id' type='hidden' ID='txtSBUFianaceHead_AdminPri" + i + "_hdn' />";
    str_html += "   <input name='org_emp_id' type='hidden' ID='txtSBUFianaceHead_AdminPri" + i + "_org_hdn' />";
    str_html += "   <input name='cnd_emp_id' type='hidden' ID='txtSBUFianaceHead_AdminPri" + i + "_hdn_cnd' Value='1' />";
    str_html += "   <ul id='lbSBUFianaceHead_AdminPri" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
    str_html += "  class='serch-li'>";
    str_html += "   </ul>";
    str_html += "</div>";
    str_html += "<div class='col-lg-4 col-sm-4'>";
    str_html += "<input name='txtCompetency_sec' type='text' id='txtSBUFianaceHead_AdminSec" + i + "' class='form-control SBUFinanceHead_class' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSBUFianaceHead_AdminSec" + i + "\")' />";
    str_html += "  <input name='emp_idCompetencySec' type='hidden' id='txtSBUFianaceHead_AdminSec" + i + "_hdn'  />";
    str_html += "  <input name='org_emp_id' type='hidden' id='txtSBUFianaceHead_AdminSec" + i + "_org_hdn' />";
    str_html += "  <input name='cnd_emp_id' type='hidden' id='txtSBUFianaceHead_AdminSec" + i + "_hdn_cnd'  Value='1' />";
    str_html += "  <ul id='lbSBUFianaceHead_AdminSec" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
    str_html += "      class='serch-li'>";
    str_html += "  </ul>";
    str_html += " </div>";

    str_html += " </div>";
    str_html += "  </div>";

    str_html += "<div class='col-lg-1 col-sm-1'>";
    str_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + i + ",this);'></span>";
    str_html += "</div>";

    str_html += " </div>";

    // Add_SBUFianaceHead_div.InnerHtml = str_html;

    $('#ctl00_ContentPlaceHolder1_Add_SBUFianaceHead_div').append(str_html);
}


/*************Sr.Management Add dynamic functionality***********/

function Click_SrManagement(SrManagement_class) {
    var ele = $('.' + SrManagement_class);

    var i;
    i = ele.length;
    var str_html = "";

    str_html += "<div class='form-group SrManagement_class_Main remove_app'>";
    str_html += "<label ID='lblSr_Management_Admin" + i + "' class='col-lg-2 col-sm-2 control-label userlabel'>Sr. Management</label>";
    str_html += " <div class='col-lg-9 col-sm-9'>";
    str_html += "   <div class='row'>";
    str_html += "     <div class='col-lg-4 col-sm-4'></div>";

    str_html += "     <div class='col-lg-4 col-sm-4'>";
    str_html += "     <input name='txtSrManagementPri' type='text' ID='txtSr_Management_AdminPri" + i + "' class='form-control SrManagement_class Admin_textbox' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSr_Management_AdminPri" + i + "\")' />";

    str_html += "   <input name='emp_idSrManagementPri'  type='hidden' ID='txtSr_Management_AdminPri" + i + "_hdn' />";
    str_html += "   <input name='org_emp_id' type='hidden' ID='txtSr_Management_AdminPri" + i + "_org_hdn' />";
    str_html += "   <input name='cnd_emp_id' type='hidden' ID='txtSr_Management_AdminPri" + i + "_hdn_cnd' Value='1' />";
    str_html += "   <ul id='lbSr_Management_AdminPri" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
    str_html += "  class='serch-li'>";
    str_html += "   </ul>";
    str_html += "</div>";
    str_html += "<div class='col-lg-4 col-sm-4'>";
    str_html += "<input name='txtSrManagementSec' type='text' id='txtSr_Management_AdminSec" + i + "' class='form-control SrManagement_class' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSr_Management_AdminSec" + i + "\")' />";
    str_html += "  <input name='emp_idSrManagementSec' type='hidden' id='txtSr_Management_AdminSec" + i + "_hdn'  />";
    str_html += "  <input name='org_emp_id' type='hidden' id='txtSr_Management_AdminSec" + i + "_org_hdn' />";
    str_html += "  <input name='cnd_emp_id' type='hidden' id='txtSr_Management_AdminSec" + i + "_hdn_cnd'  Value='1' />";
    str_html += "  <ul id='lbSr_Management_AdminSec" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
    str_html += "      class='serch-li'>";
    str_html += "  </ul>";
    str_html += " </div>";


    str_html += " </div>";
    str_html += "  </div>";

    str_html += "<div class='col-lg-1 col-sm-1'>";
    str_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + i + ",this);'></span>";
    str_html += "</div>";

    str_html += " </div>";

    // Add_SrManagement.InnerHtml = str_html;

    $('#ctl00_ContentPlaceHolder1_Add_SrManagement').append(str_html);
}

/*******************SBU Delivery Head ADD the dynamic fields to div******************/
function Click_SBUDelHead(SBUDelHead_class) {
    var ele = $('.' + SBUDelHead_class);

    var i;
    i = ele.length;
    var str_html = "";

    str_html += "<div class='form-group AddSBUDelHead_class_Main remove_app'>";
    str_html += "<label ID='lblSBUDelHead_Admin" + i + "' class='col-lg-2 col-sm-2 control-label userlabel'>SBU Delivery Head</label>";
    str_html += " <div class='col-lg-9 col-sm-9'>";
    str_html += "   <div class='row'>";
    str_html += "     <div class='col-lg-4 col-sm-4'></div>";

    str_html += "     <div class='col-lg-4 col-sm-4'>";
    str_html += "     <input name='txtCompetency' type='text' ID='txtSBUDelHead_AdminPri" + i + "' class='form-control AddSBUDelHead_class Admin_textbox' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSBUDelHead_AdminPri" + i + "\")' />";

    str_html += "   <input name='emp_id' type='hidden' ID='txtSBUDelHead_AdminPri" + i + "_hdn' />";
    str_html += "   <input name='org_emp_id' type='hidden' ID='txtSBUDelHead_AdminPri" + i + "_org_hdn' />";
    str_html += "   <input name='cnd_emp_id' type='hidden' ID='txtSBUDelHead_AdminPri" + i + "_hdn_cnd' Value='1' />";
    str_html += "   <ul id='lbSBUDelHead_AdminPri" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
    str_html += "  class='serch-li'>";
    str_html += "   </ul>";
    str_html += "</div>";
    str_html += "<div class='col-lg-4 col-sm-4'>";
    str_html += "<input name='txtCompetencysec' type='text' id='txtSBUDelHead_AdminSec" + i + "' class='form-control AddSBUDelHead_class' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lbSBUDelHead_AdminSec" + i + "\")' />";
    str_html += "  <input name='emp_idCompetencySec' type='hidden' id='txtSBUDelHead_AdminSec" + i + "_hdn'  />";
    str_html += "  <input name='org_emp_id' type='hidden' id='txtSBUDelHead_AdminSec" + i + "_org_hdn' />";
    str_html += "  <input name='cnd_emp_id' type='hidden' id='txtSBUDelHead_AdminSec" + i + "_hdn_cnd'  Value='1' />";
    str_html += "  <ul id='lbSBUDelHead_AdminSec" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
    str_html += "      class='serch-li'>";
    str_html += "  </ul>";
    str_html += " </div>";

    str_html += " </div>";
    str_html += "  </div>";

    str_html += "<div class='col-lg-1 col-sm-1'>";
    str_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + i + ",this);'></span>";
    str_html += "</div>";

    str_html += " </div>";

    $('#ctl00_ContentPlaceHolder1_Add_SBUDelhead_div').append(str_html);

}



/*******************Sales Regional Head ADD the dynamic fields to div******************/

function Click_SalesRegional(SalesRegional_class) {
    var ele = $('.' + SalesRegional_class);

    var i;
    i = ele.length;
    var str_html = "";

    str_html += "<div class='form-group SalesRegional_class_Main remove_app'>";
    str_html += "<label ID='lblSalesRegional" + i + "' class='col-lg-2 col-sm-2 control-label userlabel'>Sales Regional Head</label>";
    str_html += " <div class='col-lg-9 col-sm-9'>";
    str_html += "   <div class='row'>";
    str_html += "     <div class='col-lg-4 col-sm-4'></div>";

    str_html += "     <div class='col-lg-4 col-sm-4'>";
    str_html += "     <input name='txtSalesRegionalPri' type='text' ID='txtSalesRegionalPri" + i + "' class='form-control AddSalesRegional_class Admin_textbox' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lblSalesRegionalpri" + i + "\")' />";
    str_html += "   <input name='emp_idSalesRegionalPri' type='hidden' ID='txtSalesRegionalPri" + i + "_hdn' />";
    str_html += "   <input name='org_emp_id' type='hidden' ID='txtSalesRegionalPri" + i + "_org_hdn' />";
    str_html += "   <input name='cnd_emp_id' type='hidden' ID='txtSalesRegionalPri" + i + "_hdn_cnd' Value='1' />";
    str_html += "   <ul id='lblSalesRegionalpri" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
    str_html += "class='serch-li'>";
    str_html += "</ul>";
    str_html += "</div>";

    str_html += "<div class='col-lg-4 col-sm-4'>";
    str_html += "<input name='txtSalesRegionalSec' type='text' id='txtSalesRegionalSec" + i + "' class='form-control AddSalesRegional_class' autocomplete='off' onkeyup='keyUPBidTeam_Admin(this,\"lblSalesRegionalSec" + i + "\")' />";
    str_html += "  <input name='emp_idSalesRegionalSec' type='hidden' id='txtSalesRegionalSec" + i + "_hdn'  />";
    str_html += "  <input name='org_emp_id' type='hidden' id='txtSalesRegionalSec" + i + "_org_hdn' />";
    str_html += "  <input name='cnd_emp_id' type='hidden' id='txtSalesRegionalSec" + i + "_hdn_cnd'  Value='1' />";
    str_html += "  <ul id='lblSalesRegionalSec" + i + "' style='display: none; background-color: #f8fcee; list-style-type: none'";
    str_html += "      class='serch-li'>";
    str_html += "  </ul>";
    str_html += " </div>";

    str_html += " </div>";
    str_html += "  </div>";

    str_html += "<div class='col-lg-1 col-sm-1'>";
    str_html += "<span  class='glyphicon glyphicon-minus' style='cursor:pointer;' onclick='remove_afterappend(" + i + ",this);'></span>";
    str_html += "</div>";
    str_html += " </div>";

    $('#ctl00_ContentPlaceHolder1_AddSalesRegional_Div').append(str_html);

}


/*after bind the row delete functionality*/
function remove_afterappend(i, obj) {
    //alert(i);
    $('.remove_app' + (i)).remove();
    $(obj).parent().closest('.remove_app').remove();

}








/**********************************************************/
/**********************************************************/
/**********************************************************/
/**********************************************************/
/***************************Date Time*******************************/

/*************************************************************************************************************************************************/
function ResetRedColorBorder_Time() {
    // $('#ctl00_ContentPlaceHolder1_txtLegalPrimary').css('border-color', 'lightgray');

    $('#ctl00_ContentPlaceHolder1_txtDateWeek1Govt').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtDateWeek1_NonGovt').css('border-color', 'lightgray');

    $('#ctl00_ContentPlaceHolder1_txtDateWeek2Govt').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtDateWeek2_NonGovt').css('border-color', 'lightgray');

    $('#ctl00_ContentPlaceHolder1_txtDateWeek3Govt').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtDateWeek3_NonGovt').css('border-color', 'lightgray');

    $('#ctl00_ContentPlaceHolder1_txtDateWeek4Govt').css('border-color', 'lightgray');
    $('#ctl00_ContentPlaceHolder1_txtDateWeek4_NonGovt').css('border-color', 'lightgray');

    // $("#ctl00_ContentPlaceHolder1_ddlweek1_from_gov option:selected").css('border-color', 'lightgray');

    $("#ctl00_ContentPlaceHolder1_ddlweek1_from_gov").css('border-color', 'lightgray');
    $("#ctl00_ContentPlaceHolder1_ddlweek1_to_gov").css('border-color', 'lightgray');
    $("#ctl00_ContentPlaceHolder1_ddlweek1_from_ngov").css('border-color', 'lightgray');
    $("#ctl00_ContentPlaceHolder1_ddlweek1_to_ngov").css('border-color', 'lightgray');

    $("#ctl00_ContentPlaceHolder1_ddlweek2_from_gov").css('border-color', 'lightgray');
    $("#ctl00_ContentPlaceHolder1_ddlweek2_to_gov").css('border-color', 'lightgray');
    $("#ctl00_ContentPlaceHolder1_ddlweek2_from_ngov").css('border-color', 'lightgray');
    $("#ctl00_ContentPlaceHolder1_ddlweek2_to_ngov").css('border-color', 'lightgray');

    $("#ctl00_ContentPlaceHolder1_ddlweek3_from_gov").css('border-color', 'lightgray');
    $("#ctl00_ContentPlaceHolder1_ddlweek3_to_gov").css('border-color', 'lightgray');
    $("#ctl00_ContentPlaceHolder1_ddlweek3_from_ngov").css('border-color', 'lightgray');
    $("#ctl00_ContentPlaceHolder1_ddlweek3_to_ngov").css('border-color', 'lightgray');

    $("#ctl00_ContentPlaceHolder1_ddlweek4_from_gov").css('border-color', 'lightgray');
    $("#ctl00_ContentPlaceHolder1_ddlweek4_to_gov").css('border-color', 'lightgray');
    $("#ctl00_ContentPlaceHolder1_ddlweek4_from_ngov").css('border-color', 'lightgray');
    $("#ctl00_ContentPlaceHolder1_ddlweek4_to_ngov").css('border-color', 'lightgray');
}

function ValidateDateTime() {
    $("#ctl00_ContentPlaceHolder1_lblErrMsg").empty();
    ResetRedColorBorder_Time();

    var txtDateWeek1Govt = $('#ctl00_ContentPlaceHolder1_txtDateWeek1Govt').val().trim();
    var txtDateWeek1_NonGovt = $('#ctl00_ContentPlaceHolder1_txtDateWeek1_NonGovt').val().trim();

    var txtDateWeek2Govt = $('#ctl00_ContentPlaceHolder1_txtDateWeek2Govt').val().trim();
    var txtDateWeek2_NonGovt = $('#ctl00_ContentPlaceHolder1_txtDateWeek2_NonGovt').val().trim();

    var txtDateWeek3Govt = $('#ctl00_ContentPlaceHolder1_txtDateWeek3Govt').val().trim();
    var txtDateWeek3_NonGovt = $('#ctl00_ContentPlaceHolder1_txtDateWeek3_NonGovt').val().trim();

    var txtDateWeek4Govt = $('#ctl00_ContentPlaceHolder1_txtDateWeek4Govt').val().trim();
    var txtDateWeek4_NonGovt = $('#ctl00_ContentPlaceHolder1_txtDateWeek4_NonGovt').val().trim();

    var val_ddl_adjust_cls = $("#ctl00_ContentPlaceHolder1_ddlweek1_from_gov option:selected").val();
    var val_ddl_adjust_cls1 = $("#ctl00_ContentPlaceHolder1_ddlweek1_to_gov option:selected").val();
    var val_ddl_adjust_cls2 = $("#ctl00_ContentPlaceHolder1_ddlweek1_from_ngov option:selected").val();
    var val_ddl_adjust_cls3 = $("#ctl00_ContentPlaceHolder1_ddlweek1_to_ngov option:selected").val();

    var val_ddl_adjust_cls4 = $("#ctl00_ContentPlaceHolder1_ddlweek2_from_gov option:selected").val();
    var val_ddl_adjust_cls5 = $("#ctl00_ContentPlaceHolder1_ddlweek2_to_gov option:selected").val();
    var val_ddl_adjust_cls6 = $("#ctl00_ContentPlaceHolder1_ddlweek2_from_ngov option:selected").val();
    var val_ddl_adjust_cls7 = $("#ctl00_ContentPlaceHolder1_ddlweek2_to_ngov option:selected").val();

    var val_ddl_adjust_cls8 = $("#ctl00_ContentPlaceHolder1_ddlweek3_from_gov option:selected").val();
    var val_ddl_adjust_cls9 = $("#ctl00_ContentPlaceHolder1_ddlweek3_to_gov option:selected").val();
    var val_ddl_adjust_cls10 = $("#ctl00_ContentPlaceHolder1_ddlweek3_from_ngov option:selected").val();
    var val_ddl_adjust_cls11 = $("#ctl00_ContentPlaceHolder1_ddlweek3_to_ngov option:selected").val();

    var val_ddl_adjust_cls12 = $("#ctl00_ContentPlaceHolder1_ddlweek4_from_gov option:selected").val();
    var val_ddl_adjust_cls13 = $("#ctl00_ContentPlaceHolder1_ddlweek4_to_gov option:selected").val();
    var val_ddl_adjust_cls14 = $("#ctl00_ContentPlaceHolder1_ddlweek4_from_ngov option:selected").val();
    var val_ddl_adjust_cls15 = $("#ctl00_ContentPlaceHolder1_ddlweek4_to_ngov option:selected").val();

    /***********todays date get **********/
    var val_today_date = $("#ctl00_ContentPlaceHolder1_hdn_todays_date").val();

    val_today_date = val_today_date.replace(/-/g, ' ');
    var today_date_cvnt = new Date(val_today_date);
    var val_dd_tdy = today_date_cvnt.format('dd-MMM-yyyy');

    /*************************************/

    if (txtDateWeek1Govt == "") {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Govt date for week one.");
        $('#ctl00_ContentPlaceHolder1_txtDateWeek1Govt').css('border-color', 'red');

        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);
        return false;
    }
    else if (txtDateWeek1_NonGovt == "") {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select NonGovt date for week one.");
        $('#ctl00_ContentPlaceHolder1_txtDateWeek1_NonGovt').css('border-color', 'red');

        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);
        return false;
    }
    else if (txtDateWeek2Govt == "") {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Govt date for week two.");
        $('#ctl00_ContentPlaceHolder1_txtDateWeek2Govt').css('border-color', 'red');

        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);
        return false;
    }
    else if (txtDateWeek2_NonGovt == "") {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select NonGovt date for week two.");
        $('#ctl00_ContentPlaceHolder1_txtDateWeek2_NonGovt').css('border-color', 'red');

        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);
        return false;
    }
    else if (txtDateWeek3Govt == "") {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Govt date for week three.");
        $('#ctl00_ContentPlaceHolder1_txtDateWeek3Govt').css('border-color', 'red');

        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);
        return false;
    }

    else if (txtDateWeek3_NonGovt == "") {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select NonGovt date for week three.");
        $('#ctl00_ContentPlaceHolder1_txtDateWeek3_NonGovt').css('border-color', 'red');

        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);
        return false;
    }

    else if (txtDateWeek4Govt == "") {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Govt date for week four.");
        $('#ctl00_ContentPlaceHolder1_txtDateWeek4Govt').css('border-color', 'red');

        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);
        return false;
    }

    else if (txtDateWeek4_NonGovt == "") {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select NonGovt date for week four.");
        $('#ctl00_ContentPlaceHolder1_txtDateWeek4_NonGovt').css('border-color', 'red');

        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);
        return false;
    }

    /****************************************************/
    else if (val_ddl_adjust_cls == "0") {

        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Time for week one.");
        $("#ctl00_ContentPlaceHolder1_ddlweek1_from_gov").css('border-color', 'red');

        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);
        return false;

    }

    else if (val_ddl_adjust_cls1 == "0") {

        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Time for week one.");
        $("#ctl00_ContentPlaceHolder1_ddlweek1_to_gov").css('border-color', 'red');

        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);
        return false;

    }
    else if (val_ddl_adjust_cls2 == "0") {

        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Time for week one.");
        $("#ctl00_ContentPlaceHolder1_ddlweek1_from_ngov").css('border-color', 'red');

        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);
        return false;

    }
    else if (val_ddl_adjust_cls3 == "0") {

        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Time for week one.");
        $("#ctl00_ContentPlaceHolder1_ddlweek1_to_ngov").css('border-color', 'red');

        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);
        return false;

    }
    else if (val_ddl_adjust_cls4 == "0") {

        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Time for week two.");
        $("#ctl00_ContentPlaceHolder1_ddlweek2_from_gov").css('border-color', 'red');

        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);
        return false;
    }
    else if (val_ddl_adjust_cls5 == "0") {

        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Time for week two.");
        $("#ctl00_ContentPlaceHolder1_ddlweek2_to_gov").css('border-color', 'red');
        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);
        return false;
    }
    else if (val_ddl_adjust_cls6 == "0") {

        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Time for week two.");
        $("#ctl00_ContentPlaceHolder1_ddlweek2_from_ngov").css('border-color', 'red');
        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);
        return false;
    }
    else if (val_ddl_adjust_cls7 == "0") {

        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Time for week two.");
        $("#ctl00_ContentPlaceHolder1_ddlweek2_to_ngov").css('border-color', 'red');
        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);
        return false;

    }
    else if (val_ddl_adjust_cls8 == "0") {

        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Time for week three.");
        $("#ctl00_ContentPlaceHolder1_ddlweek3_from_gov").css('border-color', 'red');
        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);
        return false;
    }
    else if (val_ddl_adjust_cls9 == "0") {

        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Time for week three.");
        $("#ctl00_ContentPlaceHolder1_ddlweek3_to_gov").css('border-color', 'red');
        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);
        return false;
    }
    else if (val_ddl_adjust_cls10 == "0") {

        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Time for week three.");
        $("#ctl00_ContentPlaceHolder1_ddlweek3_from_ngov").css('border-color', 'red');
        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);
        return false;
    }
    else if (val_ddl_adjust_cls11 == "0") {

        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Time for week three.");
        $("#ctl00_ContentPlaceHolder1_ddlweek3_to_ngov").css('border-color', 'red');

        //        $("html, body").animate({
        //            scrollTop: 0
        //        }, 600);

        return false;
    }

    else if (val_ddl_adjust_cls12 == "0") {

        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Time for week four.");
        $("#ctl00_ContentPlaceHolder1_ddlweek4_from_gov").css('border-color', 'red');
        return false;
    }
    else if (val_ddl_adjust_cls13 == "0") {

        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Time for week four.");
        $("#ctl00_ContentPlaceHolder1_ddlweek4_to_gov").css('border-color', 'red');

        return false;
    }
    else if (val_ddl_adjust_cls14 == "0") {

        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Time for week four.");
        $("#ctl00_ContentPlaceHolder1_ddlweek4_from_ngov").css('border-color', 'red');

        return false;
    }
    else if (val_ddl_adjust_cls15 == "0") {

        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Please select Time for week four.");
        $("#ctl00_ContentPlaceHolder1_ddlweek4_to_ngov").css('border-color', 'red');

        return false;
    }

    /*************************************************************/
    var val_date_fields = txtDateWeek1Govt + ',' + txtDateWeek1_NonGovt +
     ',' + txtDateWeek2Govt + ',' + txtDateWeek2_NonGovt + ',' +
    txtDateWeek3Govt + ',' + txtDateWeek3_NonGovt + ','
    + txtDateWeek4Govt + ',' + txtDateWeek4_NonGovt;

    var Array_Date = [];

    var splt_data_date = val_date_fields.split(',');

    for (var c = 0; c < splt_data_date.length; c++) {
        Array_Date.push(splt_data_date[c]);
    }

    //*****************************Priyanka ***************
    var hdn_hidden = $('#ctl00_ContentPlaceHolder1_hdn_Is_Todays_Date').val();
    var hdn_serverdate = $('#ctl00_ContentPlaceHolder1_hdn_todays_date').val();
    //alert(hdn_serverdate);

    hdn_serverdate = hdn_serverdate.replace(/-/g, ' ');
    var serverdate = new Date(hdn_serverdate);
    var serverdt = serverdate.getDate();
    var servermonth = serverdate.getMonth();
    var serveryear = serverdate.getYear();

    //Array_Date[0] = Array_Date[0].replace("-", " ");
    Array_Date[0] = Array_Date[0].replace(/-/g, ' ');
    Array_Date[1] = Array_Date[1].replace(/-/g, ' ');
    Array_Date[2] = Array_Date[2].replace(/-/g, ' ');
    Array_Date[3] = Array_Date[3].replace(/-/g, ' ');
    Array_Date[4] = Array_Date[4].replace(/-/g, ' ');
    Array_Date[5] = Array_Date[5].replace(/-/g, ' ');
    Array_Date[6] = Array_Date[6].replace(/-/g, ' ');
    Array_Date[7] = Array_Date[7].replace(/-/g, ' ');

    var week1gov_mnt = new Date(Array_Date[0]).getMonth();
    var week1nongov_mnt = new Date(Array_Date[1]).getMonth();
    var week2gov_mnt = new Date(Array_Date[2]).getMonth();
    var week2nongov_mnt = new Date(Array_Date[3]).getMonth();
    var week3gov_mnt = new Date(Array_Date[4]).getMonth();
    var week3nongov_mnt = new Date(Array_Date[5]).getMonth();
    var week4gov_mnt = new Date(Array_Date[6]).getMonth();
    var week4nongov_mnt = new Date(Array_Date[7]).getMonth();

    var week1gov_yr = new Date(Array_Date[0]).getYear();
    var week1nongov_yr = new Date(Array_Date[1]).getYear();
    var week2gov_yr = new Date(Array_Date[2]).getYear();
    var week2nongov_yr = new Date(Array_Date[3]).getYear();
    var week3gov_yr = new Date(Array_Date[4]).getYear();
    var week3nongov_yr = new Date(Array_Date[5]).getYear();
    var week4gov_yr = new Date(Array_Date[6]).getYear();
    var week4nongov_yr = new Date(Array_Date[7]).getYear();

    /*Vailidation current month and year */
    if ((hdn_hidden == "N") && (servermonth != week1gov_mnt || serveryear != week1gov_yr)) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Date should be in current month and year.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek1Govt").css('border-color', 'red');
        return false;
    }
    else if (hdn_hidden == "N" && (servermonth != week1nongov_mnt || serveryear != week1nongov_yr)) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Date should be in current month and year.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek1_NonGovt").css('border-color', 'red');
        return false;
    }
    else if (hdn_hidden == "N" && (servermonth != week2gov_mnt || serveryear != week2gov_yr)) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Date should be in current month and year.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek2Govt").css('border-color', 'red');
        return false;
    }
    else if (hdn_hidden == "N" && (servermonth != week2nongov_mnt || serveryear != week2gov_yr)) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Date should be in current month and year.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek2_NonGovt").css('border-color', 'red');
        return false;
    }
    else if (hdn_hidden == "N" && (servermonth != week3gov_mnt || serveryear != week3gov_yr)) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Date should be in current month and year.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek3Govt").css('border-color', 'red');
        return false;
    }
    else if (hdn_hidden == "N" && (servermonth != week3nongov_mnt || serveryear != week3nongov_yr)) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("All dates should be in current month and year.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek3_NonGovt").css('border-color', 'red');
        return false;
    }
    else if (hdn_hidden == "N" && (servermonth != week4gov_mnt || serveryear != week4gov_yr)) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Date should be in current month and year.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek4Govt").css('border-color', 'red');
        return false;
    }
    else if (hdn_hidden == "N" && (servermonth != week4nongov_mnt || serveryear != week4nongov_yr)) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Date should be in current month and year.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek4_NonGovt").css('border-color', 'red');
        return false;
    }

    /*Vailidation for 31 dec */

    if ((hdn_hidden == "Y" && serverdt == "31" && servermonth == "11")) {
        if ("0" != week1gov_mnt || (serveryear + 1) != week1gov_yr) {
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("All date should be select from next month and next year.");
            $("#ctl00_ContentPlaceHolder1_txtDateWeek1Govt").css('border-color', 'red');
            //alert(servermonth + " " + week1gov_mnt);
            return false;
        }
        else if ("0" != week1nongov_mnt || (serveryear + 1) != week1nongov_yr) {
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("All date should be select from next month and next year.");
            $("#ctl00_ContentPlaceHolder1_txtDateWeek1_NonGovt").css('border-color', 'red');
            return false;
        }
        else if ("0" != week2gov_mnt || (serveryear + 1) != week2gov_yr) {
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("All date should be select from next month and next year.");
            $("#ctl00_ContentPlaceHolder1_txtDateWeek2Govt").css('border-color', 'red');
            return false;
        }
        else if ("0" != week2nongov_mnt || (serveryear + 1) != week2nongov_yr) {
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("All date should be select from next month and next year.");
            $("#ctl00_ContentPlaceHolder1_txtDateWeek2_NonGovt").css('border-color', 'red');
            return false;
        }
        else if ("0" != week3gov_mnt || (serveryear + 1) != week3gov_yr) {
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("All date should be select from next month and next year.");
            $("#ctl00_ContentPlaceHolder1_txtDateWeek3Govt").css('border-color', 'red');
            return false;
        }
        else if ("0" != week3nongov_mnt || (serveryear + 1) != week3nongov_yr) {
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("All date should be select from next month and next year.");
            $("#ctl00_ContentPlaceHolder1_txtDateWeek3_NonGovt").css('border-color', 'red');
            return false;
        }
        else if ("0" != week4gov_mnt || (serveryear + 1) != week4gov_yr) {
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("All date should be select from next month and next year.");
            $("#ctl00_ContentPlaceHolder1_txtDateWeek4Govt").css('border-color', 'red');
            return false;
        }
        else if ("0" != week4nongov_mnt || (serveryear + 1) != week4nongov_yr) {
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("All date should be select from next month and next year.");
            $("#ctl00_ContentPlaceHolder1_txtDateWeek4_NonGovt").css('border-color', 'red');
            return false;
        }
    }
    /*Vailidation for next month */
    else {
        if (hdn_hidden == "Y" && ((servermonth + 1) != week1gov_mnt || serveryear != week1gov_yr)) {
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("All date should be select from next month and current year.");
            $("#ctl00_ContentPlaceHolder1_txtDateWeek1Govt").css('border-color', 'red');
            return false;
        }
        else if (hdn_hidden == "Y" && ((servermonth + 1) != week1nongov_mnt || serveryear != week1nongov_yr)) {
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("All date should be select from next month and current year.");
            $("#ctl00_ContentPlaceHolder1_txtDateWeek1_NonGovt").css('border-color', 'red');
            return false;
        }
        else if (hdn_hidden == "Y" && ((servermonth + 1) != week2gov_mnt || serveryear != week2gov_yr)) {
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("All date should be select from next month and current year.");
            $("#ctl00_ContentPlaceHolder1_txtDateWeek2Govt").css('border-color', 'red');
            return false;
        }
        else if (hdn_hidden == "Y" && ((servermonth + 1) != week2nongov_mnt || serveryear != week2nongov_yr)) {
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("All date should be select from next month and current year.");
            $("#ctl00_ContentPlaceHolder1_txtDateWeek2_NonGovt").css('border-color', 'red');
            return false;
        }
        else if (hdn_hidden == "Y" && ((servermonth + 1) != week3gov_mnt || serveryear != week3gov_yr)) {
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("All date should be select from next month and current year.");
            $("#ctl00_ContentPlaceHolder1_txtDateWeek3Govt").css('border-color', 'red');
            return false;
        }
        else if (hdn_hidden == "Y" && ((servermonth + 1) != week3nongov_mnt || serveryear != week3nongov_yr)) {
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("All date should be select from next month and current year.");
            $("#ctl00_ContentPlaceHolder1_txtDateWeek3_NonGovt").css('border-color', 'red');
            return false;
        }
        else if (hdn_hidden == "Y" && ((servermonth + 1) != week4gov_mnt || serveryear != week4gov_yr)) {
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("All date should be select from next month and current year.");
            $("#ctl00_ContentPlaceHolder1_txtDateWeek4Govt").css('border-color', 'red');
            return false;
        }
        else if (hdn_hidden == "Y" && ((servermonth + 1) != week4nongov_mnt || serveryear != week4nongov_yr)) {
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("All date should be select from next month and current year.");
            $("#ctl00_ContentPlaceHolder1_txtDateWeek4_NonGovt").css('border-color', 'red');
            return false;
        }
    }




    //************************

    // alert(Array_Date);
    // if (Array_Date[0] == Array_Date[2] || Array_Date[0] == Array_Date[3] || Array_Date[0] == Array_Date[4] || Array_Date[0] == Array_Date[5] || Array_Date[0] == Array_Date[6] || Array_Date[0] == Array_Date[7]) {
    if (Array_Date[0] == Array_Date[2]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek1Govt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek2Govt").css('border-color', 'red');
        return false;
    }
    else if (Array_Date[0] == Array_Date[3]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek1Govt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek2_NonGovt").css('border-color', 'red');
        return false;
    }
    else if (Array_Date[0] == Array_Date[4]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek1Govt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek3Govt").css('border-color', 'red');
        return false;
    }
    else if (Array_Date[0] == Array_Date[5]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek1Govt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek3_NonGovt").css('border-color', 'red');
        return false;
    }
    else if (Array_Date[0] == Array_Date[6]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek1Govt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek4Govt").css('border-color', 'red');
        return false;
    }
    else if (Array_Date[0] == Array_Date[7]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek1Govt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek4_NonGovt").css('border-color', 'red');
        return false;
    }

    //else if (Array_Date[1] == Array_Date[2] || Array_Date[1] == Array_Date[3] || Array_Date[1] == Array_Date[4] || Array_Date[1] == Array_Date[5] || Array_Date[1] == Array_Date[6] || Array_Date[1] == Array_Date[7]) {
    // alert(Array_Date[1]);
    else if (Array_Date[1] == Array_Date[2]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek1_NonGovt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek2Govt").css('border-color', 'red');
        return false;
    }
    else if (Array_Date[1] == Array_Date[3]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek1_NonGovt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek2_NonGovt").css('border-color', 'red');
        return false;
    }
    else if (Array_Date[1] == Array_Date[4]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek1_NonGovt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek3Govt").css('border-color', 'red');
        return false;
    }
    else if (Array_Date[1] == Array_Date[5]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek1_NonGovt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek3_NonGovt").css('border-color', 'red');
        return false;
    }
    else if (Array_Date[1] == Array_Date[6]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek1_NonGovt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek4Govt").css('border-color', 'red');
        return false;
    }
    else if (Array_Date[1] == Array_Date[7]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek1_NonGovt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek4_NonGovt").css('border-color', 'red');
        return false;
    }

    //else if (Array_Date[2] == Array_Date[4] || Array_Date[2] == Array_Date[5] || Array_Date[2] == Array_Date[6] || Array_Date[2] == Array_Date[7]) {
    else if (Array_Date[2] == Array_Date[4]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek2Govt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek3Govt").css('border-color', 'red');
        return false;
    }
    else if (Array_Date[2] == Array_Date[5]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek2Govt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek3_NonGovt").css('border-color', 'red');
        return false;
    }
    else if (Array_Date[2] == Array_Date[6]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek2Govt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek4Govt").css('border-color', 'red');
        return false;
    }
    else if (Array_Date[2] == Array_Date[7]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek2Govt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek4_NonGovt").css('border-color', 'red');
        return false;
    }

    //else if (Array_Date[3] == Array_Date[4] || Array_Date[3] == Array_Date[5] || Array_Date[3] == Array_Date[6] || Array_Date[3] == Array_Date[7]) {
    else if (Array_Date[3] == Array_Date[4]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek2_NonGovt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek3Govt").css('border-color', 'red');
        return false;
    }
    else if (Array_Date[3] == Array_Date[5]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek2_NonGovt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek3_NonGovt").css('border-color', 'red');
        return false;
    }
    else if (Array_Date[3] == Array_Date[6]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek2_NonGovt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek4Govt").css('border-color', 'red');
        return false;
    }
    else if (Array_Date[3] == Array_Date[7]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek2_NonGovt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek4_NonGovt").css('border-color', 'red');
        return false;
    }

    //else if (Array_Date[4] == Array_Date[6] || Array_Date[4] == Array_Date[7]) {
    else if (Array_Date[4] == Array_Date[6]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek3Govt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek4Govt").css('border-color', 'red');
        return false;
    }
    else if (Array_Date[4] == Array_Date[7]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek3Govt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek4_NonGovt").css('border-color', 'red');
        return false;
    }
    else if (Array_Date[5] == Array_Date[6]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek3_NonGovt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek4Govt").css('border-color', 'red');
        return false;
    }
    else if (Array_Date[5] == Array_Date[7]) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");
        $("#ctl00_ContentPlaceHolder1_txtDateWeek3_NonGovt").css('border-color', 'red');
        $("#ctl00_ContentPlaceHolder1_txtDateWeek4_NonGovt").css('border-color', 'red');
        return false;
    }

    if ((parseInt(val_ddl_adjust_cls1) < parseInt(val_ddl_adjust_cls))) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Qualification To time should be greater than From time.");
        $("#ctl00_ContentPlaceHolder1_ddlweek1_to_gov").css('border-color', 'red');

        return false;
    }

    else if ((parseInt(val_ddl_adjust_cls3) < parseInt(val_ddl_adjust_cls2))) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Qualification To time should be greater than From time.");
        $("#ctl00_ContentPlaceHolder1_ddlweek1_to_ngov").css('border-color', 'red');

        return false;
    }

    else if (parseInt(val_ddl_adjust_cls4) > parseInt(val_ddl_adjust_cls5)) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Qualification To time should be greater than From time.");
        $("#ctl00_ContentPlaceHolder1_ddlweek2_to_gov").css('border-color', 'red');

        return false;
    }

    else if (parseInt(val_ddl_adjust_cls6) > parseInt(val_ddl_adjust_cls7)) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Qualification To time should be greater than From time.");
        $("#ctl00_ContentPlaceHolder1_ddlweek2_to_ngov").css('border-color', 'red');

        return false;
    }

    else if (parseInt(val_ddl_adjust_cls8) > parseInt(val_ddl_adjust_cls9)) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Qualification To time should be greater than From time.");
        $("#ctl00_ContentPlaceHolder1_ddlweek3_to_gov").css('border-color', 'red');

        return false;
    }

    else if (parseInt(val_ddl_adjust_cls10) > parseInt(val_ddl_adjust_cls11)) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Qualification To time should be greater than From time.");
        $("#ctl00_ContentPlaceHolder1_ddlweek3_to_ngov").css('border-color', 'red');

        return false;
    }

    else if (parseInt(val_ddl_adjust_cls12) > parseInt(val_ddl_adjust_cls13)) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Qualification To time should be greater than From time.");
        $("#ctl00_ContentPlaceHolder1_ddlweek4_to_gov").css('border-color', 'red');

        return false;
    }

    else if (parseInt(val_ddl_adjust_cls14) > parseInt(val_ddl_adjust_cls15)) {
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
        $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Qualification To time should be greater than From time.");
        $("#ctl00_ContentPlaceHolder1_ddlweek4_to_ngov").css('border-color', 'red');

        return false;
    }

    /*************************************************************/




    // var splt_data_date = val_date_fields.split(',');
    //    for (var c = 0; c < splt_data_date.length; c++) {
    //        if ($.inArray(splt_data_date[c], Array_Date) == -1) {
    //            Array_Date.push(splt_data_date[c]);
    //        }
    //        else {

    //            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").empty();
    //            $("#ctl00_ContentPlaceHolder1_lbl_error_msg_time").append("Same Date used Multiple times.");

    //            return false;
    //        }
    //    }

    return true;
}


/**************************************************************************************************/
$(document).ready(function () {

    //    var date = new Date();
    //    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    //    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    //    var lastDayWithSlashes = (lastDay.getDate()) + '/' + (lastDay.getMonth() + 1) + '/' + lastDay.getFullYear();
    //    alert(lastDayWithSlashes);
    var hdn_hidden = $('#ctl00_ContentPlaceHolder1_hdn_Is_Todays_Date').val();
    // alert('val:' + hdn_hidden);
    if (hdn_hidden == "Y") {
        // alert('y');
        $('#checkbox1').change(function () {
            // $('#textbox1').val($(this).is(':checked'));
            //alert('hi');

            function isLeapYear(year) {
                return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
            }

            function getDaysInMonth(year, month) {
                return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
            }

            function addMonths(date, value) {
                //alert(date);
                var d = new Date(date),
                n = date.getDate();
                d.setDate(1);
                d.setMonth(d.getMonth() + value);
                d.setDate(Math.min(n, getDaysInMonth(d.getFullYear(), d.getMonth())));
                return d;
            }

            //        var date = new Date(val_date);
            //        alert(date);
            //        var nextMonth = addMonths(date, 1);
            //        alert(nextMonth);


            /**************************get all present date******************************/

            var val_date1 = $('#ctl00_ContentPlaceHolder1_txtDateWeek1Govt').val();
            var val_date2 = $('#ctl00_ContentPlaceHolder1_txtDateWeek1_NonGovt').val();
            var val_date3 = $('#ctl00_ContentPlaceHolder1_txtDateWeek2Govt').val();
            var val_date4 = $('#ctl00_ContentPlaceHolder1_txtDateWeek2_NonGovt').val();
            var val_date5 = $('#ctl00_ContentPlaceHolder1_txtDateWeek3Govt').val();
            var val_date6 = $('#ctl00_ContentPlaceHolder1_txtDateWeek3_NonGovt').val();
            var val_date7 = $('#ctl00_ContentPlaceHolder1_txtDateWeek4Govt').val();
            var val_date8 = $('#ctl00_ContentPlaceHolder1_txtDateWeek4_NonGovt').val();

            //alert(val_date1);

            //var date_gov_week1 = new Date(val_date1).format('mm/dd/yyyy');
            // alert(new Date(12 Oct 2017));
            //new Date(year, month, day, hours, minutes, seconds, milliseconds)
            // var date_gov_week1 = new Date("2017","09","31","00","00","00","00");
            //var date_gov_week1 = moment(val_date1, "MM/DD/YYYY h:mma").toDate();
            val_date1 = val_date1.replace(/-/g, ' ');
            //val_date1 = val_date1.replace("-", " ");
            var date_gov_week1 = new Date(val_date1);
            val_date2 = val_date2.replace(/-/g, ' ');
            var date_ngov_week1 = new Date(val_date2);
            val_date3 = val_date3.replace(/-/g, ' ');
            var date_gov_week2 = new Date(val_date3);
            val_date4 = val_date4.replace(/-/g, ' ');
            var date_ngov_week2 = new Date(val_date4);
            val_date5 = val_date5.replace(/-/g, ' ');
            var date_gov_week3 = new Date(val_date5);
            val_date6 = val_date6.replace(/-/g, ' ');
            var date_ngov_week3 = new Date(val_date6);
            val_date7 = val_date7.replace(/-/g, ' ');
            var date_gov_week4 = new Date(val_date7);
            val_date8 = val_date8.replace(/-/g, ' ');
            var date_ngov_week4 = new Date(val_date8);

            var val_date_gov_week1 = addMonths(date_gov_week1, 1);
            var val_date_ngov_week1 = addMonths(date_ngov_week1, 1);
            var val_date_gov_week2 = addMonths(date_gov_week2, 1);
            var val_date_ngov_week2 = addMonths(date_ngov_week2, 1);
            var val_date_gov_week3 = addMonths(date_gov_week3, 1);
            var val_date_ngov_week3 = addMonths(date_ngov_week3, 1);
            var val_date_gov_week4 = addMonths(date_gov_week4, 1);
            var val_date_ngov_week4 = addMonths(date_ngov_week4, 1);

            val_date_gov_week1 = val_date_gov_week1.format('dd-MMM-yyyy');
            val_date_ngov_week1 = val_date_ngov_week1.format('dd-MMM-yyyy');
            val_date_gov_week2 = val_date_gov_week2.format('dd-MMM-yyyy');
            val_date_ngov_week2 = val_date_ngov_week2.format('dd-MMM-yyyy');
            val_date_gov_week3 = val_date_gov_week3.format('dd-MMM-yyyy');
            val_date_ngov_week3 = val_date_ngov_week3.format('dd-MMM-yyyy');
            val_date_gov_week4 = val_date_gov_week4.format('dd-MMM-yyyy');
            val_date_ngov_week4 = val_date_ngov_week4.format('dd-MMM-yyyy');

            $('#ctl00_ContentPlaceHolder1_txtDateWeek1Govt').val(val_date_gov_week1);
            $('#ctl00_ContentPlaceHolder1_txtDateWeek1_NonGovt').val(val_date_ngov_week1);
            $('#ctl00_ContentPlaceHolder1_txtDateWeek2Govt').val(val_date_gov_week2);
            $('#ctl00_ContentPlaceHolder1_txtDateWeek2_NonGovt').val(val_date_ngov_week2);
            $('#ctl00_ContentPlaceHolder1_txtDateWeek3Govt').val(val_date_gov_week3);
            $('#ctl00_ContentPlaceHolder1_txtDateWeek3_NonGovt').val(val_date_ngov_week3);
            $('#ctl00_ContentPlaceHolder1_txtDateWeek4Govt').val(val_date_gov_week4);
            $('#ctl00_ContentPlaceHolder1_txtDateWeek4_NonGovt').val(val_date_ngov_week4);

            //alert(val_date_gov_week1);
        });

    }
    else {
        //$('#checkbox1')
        // alert('read');
        //$('#checkbox1').prop('disable', true);
        $('#checkbox1').attr("disabled", true);
    }
});