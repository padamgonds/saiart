<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PartyUpdate.aspx.cs" Inherits="SaiArtLatest.PartyUpdate" MasterPageFile="~/Site.Master" %>


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
            <span class="page-heading">Party Update/Delete</span>
            <asp:Label ID="lblErrMsg" class="err_message" runat="server" Text=""></asp:Label>
        </div>
      </div>
    <div class="row bid-crm" style="margin-left: -18px;">
        <div class="bid-detl-frm">
  
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
                                    <div class="table-responsive">
                                        <div>
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
                                                            ShowHeaderWhenEmpty="true" Width="100%" runat="server" 
                                                            DataKeyNames="ID">
                                                            <Columns>
                                                            
                                                                  <asp:BoundField DataField="ID" HeaderText="ID" SortExpression="ID" Visible="false" />
                                                             <asp:TemplateField HeaderText="Party<br/> Number" ItemStyle-Width="4%" ItemStyle-CssClass="align_text">
                                                                    <ItemTemplate>
                                                                        <%#Eval("PARTY_ID")%>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Name" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                                                    <ItemTemplate>
                                                                        <%-- <%#Eval("NAME")%>--%>
                                                                        <asp:HiddenField ID="hdnID" Value='<%# Bind("ID") %>' runat="server" />
                                                                        <asp:HiddenField ID="hdn_partyID" Value='<%# Bind("PARTY_ID") %>' runat="server" />
                                                                        <asp:LinkButton ID="lnkName" CssClass="tooltip-dashboard" CommandName="export" Text='<%#Eval("NAME")%>' OnClick="lnk_edit_click"
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

                                                                <asp:TemplateField HeaderText="Delete" ItemStyle-Width="14%" ItemStyle-CssClass="align_text">
                                                               <ItemTemplate>
                                                               <asp:LinkButton ID="lnk_delete" CssClass="tooltip-dashboard" runat="server" OnClick="lnkDelete_Click" CommandArgument='<%# Eval("ID") %>'  OnClientClick="return confirm('Are you sure you want to delete this Party?');">Delete</asp:LinkButton>
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
