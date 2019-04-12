var DataWindowMCC = function(){
	
	var win = new Ext.Window({
	    title: '新增MCC码参数(带<span style="color:red;">*</span>为必填项)',
	    width: 760,
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
	                            columnWidth: 0.33,
	                            labelAlign: 'right',
	                            labelPad: 0,
	                            defaults: {
	                                width: 120
	                            },
	                            labelWidth: 90,
	                            items: [
	                                {
	                                    xtype: 'textfield',
	                                    fieldLabel: '<span style="color:red;"><b>*</b></span>MCC码',
	                                    tabIndex: 1
	                                },
	                                {
	                                    xtype: 'textfield',
	                                    fieldLabel: '上限',
	                                    tabIndex: 4
	                                },
	                                {
	                                    xtype: 'textfield',
	                                    fieldLabel: '银联分润',
	                                    tabIndex: 7
	                                }	                                
	                            ]
	                        },
	                        {
	                            xtype: 'form',
	                            columnWidth: 0.34,
	                            defaults: {
	                                width: 120
	                            },
	                            labelAlign: 'right',
	                            labelPad: 0,
	                            labelWidth: 90,
	                            items: [
	                                {
	                                    xtype: 'combo',
	                                    fieldLabel: '所属行业类型',
	                                    tabIndex: 2,
						                store:new Ext.data.SimpleStore({
								        	fields:['value','label'],
								        	data: [['','请选择...'],
								        		['1','宾馆餐饮类'],
								        		['1','超市类'],
								        		['1','汽车房地产类'],
								        		['1','批发类'],
								        		['1','公益类'],
								        		['1','一般类']
								        	]
								        }),
								        value:'',
										emptyText:'请选择...',
										shadow:false,
										displayField:'label',
										valueField:'value',
										mode:'local',
										triggerAction:'all',
										editable:false		                                    
	                                },
	                                {
	                                    xtype: 'textfield',
	                                    fieldLabel: '发卡行分润',
	                                    tabIndex: 5
	                                },
	                                {
	                                    xtype: 'textfield',
	                                    fieldLabel: '银联分润上限',
	                                    tabIndex: 8
	                                }	                                
	                            ]
	                        },
	                        {
	                            xtype: 'form',
	                            columnWidth: 0.33,
	                            defaults: '{width:120}',
	                            labelAlign: 'right',
	                            labelPad: 0,
	                            labelWidth: 100,
	                            items: [
	                                {
	                                    xtype: 'textfield',
	                                    fieldLabel: '标准扣率',
	                                    tabIndex: 3
	                                },
	                                {
	                                    xtype: 'textfield',
	                                    fieldLabel: '发卡行分润上限',
	                                    tabIndex: 6
	                                }		                                
	                            ]
	                        },
	                        {
	                            xtype: 'form',
	                            columnWidth: 1,
	                            labelAlign: 'right',
	                            labelPad: 0,
	                            labelWidth: 90,
	                            items: [
	                                {
	                                    xtype: 'textarea',
	                                    fieldLabel: '描述',
	                                    tabIndex: 9,
	                                    height:40,
	                                    width:360
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