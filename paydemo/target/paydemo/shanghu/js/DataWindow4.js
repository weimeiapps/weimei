var DataWindow4 = function(){
	
	var win = new Ext.Window({
	    title: '���������̻�����¼��(��<span style="color:red;">*</span>Ϊ������)',
	    width: 760,
	    frame: true,
	    autoHeight:true,
	   // modal:true,
	    resizable: false,
	    closeAction:"hide",
	    autoScroll:true,
	    bodyStyle:"{padding:5px;}",
	    buttons:[
	    	{text:"����",handler:function(){
										    		
	    	}},
	    	{text:"�ر�",handler:function(){
				win.hide();					    		
	    	}}
	    ],
	    items:[
{
            xtype: 'fieldset',
            title: '¼����Ϣ',
            hideBorders: true,
            items: [
                {
                    xtype: 'panel',
                    layout: 'column',
                    hideBorders: true,
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
                            labelWidth: 80,
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '<span style="color:red;"><b>*</b></span>�̻���',
                                    tabIndex: 1
                                },
                                {
                                    xtype: 'combo',
                                    fieldLabel: '��������',
                                    tabIndex: 4
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            columnWidth: 0.34,
                            defaults: '{width:120px}',
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 80,
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '����Ʒ��',
                                    tabIndex: 2
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            columnWidth: 0.33,
                            defaults: {
                                width: 120
                            },
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 80,
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '�����ͺ�',
                                    tabIndex: 3
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
            hideBorders: true,
            items: [
                {
                    xtype: 'panel',
                    layout: 'column',
                    hideBorders: true,
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
                            labelWidth: 80,
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '���̻�����',
                                    readOnly: true,
                                    value: '�����̻�̨����Ϣ����'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '�ֿ��˿���',
                                    value: '�����̻�̨����Ϣ����'
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            columnWidth: 0.34,
                            defaults: '{width:120px}',
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 80,
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '��Ͻ��',
                                    readOnly: true,
                                    value: '�����̻�̨����Ϣ����'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '�̻�����',
                                    value: '�����̻�̨����Ϣ����'
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            columnWidth: 0.33,
                            defaults: {
                                width: 120
                            },
                            labelAlign: 'right',
                            labelPad: 0,
                            labelWidth: 80,
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '��Ͻ����',
                                    readOnly: true,
                                    value: '�����̻�̨����Ϣ����'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '��������',
                                    value: '�����̻�̨����Ϣ����'
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