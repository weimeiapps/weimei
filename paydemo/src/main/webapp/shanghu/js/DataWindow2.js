var DataWindow2 = function(){
	
	var win = new Ext.Window({
	    title: '����������Ϣ¼��(��<span style="color:red;">*</span>Ϊ������)',
	    width: 788,
	    height: 500,
	    frame: true,
	   // modal:true,
	    resizable: true,
	    closeAction:"hide",
	    bodyStyle:"{padding:5px;}",
	    autoScroll:true,
	    buttons:[
	    	{text:"����",tabIndex: 42,handler:function(){
										    		
	    	}},
	    	{text:"�ر�",tabIndex: 43,handler:function(){
				win.hide();					    		
	    	}}
	    ],
	    defaults:{
	    	width:745
	    },
	    items:[
	           {
	               xtype: 'fieldset',
	               title: '�ͻ���Ϣ',
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
	                                       fieldLabel: '<span style="color:red;"><b>*</b></span>��������',
	                                       tabIndex: 1,
	                                       value: 'HN100720001A'
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '�ͻ�����',
	                                       anchor: '',
	                                       tabIndex: 3
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '�ͻ��ֻ�����',
	                                       tabIndex: 6
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '�ͻ���λ����',
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
	                                       fieldLabel: '��������',
	                                       format: 'Y-m-d',
	                                       value: new Date(),
	                                       tabIndex:2
	                                   },
	                                   {
	                                       xtype: 'combo',
	                                       fieldLabel: '�ͻ��Ա�',
	                                       tabIndex:4,
										   store:new Ext.data.SimpleStore({
									        	fields:['value','label'],
									        	data: [['','��ѡ��...'],
									        		['1','��'],
									        		['2','Ů']
									        	]
									        }),
									        value:'',
											emptyText:'��ѡ��...',
											shadow:false,
											displayField:'label',
											valueField:'value',
											mode:'local',
											triggerAction:'all',
											editable:false	                                       
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '�ͻ���ͥ�绰',
	                                       tabIndex: 7
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '���ڵ�λְ��',
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
	               title: '�̻���Ϣ',
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
	                                       fieldLabel: '����Ʒ��',
	                                       tabIndex: 12
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       tabIndex: 13,
	                                       fieldLabel: '�̻�����������'
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '��Ͻ�зֳɱ���',
	                                       value: 20
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '����������',
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
	                                       fieldLabel: '�̻�����',
	                                       anchor: '',
	                                       autoHeight: true
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '��������ϵ�绰',
	                                       tabIndex: 14
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '�����ͺ�'
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '�̻�����',
	                                       tabIndex: 20,
	                                       value: 'ѡ�����̻��š���������Ʒ�ơ�����������������ӡ����������̲������Զ���ȡ',
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
	                                       fieldLabel: '�̻����',
	                                       tabIndex: 32,
	                                       value: 'һ�����̻����ơ�ѡ�����Զ���ʾ',
	                                       emptyText: 'һ�����̻����ơ�ѡ�����Զ���ʾ�̻���',
	                                       readOnly: true
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       tabIndex: 15,
	                                       fieldLabel: '�̻���Ͻ��',
	                                       value: 'һ�����̻����ơ�ѡ�����Զ���ʾ'
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '���ܺ�/���̺�',
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
	               title: '������Ϣ',
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
	                                       fieldLabel: '�Ƽ�����',
	                                       tabIndex: 28,
	                                       value: 'ͨ������������ѡ��'
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '�Ƽ��Ŷ�Ӫ��Ա',
	                                       tabIndex: 31
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '�ֿ��˿���',
	                                       tabIndex: 23,
	                                       value: 'ѡ�����̻��š�����������������ӡ����������̲������Զ���ȡ',
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
	                                       fieldLabel: '�Ƽ�����',
	                                       tabIndex: 27,
	                                       value: 'ͨ������������ѡ��'
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: '������',
	                                       tabIndex: 17
	                                   },
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: 'ˢ�����',
	                                       tabIndex: 24,
	                                       value: '��POS������ˮ��ͨ���̻��ţ��˺ţ�����ȥƥ����ȡ'
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
	                                       fieldLabel: '�Ƽ�����Ӫ��Ա',
	                                       tabIndex: 30
	                                   },
	                                   {
				                            xtype: 'combo',
				                            fieldLabel: '��������',
				                            tabIndex: 19,
				                            store:new Ext.data.SimpleStore({
									        	fields:['value','label'],
									        	data: [['','��ѡ��...'],
									        		['1','03'],
									        		['2','06'],
									        		 ['1','12'],
									        		 ['1','18'],
									        		 ['1','24'],
									        		 ['1','36']
									        	]
									        }),
									        value:'',
											emptyText:'��ѡ��...',
											shadow:false,
											displayField:'label',
											valueField:'value',
											mode:'local',
											triggerAction:'all',
											editable:false
				                        },	
	                                   {
	                                       xtype: 'textfield',
	                                       fieldLabel: 'ˢ������',
	                                       tabIndex: 26,
	                                       value: '��POS������ˮ��ͨ���̻��ţ��˺ţ�����ȥƥ����ȡ'
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
	                                       fieldLabel: '��ע',
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
	               title: '������Ϣ',
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
                                    fieldLabel: '��������',
                                    tabIndex: 33,
                                    format: 'Y-m-d'
                                },
								new Ext.form.TriggerField({
									id:"COD",
					            	fieldLabel: '�����ܾ�����',
					            	tabIndex: 35,
					            	editable:false,
					            	onTriggerClick: function() {
							            if (this.menu == null) {
							            	var root = new Ext.tree.TreeNode({
												text:'�����ܾ�����',
												id:'root',
												expanded:true
											});
											var node = new Ext.tree.TreeNode({
												id:"A",
												text:"�ͻ�����ȡ��",
												leaf:false
											});
											node.appendChild(new Ext.tree.TreeNode({
												id:"11",
												text:"��ר�ö�ȹ���Ҫ��ȡ��",
												leaf:true
											}));
											
											var node2 = new Ext.tree.TreeNode({
												id:"B",
												text:"���ò���",
												leaf:false
											});
											node2.appendChild(new Ext.tree.TreeNode({
												id:"21",
												text:"��������ϵͳ",
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
                                    fieldLabel: '�����',
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
                                    fieldLabel: '����������',
                                    tabIndex: 34
                                },
                                {
                                    xtype: 'combo',
                                    fieldLabel: '����ͨ������',
                                    tabIndex: 36,
                                    store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','��ѡ��...'],
							        		['�����иߵ�����','�����иߵ�����'],
							        		['����AUMֵ�ͻ�','����AUMֵ�ͻ�'],
							        		['�ض�����Ⱥ��','�ض�����Ⱥ��'],
							        		['���з����ͻ�','���з����ͻ�']
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
                                    fieldLabel: '�������',
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
                                    fieldLabel: '��������',
                                    store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','��ѡ��...'],
							        		['1','�쿨��'],
							        		['2','������'],
							        		['3','ͨ��'],
							        		['4','δͨ��']
							        	]
							        }),
							        value:'',
									emptyText:'��ѡ��...',
									shadow:false,
									displayField:'label',
									valueField:'value',
									mode:'local',
									triggerAction:'all',
									editable:false
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '����ͨ�����',
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