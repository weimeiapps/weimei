var DataWindowAREA = function(){
	
	var win = new Ext.Window({
	    title: '新增地市信息(带<span style="color:red;">*</span>为必填项)',
	    width: 400,
	    frame: true,
	    autoHeight:true,
	   //modal:true,
	    resizable: false,
	    closeAction:"hide",
	    autoScroll:true,
	    bodyStyle:"{padding:10px;}",
	    buttons:[
	    	{text:"保存",handler:function(){
										    		
	    	}},
	    	{text:"关闭",handler:function(){
				win.hide();					    		
	    	}}
	    ],
	    items:[
            {
                xtype: 'panel',
                layout: 'column',
                hideBorders: true,
                border:false,
                bodyStyle: '{padding:5px;}',
                items: [
                    {
                        xtype: 'form',
                        columnWidth: 1,
                        labelAlign: 'right',
                        labelPad: 0,
                        defaults:{
                        	width:200
                        },
                        items: [
                            {
                                xtype: 'combo',
                                fieldLabel: '二级行名称'
                            },     
                            {
                                xtype: 'combo',
                                fieldLabel: '对应市级名称'
                            }, 
                            {
                                xtype: 'combo',
                                fieldLabel: '下辖县区名称'
                            }                                
                        ]
                    }
                ]
            }
	    ]
	});
	
	return {
		show:function(){
			win.show();
		}
	
	};
};