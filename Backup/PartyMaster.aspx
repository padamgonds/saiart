<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PartyMaster.aspx.cs" Inherits="SaiArtLatest.PartyMaster" MasterPageFile="~/Site.master" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">


<script type="text/javascript">

    function reset() {
        $('#ContentPlaceHolder1_txtFirstname').css('border-color', 'gainsboro');
        $('#ContentPlaceHolder1_txtlastname').css('border-color', 'gainsboro');
        $('#ContentPlaceHolder1_txtAddress').css('border-color', 'gainsboro');
        $('#ContentPlaceHolder1_txtMobilenumber').css('border-color', 'gainsboro');
        $('#ContentPlaceHolder1_txt_city').css('border-color', 'gainsboro');
        $('#ContentPlaceHolder1_txt_state').css('border-color', 'gainsboro');
        $('#ContentPlaceHolder1_txtalt_mob').css('border-color', 'gainsboro');

    }

    function validate() {
        //alert('l');
        reset();
        var txt_firstname = $('#ContentPlaceHolder1_txtFirstname').val();
        var txt_lastname = $('#ContentPlaceHolder1_txtlastname').val();
        var txt_address = $('#ContentPlaceHolder1_txtAddress').val();
        var txt_mobile = $('#ContentPlaceHolder1_txtMobilenumber').val();
        var txt_city = $('#ContentPlaceHolder1_txt_city').val();
        var txt_state = $('#ContentPlaceHolder1_txt_state').val();
        var txt_mobile1 = $('#ContentPlaceHolder1_txtalt_mob').val();

        if (txt_firstname == "" || txt_firstname == null) {

            $("#ContentPlaceHolder1_lblErrMsg").empty();
            $("#ContentPlaceHolder1_lblErrMsg").append("Please enter first name.");
            $('#ContentPlaceHolder1_txtFirstname').css('border-color', 'red');

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }
        if (txt_lastname == "" || txt_lastname == null) {
            $("#ContentPlaceHolder1_lblErrMsg").empty();
            $("#ContentPlaceHolder1_lblErrMsg").append("Please enter last name.");
            $('#ContentPlaceHolder1_txtlastname').css('border-color', 'red');

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;

        }
        if (txt_address == "" || txt_address == null) {

            $("#ContentPlaceHolder1_lblErrMsg").empty();
            $("#ContentPlaceHolder1_lblErrMsg").append("Please enter address.");
            $('#ContentPlaceHolder1_txtAddress').css('border-color', 'red');

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;

        }
        if (txt_mobile == "" || txt_mobile == null) {
            $("#ContentPlaceHolder1_lblErrMsg").empty();
            $("#ContentPlaceHolder1_lblErrMsg").append("Please enter mobile number.");
            $('#ContentPlaceHolder1_txtMobilenumber').css('border-color', 'red');

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }

        if (isNaN(txt_mobile)) {
            $("#ContentPlaceHolder1_lblErrMsg").empty();
            $("#ContentPlaceHolder1_lblErrMsg").append("Mobile number should be numeric.");
            $('#ContentPlaceHolder1_txtMobilenumber').css('border-color', 'red');

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }
        if (isNaN(txt_mobile1)) {
            $("#ContentPlaceHolder1_lblErrMsg").empty();
            $("#ContentPlaceHolder1_lblErrMsg").append("Alternate Mobile number should be numeric.");
            $('#ContentPlaceHolder1_txtalt_mob').css('border-color', 'red');

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }
        if (txt_city == "" || txt_city == null) {
            $("#ContentPlaceHolder1_lblErrMsg").empty();
            $("#ContentPlaceHolder1_lblErrMsg").append("Please enter city.");
            $('#ContentPlaceHolder1_txt_city').css('border-color', 'red');

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }
        if (txt_state == "" || txt_state == null) {
            $("#ContentPlaceHolder1_lblErrMsg").empty();
            $("#ContentPlaceHolder1_lblErrMsg").append("Please enter state.");
            $('#ContentPlaceHolder1_txt_state').css('border-color', 'red');

            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        }
        return true;
    }
 

</script>

    <form id="form1" runat="server" class="form-horizontal">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <div class="row margin_bdtl_hdr_row_resp">
        <div class="col-xs-12 col-sm-12 col-md-12 bid-detl align-hdn-uam">
            <span class="page-heading">Party Information</span>
            <asp:Label ID="lblErrMsg" class="err_message" runat="server" Text=""></asp:Label>
        </div>
    </div>
    <div class="row bid-crm" style="margin-left: -18px;">
        <div class="bid-detl-frm">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 bit-dtl-bg bid-detls-frm-adj"
                style="width: 100%;">
                <div class="form-group center-block">
                    <div class="form-group">
                        <asp:Label ID="lblpartyId" class="col-sm-2 control-label userlabel margin-uam-lbl"
                            runat="server" Text="Party Number"></asp:Label>
                        <div class="col-sm-4">
                            <asp:TextBox ID="txtparty_num" class="form-control pull-left margin-uam-ddl" runat="server" ReadOnly
                                autocomplete="off"></asp:TextBox>
                        </div>
                    </div>
                    <div class="form-group">
                        <asp:Label ID="lblFirstname" class="col-sm-2 control-label userlabel margin-uam-lbl"
                            runat="server" Text="First name"></asp:Label>
                        <span class="asterisk_input asterisk_adj asterisk_adj_uam" id="astriskdepartment"
                            runat="server"></span>
                        <div class="col-sm-4">
                            <!--<asp:DropDownList ID="ddlRole" class="form-control margin-uam-ddl" runat="server"
                                AppendDataBoundItems="True" AutoPostBack="True" > 
                            </asp:DropDownList>-->
                            <asp:TextBox ID="txtFirstname" class="form-control pull-left margin-uam-ddl" runat="server"
                                autocomplete="off"></asp:TextBox>
                        </div>
                    </div>
                    <div class="form-group">
                        <asp:Label ID="lbllastName" class="col-sm-2 control-label userlabel margin-uam-lbl"
                            runat="server" Text="Last Name"></asp:Label>
                        <span class="asterisk_input asterisk_adj asterisk_adj_uam"></span>
                        <div class="col-sm-4">
                            <!--<asp:DropDownList ID="ddlCluster" class="form-control margin-uam-ddl" runat="server"
                                AppendDataBoundItems="True" AutoPostBack="True">
                            </asp:DropDownList>-->
                            <asp:TextBox ID="txtlastname" class="form-control pull-left margin-uam-ddl" runat="server"
                                autocomplete="off"></asp:TextBox>
                        </div>
                    </div>
                    <div class="form-group">
                        <asp:Label ID="lblAddress" class="col-sm-2 control-label userlabel margin-uam-lbl"
                            runat="server" Text="Address"></asp:Label>
                        <span class="asterisk_input asterisk_adj asterisk_adj_uam"></span>
                        <div class="col-sm-4">
                            <asp:TextBox ID="txtAddress" class="form-control pull-left margin-uam-ddl" runat="server"
                                autocomplete="off"></asp:TextBox>
                        </div>
                    </div>
                    <div class="form-group">
                        <asp:Label ID="lblMobilenumber" class="col-sm-2 control-label userlabel margin-uam-lbl"
                            runat="server" Text="Mobile Number"></asp:Label>
                        <span class="asterisk_input asterisk_adj asterisk_adj_uam"></span>
                        <div class="col-sm-4">
                            <asp:TextBox ID="txtMobilenumber" class="form-control pull-left margin-uam-ddl" runat="server"
                                autocomplete="off"></asp:TextBox>
                        </div>
                    </div>
                    <div class="form-group">
                        <asp:Label ID="lblAlternatenumber" class="col-sm-2 control-label userlabel margin-uam-lbl"
                            runat="server" Text="Alternate Mob Num:"></asp:Label>
                        <div class="col-sm-4">
                            <asp:TextBox ID="txtalt_mob" class="form-control pull-left margin-uam-ddl" runat="server"
                                autocomplete="off"></asp:TextBox>
                        </div>
                    </div>
                    <div class="form-group">
                        <asp:Label ID="lblcity" class="col-sm-2 control-label userlabel margin-uam-lbl" runat="server"
                            Text="City"></asp:Label>
                        <span class="asterisk_input asterisk_adj asterisk_adj_uam"></span>
                        <div class="col-sm-4">
                            <asp:TextBox ID="txt_city" class="form-control pull-left margin-uam-ddl" runat="server"
                                autocomplete="off"></asp:TextBox>
                        </div>
                    </div>
                    <div class="form-group">
                        <asp:Label ID="lblstate" class="col-sm-2 control-label userlabel margin-uam-lbl"
                            runat="server" Text="State"></asp:Label>
                        <span class="asterisk_input asterisk_adj asterisk_adj_uam"></span>
                        <div class="col-sm-4">
                            <asp:TextBox ID="txt_state" class="form-control pull-left margin-uam-ddl" runat="server"
                                autocomplete="off"></asp:TextBox>
                        </div>
                    </div>
                </div>
                <div class="col-sm-7 col-sm-offset-2">
                    <center>
                        <asp:Button ID="btnSave" class="btn btn-primary" runat="server" Text="Save" OnClientClick="return validate();" OnClick="btn_submit_click" />
                        &nbsp; &nbsp;
                        <asp:Button ID="btnCancel" class="btn btn-primary" runat="server" Text="Cancel" />
                    </center>
                </div>
            </div>
        </div>
    </div>
    </form>
</asp:Content>