var DataWindowMCC = function(){
	
	var win = new Ext.Window({
	    title: '����MCC�����(��<span style="color:red;">*</span>Ϊ������)',
	    width: 760,
	    frame: true,
	    autoHeight:true,
	   //modal:true,
	    resizable: false,
	    closeAction:"hide",
	    autoScroll:true,
	    bodyStyle:"{padding:10px;}",
	    buttons:[
	    	{text:"����",handler:function(){
										    		
	    	}},
	    	{text:"�ر�",handler:function(){
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
	                                    fieldLabel: '<span style="color:red;"><b>*</b></span>MCC��',
	                                    tabIndex: 1
	                                },
	                                {
	                                    xtype: 'textfield',
	                                    fieldLabel: '����',
	                                    tabIndex: 4
	                                },
	                                {
	                                    xtype: 'textfield',
	                                    fieldLabel: '��������',
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
	                                    fieldLabel: '������ҵ����',
	                                    tabIndex: 2,
						                store:new Ext.data.SimpleStore({
								        	fields:['value','label'],
								        	data: [['','��ѡ��...'],
								        		['1','���ݲ�����'],
								        		['1','������'],
								        		['1','�������ز���'],
								        		['1','������'],
								        		['1','������'],
								        		['1','һ����']
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
	                                    fieldLabel: '�����з���',
	                                    tabIndex: 5
	                                },
	                                {
	                                    xtype: 'textfield',
	                                    fieldLabel: '������������',
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
	                                    fieldLabel: '��׼����',
	                                    tabIndex: 3
	                                },
	                                {
	                                    xtype: 'textfield',
	                                    fieldLabel: '�����з�������',
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
	                                    fieldLabel: '����',
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