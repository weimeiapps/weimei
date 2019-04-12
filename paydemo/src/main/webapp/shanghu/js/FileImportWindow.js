 // ��ҵ���봰��	
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
		    		  {height : 25,html : '<b>��һ��:</b>&nbsp;&nbsp;��ѡ��������'},
                      new Ext.form.RadioGroup({ 
                    	  id : 'selLoadType',
                          hideLabel : true,
                          vertical : true,
                          columns : 1,
                          width : 100,
                          listeners:{change:function (r,n,o){alert('');}},
                          items:[ 
                              {boxLabel:'��Excel�ļ�����',inputValue:'xls',name:'fileType',checked:true,listeners:{check:function(el,checked){
                            	  if(checked){
                                	  document.getElementById('fileSelField').parentNode.style.display='';	                                         	
                    	  			  Ext.getCmp('fileUploadForm').getForm().isValid();
                	  			  }
                              }}}
                      		] 
                      }),	                     
		             {height : 25,html : '<b>�ڶ���:</b>&nbsp;&nbsp;��ѡ���ļ�'},
		             {
		            	id : 'fileSelField',
		            	buttonText:"���",
                        xtype : 'fileuploadfield',  
                        emptyText: '��ѡ�����ļ�',
                        name : 'file',   
                        hideLabel : true,
                        validator : checkExtension
                     },
		             {height : 25,html : '<b>������:</b>&nbsp;&nbsp;ȷ�������������桱'}   
		    ]
	    } ],     
		buttons: [{
			text: '����',
			handler:function(){

			}
		},{
			text : 'ȡ��',
			handler : function() {
			    win.close();
			}
		}]
	});
   
	function checkExtension(value){ 
 		if(value==null || value==''){
 		    return '��ѡ�����ļ�';
 		}
 		
 		var fileFormat = Ext.getCmp('fileUploadForm').getForm().getValues()['fileType'];
 		if(fileFormat!=null){
 	        var start = value.lastIndexOf('.');   
            var end = value.length;   
            var extension = value.substring((start+1),end);   
            if(extension==fileFormat){
                return true;   
            }else{   
                return '�����ļ�����' + fileFormat + '����';
            }   
 		}         
    } 
	
	return {
		show:function(){
			win.show();
		}
	};
}