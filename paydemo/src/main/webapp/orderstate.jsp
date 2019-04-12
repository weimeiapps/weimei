<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
    <title>出金入金查询指标系统</title>
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312">
    <link href="css/public.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="ext-3.2.1/resources/css/ext-all.css">
    <link rel="stylesheet" type="text/css" href="css/file-upload.css">
    <script type="text/javascript" src="ext-3.2.1/adapter/ext/ext-base.js"></script>
    <script type="text/javascript" src="ext-3.2.1/ext-all.js"></script>
    <script type="text/javascript" src="ext-3.2.1/src/locale/ext-lang-zh_CN.js"></script>
    <script src="jquery-2.1.1.js" type="text/javascript" charset="utf-8"></script>
    <script src="js/JQuery.md5.js" type="text/javascript" charset="utf-8"></script>

    <link rel="stylesheet" type="text/css" href="EasyUI/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="EasyUI/themes/icon.css">

 
    <script src="EasyUI/js/jquery.easyui.min.js"></script>

    <script type="text/javascript">
        Ext.BLANK_IMAGE_URL = 'ext-3.2.1/resources/images/default/s.gif';
    </script>

    <style type="text/css">
        .style4 { color: #0000FF }
        }
    </style>


</head>
<body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0"
	marginheight="0">
	
<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td valign="top" class="main_bg">

            <!--<script language="javascript"src="shanghu/js/tableorder.js"></script>--> 
            <script language="javascript">
	            //addEvent(window, "load", sortables_init);
            </script>

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
		<table width="98%" border="0" cellpadding="0" cellspacing="0"
			align="center" height="100%">
			<tr>
				<td width="11" valign="top"></td>
				<td valign="top">
				<table width="100%" border="0" cellpadding="0" cellspacing="0">
					<tr>

						<td class="user_location">您现在所在的位置是：查询管理&gt;&gt;代收代付交易状态查询</td>
						<td width="9"></td>
					</tr>
					<tr>
						<td class="line_2px"></td>
					</tr>
				</table>
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td colspan="2" valign="top" height="400px">
						<table width="99%" border="0" cellspacing="0" cellpadding="0">
						   <form name="form1" id ="form1" method="post" action="">
							<tr>
                                <td valign="top">
                                    <br>
                                    <p>
                                        商户KEY:<input id="key" name ="key" type="text" class="textbox-text validatebox-text textbox-prompt" autocomplete="off" placeholder="000" style="width:186px; height:30px; ">&nbsp;
                                        商户号:<input id="clientNumber" name ="clientNumber" type="text" class="textbox-text validatebox-text textbox-prompt" autocomplete="off" placeholder="000" style="width:136px; height:30px; ">&nbsp;
                                        交易单号:<input id="tranId" name ="tranId" type="text" class="textbox-text validatebox-text textbox-prompt" autocomplete="off" placeholder="000" style="width:186px; height:30px; ">
                                        商户交易单号:<input id="clientOrderNumber" name ="clientOrderNumber" type="text" class="textbox-text validatebox-text textbox-prompt" autocomplete="off" placeholder="000" style="width:186px; height:30px; ">
                                        <a  id="query" class="easyui-linkbutton l-btn l-btn-small easyui-fluid" style="width: 60px; height: 30px;">
                                           <span class="l-btn-text">查询</span>
                                        </a>
                                    </p>

                                    <br>
                                    <table id="dg" class="easyui-datagrid" style="width:100%;height:250px"
                                           data-options="singleSelect:true,collapsible:true,url:'',method:'get'">
                                        <thead>
                                            <tr>
                                                <th data-options="field:'clientNumber',align:'center',resizable:false" width="15%">商户号</th>
                                                <th data-options="field:'tranId',align:'center',resizable:false" width="15%">交易单号</th>
                                                <th data-options="field:'clientOrderNumber',align:'center',resizable:false" width="15%">商户交易单号</th>
                                                <th data-options="field:'state',align:'center',resizable:false" width="15%">交易状态</th>
                                                <th data-options="field:'verifyText',align:'center',resizable:false" width="25%">验证文本</th>
                                                <th data-options="field:'error',align:'center',resizable:false" width="15%">是否有错误</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </td>
							</tr>
						</table>
						</td>
					</tr>
					</form>
				</table>
				</td>
				<td width="11" valign="top">&nbsp;</td>
			</tr>
			<tr>
				<td colspan="3" valign="top">&nbsp;</td>
			</tr>
		</table>
		</td>
	</tr>
	<tr>
		<td height="22" valign="bottom">
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td class="copyright">&copy;
				&nbsp;&nbsp;&nbsp;&nbsp;建议使用环境为IE6/google&nbsp;&nbsp;&nbsp;&nbsp;分辨率为1024*768或以上</td>
			</tr>
		</table>
		</td>
	</tr>
</table>
  <script>
      $(function () {
          $("#query").click(function () {
              var url = '/paydemo/GetOrder';
              $.ajax({
                  //几个参数需要注意一下
                      type: "POST",//方法类型
                      dataType: "json",//预期服务器返回的数据类型
                      url: "/paydemo/GetOrder" ,//url
                      data: $('#form1').serialize(),
                      success: function (data) {
                    	  debugger;
                    	  $('#dg').datagrid({
                              data: [
                                  { clientNumber: data.clientNumber, tranId: data.tranId,clientOrderNumber: data.clientOrderNumber,state: data.state, verifyText: data.verifyText, error:data.error}
                              ]
                          });
                         },
                      error : function(e) {
                    	  console.log(e); 
                      }
                  });  
          });

      })

  </script>

<!-- End ImageReady Slices -->
</body>
</html>