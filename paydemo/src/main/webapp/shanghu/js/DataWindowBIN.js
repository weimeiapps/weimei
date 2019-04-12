var DataWindowBIN = function(){
	
	var win = new Ext.Window({
	    title: '新增卡BIN信息(带<span style="color:red;">*</span>为必填项)',
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
                                xtype: 'textfield',
                                fieldLabel: '<span style="color:red;">*</span>卡BIN'
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: '<span style="color:red;">*</span>长度'
                            } ,
                            {
                                xtype: 'textfield',
                                fieldLabel: '发卡行'
                            }  ,
                            {
                                xtype: 'combo',
                                fieldLabel: '卡类型',
								store:new Ext.data.SimpleStore({
						        	fields:['value','label'],
						        	data: [['','请选择...'],
						        		['1','我行借记卡'],
						        		['2','我行贷记卡'],
						        		['3','他行借记卡'],
						        		['4','他行贷记卡']
						        	]
						        }),
								emptyText:'请选择...',
								shadow:false,
								displayField:'label',
								valueField:'value',
								mode:'local',
								triggerAction:'all',
								editable:false	,
								value:'1'
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