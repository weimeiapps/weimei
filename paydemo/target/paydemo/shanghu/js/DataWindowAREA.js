var DataWindowAREA = function(){
	
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
                        defaults:{
                        	width:200
                        },
                        items: [
                            {
                                xtype: 'combo',
                                fieldLabel: '����������'
                            },     
                            {
                                xtype: 'combo',
                                fieldLabel: '��Ӧ�м�����'
                            }, 
                            {
                                xtype: 'combo',
                                fieldLabel: '��Ͻ��������'
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