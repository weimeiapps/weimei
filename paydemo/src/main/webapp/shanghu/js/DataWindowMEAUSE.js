var DataWindowMCC = function(){
	
	var win = new Ext.Window({
	    title: '�����������������ָ��(��<span style="color:red;">*</span>Ϊ������)',
	    width: 460,
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
                        labelWidth: 180,
                        defaults:{
                        	width:200
                        },
                        items: [
                            {
                                xtype: 'datefield',
                                fieldLabel: '����ʱ��'
                            },     
                            {
                                xtype: 'combo',
                                fieldLabel: '����������'
                            },     
                            {
                                xtype: 'textfield',
                                fieldLabel: '�����յ��̻�������'
                            }, 
                            {
                                xtype: 'textfield',
                                fieldLabel: '���������̻�������'
                            },   
                            {
                                xtype: 'textfield',
                                fieldLabel: '��������������������'
                            },   
                            {
                                xtype: 'textfield',
                                fieldLabel: '����һ����������'
                            },   
                            {
                                xtype: 'textfield',
                                fieldLabel: '�������ڽ��׶�������'
                            },   
                            {
                                xtype: 'textfield',
                                fieldLabel: '���������м�ҵ������������'
                            },  	
                            {
                                xtype: 'textfield',
                                fieldLabel: '�����յ��м�ҵ������������'
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