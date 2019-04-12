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
	    buttons:[
	    	{text:"保存",tabIndex: 41,handler:function(){
										    		
	    	}},
	    	{text:"关闭",tabIndex: 42,handler:function(){
				win.hide();					    		
	    	}}
	    ],
	    items:[
	    	{
	    		xtype:"panel",
	    		frame:true,
	    		border:false,
	    		items:[
		    	 {
		            xtype: 'panel',
		            layout: 'hbox',
		            border:false,
		            width:"100%",
		            defaults: {
		                margins: '0 5 0 0'
		            },
		            autoHeight: true,
		            items: [
		                {
		                    xtype: 'form',
		                    border: false,
		                    labelPad: 0,
		                    labelAlign: 'right',
		                    width: 320,
		                    labelWidth: 110,
		                    defaults: {
		                        margins: '0 10 0 0'
		                    },
		                    items: [
		                        {
		                            xtype: 'textfield',
		                            width: 200,
		                            fieldLabel: '<span style="color:red;">*</span>商户号',
		                            tabIndex: 1
		                        }
		                    ]
		                },
		                {
		                    xtype: 'button',
		                    text: '商户号整改',
		                    tabIndex: 2,
		                    autoWidth: true,
		                    handler:function(){
		                		var myWin = new Ext.Window({
		                			title:"商户号整改",
		                			width:320,
		                			autoHeight:true,
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
		            xtype: 'panel',
		            layout: 'column',
		            width:"100%",
		            border:false,
		            items: [
		                {
		                    xtype: 'form',
		                    columnWidth: 0.5,
		                    labelAlign: 'right',
		                    labelPad: 0,
		                    labelWidth: 110,
		                    defaults: {
		                        width: 200
		                    },
		                    border: false,
		                    items: [
		                        {
		                            xtype: 'textfield',
		                            fieldLabel: '商户名称',
		                            tabIndex: 3
		                        },
		                         {
		                            xtype: 'textfield',
		                            fieldLabel: '商户MCC代码',
		                            value:"DCC返传（不可修改）",
		                            tabIndex: 4,
		                            readOnly:true,
		                            listeners:{
					    				render:function(obj){
					    					var font=document.createElement("font");
										    font.setAttribute("color","red");
										    var redStar=document.createTextNode(' ');
										    font.appendChild(redStar);    
										    obj.el.dom.parentNode.appendChild(font);
					
					    				}
					    			}
		                        }
		                    ]
		                },
		                {
		                    xtype: 'form',
		                    columnWidth: 0.5,
		                    labelAlign: 'right',
		                    labelPad: 0,
		                    labelWidth: 130,
		                    defaults: {
		                        width: 200
		                    },
		                    border: false,
		                    items: [
		                        {
		                            xtype: 'textfield',
		                            fieldLabel: '商户店名',
		                            tabIndex: 3,
		                            value:"默认为“商户名称”,可修改"
		                        }
		                    ]
		                }
		            ]
		        },
		        {
		            xtype: 'panel',
		            layout: 'hbox',
		            border:false,
		            width:"100%",
		            defaults: {
		                margins: '0 5 0 0'
		            },
		            items: [
		                {
		                    xtype: 'form',
		                    height: 25,
		                    width: 320,
		                    labelWidth: 110,
		                    labelPad: 0,
		                    labelAlign: 'right',
		                    border: false,
		                    items: [
		                        {
		                            xtype: 'numberfield',
		                            fieldLabel: 'POS总数',
		                            tabIndex: 4,
		                            width: 200
		                        }
		                    ]
		                },
		                {
		                    xtype: 'button',
		                    text: 'POS台帐补录',
		                    autoWidth: true,
		                    tabIndex: 5,
		                    handler:function(){
		                		posWind.show();
		                	}
		                }
		            ]
		        },
		        {
		            xtype: 'panel',
		            title: '',
		            border: false,
		            width:"100%",
		            layout: 'column',
		            items: [
		                {
		                    xtype: 'form',
		                    title: '',
		                    columnWidth: 0.5,
		                    labelAlign: 'right',
		                    labelPad: 0,
		                    autoHeight: true,
		                    defaults: {
		                        width: 200
		                    },
		                    border: false,
		                    labelWidth: 110,
		                    items: [
		                        {
		                            xtype: 'combo',
		                            fieldLabel: '商户所处地域',
		                            tabIndex: 6,
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
		                            fieldLabel: 'POS机具投入方',
		                            tabIndex: 8,
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
		                            tabIndex: 10,
		                            fieldLabel: '商户经营范围'
		                        },
		                        {
		                            xtype: 'textfield',
		                            tabIndex: 12,
		                            fieldLabel: '商户税务登记证号'
		                        }
		                    ]
		                },
		                {
		                    xtype: 'form',
		                    columnWidth: 0.5,
		                    labelAlign: 'right',
		                    labelPad: 0,
		                    border: false,
		                    autoHeight: true,
		                    height: 130,
		                    defaults: {
		                        width: 200
		                    },
		                    labelWidth: 130,
		                    items: [
		                        {
		                            xtype: 'combo',
		                            fieldLabel: '商户公司性质',
		                            tabIndex: 7,
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
		                            xtype: 'combo',
		                            tabIndex: 9,
		                            fieldLabel: 'POS机具维护方',
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
		                            tabIndex: 11,
		                            fieldLabel: '商户营业执照号'
		                        },
		                        {
		                            xtype: 'textfield',
		                            tabIndex: 13,
		                            fieldLabel: '商户组织机构代码证号',
		                            value:"商户公司性质为‘个人’时允许为空，否则必须有数据"
		                        }
		                    ]
		                }
		            ]
		        },
		        {
		            xtype: 'panel',
		            title: '',
		            border: false,
		            width:"100%",
		            layout: 'column',
		            items: [
		                {
		                    xtype: 'form',
		                    columnWidth: 1.0,
		                    labelAlign: 'right',
		                    labelPad: 0,
		                    border: false,
		                    autoHeight: true,
		                    defaults: {
		                        anchor: '80%'
		                    },
		                    labelWidth: 110,
		                    items: [
		                        {
		                            xtype: 'textarea',
		                            height:40,
		                            tabIndex: 14,
		                            fieldLabel: '商户地址'
		                        }
		                    ]
		                }
		            ]
		        },
		        {
		            xtype: 'panel',
		            title: '',
		            border: false,
		            width:"100%",
		            layout: 'column',
		            items: [
		                {
		                    xtype: 'form',
		                    columnWidth: 0.5,
		                    labelAlign: 'right',
		                    labelPad: 0,
		                    border: false,
		                    autoHeight: true,
		                    defaults: {
		                        width: 200
		                    },
		                    labelWidth: 110,
		                    items: [
								{
								    xtype: 'textfield',
								    tabIndex: 15,
								    fieldLabel: '法人姓名'
								},
								{
								    xtype: 'textfield',
								    tabIndex: 17,
								    fieldLabel: '负责人',
								    value:"缺省为法人姓名"
								},
								{
								    xtype: 'textfield',
								    tabIndex: 19,
								    fieldLabel: '联系人'
								},
								{
								    xtype: 'textfield',
								    tabIndex: 21,
								    fieldLabel: '财务联系人'
								},
								{
								    xtype: 'textfield',
								    tabIndex: 23,
								    fieldLabel: '入帐帐号',
								    readOnly:true,
								    value:"DCC返传（不可修改）",
								    listeners:{
										render:function(obj){
											var font=document.createElement("font");
										    font.setAttribute("color","red");
										    var redStar=document.createTextNode('  ');
										    font.appendChild(redStar);    
										    obj.el.dom.parentNode.appendChild(font);
								
										}
									}
								},
								{
								    xtype: 'textfield',
								    tabIndex: 25,
								    fieldLabel: '开户行',
								    value:"DCC返传（可修改）"
								},
								{
								    xtype: 'textfield',
								    tabIndex: 27,
								    fieldLabel: '商户拓展行网点',
								    value:"DCC返传（可修改）"
								},
								{
								    xtype: 'textfield',
								    tabIndex: 29,
								    fieldLabel: '商户管辖行网点',
								    value:"缺省为主办网点，可修改"
								},
								{
								    xtype: 'datefield',
								    tabIndex: 31,
								    fieldLabel: '商户装机日期'
								},
								{
								    xtype: 'numberfield',
								    tabIndex: 33,
								    fieldLabel: '押金',
								    value:"1000"
								},
								{
								    xtype: 'combo',
								    tabIndex: 35,
								    fieldLabel: '分期商户类型',
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
								    xtype: 'numberfield',
								    tabIndex: 37,
								    fieldLabel: '门店数'
								}
		                    ]
		                },
		                {
		                    xtype: 'form',
		                    columnWidth: 0.5,
		                    labelAlign: 'right',
		                    labelPad: 0,
		                    border: false,
		                    autoHeight: true,
		                    height: 130,
		                    defaults: {
		                        width: 200
		                    },
		                    labelWidth: 130,
		                    items: [
								{
								    xtype: 'textfield',
								    tabIndex: 16,
								    fieldLabel: '法人身份证号'
								},
								{
								    xtype: 'textfield',
								    tabIndex: 18,
								    fieldLabel: '负责人电话',
								    anchor: ''
								},
								{
								    xtype: 'textfield',
								    tabIndex: 20,
								    fieldLabel: '联系人电话'
								},
								{
								    xtype: 'textfield',
								    tabIndex: 22,
								    fieldLabel: '财务联系人电话'
								},
								{
								    xtype: 'textfield',
								    tabIndex: 24,
								    fieldLabel: '帐户名称',
								    value:"DCC返传（可修改）"
								},
								{
								    xtype: 'textfield',
								    tabIndex: 26,
								    fieldLabel: '商户拓展行',
								    value:"DCC返传（可修改）"
								},
								{
								    xtype: 'textfield',
								    tabIndex: 28,
								    fieldLabel: '商户管辖行',
								    value:"缺省为主办行，可修改"
								},
								{
								    xtype: 'textfield',
								    tabIndex: 30,
								    fieldLabel: '商户营销人员姓名'
								},
								{
								    xtype: 'datefield',
								    tabIndex: 32,
								    fieldLabel: '最后修改日期',
								    format:'Y-m-d',
								    value:new Date()
								},
								{
								    xtype: 'combo',
								    tabIndex: 34,
								    fieldLabel: '商户状态',
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
									editable:false
								},
								{
								    xtype: 'datefield',
								    tabIndex: 36,
								    fieldLabel: '商户销户日期'
								}		                            
		                    ]
		                }		            
		            ]
		        },
		        {
		            xtype: 'panel',
		            layout: 'hbox',
		            width:"100%",
		            border:false,
		            defaults: {
		                margins: '0 5 0 0'
		            },
		            items: [
		                {
		                    xtype: 'form',
		                    labelWidth: 110,
		                    labelPad: 0,
		                    labelAlign: 'right',
		                    width: 320,
		                    defaults: {
		                        width: 200
		                    },
		                    border: false,
		                    items: [
		                        {
		                            xtype: 'combo',
		                            tabIndex: 38,
		                            id:"combo_38",
		                            fieldLabel: '商户扣率',
		                            store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','请选择...'],
							        	    ['0','DCC扣率'],
							        		['1','月结制'],
							        		['2','包年制']
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
							id:"btn_39",
		                	xtype: 'button',
		                    tabIndex: 39,
		                    text: '商户扣率调整',
		                    autoWidth: true,
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
		                			labelAlign:"right",
		                			labelPad: 0,
		                			labelWidth: 80,
		                			defaults:{
		                				width: 180
		                			},
		                			items:[
		                			       {
		   		                            	xtype: 'textfield',
		   		                            	fieldLabel: '商户号',
		   		                            	readOnly:true,
		   		                            	value:"DCC返传（不可修改）"
		                			       },{
		   		                            	xtype: 'textfield',
		   		                            	fieldLabel: '扣率编号',
		   		                            	readOnly:true,
		   		                            	value:"DCC返传（不可修改）"
		                			       },{
		   		                            	xtype: 'textfield',
		   		                            	fieldLabel: 'DCC扣率',
		   		                            	readOnly:true,
		   		                            	value:"DCC返传（不可修改）"
		                			       },{
		   		                            	xtype: 'textfield',
		   		                            	fieldLabel: '协议扣率'
		                			       },{
		                			       		xtype:'textfield',
		                			       		fieldLabel:'手续上限',
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
		            width:"100%",
		            border:false,
		            labelAlign: 'right',
		            labelPad: 0,
		            labelWidth: 110,
		            items: [
		                {
		                    xtype: 'textarea',
		                    anchor: '80%',
		                    tabIndex: 40,
		                    fieldLabel: '备注',
		                    height: 40
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