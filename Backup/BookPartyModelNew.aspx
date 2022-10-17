<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="BookPartyModelNew.aspx.cs"
    Inherits="SaiArtLatest.BookPartyModelNew" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <%-- css content--%>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="css/style.css" rel="stylesheet" type="text/css" />
    <link href="css/sidebar.css" rel="stylesheet" type="text/css" />
    <%--javascript content--%>
    <script src="js/jquery-1.11.3.js" type="text/javascript"></script>
    <script src="js/bootstrap.js" type="text/javascript"></script>
    <script src="js/sidebar.js" type="text/javascript"></script>
    <!--[if lt IE 9]>
       <script src="js/html5shiv.js" type="text/javascript"></script>
        <script src="js/respond.min.js" type="text/javascript"></script>
    <![endif]-->
    <style type="text/css">
        
    </style>
    <script type="text/javascript">
        function PrintPage() {
            // alert('ss');
            var selValue = $('input[name=joke]:checked').val();
            // alert(selValue);
            if (selValue == 1) {
                $('#first').css("display", "block");
                $('#second').css("display", "none");
                $('#third').css("display", "none"); 
            }
            if (selValue == 2) {
                $('#first').css("display", "none");
                $('#second').css("display", "block");
                $('#third').css("display", "none"); 
            }
            if (selValue == 3) {
                $('#first').css("display", "none");
                $('#second').css("display", "none");
                $('#third').css("display", "block"); 
            }
            var mywindow = window.open('', 'PRINT', 'height=1200,width=1600');

            mywindow.document.write(document.getElementById("<%=pnlGridViewNew.ClientID%>").innerHTML);

            mywindow.document.close(); //necessary for IE >= 10
            mywindow.focus(); //necessary for IE >= 10*/
            mywindow.print();
            mywindow.close();

            return false;

        }
        $(document).ready(function () {
            if (history.state) {
                $("#pxeMainDiv").scrollTop(history.state.data);
            }
            $("#pxeMainDiv").scroll(function () {
                var scrollPos = $("#pxeMainDiv").scrollTop();
                var stateObj = { data: scrollPos };
                history.replaceState(stateObj, "");
            });
        });





        $(function () {

            $("#searchicon").click(function () {
                $("#toggle-searchbox").toggle();
            });

            $("#newbid").click(function () {

                $("#toggle-newbid").toggle();

            });

        });


        function isNumberKey(evt) {
            ///  alert("in");
            var charCode = (evt.which) ? evt.which : event.keyCode
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                $("#ContentPlaceHolder1_lblErrMsg").empty();
                $("#ContentPlaceHolder1_lblErrMsg").append("Quantity Should be Numeric Only.");

                $("html, body").animate({
                    scrollLeft: 0
                }, 600);
                return false;
            }
            else {
                $("#ContentPlaceHolder1_lblErrMsg").empty();
            }

        }




    </script>
    <style>
        .total_avail
        {
            height: 35px;
            background: gray;
            color: white;
            padding: 7px;
            font-size: 18px;
            font-family: sans-serif;
        }
    </style>
</head>
<body class="homepagebg">


<div class="pxeMainDiv">
    <form id="Form1" role="search" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <div class="container-fluid">
        <div class="row header">
            <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                <div class="row">
                    <div class="col-xs-3 col-sm-3 col-md-6 col-lg-6  headerbar-left-adjs">
                        <div class="pull-left">
                            <img src="img/wallapepar2.jpg" alt="" style="width: 115px !important; height: 96px !important;" />
                        </div>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-6 col-lg-6 headerbar-right headerbar-right-adjs">
                        <div class="pull-left">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div class="row">
                    <div class="col-xs-3 col-sm-3 col-md-6 col-lg-6  headerbar-left-adjs">
                        <div class="pull-left">
                            <img src="img/index_02.gif" alt="" class="logo_sai_adj" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 header-rigth-image">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 hidden-sm hidden-xs font_logout-adjs">
                        <a href="Logout.aspx" class="pull-right">Logout &nbsp;<span class="glyphicon glyphicon-off"
                            style="top: 2px;"></span></a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-8 col-md-7 col-lg-8 hidden-xs hidden-sm">
                        <ul class="headerbar-nav">
                            <li class="navliadjs" id="mybid_nav" runat="server"><a href="PartyDashboard.aspx"
                                id="mybidslg" runat="server">Party Master</a></li>
                            <li class="divider-vertical" id="HomeMenu_nav" runat="server"></li>
                            <li class="navliadjs" id="Li1" runat="server"><a href="PartyMaster.aspx" id="A1"
                                runat="server">Party Insert</a></li>
                        </ul>
                    </div>
                    <!--dropdown added-->
                    <!--dropdown end-->
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 hidden-sm hidden-xs">
                        <form id="Form2" class="navbar-form" role="search">
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <asp:Label ID="Label1" runat="server" Text="Party Id : " Style="font-size: 18px;
                            font-weight: bold;">
                        </asp:Label>
                        <asp:Label ID="lbl_PartyId" runat="server" Text="" Style="font-size: 18px; font-weight: bold;"></asp:Label>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <asp:Label ID="Label2" runat="server" Text="Party Name : " Style="font-size: 18px;
                            font-weight: bold;"> 
                        </asp:Label><asp:Label ID="lbl_Name" runat="server" Text="" Style="font-size: 18px;
                            font-weight: bold;"></asp:Label>
                    </div>
                </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <asp:Button ID="btnSave" class="btn btn-primary" runat="server" Text="Book Party"
                    OnClick="btnSave_Click" Style="float: right;" />
                &nbsp; &nbsp;
            </div>
        </div>
        <div>
            <asp:Label ID="lblErrMsg" class="err_message" runat="server" Text="" Style="color: red;
                font-size: 14px;"></asp:Label><br />
        </div>
        <br />
        <div class="row" id="rowDashboard" runat="server">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <%--    9-12 inch--%>
                <div class="row margin-dashboard-row">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="div_activeBids" runat="server">
                        <div class="blue-box">
                            9" Inch
                        </div>
                        <div class="table-responsive">
                            <div>
                            <asp:UpdatePanel ID="UpdatePanel7" runat="server">
                                     <ContentTemplate>

                                <asp:GridView ID="grd9Inch" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                    Width="100%" runat="server" AllowSorting="true" OnRowDataBound="grd9Inch_RowDataBound">
                                    <Columns>
                                        <asp:TemplateField HeaderText="SrNo." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("ID")%>
                                                 
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_NAME")%>
                                                <asp:HiddenField ID="hdn_ModelID" runat="server" Value='<%# Bind("ID") %>' />
                                                <asp:HiddenField ID="hdn_Size" runat="server" Value='<%# Bind("MODEL_SIZE") %>' />
                                                 <asp:HiddenField ID="hdn_Quantity" runat="server" Value='<%# Bind("QUANTITY") %>' />
                                                  <asp:HiddenField ID="hdn_Available" runat="server" Value='<%# Bind("available") %>' />
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="A/Qun" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%--  <%#Eval("available")%>--%>
                                                <asp:Label ID="lbl_Available" runat="server" Text='<%#Eval("available")%>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                            <asp:UpdatePanel ID="UpdatePanel3" runat="server">
                                     <ContentTemplate>
                                                <%--   <asp:TextBox ID="txt_9inch" runat="server" Text = "0" OnTextChanged="txt_9inch_TextChanged" AutoPostBack="true"></asp:TextBox>--%>
                                                <asp:TextBox ID="txt_9inch_Qty" runat="server" Text='<%#Eval("QUANTITY")%>' class="form-control"
                                                    Width="100%" BorderStyle="None" MaxLength="1000" OnTextChanged="txt_9inch_TextChanged"
                                                    AutoPostBack="true" onkeyup="isNumberKey(this);" autocomplete="off" ></asp:TextBox>
                                            
                                            </ContentTemplate>
                                            </asp:UpdatePanel>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Rate" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%--    <%#Eval("MODEL_PRIZE")%>--%>
                                                <asp:Label ID="lbl_Price" runat="server" Text='<%#Eval("MODEL_PRIZE")%>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Amt" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_Total" runat="server" Text='<%#Eval("TOTAL_PRICE")%>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                    </Columns>
                                    <EmptyDataTemplate>
                                        <asp:Label ID="lblNoRecforRunByYou" runat="server" Style="font-size: 16px;">No records found</asp:Label>
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
                           
                           </ContentTemplate>
                           </asp:UpdatePanel>
                            </div>
                        </div>
                    </div>
                    <%--     Latest Bids received in last 7 days Grid--%>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="div_last7bidsReceived" runat="server">
                        <div class="blue-box">
                            12" Inch
                        </div>
                        <div class="table-responsive">
                            <div>
                            <asp:UpdatePanel ID="UpdatePanel6" runat="server">
                                     <ContentTemplate>

                                <asp:GridView ID="grd_12Inch" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                    Width="100%" runat="server" AllowSorting="true" OnRowDataBound="grd_12Inch_RowDataBound">
                                    <Columns>
                                        <asp:TemplateField HeaderText="SrNo." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("ID")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_NAME")%>
                                                <asp:HiddenField ID="hdn_ModelID1" runat="server" Value='<%# Bind("ID") %>' />
                                                <asp:HiddenField ID="hdn_Size1" runat="server" Value='<%# Bind("MODEL_SIZE") %>' />
                                                  <asp:HiddenField ID="hdn_Quantity1" runat="server" Value='<%# Bind("QUANTITY") %>' />
                                                  <asp:HiddenField ID="hdn_Available1" runat="server" Value='<%# Bind("available") %>' />
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="A/Qun" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%--  <%#Eval("available")%>--%>
                                                <asp:Label ID="lbl_Available1" runat="server" Text='<%#Eval("available")%>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                            <asp:UpdatePanel ID="UpdatePanel3" runat="server">
                                     <ContentTemplate>
                                                <%--   <asp:TextBox ID="txt_9inch" runat="server" Text = "0" OnTextChanged="txt_9inch_TextChanged" AutoPostBack="true"></asp:TextBox>--%>
                                                <asp:TextBox ID="txt_9inch_Qty1" runat="server" Text='<%#Eval("QUANTITY")%>' class="form-control"
                                                    Width="100%" BorderStyle="None" MaxLength="1000" OnTextChanged="txt_12Inch_TextChanged"
                                                    AutoPostBack="true" onkeyup="isNumberKey(this);" autocomplete="off" ></asp:TextBox>
                                           
                                           </ContentTemplate>
                                           </asp:UpdatePanel>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Rate" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%--    <%#Eval("MODEL_PRIZE")%>--%>
                                                <asp:Label ID="lbl_Price1" runat="server" Text='<%#Eval("MODEL_PRIZE")%>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Amt" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_Total1" runat="server" Text='<%#Eval("TOTAL_PRICE")%>'></asp:Label>
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
                           
                           </ContentTemplate>
                        </asp:UpdatePanel>
                            </div>
                        </div>
                    </div>
                </div>
                <%--     14 - 16 inch--%>
                <br />
                <div class="row margin-dashboard-row">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="div1" runat="server">
                        <div class="blue-box">
                            14" Inch
                        </div>
                        <div class="table-responsive">
                            <div>
                            <asp:UpdatePanel ID="UpdatePanel5" runat="server">
                                     <ContentTemplate>
                                <asp:GridView ID="grd_14inch" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                    Width="100%" runat="server" AllowSorting="true" OnRowDataBound="grd_14inch_RowDataBound">
                                    <Columns>
                                        <asp:TemplateField HeaderText="SrNo." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("ID")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_NAME")%>
                                                <asp:HiddenField ID="hdn_ModelID2" runat="server" Value='<%# Bind("ID") %>' />
                                                <asp:HiddenField ID="hdn_Size2" runat="server" Value='<%# Bind("MODEL_SIZE") %>' />
                                                  <asp:HiddenField ID="hdn_Quantity2" runat="server" Value='<%# Bind("QUANTITY") %>' />
                                                  <asp:HiddenField ID="hdn_Available2" runat="server" Value='<%# Bind("available") %>' />
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="A/Qun" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%--  <%#Eval("available")%>--%>
                                                <asp:Label ID="lbl_Available2" runat="server" Text='<%#Eval("available")%>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                            <asp:UpdatePanel ID="UpdatePanel3" runat="server">
                                     <ContentTemplate>
                                                <%--   <asp:TextBox ID="txt_9inch" runat="server" Text = "0" OnTextChanged="txt_9inch_TextChanged" AutoPostBack="true"></asp:TextBox>--%>
                                                <asp:TextBox ID="txt_9inch_Qty2" runat="server" Text='<%#Eval("QUANTITY")%>' class="form-control"
                                                    Width="100%" BorderStyle="None" MaxLength="1000" OnTextChanged="txt_14inch_TextChanged"
                                                    AutoPostBack="true" onkeyup="isNumberKey(this);" autocomplete="off" ></asp:TextBox>
                                            
                                            </ContentTemplate>
                                    </asp:UpdatePanel>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Rate" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%--    <%#Eval("MODEL_PRIZE")%>--%>
                                                <asp:Label ID="lbl_Price2" runat="server" Text='<%#Eval("MODEL_PRIZE")%>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Amt" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_Total2" runat="server" Text='<%#Eval("TOTAL_PRICE")%>'></asp:Label>
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
                          
                          </ContentTemplate>
                        </asp:UpdatePanel>
                            </div>
                        </div>
                    </div>
                    <%--     Latest Bids received in last 7 days Grid--%>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="div2" runat="server">
                        <div class="blue-box">
                            16" Inch
                        </div>
                        <div class="table-responsive">
                            <div>
                            <asp:UpdatePanel ID="UpdatePanel4" runat="server">
                                     <ContentTemplate>
                                <asp:GridView ID="grd_16inch" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                    Width="100%" runat="server" AllowSorting="true" OnRowDataBound="grd_16inch_RowDataBound">
                                    <Columns>
                                        <asp:TemplateField HeaderText="SrNo." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("ID")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_NAME")%>
                                                <asp:HiddenField ID="hdn_ModelID3" runat="server" Value='<%# Bind("ID") %>' />
                                                <asp:HiddenField ID="hdn_Size3" runat="server" Value='<%# Bind("MODEL_SIZE") %>' />
                                                  <asp:HiddenField ID="hdn_Quantity3" runat="server" Value='<%# Bind("QUANTITY") %>' />
                                                  <asp:HiddenField ID="hdn_Available3" runat="server" Value='<%# Bind("available") %>' />
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="A/Qun" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%--  <%#Eval("available")%>--%>
                                                <asp:Label ID="lbl_Available3" runat="server" Text='<%#Eval("available")%>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                            
                               <asp:UpdatePanel ID="UpdatePanel3" runat="server">
                                     <ContentTemplate>
                                                <%--   <asp:TextBox ID="txt_9inch" runat="server" Text = "0" OnTextChanged="txt_9inch_TextChanged" AutoPostBack="true"></asp:TextBox>--%>
                                                <asp:TextBox ID="txt_9inch_Qty3" runat="server" Text='<%#Eval("QUANTITY")%>' class="form-control"
                                                    Width="100%" BorderStyle="None" MaxLength="1000" OnTextChanged="txt_16inch_TextChanged"
                                                    AutoPostBack="true" onkeyup="isNumberKey(this);" autocomplete="off" ></asp:TextBox>
                                          </ContentTemplate>
                                          </asp:UpdatePanel>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Rate" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%--    <%#Eval("MODEL_PRIZE")%>--%>
                                                <asp:Label ID="lbl_Price3" runat="server" Text='<%#Eval("MODEL_PRIZE")%>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Amt" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_Total3" runat="server" Text='<%#Eval("TOTAL_PRICE")%>'></asp:Label>
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
                           </ContentTemplate>
                           </asp:UpdatePanel>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="row margin-dashboard-row">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="div3" runat="server">
                        <div class="blue-box">
                            18" Inch
                        </div>
                        <div class="table-responsive">
                            <div>
                               
                               <asp:UpdatePanel ID="UpdatePanel3" runat="server">
                                     <ContentTemplate>
                                <asp:GridView ID="grd_18Inch" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                    Width="100%" runat="server" AllowSorting="true" OnRowDataBound="grd_18Inch_RowDataBound">
                                    <Columns>
                                        <asp:TemplateField HeaderText="SrNo." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("ID")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_NAME")%>
                                                <asp:HiddenField ID="hdn_ModelID4" runat="server" Value='<%# Bind("ID") %>' />
                                                <asp:HiddenField ID="hdn_Size4" runat="server" Value='<%# Bind("MODEL_SIZE") %>' />
                                                  <asp:HiddenField ID="hdn_Quantity4" runat="server" Value='<%# Bind("QUANTITY") %>' />
                                                  <asp:HiddenField ID="hdn_Available4" runat="server" Value='<%# Bind("available") %>' />
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="A/Qun" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%--  <%#Eval("available")%>--%>
                                                <asp:Label ID="lbl_Available4" runat="server" Text='<%#Eval("available")%>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                            
                               <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                                     <ContentTemplate>
                                                <%--   <asp:TextBox ID="txt_9inch" runat="server" Text = "0" OnTextChanged="txt_9inch_TextChanged" AutoPostBack="true"></asp:TextBox>--%>
                                                <asp:TextBox ID="txt_9inch_Qty4" runat="server" Text='<%#Eval("QUANTITY")%>' class="form-control"
                                                    Width="100%" BorderStyle="None" MaxLength="1000" OnTextChanged="txt_18Inch_TextChanged"
                                                    AutoPostBack="true" onkeyup="isNumberKey(this);" autocomplete="off" ></asp:TextBox>
                                                    </ContentTemplate>
                                                    </asp:UpdatePanel>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Rate" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%--    <%#Eval("MODEL_PRIZE")%>--%>
                                                <asp:Label ID="lbl_Price4" runat="server" Text='<%#Eval("MODEL_PRIZE")%>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Amt" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_Total4" runat="server" Text='<%#Eval("TOTAL_PRICE")%>'></asp:Label>
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

                                </ContentTemplate>
                                </asp:UpdatePanel>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="div4" runat="server">
                        <div class="blue-box">
                            22" Inch
                        </div>
                        <div class="table-responsive">
                            <div>
                            
                               <asp:UpdatePanel ID="UpdatePanel2" runat="server">
                                     <ContentTemplate>
                                <asp:GridView ID="grd_22Inch" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                    Width="100%" runat="server" AllowSorting="true" OnRowDataBound="grd_22Inch_RowDataBound">
                                    <Columns>
                                        <asp:TemplateField HeaderText="SrNo." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("ID")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_NAME")%>
                                                <asp:HiddenField ID="hdn_ModelID5" runat="server" Value='<%# Bind("ID") %>' />
                                                <asp:HiddenField ID="hdn_Size5" runat="server" Value='<%# Bind("MODEL_SIZE") %>' />
                                                  <asp:HiddenField ID="hdn_Quantity5" runat="server" Value='<%# Bind("QUANTITY") %>' />
                                                  <asp:HiddenField ID="hdn_Available5" runat="server" Value='<%# Bind("available") %>' />
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="A/Qun" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%--  <%#Eval("available")%>--%>
                                                <asp:Label ID="lbl_Available5" runat="server" Text='<%#Eval("available")%>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>

                                            
                               <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                                     <ContentTemplate>
                                                <%--   <asp:TextBox ID="txt_9inch" runat="server" Text = "0" OnTextChanged="txt_9inch_TextChanged" AutoPostBack="true"></asp:TextBox>--%>
                                                <asp:TextBox ID="txt_9inch_Qty5" runat="server" Text='<%#Eval("QUANTITY")%>' class="form-control"
                                                    Width="100%" BorderStyle="None" MaxLength="1000" OnTextChanged="txt_22Inch_TextChanged"
                                                    AutoPostBack="true" onkeyup="isNumberKey(this);" autocomplete="off" ></asp:TextBox>
                                                    </ContentTemplate>
                                                    </asp:UpdatePanel>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Rate" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%--    <%#Eval("MODEL_PRIZE")%>--%>
                                                <asp:Label ID="lbl_Price5" runat="server" Text='<%#Eval("MODEL_PRIZE")%>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Amt" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_Total5" runat="server" Text='<%#Eval("TOTAL_PRICE")%>'></asp:Label>
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
                                      </ContentTemplate>
                                </asp:UpdatePanel>
                            </div>
                        </div>
                    </div>
                </div>
                <%--    2 - 2 1/2 feet--%>
                <br />
                <br />
                <div class="row margin-dashboard-row">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="div5" runat="server">
                        <div class="blue-box">
                            2 Feet
                        </div>
                        <div class="table-responsive">
                            <div>
                            
                               <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                                     <ContentTemplate>
                                <asp:GridView ID="grd_2feet" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                    Width="100%" runat="server" AllowSorting="true" OnRowDataBound="grd_2feet_RowDataBound">
                                    <Columns>
                                        <asp:TemplateField HeaderText="SrNo." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("ID")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_NAME")%>
                                                <asp:HiddenField ID="hdn_ModelID6" runat="server" Value='<%# Bind("ID") %>' />
                                                <asp:HiddenField ID="hdn_Size6" runat="server" Value='<%# Bind("MODEL_SIZE") %>' />
                                                  <asp:HiddenField ID="hdn_Quantity6" runat="server" Value='<%# Bind("QUANTITY") %>' />
                                                  <asp:HiddenField ID="hdn_Available6" runat="server" Value='<%# Bind("available") %>' />
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="A/Qun" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%--  <%#Eval("available")%>--%>
                                                <asp:Label ID="lbl_Available6" runat="server" Text='<%#Eval("available")%>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                              <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                                                <ContentTemplate>
                                                <%--   <asp:TextBox ID="txt_9inch" runat="server" Text = "0" OnTextChanged="txt_9inch_TextChanged" AutoPostBack="true"></asp:TextBox>--%>
                                                <asp:TextBox ID="txt_9inch_Qty6" runat="server" Text='<%#Eval("QUANTITY")%>' class="form-control"
                                                    Width="100%" BorderStyle="None" MaxLength="1000" OnTextChanged="txt_2feet_TextChanged"
                                                    AutoPostBack="true" onkeyup="isNumberKey(this);" autocomplete="off" ></asp:TextBox>
                                            
                                            </ContentTemplate>
                                            </asp:UpdatePanel>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Rate" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%--    <%#Eval("MODEL_PRIZE")%>--%>
                                                <asp:Label ID="lbl_Price6" runat="server" Text='<%#Eval("MODEL_PRIZE")%>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Amt" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_Total6" runat="server" Text='<%#Eval("TOTAL_PRICE")%>'></asp:Label>
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

                                </ContentTemplate>
                                </asp:UpdatePanel>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="div6" runat="server">
                        <div class="blue-box">
                            2 1/2 Feet
                        </div>
                        <div class="table-responsive">
                            <div>

                            <asp:UpdatePanel ID="UpdatePanelUsers" runat="server" UpdateMode="Conditional">

                            <ContentTemplate>
                                <asp:GridView ID="grd_2halfFeet" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                    Width="100%" runat="server" AllowSorting="true" OnRowDataBound="grd_2halfFeet_RowDataBound">
                                    <Columns>
                                        <asp:TemplateField HeaderText="SrNo." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("ID")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_NAME")%>
                                                <asp:HiddenField ID="hdn_ModelID7" runat="server" Value='<%# Bind("ID") %>' />
                                                <asp:HiddenField ID="hdn_Size7" runat="server" Value='<%# Bind("MODEL_SIZE") %>' />
                                                  <asp:HiddenField ID="hdn_Quantity7" runat="server" Value='<%# Bind("QUANTITY") %>' />
                                                  <asp:HiddenField ID="hdn_Available7" runat="server" Value='<%# Bind("available") %>' />
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="A/Qun" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%--  <%#Eval("available")%>--%>
                                                <asp:Label ID="lbl_Available7" runat="server" Text='<%#Eval("available")%>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                                                <ContentTemplate>
                                                <asp:TextBox ID="txt_9inch_Qty7" runat="server" Text='<%#Eval("QUANTITY")%>' class="form-control"
                                                    Width="100%" BorderStyle="None" MaxLength="1000" OnTextChanged="txt_2halfFeet_TextChanged"
                                                    AutoPostBack="true" onkeyup="isNumberKey(this);" autocomplete="off" ></asp:TextBox>
                                            
                                            </ContentTemplate>
                                            </asp:UpdatePanel>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Rate" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%--    <%#Eval("MODEL_PRIZE")%>--%>
                                                <asp:Label ID="lbl_Price7" runat="server" Text='<%#Eval("MODEL_PRIZE")%>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Amt" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_Total7" runat="server" Text='<%#Eval("TOTAL_PRICE")%>'></asp:Label>
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

                               </ContentTemplate>
                            </asp:UpdatePanel>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>

            </div>
        </div>
              


           <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 bit-dtl-bg "
                style="width: 100%;">
                <div class="form-group center-block">
                    <div class="row" id="Div12" runat="server">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="row margin-dashboard-row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="div13" runat="server">
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
                                                            Width="100%" runat="server" AllowSorting="true" DataKeyNames="MODEL_ID" OnRowDataBound="grdPartyDashboard_RowDataBound">
                                                            <Columns>
                                                                <asp:TemplateField HeaderText="SrNo." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                                                    <ItemTemplate>
                                                                        <%#Eval("MODEL_ID")%>
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
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 bit-dtl-bg bid-detls-frm-adj"
                style="width: 100%;">
              <input type="radio" name="joke" value="1" /> Shri sai art
              <input type="radio" name="joke" value="2" /> Shri Sai Sankalp
              <input type="radio" name="joke" value="3" /> Shri Sai Sanidhya

              </div>
         <!----payment receipt---->
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 bit-dtl-bg bid-detls-frm-adj"
                style="width: 100%; display: none;padding:0px;">
                <div class="form-group center-block">
                    <div class="row" id="Div7" runat="server">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="row margin-dashboard-row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="div8" runat="server">
                                    <%--Priya 08-Apr-18--%>
                                    <div class="table-responsive">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="div9" runat="server">
                                            <br />
                                            <div id="pnlGridViewNew" runat="server" class="row">
                                                <div id="first">
                                                <img src="img/Header_img_2.png" alt="" style="height: 125px; width: 1000px;" />
                                                 </div>
                                                 <div id="second">
                                                 <img src="img/Header_img_3.png" alt="" style="height: 125px; width: 1000px;" />
                                                 </div>
                                                 <div id="third">
                                                  <img src="img/Header_img_4.png" alt="" style="height: 125px; width: 1000px;" />
                                                </div>
                                                <br />
                                                <div class="row">
                                                    <div class="col-md-6 col-sm-6 col-lg-6" style="margin-top: 10px;">
                                                        <asp:Label ID="Label3" runat="server" Style="font-size: 18px; font-weight: bold;">Party Name:</asp:Label>
                                                        <asp:Label ID="lbl_partyname" runat="server" Style="font-size: 18px; font-weight: bold;"></asp:Label>
                                                    </div>
                                                    <div class="col-md-6 col-sm-6 col-lg-6" style="margin-top: -15px; margin-left: 800px;">
                                                        <asp:Label ID="Label4" runat="server" Style="font-size: 18px; font-weight: bold;">Date:</asp:Label>
                                                        <asp:Label ID="lblDate" runat="server" Style="font-size: 18px; font-weight: bold;"></asp:Label>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6 col-sm-6 col-lg-6" style="margin-top: 5px;">
                                                        <asp:Label ID="Label5" runat="server" Style="font-size: 18px; font-weight: bold;">Address:</asp:Label>
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
                                                                                    <%#Eval("MODEL_ID")%>
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
                                                                        <HeaderStyle BackColor="White" Font-Bold="True" ForeColor="black" Font-Size="18px" />
                                                                        <PagerSettings Mode="NextPreviousFirstLast" />
                                                                        <PagerStyle BackColor="White" ForeColor="White" HorizontalAlign="Center" CssClass="cssPager" />
                                                                        <RowStyle BackColor="White" Font-Bold="True" ForeColor="black" Font-Size="18px" />
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
                                                                                    <%#Eval("MODEL_ID")%>
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
                                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="div10" runat="server">
                                                        <table style="font-family: arial, sans-serif; border-collapse: collapse; width: 45%;
                                                            border: 1px solid black; margin-left: 544px;">

                                                            <tr style="border: 1px solid black;">
                                                                <td style="border: 1px solid black; width: 40%;padding:10px;font-weight: bold;">
                                                                    Total Quantity
                                                                </td>
                                                                <td style="border: 1px solid black; width: 40%;padding:10px">
                                                                    <asp:Label ID="lbl_quantity_buy" runat="server" Style="font-size: 18px; font-weight: bold;"></asp:Label>
                                                                </td>
                                                            </tr>


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
                                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="div11" runat="server">
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
    <!---------------------------------------------pop up ------------------------------------------------->
    <style type="text/css">
        .maxheight
        {
            height: 375px !important;
        }
        .setwidthpopup .Popup
        {
            width: 1330px !important;
            left: 125px !important; /*height:600px !important;*/
        }
    </style>
    <script type="text/javascript">

        function ClosePopup_Click() {

            $find("mpe2").hide();

        }
         
    </script>
    <style type="text/css">
        .maxheight
        {
            height: 375px !important;
        }
        .setwidthpopup .Popup
        {
            width: 1330px !important;
            left: 125px !important; /*height:600px !important;*/
        }
    </style>
    </form>

    </div>
</body>
</html>
