var DataWindow = function(){
	
	var posWind = new PosWindow().getWindow();
	
	var win = new Ext.Window({
	    title: '商户台帐信息录入(带<span style="color:red;">*</span>为必填项)',
	    width: 790,
	    height: 500,
	    frame: true,
	   // modal:true,
	    resizable: true,
	    closeAction:"hide",
	    bodyStyle:"{padding:5px;}",
	    autoScroll:true,
	    defaults:{
	    	width:745
	    },
	    buttons:[
	    	{text:"保存",tabIndex: 43,handler:function(){
										    		
	    	}},
	    	{text:"关闭",tabIndex: 44,handler:function(){
				win.hide();					    		
	    	}}
	    ],
	    items:[
       {
            xtype: 'fieldset',
            title: ' ',
            layout: 'auto',
            hideBorders: true,
            items: [
                {
                    xtype: 'panel',
                    layout: 'column',
                    hideBorders: true,
                    border: false,
                    bodyStyle: '{padding:5px;}',
                    items: [
                        {
                            xtype: 'form',
                            columnWidth: 0.33,
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 110,
                            defaults: {
                                "width": 110
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '<span style="color:red;"><b>*</b></span>商户号',
                                    tabIndex: 1
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            columnWidth: 0.34,
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 110,
                            defaults: {
                                width: 110
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    text: '商户号整改',
                                    tabIndex: 2,
                                    handler:function(){
				                		var myWin = new Ext.Window({
				                			title:"商户号整改",
				                			width:320,
				                			autoHeight:true,
				                			bodyStyle:"{padding:5px;}",
				                			buttons:[
				                			  {text:"确定"},
				                			  {text:"取消",handler:function(){
				                				  myWin.close();		                				  
				                			  }}
				                			],
				                			layout:"form",
				                			labelAlign:"right",
				                			labelPad: 0,
				                			labelWidth: 80,
				                			defaults:{
				                				width: 180
				                			},
				                			items:[
				                			       {
				   		                            	xtype: 'textfield',
				   		                            	fieldLabel: '旧商户号',
				   		                            	disabled:true,
				   		                            	value:"HN1090290"
				                			       },{
				   		                            	xtype: 'textfield',
				   		                            	fieldLabel: '新商户号'
				                			       }
				                			]
				                		});
				                		myWin.show();
				                	}
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            columnWidth: 0.33,
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 110,
                            defaults: {
                                width: 110
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '商户名称',
                                    tabIndex: 3
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            columnWidth: 0.33,
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 110,
                            defaults: {
                                width: 110
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '商户店名',
                                    tabIndex: 4
                                },
                                {
                                    xtype: 'combo',
                                    fieldLabel: '商户等级',
                                    tabIndex: 7,
                                    store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','请选择...'],
							        		['1','重点'],
							        		['3','一般'],
							        		['4','关注'],
							        		['5','风险']
							        	]
							        }),
							        value:'3',
									emptyText:'请选择...',
									shadow:false,
									displayField:'label',
									valueField:'value',
									mode:'local',
									triggerAction:'all',
									editable:false
                                },
                                {
                                    xtype: 'combo',
                                    fieldLabel: 'POS机具维护方',
                                    tabIndex: 10,
                                    store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','请选择...'],
							        		['1','银行'],
							        		['2','通联'],
							        		['2','宇信'],
							        		['2','卡友'],
							        		['2','银博']
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
                                    fieldLabel: '商户营业执照号',
                                    tabIndex: 13
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '押金',
                                    value: 1000,
                                    tabIndex: 16
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '负责人',
                                    tabIndex: 19,
                                    value:"缺省为法人姓名"
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '联系人电话',
                                    tabIndex: 22
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            columnWidth: 0.34,
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 110,
                            defaults: {
                                width: 110
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '商户MCC代码',
                                    tabIndex: 5,
                                    value:"DCC返传（不可修改）"
                                },
                                {
                                    xtype: 'combo',
                                    fieldLabel: '商户所处地域',
                                    tabIndex: 8,
                                    store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','请选择...'],
							        		['1','湖南省市'],
							        		['2','县名称']
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
                                    xtype: 'combo',
                                    fieldLabel: '商户公司性质',
                                    tabIndex: 11,
                                    store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','请选择...'],
							        		['1','个体'],
							        		['2','企业'],
							        		['2','事业']
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
                                    fieldLabel: '税务登记证号',
                                    tabIndex: 14
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '法人姓名',
                                    tabIndex: 17
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '负责人电话',
                                    tabIndex: 20
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '财务联系人',
                                    tabIndex: 23
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            columnWidth: 0.33,
                            defaults: {
                                "width": 110
                            },
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 110,
                            items: [
                                {
                                    xtype: 'combo',
                                    fieldLabel: '商户大类',
                                    tabIndex: 6,
                                    store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','请选择...'],
							        		['1','分期'],
							        		['2','普通'],
							        		['3','外卡'],
							        		['4','网银'],
							        		['5','中粮项目'],
							        		['6','EPOS'],
							        		['7','测试'],
							        		['8','分期+普通'],
							        		['9','外卡+普通'],
							        		['10','洗车+普通'],
							        		['11','财务POS'],
							        		['12','权益积分'],
							        		['13','积分兑换'],
							        		['14','签约POS'],
							        		['15','洗车点'],
							        		['16','非现场支付'],
							        		['17','其他']
							        	]
							        }),
							        listeners:{
										select:function( obj, record, index){
											var newValue = record.get("value");
											var comb = Ext.getCmp("com_34");
											if(newValue=='1' || newValue=='8'){
												comb.enable();
											}else{
												comb.disable();
												comb.setValue("");
											}
										}
									},
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
                                    xtype: 'combo',
                                    fieldLabel: 'POS机具投入方',
                                    tabIndex: 9,
                                    store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','请选择...'],
							        		['1','银行'],
							        		['2','通联'],
							        		['2','宇信'],
							        		['2','卡友'],
							        		['2','银博']
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
                                    fieldLabel: '商户经营范围',
                                    tabIndex: 12
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '组织机构代码证号',
                                    tabIndex: 15,
                                    value:"商户公司性质为‘个人’时允许为空，否则必须有数据"
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '法人身份证号',
                                    tabIndex: 18
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '联系人',
                                    anchor: '',
                                    tabIndex: 21
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '财务联系人电话',
                                    tabIndex: 24
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 110,
                            columnWidth: 1,
                            items: [
                                {
                                    xtype: 'textarea',
                                    fieldLabel: '商户地址',
                                    width: 360,
                                    height: 40,
                                    tabIndex: 25
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: ' ',
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    bodyStyle: '{padding:5px;}',
                    hideBorders: true,
                    border: false,
                    layout: 'column',
                    autoHeight: true,
                    items: [
                        {
                            xtype: 'form',
                            columnWidth: 0.33,
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 110,
                            defaults: {
                                width: 110
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '入帐帐号',
                                    tabIndex: 26,
                                    value:"DCC返传（可修改）"
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '商户拓展行',
                                    tabIndex: 29,
                                    value:"DCC返传（可修改）"
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '商户管辖网点',
                                    tabIndex: 31,
                                    value:"缺省为拓展网点，可修改"
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            columnWidth: 0.34,
                            defaults: {
                                width: 110
                            },
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 110,
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '帐户名称',
                                    tabIndex: 27,
                                    value:"DCC返传（可修改）"
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '商户拓展网点',
                                    tabIndex: 30,
                                    value:"DCC返传（可修改）"
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '商户营销人员姓名',
                                    tabIndex: 32
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            columnWidth: 0.33,
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 110,
                            defaults: {
                                width: 110
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '开户行',
                                    tabIndex: 28,
                                    value:"DCC返传（可修改）"
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '商户管辖行',
                                    tabIndex: 30,
                                    value:"缺省为拓展行，可修改"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: ' ',
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    bodyStyle: '{padding:5px}',
                    hideBorders: true,
                    border: false,
                    layout: 'column',
                    autoHeight: true,
                    items: [
                        {
                            xtype: 'form',
                            columnWidth: 0.33,
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 110,
                            defaults: {
                                "width": 110
                            },
                            items: [
                                {
                                    xtype: 'combo',
                                    fieldLabel: '商户状态',
                                    tabIndex: 33,
                                    editable: false,
                                    store:new Ext.data.SimpleStore({
								    	fields:['value','label'],
								    	data: [['','请选择...'],
								    		['1','正常'],
								    		['2','关闭'],
								    		['2','撤机']
								    	]
								    }),
								    value:'',
									emptyText:'请选择...',
									shadow:false,
									displayField:'label',
									valueField:'value',
									mode:'local',
									triggerAction:'all',
									editable:false,
									value:"1"
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'POS总数',
                                    tabIndex: 36
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            columnWidth: 0.34,
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 110,
                            defaults: {
                                width: 110
                            },
                            items: [
                                {
                                    xtype: 'combo',
                                    id:"com_34",
                                    fieldLabel: '分期商户类型',
                                    editable: false,
                                    disabled: true,
                                    tabIndex: 34,
                                    store:new Ext.data.SimpleStore({
								    	fields:['value','label'],
								    	data: [['','请选择...'],
								    		['1','汽车'],
								    		['2','装修'],
								    		['2','家电'],
								    		['2','通讯'],
								    		['2','旅游'],
								    		['2','IT数码'],
								    		['2','酒店'],
								    		['2','婚纱摄影'],
								    		['2','其他']
								    	]
								    }),
									emptyText:'请选择...',
									shadow:false,
									displayField:'label',
									valueField:'value',
									mode:'local',
									triggerAction:'all',
									editable:false
                                },
                                {
                                    xtype: 'button',
                                    text: 'POS台帐补录',
                                    tabIndex: 37,
									handler:function(){
				                		posWind.show();
				                	}                                    
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            columnWidth: 0.33,
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 110,
                            defaults: {
                                "width": 110
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '商户门店数',
                                    anchor: '',
                                    tabIndex: 35
                                },
                                {
                                    xtype: 'datefield',
                                    fieldLabel: '商户装机日期',
                                    format: 'Y-m-d',
                                    tabIndex: 38
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            columnWidth: 0.33,
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 110,
                            defaults: {
                                "width": 110
                            },
                            items: [
                                {
                                    xtype: 'combo',
                                    fieldLabel: '商户扣率类型',
                                    id:"combo_38",
                                    editable: false,
                                    tabIndex: 39,
                                    store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','请选择...'],
							        	    ['0','DCC扣率'],
							        		['1','月结制'],
							        		['2','包年制']
							        	]
							        }),
									emptyText:'请选择...',
									shadow:false,
									displayField:'label',
									valueField:'value',
									mode:'local',
									triggerAction:'all',
									value:"0",
									listeners:{
										select:function( obj, record, index){
											var newValue = record.get("value");
											var btn = Ext.getCmp("btn_39");
											if(newValue!='0' && newValue!=''){
												btn.enable();
											}else{
												btn.disable();
											}
										}
									}
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            columnWidth: 0.34,
                            defaults: {
                                "width": 110
                            },
                            items: [
                                {
                                	id:"btn_39",
                                    xtype: 'button',
                                    text: '商户扣率调整',
                                    tabIndex: 40,
                                    disabled:true,
		                            handler:function(){
				                    	var combo = Ext.getCmp("combo_38");
					                	var myWin = new Ext.Window({
				                			title:"商户扣率",
				                			width:350,
				                			autoHeight:true,
				                			buttons:[
				                			  {text:"确定"},
				                			  {text:"取消",handler:function(){
				                				  myWin.close();		                				  
				                			  }}
				                			],
				                			layout:"form",
				                			bodyStyle:"padding:5px",
				                			labelAlign:"right",
				                			labelPad: 0,
				                			labelWidth: 80,
				                			defaults:{
				                				width: 180
				                			},
				                			items:[
				                			       {
				   		                            	xtype: 'textfield',
				   		                            	fieldLabel: '协议扣率'
				                			       },{
				                			       		xtype:'textfield',
				                			       		fieldLabel:'手续费上限',
				                			       		hidden:combo.getValue()=='2',
				                			       		hideLabel:combo.getValue()=='2',
				                			       		hideMode:"offsets"
				                			       }
				                			]
				                		});
				                		myWin.show();		                	
				                	}
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            columnWidth: 0.33,
                            defaults: {
                                width: 110
                            },
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 110,
                            items: [
                                {
                                    xtype: 'datefield',
                                    fieldLabel: '商户销户日期',
                                    tabIndex: 41
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 110,
                            columnWidth: 1,
                            items: [
                                {
                                    xtype: 'textarea',
                                    fieldLabel: '备注',
                                    width: 360,
                                    height: 40,
                                    tabIndex: 42
                                }
                            ]
                        }
                    ]
                }
            ]
        }	    	
	    ]
	});
	
	return {
		getDataWindow:function(){
			return win;
		},
		show:function(){
			win.show();
		}
	
	};
};