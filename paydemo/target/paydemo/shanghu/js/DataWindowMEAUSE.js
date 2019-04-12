var DataWindowMCC = function(){
	
	var win = new Ext.Window({
	    title: '新增二级行年度任务指标(带<span style="color:red;">*</span>为必填项)',
	    width: 460,
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
                        labelWidth: 180,
                        defaults:{
                        	width:200
                        },
                        items: [
                            {
                                xtype: 'datefield',
                                fieldLabel: '考核时间'
                            },     
                            {
                                xtype: 'combo',
                                fieldLabel: '二级行名称'
                            },     
                            {
                                xtype: 'textfield',
                                fieldLabel: '新增收单商户任务数'
                            }, 
                            {
                                xtype: 'textfield',
                                fieldLabel: '新增分期商户任务数'
                            },   
                            {
                                xtype: 'textfield',
                                fieldLabel: '新增餐饮宾馆类任务数'
                            },   
                            {
                                xtype: 'textfield',
                                fieldLabel: '新增一般类任务数'
                            },   
                            {
                                xtype: 'textfield',
                                fieldLabel: '新增分期交易额任务数'
                            },   
                            {
                                xtype: 'textfield',
                                fieldLabel: '新增分期中间业务收入任务数'
                            },  	
                            {
                                xtype: 'textfield',
                                fieldLabel: '新增收单中间业务收入任务数'
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