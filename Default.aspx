<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="SaiArtLatest.Default" %>

<html xmlns="http://www.w3.org/1999/xhtml"><head>
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
<link href="css/style.css" rel="stylesheet" type="text/css">
<script src="Scripts/swfobject_modified.js" type="text/javascript"></script>
<style type="text/css" media="screen">#FlashID {visibility:hidden}</style></head>

<body>
<table width="779" border="0" align="center" cellpadding="0" cellspacing="0">
  <tbody><tr>
    <td width="183" align="left" valign="top"><img src="img/index_01.gif" width="183" height="191"></td>
    <td width="425" align="left" valign="top"><img src="img/index_02.gif" width="425" height="154"></td>
    
  </tr>
  
  <tr>
    <td colspan="3"><table width="780" border="0" cellspacing="0" cellpadding="0">
      <tbody><tr>
        <td class="baground"><table width="780" border="0" cellspacing="0" cellpadding="0">
          <tbody><tr>
            <td width="32" height="25">&nbsp;</td>
            <td height="25" colspan="6">&nbsp;</td>
            <td width="26" height="25">&nbsp;</td>
          </tr>
          <tr>
            
            
            <td width="18">&nbsp;</td>
            <td width="501" align="left" valign="top"><table width="500" border="0" cellspacing="0" cellpadding="0">
              <tbody>
              
              <tr>
                <td width="500" height="35"><img src="img/index_07.gif" width="600px" height= "300px"></td>
                </tr>
              
               <tr>

               <td>
               <div class="row">
            <div class="col-md-4 col-md-offset-4 login-form">
                <form class="form-horizontal" id="login" runat="server">
                
                <br />
                <div class="form-group">
                    <div class="input-group col-xs-12 margin-login-txt">
                            <asp:TextBox ID="txtLanID" class="form-control" placeholder="User Name" runat="server"></asp:TextBox>
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group col-xs-12 margin-login-txt">
                        <asp:TextBox type="password" ID="txtPassword" class="form-control" placeholder="Password"
                            runat="server" autocomplete="off"></asp:TextBox>
                        <asp:HiddenField ID="HDPassword" runat="server" />
                    </div>
                </div>
                <div class="form-group" >
                     <div class="col-xs-12" style="text-align: center;">
                        <asp:Button ID="btnLogin" class="btn btn-primary margin-login-btn" runat="server"
                            Text="Login" OnClick="Btn_click_event" OnClientClick="return validateForm();"  />
                      </div>
                   
                </div>
                <div class="form-group lblerr-adj">
                    <center>
                        <asp:Label ID="lblError" class="err_message" runat="server" Text=""></asp:Label>
                         </center>
                </div>
               
                </form>
            </div>
        </div>
               </td>

               </tr>
              
            </tbody></table></td>
            
          </tr>
          </tbody></table></td>
      </tr>
      
    </tbody></table></td>
  </tr>
</tbody></table>
<script type="text/javascript">
<!--
    swfobject.registerObject("FlashID");
//-->
</script>


</body></html>
