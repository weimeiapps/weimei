var DataWindow = function(){
	
	var posWind = new PosWindow().getWindow();
	
	var win = new Ext.Window({
	    title: '�̻�̨����Ϣ¼��(��<span style="color:red;">*</span>Ϊ������)',
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
	    	{text:"����",tabIndex: 43,handler:function(){
										    		
	    	}},
	    	{text:"�ر�",tabIndex: 44,handler:function(){
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
                                    fieldLabel: '<span style="color:red;"><b>*</b></span>�̻���',
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
                                    text: '�̻�������',
                                    tabIndex: 2,
                                    handler:function(){
				                		var myWin = new Ext.Window({
				                			title:"�̻�������",
				                			width:320,
				                			autoHeight:true,
				                			bodyStyle:"{padding:5px;}",
				                			buttons:[
				                			  {text:"ȷ��"},
				                			  {text:"ȡ��",handler:function(){
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
				   		                            	fieldLabel: '���̻���',
				   		                            	disabled:true,
				   		                            	value:"HN1090290"
				                			       },{
				   		                            	xtype: 'textfield',
				   		                            	fieldLabel: '���̻���'
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
                                    fieldLabel: '�̻�����',
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
                                    fieldLabel: '�̻�����',
                                    tabIndex: 4
                                },
                                {
                                    xtype: 'combo',
                                    fieldLabel: '�̻��ȼ�',
                                    tabIndex: 7,
                                    store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','��ѡ��...'],
							        		['1','�ص�'],
							        		['3','һ��'],
							        		['4','��ע'],
							        		['5','����']
							        	]
							        }),
							        value:'3',
									emptyText:'��ѡ��...',
									shadow:false,
									displayField:'label',
									valueField:'value',
									mode:'local',
									triggerAction:'all',
									editable:false
                                },
                                {
                                    xtype: 'combo',
                                    fieldLabel: 'POS����ά����',
                                    tabIndex: 10,
                                    store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','��ѡ��...'],
							        		['1','����'],
							        		['2','ͨ��'],
							        		['2','����'],
							        		['2','����'],
							        		['2','����']
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
                                    fieldLabel: '�̻�Ӫҵִ�պ�',
                                    tabIndex: 13
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'Ѻ��',
                                    value: 1000,
                                    tabIndex: 16
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '������',
                                    tabIndex: 19,
                                    value:"ȱʡΪ��������"
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '��ϵ�˵绰',
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
                                    fieldLabel: '�̻�MCC����',
                                    tabIndex: 5,
                                    value:"DCC�����������޸ģ�"
                                },
                                {
                                    xtype: 'combo',
                                    fieldLabel: '�̻���������',
                                    tabIndex: 8,
                                    store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','��ѡ��...'],
							        		['1','����ʡ��'],
							        		['2','������']
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
                                    xtype: 'combo',
                                    fieldLabel: '�̻���˾����',
                                    tabIndex: 11,
                                    store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','��ѡ��...'],
							        		['1','����'],
							        		['2','��ҵ'],
							        		['2','��ҵ']
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
                                    fieldLabel: '˰��Ǽ�֤��',
                                    tabIndex: 14
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '��������',
                                    tabIndex: 17
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '�����˵绰',
                                    tabIndex: 20
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '������ϵ��',
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
                                    fieldLabel: '�̻�����',
                                    tabIndex: 6,
                                    store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','��ѡ��...'],
							        		['1','����'],
							        		['2','��ͨ'],
							        		['3','�⿨'],
							        		['4','����'],
							        		['5','������Ŀ'],
							        		['6','EPOS'],
							        		['7','����'],
							        		['8','����+��ͨ'],
							        		['9','�⿨+��ͨ'],
							        		['10','ϴ��+��ͨ'],
							        		['11','����POS'],
							        		['12','Ȩ�����'],
							        		['13','���ֶһ�'],
							        		['14','ǩԼPOS'],
							        		['15','ϴ����'],
							        		['16','���ֳ�֧��'],
							        		['17','����']
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
									emptyText:'��ѡ��...',
									shadow:false,
									displayField:'label',
									valueField:'value',
									mode:'local',
									triggerAction:'all',
									editable:false
                                },
                                {
                                    xtype: 'combo',
                                    fieldLabel: 'POS����Ͷ�뷽',
                                    tabIndex: 9,
                                    store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','��ѡ��...'],
							        		['1','����'],
							        		['2','ͨ��'],
							        		['2','����'],
							        		['2','����'],
							        		['2','����']
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
                                    fieldLabel: '�̻���Ӫ��Χ',
                                    tabIndex: 12
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '��֯��������֤��',
                                    tabIndex: 15,
                                    value:"�̻���˾����Ϊ�����ˡ�ʱ����Ϊ�գ��������������"
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '�������֤��',
                                    tabIndex: 18
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '��ϵ��',
                                    anchor: '',
                                    tabIndex: 21
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '������ϵ�˵绰',
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
                                    fieldLabel: '�̻���ַ',
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
                                    fieldLabel: '�����ʺ�',
                                    tabIndex: 26,
                                    value:"DCC���������޸ģ�"
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '�̻���չ��',
                                    tabIndex: 29,
                                    value:"DCC���������޸ģ�"
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '�̻���Ͻ����',
                                    tabIndex: 31,
                                    value:"ȱʡΪ��չ���㣬���޸�"
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
                                    fieldLabel: '�ʻ�����',
                                    tabIndex: 27,
                                    value:"DCC���������޸ģ�"
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '�̻���չ����',
                                    tabIndex: 30,
                                    value:"DCC���������޸ģ�"
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '�̻�Ӫ����Ա����',
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
                                    fieldLabel: '������',
                                    tabIndex: 28,
                                    value:"DCC���������޸ģ�"
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '�̻���Ͻ��',
                                    tabIndex: 30,
                                    value:"ȱʡΪ��չ�У����޸�"
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
                                    fieldLabel: '�̻�״̬',
                                    tabIndex: 33,
                                    editable: false,
                                    store:new Ext.data.SimpleStore({
								    	fields:['value','label'],
								    	data: [['','��ѡ��...'],
								    		['1','����'],
								    		['2','�ر�'],
								    		['2','����']
								    	]
								    }),
								    value:'',
									emptyText:'��ѡ��...',
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
                                    fieldLabel: 'POS����',
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
                                    fieldLabel: '�����̻�����',
                                    editable: false,
                                    disabled: true,
                                    tabIndex: 34,
                                    store:new Ext.data.SimpleStore({
								    	fields:['value','label'],
								    	data: [['','��ѡ��...'],
								    		['1','����'],
								    		['2','װ��'],
								    		['2','�ҵ�'],
								    		['2','ͨѶ'],
								    		['2','����'],
								    		['2','IT����'],
								    		['2','�Ƶ�'],
								    		['2','��ɴ��Ӱ'],
								    		['2','����']
								    	]
								    }),
									emptyText:'��ѡ��...',
									shadow:false,
									displayField:'label',
									valueField:'value',
									mode:'local',
									triggerAction:'all',
									editable:false
                                },
                                {
                                    xtype: 'button',
                                    text: 'POS̨�ʲ�¼',
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
                                    fieldLabel: '�̻��ŵ���',
                                    anchor: '',
                                    tabIndex: 35
                                },
                                {
                                    xtype: 'datefield',
                                    fieldLabel: '�̻�װ������',
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
                                    fieldLabel: '�̻���������',
                                    id:"combo_38",
                                    editable: false,
                                    tabIndex: 39,
                                    store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','��ѡ��...'],
							        	    ['0','DCC����'],
							        		['1','�½���'],
							        		['2','������']
							        	]
							        }),
									emptyText:'��ѡ��...',
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
                                    text: '�̻����ʵ���',
                                    tabIndex: 40,
                                    disabled:true,
		                            handler:function(){
				                    	var combo = Ext.getCmp("combo_38");
					                	var myWin = new Ext.Window({
				                			title:"�̻�����",
				                			width:350,
				                			autoHeight:true,
				                			buttons:[
				                			  {text:"ȷ��"},
				                			  {text:"ȡ��",handler:function(){
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
				   		                            	fieldLabel: 'Э�����'
				                			       },{
				                			       		xtype:'textfield',
				                			       		fieldLabel:'����������',
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
                                    fieldLabel: '�̻���������',
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
                                    fieldLabel: '��ע',
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