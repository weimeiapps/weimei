var DataWindowPART = function(){
	
	var win = new Ext.Window({
	    title: '����������Ϣ(��<span style="color:red;">*</span>Ϊ������)',
	    width: 400,
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
                                fieldLabel: '������Ϣ���',
								store:new Ext.data.SimpleStore({
						        	fields:['value','label'],
						        	data: [['','��ѡ��...'],
						        		['1','����������������'],
						        		['3','�̻���������'],
						        		['4','�����̻���������'],
						        		['5','�̻�״̬����'],
						        		['6','�̻���˾���ʵ�����'],
						        		['7','�޽���������ֵ']
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
								emptyText:'��ѡ��...',
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
                                fieldLabel: '������Ϣֵ'
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
                                fieldLabel: '��Ч����'
                            },
                            {
                            	id:"date_02",
                                xtype: 'datefield',
                                fieldLabel: 'ʧЧ����'
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