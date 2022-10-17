<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true"
    CodeBehind="PartyDashboard.aspx.cs" Inherits="SaiArtLatest.PartyDashboard" %>

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

        function validate() {


        }

    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <form id="form1" runat="server" class="form-horizontal">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <div class="row margin_bdtl_hdr_row_resp">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 bid-detl align-hdn-uam">
            <span class="page-heading">Party Dashboard</span>
            <asp:Label ID="lblErrMsg" class="err_message" runat="server" Text=""></asp:Label>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 bid-detl align-hdn-uam">

         <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
             <asp:TextBox ID="txt_search" class="form-control pull-left margin-uam-ddl" runat="server"
                     autocomplete="off" ></asp:TextBox></div>
       

          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
             <asp:Button ID="btnSave" class="btn btn-primary" runat="server" Text="search" OnClientClick="return validate();" OnClick="btn_search_click" />
          </div>
           </div>
    </div>
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
                                        Party Details
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
                                                        <asp:GridView ID="grdPartyDashboard" AutoGenerateColumns="false"
                                                            ShowHeaderWhenEmpty="true" Width="100%" runat="server" AllowSorting="true"
                                                            OnRowCommand="grdPartyDashboard_RowCommand" >
                                                            <Columns>
                                                             <asp:TemplateField HeaderText="Party Number" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                                                    <ItemTemplate>
                                                                        <%#Eval("PARTY_ID")%>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                                                    <ItemTemplate>
                                                                        <%-- <%#Eval("NAME")%>--%>
                                                                        <asp:HiddenField ID="hdnID" Value='<%# Bind("ID") %>' runat="server" />
                                                                        <asp:LinkButton ID="lnkName" CssClass="tooltip-dashboard" CommandName="export" Text='<%#Eval("NAME")%>'
                                                                            CommandArgument='<%# Eval("ID") %>' runat="server"></asp:LinkButton>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                               
                                                                <asp:TemplateField HeaderText="Address" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                                                    <ItemTemplate>
                                                                        <%#Eval("ADDRESS")%>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Mobile No" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                                                    <ItemTemplate>
                                                                        <%#Eval("MOBILE_NO")%>
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
        </div>
    </div>
    </form>
</asp:Content>
