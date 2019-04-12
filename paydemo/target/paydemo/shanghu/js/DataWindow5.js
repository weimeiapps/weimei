var DataWindow4 = function(){
	
	var win = new Ext.Window({
	    title: '装修分期商户信息录入(带<span style="color:red;">*</span>为必填项)',
	    width: 760,
	    frame: true,
	    autoHeight:true,
	   // modal:true,
	    resizable: false,
	    closeAction:"hide",
	    autoScroll:true,
	    bodyStyle:"{padding:5px;}",
	    buttons:[
	    	{text:"保存",handler:function(){
										    		
	    	}},
	    	{text:"关闭",handler:function(){
				win.hide();					    		
	    	}}
	    ],
	    items:[
			{
	            xtype: 'fieldset',
	            title: '录入信息',
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
	                                    fieldLabel: '<span style="color:red;"><b>*</b></span>商户号',
	                                    tabIndex: 1
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
	                            labelWidth: 80,
	                            items: [
	                                {
	                                    xtype: 'combo',
	                                    fieldLabel: '分期期数',
	                                    tabIndex: 2
	                                }
	                            ]
	                        },
	                        {
	                            xtype: 'form',
	                            columnWidth: 0.33,
	                            defaults: '{width:120}',
	                            labelAlign: 'right',
	                            labelPad: 0,
	                            labelWidth: 80,
	                            items: [
	                                {
	                                    xtype: 'textfield',
	                                    fieldLabel: '',
	                                    tabIndex: 3,
	                                    hidden: true,
	                                    hideMode: 'visibility',
	                                    hideLabel: true
	                                }
	                            ]
	                        }
	                    ]
	                }
	            ]
	        },
	        {
	            xtype: 'fieldset',
	            title: '反显信息',
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
	                                    fieldLabel: '经商户名称',
	                                    readOnly: true,
	                                    value: '根据商户台帐信息反显'
	                                },
	                                {
	                                    xtype: 'textfield',
	                                    fieldLabel: '持卡人扣率',
	                                    value: '根据商户台帐信息反显'
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
	                            labelWidth: 80,
	                            items: [
	                                {
	                                    xtype: 'textfield',
	                                    fieldLabel: '所辖行',
	                                    readOnly: true,
	                                    value: '根据商户台帐信息反显'
	                                },
	                                {
	                                    xtype: 'textfield',
	                                    fieldLabel: '商户扣率',
	                                    value: '根据商户台帐信息反显'
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
	                                    fieldLabel: '所辖网点',
	                                    readOnly: true,
	                                    value: '根据商户台帐信息反显'
	                                },
	                                {
	                                    xtype: 'textfield',
	                                    fieldLabel: '分期类型',
	                                    value: '根据商户台帐信息反显'
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