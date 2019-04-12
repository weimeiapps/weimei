<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
<title>入金充值平台</title>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<link href="css/public.css" rel="stylesheet" type="text/css">
<script language="javascript" src="js/tableorder.js"></script>
<script src="jquery-2.1.1.js" type="text/javascript" charset="utf-8"></script>
<script src="js/JQuery.md5.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
<!--
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
//-->
</script>
<script language="javascript">
	
  function selectSubmit2(){
	  $.ajax({
          //几个参数需要注意一下
              type: "POST",//方法类型
              dataType: "json",//预期服务器返回的数据类型
              url: "/paydemo/Deposit" ,//url
              data: $('#form1').serialize(),
              success: function (result) {
            	  $("#textarea2").val(JSON.stringify(result));
              },
              error : function(e) {
            	  console.log(e); 
              }
          });  
  }

</script>
</head>

<body>
<center>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td>
				<table width="100%" border="0" align="center" cellpadding="0"
					cellspacing="0" background="images/bplogo.jpg"
					style="background-position: left; background-repeat: no-repeat">
					<tr>
						<td width="194" align="left" height="55"></td>
						<td align="right">
						<table border="0" align="right" cellpadding="0" cellspacing="0"
							class="state">
							<tr>
									<td>&nbsp;|&nbsp;<a href="index.jsp">退出系统</a></td>
							</tr>
						</table>
						</td>
						<td width="10px">&nbsp;</td>
					</tr>
				</table>
				</td>
			</tr>
			<tr>
				<td class="menu" align=center><script language="javascript"
					src=""></script></td>
			</tr>
		</table>			
						
						
<table width="100%" border="0" cellspacing="0" cellpadding="0">
      <th height="28" background="../../images/menu_bg.jpg" style="background-repeat:repeat-x"><script language="javascript" src="../../js/InputTop.js"></script></th>
	</table>
</td></tr>
<tr><td  align="center">
  <table width="93%" border="0" cellspacing="0" cellpadding="0" >
  <tr>
    <td class="user_location"> 您现在所在的位置是：入金管理&gt;&gt; 代收接口</td>
  </tr>
  <tr>
    <td class="line_2px" ></td>
  </tr>
</table></td>
</tr>
<tr height="100%">
  <td  align="center"  valign="top"><table width="93%" border="0" cellspacing="0" cellpadding="0">
    <tr>
            <td valign="top">
            <br>
            <table width="100%" height="20"  border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td align="left" valign="top"><table cellspacing="0" cellpadding="0" border="0" >
                  <tr align="center">
                    <td class="subject_onselected"><a href="zbkgl_DatasetNew.htm">基本信息</a></td>
                    <td width="2"></td>
                  </tr>
                </table>
                <table cellspacing="0" cellpadding="0" border="0" >
                    <tr>
                      <td height="1"></td>
                    </tr>
                  </table>
                    <table width="100%"  border="0" cellpadding="0" cellspacing="0"  class="lefttable">
                      <tr>
                        <td align="center" valign="top">
                        <!--form表单-->
                        	<form name="form1"  id ="form1" method="post" action="/paydemo/deposit">
                        <table width="100%" height="350"  border="0" cellpadding="5" cellspacing="0" >
                            <tr>
                              <td valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" class="listclass" style="border-bottom:none">
                                <tr class="">
                                  <td  class="noarray">商户号</td>
                                  <td >
                                    <input name="clientNumber" id ="clientNumber" type="text" class="input" value="1001" style="width:150;"><span class="redtext"> * 必填(3位数以上)</span>                                  </td>
                                </tr>
                                <tr class="">
                                  <td class="noarray" width="140">商户的客户账号</td>
                                  <td >
                                    <input name="userAccount" id ="userAccount" type="text" class="input" value="985511" style="width:150;">
                                    <img src="images/action_auditing.gif" width="23" height="17" align="absmiddle"><span class="redtext"> * 必填</span></td>
                                </tr>
                                <tr class="">
                                  <td class="noarray" width="140">存款人名字</td>
                                  <td >
                                    <input name="userName" id ="userName" type="text" class="input" value="" style="width:150;">
                                    <img src="images/action_auditing.gif" width="23" height="17" align="absmiddle"><span class="redtext"> * 必填</span></td>
                                </tr>
                                <tr class="">
                                  <td class="noarray" width="140">卡号4位</td>
                                  <td >
                                    <input name="last4digies" id ="last4digies" type="text" class="input" value="" style="width:150;">
                                    <img src="images/action_auditing.gif" width="23" height="17" align="absmiddle"><span class="redtext"> * 必填</span></td>
                                </tr>
                                <tr class="">
                                  <td class="noarray" width="140">商户订单号</td>
                                  <td >
                                    <input name="clientOrderNumber" id ="clientOrderNumber" type="text" class="input" value="" style="width:150;">
                                    <img src="images/action_auditing.gif" width="23" height="17" align="absmiddle"><span class="redtext"> * 必填</span></td>
                                </tr>
                                <tr class="">
                                  <td class="noarray" width="140">商户KEY</td>
                                  <td >
                                    <input name="key" id ="key" type="text" class="input" value="" style="width:150;">
                                    <img src="images/action_auditing.gif" width="23" height="17" align="absmiddle"><span class="redtext"> * 必填</span></td>
                                </tr>
                                <tr class="">
                                  <td class="noarray" width="140">入金金额</td>
                                  <td >
                                  <input name="amount" id ="amount" type="text" class="input" value="0" style="width:150;">  
                                  <span class="redtext"> * 必填</span></td>
                                </tr>
                                </table>
                                <div  id="dissql" style="display:none">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" class="listclass" style="border-bottom:none; border-top:none" >
                               
                                </table>
                                </div>
                                <div id="dissql2" style="display:">
                                
                                </div>
                                <div  id="dissql3" style="display:none">
                                
                                </div>
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" class="listclass" style="border-top:none">
                                <tr class="" >
                                  <td width="140"  class="noarray">描述返回</td>
                                  <td ><textarea id ="textarea2" name="textarea2" cols="108" rows="3" class="input"></textarea></td>
                                </tr>
                              </table>
                                <table width="100%"  border="0" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td height="50" align="center"><input id ="btnSend" name="btnSend" type="button" class="button" value="下一步" onClick="selectSubmit2()"> 
                                        <input name="Submit23" type="button" class="button" value="取消" onClick="history.back()"></td>
                                  </tr>
                                </table></td>
                            </tr>
                        </table></form></td>
                      </tr>
                  </table></td>
              </tr>
            </table></td>
    </tr>
  </table></td>
</tr>
<tr><td height="23">&nbsp;</td></tr>
<tr valign="bottom"><td>
    <table width="100%" border="0" cellspacing="0" cellpadding="0" class="copyright">
        <tr><td>建议使用环境为IE6/google 1024*768分辨率下使用&nbsp;&nbsp;</td>
        </tr>
    </table>
</td></tr>
</table>
</center>
</body>
</html>
