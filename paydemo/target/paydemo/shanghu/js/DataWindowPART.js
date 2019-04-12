var DataWindowPART = function(){
	
	var win = new Ext.Window({
	    title: '新增辅助信息(带<span style="color:red;">*</span>为必填项)',
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
                        labelWidth:120,
                        defaults:{
                        	width:200
                        },
                        items: [
                            {
                                xtype: 'combo',
                                fieldLabel: '辅助信息类别',
								store:new Ext.data.SimpleStore({
						        	fields:['value','label'],
						        	data: [['','请选择...'],
						        		['1','第三方服务商名称'],
						        		['3','商户大类名称'],
						        		['4','分期商户类型名称'],
						        		['5','商户状态名称'],
						        		['6','商户公司性质的名称'],
						        		['7','无交易天数阀值']
						        	]
						        }),
						        listeners:{
									select:function( obj, record, index){
										var value = record.get("value");
										var text = record.get("label");
										
										var tx_01 = Ext.getCmp("tx_01");
										var date_01 = Ext.getCmp("date");
										
										if(value!=''){
											document.getElementById("tx_01")
													.parentNode
													.previousSibling
													.innerHTML = text+":"; 
										}
										if(value=='7'){
											date_01.show();
										}else{
											date_01.hide();
										}
									}
								},
								emptyText:'请选择...',
								shadow:false,
								displayField:'label',
								valueField:'value',
								mode:'local',
								triggerAction:'all',
								editable:false	                                    
                            },     
                            {
                            	id:"tx_01",
                                xtype: 'textfield',
                                fieldLabel: '辅助信息值'
                            }
                        ]
                    },
                    {
                    	id:"date",
                        xtype: 'form',
                        columnWidth: 1,
                        labelAlign: 'right',
                        labelPad: 0,
                        labelWidth:120,
                        hidden:true,
                        defaults:{
                        	width:200
                        },
                        items: [
                        	{
                            	id:"date_01",
                                xtype: 'datefield',
                                fieldLabel: '生效日期'
                            },
                            {
                            	id:"date_02",
                                xtype: 'datefield',
                                fieldLabel: '失效日期'
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