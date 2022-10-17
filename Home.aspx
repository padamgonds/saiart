<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="SaiArtLatest.Home" %>

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

        $(function () {

            $("#searchicon").click(function () {
                $("#toggle-searchbox").toggle();
            });

            $("#newbid").click(function () {

                $("#toggle-newbid").toggle();

            });

        });
       

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

                            <li class="navliadjs" id="Li1" runat="server"><a href="PartyMaster.aspx"
                                id="A1" runat="server">Party Insert</a></li>

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
                                <asp:GridView ID="grd9Inch" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                    Width="100%" runat="server" AllowSorting="true" OnRowCommand="grd9Inch_RowCommand"
                                    OnRowDataBound="grd9Inch_RowDataBound" OnPageIndexChanging="grd9Inch_PageIndexChanging">
                                    <Columns>
                                        <asp:TemplateField HeaderText="SrNo." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("ID")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_NAME")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Total Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_QUANTITY")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Price" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_PRIZE")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Available Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("available")%>
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
                                <asp:GridView ID="grd_12Inch" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                    Width="100%" runat="server" AllowSorting="true" OnRowCommand="grd_12Inch_RowCommand"
                                    OnRowDataBound="grd_12Inch_RowDataBound" OnPageIndexChanging="grd_12Inch_PageIndexChanging">
                                    <Columns>
                                        <asp:TemplateField HeaderText="SrNo." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("ID")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_NAME")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Total Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_QUANTITY")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Price" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_PRIZE")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Available Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("available")%>
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
                            </div>
                        </div>
                    </div>
                </div>
                <%--     14 - 16 inch--%>
                <br />
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="col-md-12 col-sm-12 total_avail">
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="lblavailable" runat="server">Total Quantity=</asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="lbl_dbtotalquantit_avai_9inch" runat="server"></asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label2" runat="server">Total Available=</asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="lbl_totalavai_avai_9inch" runat="server"></asp:Label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="col-md-12 col-sm-12 total_avail">
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label1" runat="server">Total Quantity=</asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label3" runat="server"></asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label4" runat="server">Total Available=</asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label5" runat="server"></asp:Label>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div class="row margin-dashboard-row">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="div1" runat="server">
                        <div class="blue-box">
                            14" Inch
                        </div>
                        <div class="table-responsive">
                            <div>
                                <asp:GridView ID="grd_14inch" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                    Width="100%" runat="server" AllowSorting="true">
                                    <Columns>
                                        <asp:TemplateField HeaderText="SrNo." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("ID")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_NAME")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Total Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_QUANTITY")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Price" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_PRIZE")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Available Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("available")%>
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
                                <asp:GridView ID="grd_16inch" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                    Width="100%" runat="server" AllowSorting="true" OnRowCommand="grd_12Inch_RowCommand">
                                    <Columns>
                                        <asp:TemplateField HeaderText="SrNo." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("ID")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_NAME")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Total Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_QUANTITY")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Price" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_PRIZE")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Available Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("available")%>
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
                            </div>
                        </div>
                    </div>
                </div>
                <%--    18 - 22 inch--%>
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="col-md-12 col-sm-12 total_avail">
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label6" runat="server">Total Quantity=</asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label7" runat="server"></asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label8" runat="server">Total Available=</asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label9" runat="server"></asp:Label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="col-md-12 col-sm-12 total_avail">
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label26" runat="server">Total Quantity=</asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label27" runat="server"></asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label28" runat="server">Total Available=</asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label29" runat="server"></asp:Label>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div class="row margin-dashboard-row">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="div3" runat="server">
                        <div class="blue-box">
                            18" Inch
                        </div>
                        <div class="table-responsive">
                            <div>
                                <asp:GridView ID="grd_18Inch" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                    Width="100%" runat="server" AllowSorting="true">
                                    <Columns>
                                        <asp:TemplateField HeaderText="SrNo." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("ID")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_NAME")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Total Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_QUANTITY")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Price" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_PRIZE")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Available Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("available")%>
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
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="div4" runat="server">
                        <div class="blue-box">
                            22" Inch
                        </div>
                        <div class="table-responsive">
                            <div>
                                <asp:GridView ID="grd_22Inch" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                    Width="100%" runat="server" AllowSorting="true" OnRowCommand="grd_12Inch_RowCommand">
                                    <Columns>
                                        <asp:TemplateField HeaderText="SrNo." ItemStyle-Width="4%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("ID")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_NAME")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Total Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_QUANTITY")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Price" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_PRIZE")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Available Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("available")%>
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
                            </div>
                        </div>
                    </div>
                </div>
                <%--    2 - 2 1/2 feet--%>
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="col-md-12 col-sm-12 total_avail">
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label10" runat="server">Total Quantity=</asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label11" runat="server"></asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label12" runat="server">Total Available=</asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label13" runat="server"></asp:Label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="col-md-12 col-sm-12 total_avail">
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label14" runat="server">Total Quantity=</asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label15" runat="server"></asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label16" runat="server">Total Available=</asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label17" runat="server"></asp:Label>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div class="row margin-dashboard-row">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="div5" runat="server">
                        <div class="blue-box">
                            2 Feet
                        </div>
                        <div class="table-responsive">
                            <div>
                                <asp:GridView ID="grd_2feet" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                    Width="100%" runat="server" AllowSorting="true">
                                    <Columns>
                                        <asp:TemplateField HeaderText="SrNo." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("ID")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_NAME")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Total Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_QUANTITY")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Price" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_PRIZE")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Available Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("available")%>
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
                                <asp:GridView ID="grd_2halfFeet" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                    Width="100%" runat="server" AllowSorting="true" OnRowCommand="grd_12Inch_RowCommand">
                                    <Columns>
                                        <asp:TemplateField HeaderText="SrNo." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("ID")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_NAME")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Toatal Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_QUANTITY")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Model Price" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("MODEL_PRIZE")%>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Available Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                            <ItemTemplate>
                                                <%#Eval("available")%>
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
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="col-md-12 col-sm-12 total_avail">
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label18" runat="server">Total Quantity=</asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label19" runat="server"></asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label20" runat="server">Total Available=</asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label21" runat="server"></asp:Label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="col-md-12 col-sm-12 total_avail">
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label22" runat="server">Total Quantity=</asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label23" runat="server"></asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label24" runat="server">Total Available=</asp:Label>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <asp:Label ID="Label25" runat="server"></asp:Label>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div class="row margin-bdtl-row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    </div>
                </div>
            </div>
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
</body>
</html>
