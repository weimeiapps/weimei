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
	    buttons:[
	    	{text:"����",tabIndex: 41,handler:function(){
										    		
	    	}},
	    	{text:"�ر�",tabIndex: 42,handler:function(){
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
		                            fieldLabel: '<span style="color:red;">*</span>�̻���',
		                            tabIndex: 1
		                        }
		                    ]
		                },
		                {
		                    xtype: 'button',
		                    text: '�̻�������',
		                    tabIndex: 2,
		                    autoWidth: true,
		                    handler:function(){
		                		var myWin = new Ext.Window({
		                			title:"�̻�������",
		                			width:320,
		                			autoHeight:true,
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
		                            fieldLabel: '�̻�����',
		                            tabIndex: 3
		                        },
		                         {
		                            xtype: 'textfield',
		                            fieldLabel: '�̻�MCC����',
		                            value:"DCC�����������޸ģ�",
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
		                            fieldLabel: '�̻�����',
		                            tabIndex: 3,
		                            value:"Ĭ��Ϊ���̻����ơ�,���޸�"
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
		                            fieldLabel: 'POS����',
		                            tabIndex: 4,
		                            width: 200
		                        }
		                    ]
		                },
		                {
		                    xtype: 'button',
		                    text: 'POS̨�ʲ�¼',
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
		                            fieldLabel: '�̻���������',
		                            tabIndex: 6,
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
		                            fieldLabel: 'POS����Ͷ�뷽',
		                            tabIndex: 8,
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
		                            tabIndex: 10,
		                            fieldLabel: '�̻���Ӫ��Χ'
		                        },
		                        {
		                            xtype: 'textfield',
		                            tabIndex: 12,
		                            fieldLabel: '�̻�˰��Ǽ�֤��'
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
		                            fieldLabel: '�̻���˾����',
		                            tabIndex: 7,
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
		                            xtype: 'combo',
		                            tabIndex: 9,
		                            fieldLabel: 'POS����ά����',
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
		                            tabIndex: 11,
		                            fieldLabel: '�̻�Ӫҵִ�պ�'
		                        },
		                        {
		                            xtype: 'textfield',
		                            tabIndex: 13,
		                            fieldLabel: '�̻���֯��������֤��',
		                            value:"�̻���˾����Ϊ�����ˡ�ʱ����Ϊ�գ��������������"
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
		                            fieldLabel: '�̻���ַ'
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
								    fieldLabel: '��������'
								},
								{
								    xtype: 'textfield',
								    tabIndex: 17,
								    fieldLabel: '������',
								    value:"ȱʡΪ��������"
								},
								{
								    xtype: 'textfield',
								    tabIndex: 19,
								    fieldLabel: '��ϵ��'
								},
								{
								    xtype: 'textfield',
								    tabIndex: 21,
								    fieldLabel: '������ϵ��'
								},
								{
								    xtype: 'textfield',
								    tabIndex: 23,
								    fieldLabel: '�����ʺ�',
								    readOnly:true,
								    value:"DCC�����������޸ģ�",
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
								    fieldLabel: '������',
								    value:"DCC���������޸ģ�"
								},
								{
								    xtype: 'textfield',
								    tabIndex: 27,
								    fieldLabel: '�̻���չ������',
								    value:"DCC���������޸ģ�"
								},
								{
								    xtype: 'textfield',
								    tabIndex: 29,
								    fieldLabel: '�̻���Ͻ������',
								    value:"ȱʡΪ�������㣬���޸�"
								},
								{
								    xtype: 'datefield',
								    tabIndex: 31,
								    fieldLabel: '�̻�װ������'
								},
								{
								    xtype: 'numberfield',
								    tabIndex: 33,
								    fieldLabel: 'Ѻ��',
								    value:"1000"
								},
								{
								    xtype: 'combo',
								    tabIndex: 35,
								    fieldLabel: '�����̻�����',
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
								    xtype: 'numberfield',
								    tabIndex: 37,
								    fieldLabel: '�ŵ���'
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
								    fieldLabel: '�������֤��'
								},
								{
								    xtype: 'textfield',
								    tabIndex: 18,
								    fieldLabel: '�����˵绰',
								    anchor: ''
								},
								{
								    xtype: 'textfield',
								    tabIndex: 20,
								    fieldLabel: '��ϵ�˵绰'
								},
								{
								    xtype: 'textfield',
								    tabIndex: 22,
								    fieldLabel: '������ϵ�˵绰'
								},
								{
								    xtype: 'textfield',
								    tabIndex: 24,
								    fieldLabel: '�ʻ�����',
								    value:"DCC���������޸ģ�"
								},
								{
								    xtype: 'textfield',
								    tabIndex: 26,
								    fieldLabel: '�̻���չ��',
								    value:"DCC���������޸ģ�"
								},
								{
								    xtype: 'textfield',
								    tabIndex: 28,
								    fieldLabel: '�̻���Ͻ��',
								    value:"ȱʡΪ�����У����޸�"
								},
								{
								    xtype: 'textfield',
								    tabIndex: 30,
								    fieldLabel: '�̻�Ӫ����Ա����'
								},
								{
								    xtype: 'datefield',
								    tabIndex: 32,
								    fieldLabel: '����޸�����',
								    format:'Y-m-d',
								    value:new Date()
								},
								{
								    xtype: 'combo',
								    tabIndex: 34,
								    fieldLabel: '�̻�״̬',
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
									editable:false
								},
								{
								    xtype: 'datefield',
								    tabIndex: 36,
								    fieldLabel: '�̻���������'
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
		                            fieldLabel: '�̻�����',
		                            store:new Ext.data.SimpleStore({
							        	fields:['value','label'],
							        	data: [['','��ѡ��...'],
							        	    ['0','DCC����'],
							        		['1','�½���'],
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
		                    text: '�̻����ʵ���',
		                    autoWidth: true,
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
		                			labelAlign:"right",
		                			labelPad: 0,
		                			labelWidth: 80,
		                			defaults:{
		                				width: 180
		                			},
		                			items:[
		                			       {
		   		                            	xtype: 'textfield',
		   		                            	fieldLabel: '�̻���',
		   		                            	readOnly:true,
		   		                            	value:"DCC�����������޸ģ�"
		                			       },{
		   		                            	xtype: 'textfield',
		   		                            	fieldLabel: '���ʱ��',
		   		                            	readOnly:true,
		   		                            	value:"DCC�����������޸ģ�"
		                			       },{
		   		                            	xtype: 'textfield',
		   		                            	fieldLabel: 'DCC����',
		   		                            	readOnly:true,
		   		                            	value:"DCC�����������޸ģ�"
		                			       },{
		   		                            	xtype: 'textfield',
		   		                            	fieldLabel: 'Э�����'
		                			       },{
		                			       		xtype:'textfield',
		                			       		fieldLabel:'��������',
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
		                    fieldLabel: '��ע',
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