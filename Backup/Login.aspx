<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="SaiArtLatest.Login" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Shri Sai Arts</title>
    <style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	background-color: #711B04;
}
-->
</style>
    <script src="js/jquery-1.11.3.js" type="text/javascript"></script>
    <script src="js/bootstrap.js" type="text/javascript"></script>
    <script type="text/javascript">

        /*  Method Name - validateForm
        *  Created By - Mangesh 
        *  Created On - 4th Jan 2015
        *  Modified By - 
        *  Modified On - 
        *  Purpose - This method is used to validate whether User Name and Password is provided by the user or not. 
        */

        //clear the session which hold to side-menu bar purpose. 
        var data = localStorage.setItem("sidebar", "");

        function validateForm() {
            // alert('a');
            var val_Username = $('#txtLanID').val();
            val_Username = val_Username.trim();

            var val_Password = $('#txtPassword').val();
            val_Password = val_Password.trim();

            if (val_Username == "") {
                $("#lblError").empty();
                $("#lblError").append("Please enter User Name.");
                return false;
            }
            else if (val_Password == "") {
                $("#lblError").empty();
                $("#lblError").append("Please enter Password.");
                return false;
            }

        }

    </script>
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <script src="Scripts/swfobject_modified.js" type="text/javascript"></script>
    <style type="text/css" media="screen">
        #FlashID
        {
            visibility: hidden;
        }
    </style>
</head>
<body>
    <form id="Form1" accept-charset="UTF-8" role="form" runat="server">
    <table width="779" border="0" align="center" cellpadding="0" cellspacing="0">
        <tbody>
            <tr>
                <td width="183" align="left" valign="top">
                    <img src="img/index_01.gif" width="183" height="191">
                </td>
                <td width="425" align="left" valign="top">
                    <img src="img/index_02.gif" width="425" height="154">
                </td>
                <td width="225" align="left" valign="top">
                    <img src="img/index_03.gif" width="225" height="154">
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <table width="780" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td class="baground">
                                    <table width="780" border="0" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <td width="32" height="25">
                                                    &nbsp;
                                                </td>
                                                <td height="25" colspan="6">
                                                    &nbsp;
                                                </td>
                                                <td width="26" height="25">
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="18">
                                                    &nbsp;
                                                </td>
                                                <td width="501" align="left" valign="top">
                                                    <table width="500" border="0" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                            <tr>
                                                                <asp:TextBox ID="txtLanID" runat="server" Style="height: 26px; border-radius: 22px;
                                                                    width: 290px; margin-left: 190px; color: Brown; padding: 3px; text-align: center;font-size: 17px;"
                                                                    placeholder="username"></asp:TextBox>
                                                            </tr>
                                                            <tr>
                                                                <asp:TextBox ID="txtPassword" runat="server" Style="height: 26px; border-radius: 22px;
                                                                    width: 290px; margin-left: 190px; color: Brown; padding: 3px; margin-top: 20px !important;
                                                                    text-align: center;font-size: 17px;" placeholder="password" TextMode="password"></asp:TextBox>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <asp:Button ID="btn_click" Text="Login" runat="server" OnClick="Btn_click_event"
                                                                        OnClientClick="return validateForm();" Style="cursor: pointer; margin-left: 285px;
                                                                        margin-top: 23px; width: 100px; border-radius: 29px; height: 30px; color: white;
                                                                        background: black;" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <asp:Label ID="lblError" runat="server" Style="color: white; font-size: 19px; font-weight: bold;
                                                                        margin-left: 200px;"></asp:Label>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
            </tr>
        </tbody>
    </table>
    </form>
</body>
</html>
