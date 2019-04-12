var DataWindow2 = function(){
	
	var win = new Ext.Window({
	    title: '汽车分期信息录入(带<span style="color:red;">*</span>为必填项)',
	    width: 788,
	    height: 500,
	    frame: true,
	   // modal:true,
	    resizable: true,
	    closeAction:"hide",
	    bodyStyle:"{padding:5px;}",
	    autoScroll:true,
	    buttons:[
	    	{text:"保存",tabIndex: 42,handler:function(){
										    		
	    	}},
	    	{text:"关闭",tabIndex: 43,handler:function(){
				win.hide();					    		
	    	}}
	    ],
	    defaults:{
	    	width:745
	    },
	    items:[
	           {
	               xtype: 'fieldset',
	               title: '客户信息',
	               layout: 'fit',
	               items: [
	                   {
	                       xtype: 'panel',
	                       layout: 'column',
	                       autoHeight: true,
	                       border: false,
	                       hideBorders: true,
	                       bodyStyle: '{padding:5px;}',
	                       items: [
	                           {
	                               xtype: 'form',
	                               columnWidth: 0.33,
	                               labelAlign: 'right',
	                               labelWidth: 100,
	                               defaults: {
	                                   width: 110
	                               },
	                               labelPad: 0,
	                               items: [
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '<span style="color:red;"><b>*</b></span>申请书编号',
	                                       tabIndex: 1,
	                                       value: 'HN100720001A'
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '客户姓名',
	                                       anchor: '',
	                                       tabIndex: 3
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '客户手机号码',
	                                       tabIndex: 6
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '客户单位名称',
	                                       tabIndex: 9
	                                   }
	                               ]
	                           },
	                           {
	                               xtype: 'form',
	                               columnWidth: 0.34,
	                               labelAlign: 'right',
	                               labelPad: 0,
	                               labelWidth: 100,
	                               defaults: {
	                                   width: 110
	                               },
	                               border: false,
	                               items: [
	                                   {
	                                       xtype: 'datefield',
	                                       fieldLabel: '申请日期',
	                                       format: 'Y-m-d',
	                                       value: new Date(),
	                                       tabIndex:2
	                                   },
	                                   {
	                                       xtype: 'combo',
	                                       fieldLabel: '客户性别',
	                                       tabIndex:4,
										   store:new Ext.data.SimpleStore({
									        	fields:['value','label'],
									        	data: [['','请选择...'],
									        		['1','男'],
									        		['2','女']
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
	                                       fieldLabel: '客户家庭电话',
	                                       tabIndex: 7
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '所在单位职务',
	                                       anchor: '',
	                                       tabIndex: 10
	                                   }
	                               ]
	                           }
	                       ]
	                   }
	               ]
	           },
	           {
	               xtype: 'fieldset',
	               title: '商户信息',
	               layout: 'fit',
	               items: [
	                   {
	                       xtype: 'panel',
	                       layout: 'column',
	                       autoHeight: true,
	                       bodyStyle: '{padding:5px;}',
	                       border: false,
	                       hideBorders: true,
	                       items: [
	                           {
	                               xtype: 'form',
	                               columnWidth: 0.33,
	                               labelAlign: 'right',
	                               labelWidth: 100,
	                               defaults: {
	                                   width: 110
	                               },
	                               labelPad: 0,
	                               items: [
	                                   {
	                                       xtype: 'combo',
	                                       fieldLabel: '汽车品牌',
	                                       tabIndex: 12
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       tabIndex: 13,
	                                       fieldLabel: '商户经办人姓名'
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '所辖行分成比例',
	                                       value: 20
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '汽车净车价',
	                                       tabIndex: 16
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
	                               labelWidth: 100,
	                               labelPad: 0,
	                               items: [
	                                   {
	                                       xtype: 'combo',
	                                       fieldLabel: '商户名称',
	                                       anchor: '',
	                                       autoHeight: true
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '经办人联系电话',
	                                       tabIndex: 14
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '汽车型号'
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '商户扣率',
	                                       tabIndex: 20,
	                                       value: '选定‘商户号’，‘汽车品牌’及‘分期期数’后从《汽车经销商参数》自动提取',
	                                       readOnly: true
	                                   }
	                               ]
	                           },
	                           {
	                               xtype: 'form',
	                               defaults: {
	                                   width: 110
	                               },
	                               columnWidth: 0.33,
	                               labelAlign: 'right',
	                               labelPad: 0,
	                               labelWidth: 100,
	                               items: [
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '商户编号',
	                                       tabIndex: 32,
	                                       value: '一旦‘商户名称’选定，自动显示',
	                                       emptyText: '一旦‘商户名称’选定，自动显示商户号',
	                                       readOnly: true
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       tabIndex: 15,
	                                       fieldLabel: '商户所辖行',
	                                       value: '一旦‘商户名称’选定，自动显示'
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '车架号/底盘号',
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
	               title: '其它信息',
	               layout: 'fit',
	               items: [
	                   {
	                       xtype: 'panel',
	                       autoHeight: true,
	                       layout: 'column',
	                       border: false,
	                       hideBorders: true,
	                       bodyStyle: '{padding:5px;}',
	                       items: [
	                           {
	                               xtype: 'form',
	                               columnWidth: 0.33,
	                               labelAlign: 'right',
	                               labelWidth: 100,
	                               defaults: {
	                                   width: 110
	                               },
	                               labelPad: 0,
	                               items: [
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '推荐分行',
	                                       tabIndex: 28,
	                                       value: '通过机构树进行选择'
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '推荐团队营销员',
	                                       tabIndex: 31
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '持卡人扣率',
	                                       tabIndex: 23,
	                                       value: '选定‘商户号’及‘分期期数’后从《汽车经销商参数》自动提取',
	                                       readOnly: true
	                                   }
	                               ]
	                           },
	                           {
	                               xtype: 'form',
	                               title: '',
	                               columnWidth: 0.34,
	                               labelAlign: 'right',
	                               labelWidth: 100,
	                               defaults: {
	                                   width: 110
	                               },
	                               labelPad: 0,
	                               items: [
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '推荐网点',
	                                       tabIndex: 27,
	                                       value: '通过机构树进行选择'
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '申请额度',
	                                       tabIndex: 17
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '刷卡金额',
	                                       tabIndex: 24,
	                                       value: '从POS交易流水中通过商户号，账号，期数去匹配提取'
	                                   }
	                               ]
	                           },
	                           {
	                               xtype: 'form',
	                               defaults: {
	                                   width: 110
	                               },
	                               labelAlign: 'right',
	                               labelPad: 0,
	                               labelWidth: 100,
	                               columnWidth: 0.33,
	                               items: [
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '推荐网点营销员',
	                                       tabIndex: 30
	                                   },
	                                   {
				                            xtype: 'combo',
				                            fieldLabel: '分期期数',
				                            tabIndex: 19,
				                            store:new Ext.data.SimpleStore({
									        	fields:['value','label'],
									        	data: [['','请选择...'],
									        		['1','03'],
									        		['2','06'],
									        		 ['1','12'],
									        		 ['1','18'],
									        		 ['1','24'],
									        		 ['1','36']
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
	                                       fieldLabel: '刷卡日期',
	                                       tabIndex: 26,
	                                       value: '从POS交易流水中通过商户号，账号，期数去匹配提取'
	                                   }
	                               ]
	                           },
	                           {
	                               xtype: 'form',
	                               columnWidth: 1,
	                               labelAlign: 'right',
	                               labelPad: 0,
	                               labelWidth: 100,
	                               items: [
	                                   {
	                                       xtype: 'textarea',
	                                       fieldLabel: '备注',
	                                       tabIndex: 38,
	                                       height: 40,
	                                       width: 360
	                                   }
	                               ]
	                           }
	                       ]
	                   }
	               ]
	           },
	           {
	               xtype: 'fieldset',
	               title: '审批信息',
	               layout: 'fit',
	               items: [
                {
                    xtype: 'panel',
                    title: '',
                    border: false,
                    hideBorders: true,
                    defaults: '{padding:5px;}',
                    layout: 'column',
                    autoHeight: true,
                    bodyStyle: '{padding:5px;}',
                    items: [
                        {
                            xtype: 'form',
                            columnWidth: 0.33,
                            labelAlign: 'right',
                            labelWidth: 100,
                            defaults: {
                                width: 110
                            },
                            defaultType: 'textfield',
                            labelPad: 0,
                            items: [
                                {
                                    xtype: 'datefield',
                                    fieldLabel: '审批日期',
                                    tabIndex: 33,
                                    format: 'Y-m-d'
                                },
								new Ext.form.TriggerField({
									id:"COD",
					            	fieldLabel: '审批拒绝理由',
					            	tabIndex: 35,
					            	editable:false,
					            	onTriggerClick: function() {
							            if (this.menu == null) {
							            	var root = new Ext.tree.TreeNode({
												text:'审批拒绝理由',
												id:'root',
												expanded:true
											});
											var node = new Ext.tree.TreeNode({
												id:"A",
												text:"客户主动取消",
												leaf:false
											});
											node.appendChild(new Ext.tree.TreeNode({
												id:"11",
												text:"因专用额度过低要求取消",
												leaf:true
											}));
											
											var node2 = new Ext.tree.TreeNode({
												id:"B",
												text:"信用不良",
												leaf:false
											});
											node2.appendChild(new Ext.tree.TreeNode({
												id:"21",
												text:"人行征信系统",
												leaf:true
											}));
											root.appendChild(node);
											root.appendChild(node2);

							                var menu = new Ext.menu.Menu({
											    items: [
											    	new Ext.tree.TreePanel({
														root: root,
														border: false,
														autoScroll: true,
														rootVisible: true,
														height:220,
														width:200,
												    	singleExpand:true,
												    	listeners:{
												    		click:function(node){
												    			if(node.attributes.leaf){
												    				Ext.getCmp("COD").setValue(node.text)
												    				menu.hide();
												    			}
												    		}
												    	}
												  	})
											    ]
											});
											this.menu = menu;
							            }
							            this.menu.show(this.el, "tl-bl?");
							        }
					   			})  ,                                
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '请款金额',
                                    tabIndex: 18
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            columnWidth: 0.34,
                            labelAlign: 'right',
                            labelWidth: 100,
                            defaults: {
                                width: 110
                            },
                            labelPad: 0,
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '审批人姓名',
                                    tabIndex: 34
                                },
                                {
                                    xtype: 'combo',
                                    fieldLabel: '审批通过理由',
                                    tabIndex: 36,
                                    store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','请选择...'],
							        		['自有中高档房产','自有中高档房产'],
							        		['我行AUM值客户','我行AUM值客户'],
							        		['特定优质群体','特定优质群体'],
							        		['我行房贷客户','我行房贷客户']
							        	]
							        }),
									shadow:false,
									displayField:'label',
									valueField:'value',
									mode:'local',
									triggerAction:'all',
									editable:true,
									maxLength:100
                                },
                                {
                                    xtype: 'datefield',
                                    fieldLabel: '请款日期',
                                    anchor: '',
                                    tabIndex: 39,
                                    format: 'Y-m-d'
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            columnWidth: 0.33,
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 100,
                            defaults: {
                                width: 110
                            },
                            items: [
                                {
                                    xtype: 'combo',
                                    fieldLabel: '审批环节',
                                    store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','请选择...'],
							        		['1','办卡中'],
							        		['2','审批中'],
							        		['3','通过'],
							        		['4','未通过']
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
                                    fieldLabel: '审批通过额度',
                                    tabIndex: 37
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
		show:function(){
			win.show();
		}
	
	};
};