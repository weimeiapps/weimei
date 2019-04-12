 // 作业导入窗口	
var FileImportWindow = function(title){
   var win = new Ext.Window({
		title : title,
		layout : 'fit',
		width : 500,
		height : 250,
		//modal : true,
		closeAction : 'close',
		resizable : false,		    
	    items : [ {
	    	xtype : 'form',
	    	id : 'fileUploadForm',
		    bodyStyle : 'padding:10px',
		    fileUpload: true,
		    enctype:'multipart/form-data',
		    labelAlign : 'right',
		    layout : 'form',
		    border : false,
		    defaults : {
			    anchor : '98%',
                border : false
		    },
		    items : [
		    		  {height : 25,html : '<b>第一步:</b>&nbsp;&nbsp;请选择导入类型'},
                      new Ext.form.RadioGroup({ 
                    	  id : 'selLoadType',
                          hideLabel : true,
                          vertical : true,
                          columns : 1,
                          width : 100,
                          listeners:{change:function (r,n,o){alert('');}},
                          items:[ 
                              {boxLabel:'从Excel文件导入',inputValue:'xls',name:'fileType',checked:true,listeners:{check:function(el,checked){
                            	  if(checked){
                                	  document.getElementById('fileSelField').parentNode.style.display='';	                                         	
                    	  			  Ext.getCmp('fileUploadForm').getForm().isValid();
                	  			  }
                              }}}
                      		] 
                      }),	                     
		             {height : 25,html : '<b>第二步:</b>&nbsp;&nbsp;请选择文件'},
		             {
		            	id : 'fileSelField',
		            	buttonText:"浏览",
                        xtype : 'fileuploadfield',  
                        emptyText: '请选择导入文件',
                        name : 'file',   
                        hideLabel : true,
                        validator : checkExtension
                     },
		             {height : 25,html : '<b>第三步:</b>&nbsp;&nbsp;确定，请点击“保存”'}   
		    ]
	    } ],     
		buttons: [{
			text: '保存',
			handler:function(){

			}
		},{
			text : '取消',
			handler : function() {
			    win.close();
			}
		}]
	});
   
	function checkExtension(value){ 
 		if(value==null || value==''){
 		    return '请选择导入文件';
 		}
 		
 		var fileFormat = Ext.getCmp('fileUploadForm').getForm().getValues()['fileType'];
 		if(fileFormat!=null){
 	        var start = value.lastIndexOf('.');   
            var end = value.length;   
            var extension = value.substring((start+1),end);   
            if(extension==fileFormat){
                return true;   
            }else{   
                return '导入文件不是' + fileFormat + '类型';
            }   
 		}         
    } 
	
	return {
		show:function(){
			win.show();
		}
	};
}