var DataWindowBIN = function(){
	
	var win = new Ext.Window({
	    title: '������BIN��Ϣ(��<span style="color:red;">*</span>Ϊ������)',
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
                                xtype: 'textfield',
                                fieldLabel: '<span style="color:red;">*</span>��BIN'
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: '<span style="color:red;">*</span>����'
                            } ,
                            {
                                xtype: 'textfield',
                                fieldLabel: '������'
                            }  ,
                            {
                                xtype: 'combo',
                                fieldLabel: '������',
								store:new Ext.data.SimpleStore({
						        	fields:['value','label'],
						        	data: [['','��ѡ��...'],
						        		['1','���н�ǿ�'],
						        		['2','���д��ǿ�'],
						        		['3','���н�ǿ�'],
						        		['4','���д��ǿ�']
						        	]
						        }),
								emptyText:'��ѡ��...',
								shadow:false,
								displayField:'label',
								valueField:'value',
								mode:'local',
								triggerAction:'all',
								editable:false	,
								value:'1'
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