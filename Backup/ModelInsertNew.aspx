<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ModelInsertNew.aspx.cs"
    MasterPageFile="~/Site.master" Inherits="SaiArtLatest.ModelInsertNew" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <script>

        function reset() {
            $('#ContentPlaceHolder1_txtMOdelName').css('border-color', 'gainsboro');
            $('#ContentPlaceHolder1_txtModelQuantity').css('border-color', 'gainsboro');
            $('#ContentPlaceHolder1_txtRate').css('border-color', 'gainsboro');
            $('#ContentPlaceHolder1_ddlModelSize').css('border-color', 'gainsboro');

        }
        function validate() {
            //alert('l');
            reset();
            var txtMOdelName = $('#ContentPlaceHolder1_txtMOdelName').val();
            var txtModelQuantity = $('#ContentPlaceHolder1_txtModelQuantity').val();
            var txtRate = $('#ContentPlaceHolder1_txtRate').val();
            var ddlModelSize = $('#ContentPlaceHolder1_ddlModelSize').val();


            if (txtMOdelName == "" || txtMOdelName == null) {

                $("#ContentPlaceHolder1_lblErrMsg").empty();
                $("#ContentPlaceHolder1_lblErrMsg").append("Please enter Model name.");
                $('#ContentPlaceHolder1_txtMOdelName').css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
            if (txtModelQuantity == "" || txtModelQuantity == null) {
                $("#ContentPlaceHolder1_lblErrMsg").empty();
                $("#ContentPlaceHolder1_lblErrMsg").append("Please enter Model Quantity.");
                $('#ContentPlaceHolder1_txtModelQuantity').css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;

            }
            if (isNaN(txtModelQuantity)) {
                $("#ContentPlaceHolder1_lblErrMsg").empty();
                $("#ContentPlaceHolder1_lblErrMsg").append("Model Quantity should be numeric.");
                $('#ContentPlaceHolder1_txtModelQuantity').css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;

            }

            if (txtRate == "" || txtRate == null) {
                $("#ContentPlaceHolder1_lblErrMsg").empty();
                $("#ContentPlaceHolder1_lblErrMsg").append("Please enter Model rate.");
                $('#ContentPlaceHolder1_txtRate').css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
            if (isNaN(txtRate)) {
                $("#ContentPlaceHolder1_lblErrMsg").empty();
                $("#ContentPlaceHolder1_lblErrMsg").append("Model rate should be numeric.");
                $('#ContentPlaceHolder1_txtRate').css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }

            if (ddlModelSize == "--Select--" || ddlModelSize == null) {
                $("#ContentPlaceHolder1_lblErrMsg").empty();
                $("#ContentPlaceHolder1_lblErrMsg").append("Please select model size.");
                $('#ContentPlaceHolder1_ddlModelSize').css('border-color', 'red');

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
            <span class="page-heading">Model Information</span>
            <asp:Label ID="lblErrMsg" class="err_message" runat="server" Text=""></asp:Label>
        </div>
    </div>
    <div class="row bid-crm" style="margin-left: -18px;">
        <div class="bid-detl-frm">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 bit-dtl-bg bid-detls-frm-adj"
                style="width: 100%;">
                <div class="form-group center-block">
                    <div class="form-group">
                        <asp:Label ID="lblModelName" class="col-sm-2 control-label userlabel margin-uam-lbl"
                            runat="server" Text="Model Name"></asp:Label>
                        <span class="asterisk_input asterisk_adj asterisk_adj_uam"></span>
                        <div class="col-sm-4">
                            <asp:TextBox ID="txtMOdelName" class="form-control pull-left margin-uam-ddl" runat="server"
                                autocomplete="off"></asp:TextBox>
                        </div>
                    </div>
                    <div class="form-group">
                        <asp:Label ID="lblModelQuantity" class="col-sm-2 control-label userlabel margin-uam-lbl"
                            runat="server" Text="Model Quantity"></asp:Label>
                        <span class="asterisk_input asterisk_adj asterisk_adj_uam" id="astriskdepartment"
                            runat="server"></span>
                        <div class="col-sm-4">
                            <asp:TextBox ID="txtModelQuantity" class="form-control pull-left margin-uam-ddl"
                                runat="server" autocomplete="off"></asp:TextBox>
                        </div>
                    </div>
                    <div class="form-group">
                        <asp:Label ID="lblModelPrize" class="col-sm-2 control-label userlabel margin-uam-lbl"
                            runat="server" Text="Model Rate"></asp:Label>
                        <span class="asterisk_input asterisk_adj asterisk_adj_uam"></span>
                        <div class="col-sm-4">
                            <asp:TextBox ID="txtRate" class="form-control pull-left margin-uam-ddl" runat="server"
                                autocomplete="off"></asp:TextBox>
                        </div>
                    </div>
                    <div class="form-group">
                        <asp:Label ID="Label1" class="col-sm-2 control-label userlabel margin-uam-lbl" runat="server"
                            Text="Model Size"></asp:Label>
                        <span class="asterisk_input asterisk_adj asterisk_adj_uam"></span>
                        <div class="col-sm-4">
                            <%--  <asp:TextBox ID="TextBox1" class="form-control pull-left margin-uam-ddl" runat="server"
                                autocomplete="off"></asp:TextBox>--%>
                            <asp:DropDownList ID="ddlModelSize" runat="server" class="form-control pull-left margin-uam-ddl">
                            </asp:DropDownList>
                        </div>
                    </div>
                </div>
                <div class="col-sm-7 col-sm-offset-2">
                    <center>
                        <asp:Button ID="btnSave" class="btn btn-primary" runat="server" Text="Save" OnClientClick="return validate();" OnClick="btn_save_click" />
                        &nbsp; &nbsp;
                        <asp:Button ID="btnCancel" class="btn btn-primary" runat="server" Text="Cancel" OnClick="btn_cancel" />
                    </center>
                </div>
            </div>
        </div>
    </div>
    </form>
</asp:Content>
