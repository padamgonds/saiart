<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true"
    CodeBehind="BookPartyModel.aspx.cs" Inherits="SaiArtLatest.BookPartyModel" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="js/jquery.searchabledropdown-1.0.8.min.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <script type="text/javascript">

        //        $(document).ready(function () {
        //            $("select").searchable({
        //                maxListSize: 200, // if list size are less than maxListSize, show them all
        //                maxMultiMatch: 300, // how many matching entries should be displayed
        //                exactMatch: false, // Exact matching on search
        //                wildcards: true, // Support for wildcard characters (*, ?)
        //                ignoreCase: true, // Ignore case sensitivity
        //                latency: 200, // how many millis to wait until starting search
        //                warnMultiMatch: 'top {0} matches ...',
        //                warnNoMatch: 'no matches ...',
        //                zIndex: 'auto'
        //            });
        //        });


        function reset() {
            $('#ContentPlaceHolder1_ddlModelSize').css('border-color', 'gainsboro');
            $('#ContentPlaceHolder1_ddlModelName').css('border-color', 'gainsboro');
            $('#ContentPlaceHolder1_txtQuantity').css('border-color', 'gainsboro');
        }

        function validate() {
            //alert('l');
            reset();

            var val_ddlModelSize = $("#ContentPlaceHolder1_ddlModelSize option:selected").val();
            var val_ddlModelName = $("#ContentPlaceHolder1_ddlModelName option:selected").val();
            var txt_Qty = $('#ContentPlaceHolder1_txtQuantity').val();


            if (val_ddlModelSize == "--Select--") {
                $("#ContentPlaceHolder1_lblErrMsg").empty();
                $("#ContentPlaceHolder1_lblErrMsg").append("Please select Model Size.");
                $('#ContentPlaceHolder1_ddlModelSize').css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
            if (val_ddlModelName == "--Select--") {
                $("#ContentPlaceHolder1_lblErrMsg").empty();
                $("#ContentPlaceHolder1_lblErrMsg").append("Please selct Model Name.");
                $('#ContentPlaceHolder1_ddlModelName').css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;

            }
            if (txt_Qty == "" || txt_Qty == null) {

                $("#ContentPlaceHolder1_lblErrMsg").empty();
                $("#ContentPlaceHolder1_lblErrMsg").append("Please enter Model Quantity.");
                $('#ContentPlaceHolder1_txtQuantity').css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;

            }
            if (isNaN(txt_Qty)) {
                $("#ContentPlaceHolder1_lblErrMsg").empty();
                $("#ContentPlaceHolder1_lblErrMsg").append("Model Quantity should be numeric.");
                $('#ContentPlaceHolder1_txtQuantity').css('border-color', 'red');

                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;

            }

            return true;
        }



    </script>
    <style>
       table
        {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
            font-family: sans-serif;
    font-weight: bold;
        }
        
        
    </style>
    <form id="form1" runat="server" class="form-horizontal">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <div class="row margin_bdtl_hdr_row_resp">
        <div class="col-xs-12 col-sm-12 col-md-12 bid-detl align-hdn-uam">
            <span class="page-heading">Book Party Model</span>
            <asp:Label ID="lblErrMsg" class="err_message" runat="server" Text=""></asp:Label>
        </div>
    </div>
    <div class="row bid-crm" style="margin-left: -18px;">
        <div class="bid-detl-frm">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 bit-dtl-bg bid-detls-frm-adj"
                style="width: 100%;">
                <asp:HiddenField ID="hdn_MODEL_PRIZE" Value='' runat="server" />
                <div class="form-group center-block">
                    <div class="form-group">
                        <asp:Label ID="lblPartyName" class="col-sm-2 control-label userlabel margin-uam-lbl"
                            runat="server" Text="Party Name"></asp:Label>
                        <div class="col-sm-4">
                            <asp:TextBox ID="txtparty_name" class="form-control pull-left margin-uam-ddl" runat="server"
                                ReadOnly autocomplete="off"></asp:TextBox>
                        </div>
                    </div>
                    <div class="form-group">
                        <asp:Label ID="lblPartyNumber" class="col-sm-2 control-label userlabel margin-uam-lbl"
                            runat="server" Text="Party Number"></asp:Label>
                        <div class="col-sm-4">
                            <asp:TextBox ID="txtparty_number" class="form-control pull-left margin-uam-ddl" runat="server"
                                ReadOnly autocomplete="off"></asp:TextBox>
                        </div>
                    </div>
                    <asp:UpdatePanel ID="UpdatePanel44" runat="server">
                        <ContentTemplate>
                            <div class="form-group">
                                <asp:Label ID="lblModelSize" class="col-sm-2 control-label userlabel margin-uam-lbl"
                                    runat="server" Text="Model Size"></asp:Label>
                                <span class="asterisk_input asterisk_adj asterisk_adj_uam"></span>
                                <div class="col-sm-4">
                                    <asp:DropDownList ID="ddlModelSize" runat="server" class="form-control pull-left margin-uam-ddl"
                                        AppendDataBoundItems="True" AutoPostBack="True" OnSelectedIndexChanged="ddlModelSize_SelectedIndexChanged">
                                    </asp:DropDownList>
                                </div>
                            </div>
                            <div class="form-group">
                                <asp:Label ID="lblModelName" class="col-sm-2 control-label userlabel margin-uam-lbl"
                                    runat="server" Text="Model Name"></asp:Label>
                                <span class="asterisk_input asterisk_adj asterisk_adj_uam"></span>
                                <div class="col-sm-4">
                                    <asp:DropDownList ID="ddlModelName" class="form-control pull-left margin-uam-ddl"
                                        runat="server" AppendDataBoundItems="True" AutoPostBack="True" OnSelectedIndexChanged="ddlModelName_SelectedIndexChanged">
                                    </asp:DropDownList>
                                </div>
                            </div>
                        </ContentTemplate>
                    </asp:UpdatePanel>
                    <div class="form-group">
                        <asp:Label ID="lblModelQuantity" class="col-sm-2 control-label userlabel margin-uam-lbl"
                            runat="server" Text="Model Quantity"></asp:Label>
                        <span class="asterisk_input asterisk_adj asterisk_adj_uam"></span>
                        <div class="col-sm-4">
                            <asp:TextBox ID="txtQuantity" class="form-control pull-left margin-uam-ddl" runat="server"
                                autocomplete="off" AutoPostBack="true" OnTextChanged="txtQuantity_TextChanged"></asp:TextBox>
                        </div>
                    </div>
                    <div class="form-group">
                        <asp:Label ID="lblModelRate" class="col-sm-2 control-label userlabel margin-uam-lbl"
                            runat="server" Text="Model Rate"></asp:Label>
                        <div class="col-sm-4">
                            <asp:TextBox ID="txtModelRate" class="form-control pull-left margin-uam-ddl" runat="server"
                                autocomplete="off" ReadOnly></asp:TextBox>
                        </div>
                    </div>
                    <div class="form-group">
                        <asp:Label ID="Label1" class="col-sm-2 control-label userlabel margin-uam-lbl" runat="server"
                            Text="Amount"></asp:Label>
                        <div class="col-sm-4">
                            <asp:TextBox ID="txt_amount" class="form-control pull-left margin-uam-ddl" runat="server"
                                autocomplete="off" ReadOnly></asp:TextBox>
                        </div>
                    </div>
                </div>
                <div class="col-sm-7 col-sm-offset-2">
                    <center>
                        <asp:Button ID="btnSave" class="btn btn-primary" runat="server" Text="Book" OnClientClick="return validate();"
                            OnClick="btnSave_Click" />
                        &nbsp; &nbsp;
                        <asp:Button ID="btnCancel" class="btn btn-primary" runat="server" Text="Cancel" OnClick="btn_cancel_click" />
                    </center>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 bit-dtl-bg bid-detls-frm-adj"
                style="width: 100%;">
                <div class="form-group center-block">
                    <div class="row" id="rowDashboard" runat="server">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="row margin-dashboard-row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="div_activeBids" runat="server">
                                    <div class="blue-box">
                                        Party Bill Details
                                    </div>
                                    <div class="table-responsive">
                                        <div>
                                            <%--Priya--%>
                                            <table width="100%" id="pnlGridView1" runat="server" align="center" class="ContentTable">
                                                <tr>
                                                    <td colspan="2">
                                                        <%--priya--%>
                                                        <asp:GridView ID="grdPartyDashboard" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                                            Width="100%" runat="server" AllowSorting="true" DataKeyNames="MODEL_ID">
                                                            <Columns>
                                                                <asp:TemplateField HeaderText="SrNo." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                                                    <ItemTemplate>
                                                                        <%#Container.DataItemIndex+1 %>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Model Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                                                    <ItemTemplate>
                                                                        <%#Eval("MODEL_NAME")%>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Model Size" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                                                    <ItemTemplate>
                                                                        <%#Eval("MODEL_SIZE")%>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Model Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                                                    <ItemTemplate>
                                                                        <%#Eval("QUANTITY")%>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Model Prize" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                                                    <ItemTemplate>
                                                                        <%#Eval("MODEL_PRIZE")%>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Amt." ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                                                    <ItemTemplate>
                                                                        <%#Eval("TOTAL_PRICE")%>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Delete" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                                                    <ItemTemplate>
                                                                        <asp:LinkButton ID="lnk_delete1" CssClass="tooltip-dashboard" runat="server" OnClick="lnkDelete_Click"
                                                                            CommandArgument='<%# Eval("MODEL_ID") %>'>Delete</asp:LinkButton>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                            </Columns>
                                                            <EmptyDataTemplate>
                                                                <asp:Label ID="lblNoRecforRunByYou" runat="server" Style="font-size: 14px;">No records found</asp:Label>
                                                            </EmptyDataTemplate>
                                                            <AlternatingRowStyle BackColor="White" />
                                                            <FooterStyle BackColor="#EFF3FB" ForeColor="#333333" />
                                                            <HeaderStyle BackColor="#711B04" Font-Bold="True" ForeColor="White" Font-Size="16px" />
                                                            <PagerSettings Mode="NextPreviousFirstLast" />
                                                            <PagerStyle BackColor="#2461BF" ForeColor="White" HorizontalAlign="Center" CssClass="cssPager" />
                                                            <RowStyle BackColor="#EFF3FB" Font-Size="16px" />
                                                            <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
                                                            <EmptyDataRowStyle CssClass="mycentertext" />
                                                        </asp:GridView>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!----payment receipt---->
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 bit-dtl-bg bid-detls-frm-adj"
                style="width: 100%; display: none;padding:0px;">
                <div class="form-group center-block">
                    <div class="row" id="Div1" runat="server">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="row margin-dashboard-row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="div2" runat="server">
                                    <%--Priya 08-Apr-18--%>
                                    <div class="table-responsive">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="div3" runat="server">
                                            <br />
                                            <div id="pnlGridViewNew" runat="server" class="row">
                                                <img src="img/Header_img_2.png" alt="" style="height: 125px; width: 1000px;" />
                                                <br />
                                                <div class="row">
                                                    <div class="col-md-6 col-sm-6 col-lg-6" style="margin-top: 10px;">
                                                        <asp:Label ID="lbl_name" runat="server" Style="font-size: 18px; font-weight: bold;">Party Name:</asp:Label>
                                                        <asp:Label ID="lbl_partyname" runat="server" Style="font-size: 18px; font-weight: bold;"></asp:Label>
                                                    </div>
                                                    <div class="col-md-6 col-sm-6 col-lg-6" style="margin-top: -15px; margin-left: 800px;">
                                                        <asp:Label ID="Label2" runat="server" Style="font-size: 18px; font-weight: bold;">Date:</asp:Label>
                                                        <asp:Label ID="lblDate" runat="server" Style="font-size: 18px; font-weight: bold;"></asp:Label>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6 col-sm-6 col-lg-6" style="margin-top: 5px;">
                                                        <asp:Label ID="Label4" runat="server" Style="font-size: 18px; font-weight: bold;">Address:</asp:Label>
                                                        <asp:Label ID="lblAddress" runat="server" Style="font-size: 18px; font-weight: bold;"></asp:Label>
                                                    </div>
                                                    <div class="col-md-6 col-sm-6 col-lg-6" style="margin-top: -15px; margin-left: 800px;">
                                                        <asp:Label ID="Label6" runat="server" Style="font-size: 18px; font-weight: bold;">Mobile No:</asp:Label>
                                                        <asp:Label ID="lblMobile" runat="server" Style="font-size: 18px; font-weight: bold;"></asp:Label>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                        <table width="50%" id="Table1" runat="server" class="ContentTable" style="float: left">
                                                            <tr>
                                                                <td colspan="2">
                                                                    <%--priya--%>
                                                                    <asp:GridView ID="GridView2" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                                                        Width="100%" runat="server" AllowSorting="true">
                                                                        <Columns>
                                                                            <asp:TemplateField HeaderText="S.N." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                                                                <ItemTemplate>
                                                                                    <%#Eval("Row1")%>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Name" ItemStyle-Width="24%" ItemStyle-CssClass="align_text">
                                                                                <ItemTemplate>
                                                                                    <%#Eval("MODEL_NAME")%>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <%--  <asp:TemplateField HeaderText="Model Size" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                                                                <ItemTemplate>
                                                                                    <%#Eval("MODEL_SIZE")%>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>--%>
                                                                            <asp:TemplateField HeaderText="Qut." ItemStyle-Width="10%" ItemStyle-CssClass="align_text">
                                                                                <ItemTemplate>
                                                                                    <%#Eval("QUANTITY")%>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Rate" ItemStyle-Width="10%" ItemStyle-CssClass="align_text">
                                                                                <ItemTemplate>
                                                                                    <%#Eval("MODEL_PRIZE")%>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Amt." ItemStyle-Width="10%" ItemStyle-CssClass="align_text">
                                                                                <ItemTemplate>
                                                                                    <%#Eval("TOTAL_PRICE")%>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                        </Columns>
                                                                        <EmptyDataTemplate>
                                                                            <asp:Label ID="lblNoRecforRunByYou" runat="server" Style="font-size: 14px;">No records found</asp:Label>
                                                                        </EmptyDataTemplate>
                                                                        <AlternatingRowStyle BackColor="White" />
                                                                        <FooterStyle BackColor="#EFF3FB" ForeColor="#333333" />
                                                                        <HeaderStyle BackColor="#711B04" Font-Bold="True" ForeColor="black" Font-Size="18px" />
                                                                        <PagerSettings Mode="NextPreviousFirstLast" />
                                                                        <PagerStyle BackColor="#2461BF" ForeColor="White" HorizontalAlign="Center" CssClass="cssPager" />
                                                                        <RowStyle BackColor="#711B04" Font-Bold="True" ForeColor="black" Font-Size="18px" />
                                                                        <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
                                                                        <EmptyDataRowStyle CssClass="mycentertext" />
                                                                    </asp:GridView>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                        <table width="50%" id="Table2" runat="server" class="ContentTable" style="float: left">
                                                            <tr>
                                                                <td colspan="2">
                                                                    <%--priya--%>
                                                                    <asp:GridView ID="GridView3" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                                                        Width="100%" runat="server" AllowSorting="true">
                                                                        <Columns>
                                                                            <asp:TemplateField HeaderText="S.N." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                                                                <ItemTemplate>
                                                                                    <%#Eval("Row1")%>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Name" ItemStyle-Width="24%" ItemStyle-CssClass="align_text">
                                                                                <ItemTemplate>
                                                                                    <%#Eval("MODEL_NAME")%>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <%--  <asp:TemplateField HeaderText="Model Size" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                                                                <ItemTemplate>
                                                                                    <%#Eval("MODEL_SIZE")%>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>--%>
                                                                            <asp:TemplateField HeaderText="Qut." ItemStyle-Width="10%" ItemStyle-CssClass="align_text">
                                                                                <ItemTemplate>
                                                                                    <%#Eval("QUANTITY")%>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Rate" ItemStyle-Width="10%" ItemStyle-CssClass="align_text">
                                                                                <ItemTemplate>
                                                                                    <%#Eval("MODEL_PRIZE")%>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Amt." ItemStyle-Width="10%" ItemStyle-CssClass="align_text">
                                                                                <ItemTemplate>
                                                                                    <%#Eval("TOTAL_PRICE")%>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                        </Columns>
                                                                        <EmptyDataTemplate>
                                                                            <asp:Label ID="lblNoRecforRunByYou" runat="server" Style="font-size: 14px;">No records found</asp:Label>
                                                                        </EmptyDataTemplate>
                                                                        <AlternatingRowStyle BackColor="White" />
                                                                        <FooterStyle BackColor="#EFF3FB" ForeColor="#333333" />
                                                                        <HeaderStyle BackColor="#711B04" Font-Bold="True" ForeColor="black" Font-Size="18px" />
                                                                        <PagerSettings Mode="NextPreviousFirstLast" />
                                                                        <PagerStyle BackColor="#2461BF" ForeColor="White" HorizontalAlign="Center" CssClass="cssPager" />
                                                                        <RowStyle BackColor="#711B04" Font-Bold="True" ForeColor="black" Font-Size="18px" />
                                                                        <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
                                                                        <EmptyDataRowStyle CssClass="mycentertext" />
                                                                    </asp:GridView>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                                <br />
                                                <br />
                                                <div class="row">
                                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="div4" runat="server">
                                                        <table style="font-family: arial, sans-serif; border-collapse: collapse; width: 45%;
                                                            border: 1px solid black; margin-left: 544px;">
                                                            <tr style="border: 1px solid black;">
                                                                <td style="border: 1px solid black; width: 40%;padding:10px;font-weight: bold;">
                                                                    Total Amount
                                                                </td>
                                                                <td style="border: 1px solid black; width: 40%;padding:10px">
                                                                    <asp:Label ID="lbl_totalAmt" runat="server" Style="font-size: 18px; font-weight: bold;"></asp:Label>
                                                                </td>
                                                            </tr>
                                                            <tr style="border: 1px solid black;">
                                                                <td style="border: 1px solid black;padding:10px;font-weight: bold;">
                                                                    Advance Amount
                                                                </td>
                                                                <td style="border: 1px solid black;padding:10px;font-weight: bold;">
                                                                </td>
                                                            </tr>
                                                            <tr style="border: 1px solid black;">
                                                                <td style="border: 1px solid black;padding:10px;font-weight: bold;">
                                                                    Remaining Amount
                                                                </td>
                                                                <td style="border: 1px solid black;padding:10px;font-weight: bold;">
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div> 
                                                <div class="row">
                                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="div5" runat="server">
                                                      <table style="font-family: arial, sans-serif; border-collapse: collapse; width: 100%; ">
                                                            <tr>
                                                                <td>
                                                                 <br />
                                                                 <br />
                                                                      1.While Putting Order need to pay 50% Advance.<br/>
                                                                      2.Once youplaced order,Cannot be cancel for any reason and you will not get your amount return.<br/>
                                                                      3.While transportation if there is any damage done for goods, we are not responsibel for that.
                                                                </td>  
                                                                                                                              
                                                            </tr>
                                                            <tr>
                                                            <td align="right" style="font-size: 18px; font-weight: bold;">
                                                            
                                                                    Thank You 
                                                            </td>
                                                            </tr>
                                                            </table>
                                                    </div>
                                                </div>
                                                                                             
                                            </div>
                                               <br />
                                                  <br />
                                           <%-- <div id="pnlGridViewNew1" runat="server" style="margin-left: 1000px;"> 
                                         
                                                      <div class="row">
                                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="div5" runat="server">
                                                        <asp:Label ID="Label3" runat="server" Style="font-size: 18px; font-weight: bold;">
                                                             1.While Putting Order need to pay 50% Advance.<br/>
                                                             2.Once youplaced order,Cannot be cancel for any reason and you will not get your amount return.<br/>
                                                             3.While transportation if there is any damage done for goods, we are not responsibel for that.
                                                        </asp:Label>
                                                        <br />
                                                        <asp:Label ID="Label5" runat="server" Style="font-size: 18px; font-weight: bold;">
                                                     Thank You
                                                        </asp:Label>
                                                    </div>
                                                </div>
                                            </div>--%>
                                        </div>
                                    </div>
                                    <%-- priya 08-Apr-18--%>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-------->
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 bit-dtl-bg bid-detls-frm-adj"
                style="width: 100%;">
                <center>
                    <asp:Button ID="Button1" class="btn btn-primary" runat="server" Text="Print" OnClientClick="return PrintPage();" />
                    &nbsp; &nbsp;
                 
                </center>
            </div>
        </div>
    </div>
    <div id="editor">
    </div>
    </form>
    <script language="javascript" type="text/javascript">

        function PrintPage() {
            // alert('ss');
            var mywindow = window.open('', 'PRINT', 'height=1200,width=1600');

            mywindow.document.write(document.getElementById("<%=pnlGridViewNew.ClientID%>").innerHTML);           
           
            mywindow.document.close(); //necessary for IE >= 10
            mywindow.focus(); //necessary for IE >= 10*/
            mywindow.print();
            mywindow.close();

            return false;

        }



    </script>
</asp:Content>
