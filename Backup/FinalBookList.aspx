<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true"
    CodeBehind="FinalBookList.aspx.cs" Inherits="SaiArtLatest.FinalBookList" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script language="javascript" type="text/javascript">

        function PrintPage() {

            var mywindow = window.open('', 'PRINT', 'height=1000,width=1500');
            mywindow.document.write("<img id='img' style='width: 100px; height: 100px' src='" + document.getElementById('iconId').src + "'/><br><br>");
            mywindow.document.write(document.getElementById("<%=pnlGridView.ClientID%>").innerHTML);
            mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus(); // necessary for IE >= 10*/
            mywindow.print();
            mywindow.close();

            return false;

        }

        function ShowPopUp() {
            // alert(visitor_id);
            $('#myModal').show();

            $('#myModal').modal('toggle');

        }

    </script>
    <style>
        .close
        {
            float: right;
            font-size: 29px;
            font-weight: bolder;
            color: black;
            line-height: 1;
            text-shadow: 0 1px 0 #fff;
            filter: alpha(opacity=20);
            opacity: .2;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <form id="form1" runat="server" class="form-horizontal">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <div class="row bid-crm" style="margin-left: -18px;">
        <div class="bid-detl-frm">
            <%--   <div class="col-sm-7 col-sm-offset-2">
                <center>
                    <asp:Button ID="btnPrint" class="btn btn-primary" runat="server" Text="Print" OnClientClick="PrintPage();"/>
                </center>
            </div>--%>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 bit-dtl-bg bid-detls-frm-adj"
                style="width: 100%;">
                <div class="form-group center-block">
                    <div class="row" id="rowDashboard" runat="server">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <%--    9-12 inch--%>
                            <div class="row margin-dashboard-row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="div_activeBids" runat="server">
                                    <div class="blue-box">
                                        Final Book List
                                    </div>
                                    <%--  <img src="img/wallapepar2.jpg" id="iconId" alt="photo" style="width: 100px; height: 100px;display: none;"  />
                                    <br />
                                            <br />
                                            <br />--%>
                                    <div class="table-responsive">
                                        <div>
                                            <%--Priya--%>
                                            <%-- <img id="iconId" alt="photo" src="" style="width: 500px; height: 360px" /><br />--%>
                                            <table width="100%" id="pnlGridView" runat="server" align="center" class="ContentTable">
                                                <tr>
                                                    <td colspan="2" align="center">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <%--priya--%>
                                                        <asp:GridView ID="grdPartyDashboard" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                                                            Width="100%" runat="server" AllowSorting="true" OnRowDataBound="grdPartyDashboard_RowDataBound">
                                                            <Columns>
                                                                <asp:TemplateField HeaderText="SrNo." ItemStyle-Width="2%" ItemStyle-CssClass="align_text">
                                                                    <ItemTemplate>
                                                                        <%#Container.DataItemIndex+1 %>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Model Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                                                    <ItemTemplate>
                                                                        <%-- <%#Eval("NAME")%>--%>
                                                                        <asp:HiddenField ID="hdnID" Value='<%# Bind("ID") %>' runat="server" />
                                                                        <asp:LinkButton ID="lnkName" CssClass="tooltip-dashboard" Text='<%#Eval("MODEL_NAME")%>'
                                                                            OnClick="lnkBid_Click" runat="server"></asp:LinkButton>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Model Size" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                                                    <ItemTemplate>
                                                                        <%#Eval("MODEL_SIZE")%>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                                                    <ItemTemplate>
                                                                        <%#Eval("MODEL_QUANTITY")%>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Available" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                                                    <ItemTemplate>
                                                                        <%#Eval("AVAILABLE")%>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                            </Columns>
                                                            <EmptyDataTemplate>
                                                                <asp:Label ID="lblNoRecforRunByYou" runat="server" Style="font-size: 14px;">No records found</asp:Label>
                                                            </EmptyDataTemplate>
                                                            <AlternatingRowStyle BackColor="White" />
                                                            <FooterStyle BackColor="#EFF3FB" ForeColor="#333333" />
                                                            <HeaderStyle BackColor="#711B04" Font-Bold="True" ForeColor="White" Font-Size="18px" />
                                                            <PagerSettings Mode="NextPreviousFirstLast" />
                                                            <PagerStyle BackColor="#2461BF" ForeColor="White" HorizontalAlign="Center" CssClass="cssPager" />
                                                            <RowStyle BackColor="#EFF3FB" Font-Size="18px" />
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
        </div>
    </div>
    <%--Bootstrap modal popup --%>
    <div class="modal fade" id="myModal" role="dialog" style="margin-top: 67px !important;">
        <div class="modal-dialog" style="margin-top: 129px !important; width: 792px !important;">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header" style="background-image: linear-gradient(to bottom, #fa6961 0%, #940000 100%);
                    background-image: -webkit-linear-gradient(top, #fa6961, #940000); background-image: -ms-linear-gradient(top,#fa6961 0%,#940000 100%);
                    background-image: -o-linear-gradient(top, #fa6961, #940000); background-image: -moz-linear-gradient(top, #fa6961, #940000);
                    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#fa6961, endColorstr=#940000);">
                    <button type="button" class="close" data-dismiss="modal">
                        &times;</button>
                    <div class="">
                        <span style="float: left; color: #FFF; font-size: 19px; font-weight: bold;">Model Book
                            Details</span>
                    </div>
                </div>
                <div class="modal-body">
                    <asp:GridView ID="GridView1" AutoGenerateColumns="false" ShowHeaderWhenEmpty="true"
                        Width="100%" runat="server" AllowSorting="true" OnRowDataBound="GridView1_RowDataBound">
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
                            <asp:TemplateField HeaderText="Party Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                <ItemTemplate>
                                    <%#Eval("NAME")%>
                                </ItemTemplate>
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Quantity" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                <ItemTemplate>
                                    <%#Eval("QUANTITY")%>
                                </ItemTemplate>
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Total Price" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
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
                        <HeaderStyle BackColor="#711B04" Font-Bold="True" ForeColor="White" Font-Size="18px" />
                        <PagerSettings Mode="NextPreviousFirstLast" />
                        <PagerStyle BackColor="#2461BF" ForeColor="White" HorizontalAlign="Center" CssClass="cssPager" />
                        <RowStyle BackColor="#EFF3FB" Font-Size="18px" />
                        <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
                        <EmptyDataRowStyle CssClass="mycentertext" />
                    </asp:GridView>
                </div>
                <div class="modal-footer">
                    <%--   <asp:UpdatePanel ID="UpdatePanel6" runat="server" UpdateMode="Conditional">
                                <ContentTemplate>--%>
                    <center>
                                  <%--  <asp:Button ID="Button1" runat="server" Text="Add" class="btn_sub" Style="" OnClientClick="return AddVisitor_Click1();" />--%>

                                    		
                                    </center>
                    <%-- </ContentTemplate>
                            </asp:UpdatePanel>--%>
                    <%-- <button type="button" class="btn btn-default" data-dismiss="modal">
                            Close
                        </button>--%>
                </div>
            </div>
        </div>
    </div>
    </form>
</asp:Content>
