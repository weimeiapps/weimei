Ext.onReady(function(){
	
	 // sample static data for the store
    var myData = {datas:[
    	{company:'',price:"",change:"",pctChange:"",lastChange:''},           
    	{company:'',price:"",change:"",pctChange:"",lastChange:''},           
    	{company:'',price:"",change:"",pctChange:"",lastChange:''},           
    	{company:'',price:"",change:"",pctChange:"",lastChange:''},           
    	{company:'',price:"",change:"",pctChange:"",lastChange:''},           
    	{company:'',price:"",change:"",pctChange:"",lastChange:''},           
    	{company:'',price:"",change:"",pctChange:"",lastChange:''},           
    	{company:'',price:"",change:"",pctChange:"",lastChange:''},           
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   ,   
    	{company:'',price:"",change:"",pctChange:"",lastChange:''}   
	   ],totalCount:"29"
    };
    
    var store = new Ext.data.JsonStore({
    	data:myData,
    	root:"datas",
    	totalProperty:"totalCount",
        fields: [
           {name: 'company'},
           {name: 'price'},
           {name: 'change'},
           {name: 'pctChange'},
           {name: 'lastChange'}
        ]
    });
	
	var columns = new Ext.grid.ColumnModel({
		columns: [
			new Ext.grid.RowNumberer(),
			new Ext.grid.CheckboxSelectionModel(),
			{header: "�̻���",dataIndex: 'company'},
			{header: "�̻�����",dataIndex: 'price'},
			{header: "�̻�MCC����",dataIndex: 'change'},
			{header: "�̻�����",dataIndex: 'pctChange'},
			{header: "�̻���������",dataIndex: 'lastChange'},
			{header: "POS����Ͷ�뷽",dataIndex: 'lastChange'},
			{header: "POS����ά����",dataIndex: 'lastChange'},
			{header: "�̻���˾����",dataIndex: 'lastChange'},
			{header: "�̻���Ӫ��Χ",dataIndex: 'lastChange'},
			{header: "�̻�Ӫҵִ�պ�",dataIndex: 'lastChange'},
			{header: "�̻�˰��Ǽ�֤��",dataIndex: 'lastChange'},
			{header: "�̻���֯��������֤��",dataIndex: 'lastChange'},
			{header: "�̻���ַ",dataIndex: 'lastChange'},
			{header: "��������",dataIndex: 'lastChange'},
			{header: "�������֤��",dataIndex: 'lastChange'},
			{header: "������",dataIndex: 'lastChange'},
			{header: "�����˵绰",dataIndex: 'lastChange'},
			{header: "��ϵ��",dataIndex: 'lastChange'},
			{header: "��ϵ�˵绰",dataIndex: 'lastChange'},
			{header: "��������",dataIndex: 'lastChange'},
			{header: "�������˵绰",dataIndex: 'lastChange'},
			{header: "�����˺�",dataIndex: 'lastChange'},
			{header: "�˻�����",dataIndex: 'lastChange'},
			{header: "������",dataIndex: 'lastChange'},
			{header: "�̻�������",dataIndex: 'lastChange'},
			{header: "�̻���������",dataIndex: 'lastChange'},
			{header: "�̻��а���",dataIndex: 'lastChange'},
			{header: "�̻��а�����",dataIndex: 'lastChange'},
			{header: "�̻�Ӫ����Ա����",dataIndex: 'lastChange'},
			{header: "�̻�װ������",dataIndex: 'lastChange'},
			{header: "Ѻ��",dataIndex: 'lastChange'},
			{header: "�̻�״̬",dataIndex: 'lastChange'},
			{header: "�����̻�����",dataIndex: 'lastChange'},
			{header: "��ע",dataIndex: 'lastChange'}
		],
		defaults: {
	        sortable: true,
	        width: 100
	    }
	});
	
	var grid = new Ext.grid.GridPanel({
		renderTo:"mydiv",
	    height: 500,
	    cm : columns,
		loadMask: true,
		width:1000,
		store : store,
		columnLines: true,
		stripeRows : true,
		viewConfig : {
			//autoFill: true
		},	    
	    bbar : new Ext.PagingToolbar({
			store : store,
			displayInfo : true
		}),
		sm : new Ext.grid.CheckboxSelectionModel(),
	    tbar: new Ext.Toolbar([
            '�̻���:',
            {
                xtype: 'textfield'
            },
            "-",
            '�̻�����:',
            {
                xtype: 'textfield'
            },
            "-",
            {
                xtype: 'button',
                text: '��ѯ'
            },
            "->",
            {
                xtype: 'button',
                text: '����¼��',
                handler:function(){
                	var win = new Ext.Window({
					    title: '����¼��',
                		layout:"fit",
					    width: 750,
					    height: 400,
					    plain:true,
					    frame: true,
					    modal:true,
					    resizable:false,
					    buttons:[
					    	{text:"����",handler:function(){
													    		
					    	}},
					    	{text:"�ر�",handler:function(){
								win.close();					    		
					    	}}
					    ],
					    items:[
					    	{
							    	xtype:"panel",
							    	frame:true,
							    	border:false,
					    			autoScroll:true,
									layout:"column",
									items:[
										{
							                columnWidth:.5,
							                layout: 'form',	
							                labelPad:0,
						        			labelWidth:110,
							                labelAlign:'right',
							                defaultType:'textfield',
							                defaults:{
							                	width:200
							                },
						    				items:[		
						    					{ fieldLabel: '�̻���' },
						    					{ fieldLabel: '�̻�MCC����' },
						    					{ xtype: 'combo', fieldLabel: '�̻���������' ,
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
						    					{ xtype: 'combo', fieldLabel: 'POS����ά����' ,
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
						    					{ fieldLabel: '�̻���Ӫ��Χ' },
						    					{ fieldLabel: '�̻�˰��Ǽ�֤��' },
						    					{ fieldLabel: '��������' },
						    					{ fieldLabel: '������' },
						    					{ fieldLabel: '��ϵ��' },
						    					{ fieldLabel: '��������' },
						    					{ fieldLabel: '�����ʺ�' },
						    					{ fieldLabel: '������' },
							        			{ fieldLabel: '�̻���������' },	
							        			{ fieldLabel: '�̻��а�������' },
							        			{ fieldLabel: '�̻�װ������' },
							        			{ fieldLabel: 'Ѻ��' },
							        			{ xtype: 'combo', fieldLabel: '�����̻�����' ,
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
											    }
						    				]
										},
										{
							                columnWidth:.5,
							                layout: 'form',	
							                labelPad:0,
						        			labelWidth:110,
							                labelAlign:'right',
							                defaultType:'textfield',
							                defaults:{
							                	width:150
							                },
						    				items:[		
						    					{ fieldLabel: '�̻�����' },
						    					{ xtype: 'combo', fieldLabel: '�̻�����' ,
						    						store:new Ext.data.SimpleStore({
											        	fields:['value','label'],
											        	data: [
											        		['','��ѡ��...'],
											        		['1','����'],
											        		['2','��ͨ'],
											        		['2','�⿨'],
											        		['2','����'],
											        		['2','������Ŀ'],
											        		['2','EPOS'],
											        		['2','����'],
											        		['2','����+��ͨ'],
											        		['2','�⿨+��ͨ'],
											        		['2','ϴ��+��ͨ'],
											        		['2','����POS'],
											        		['2','Ȩ�����'],
											        		['2','���ֶһ�'],
											        		['2','ǩԼPOS'],
											        		['2','ϴ����'],
											        		['2','���ֳ�֧��'],
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
						    					{ xtype: 'combo', fieldLabel: 'POS����Ͷ�뷽' ,
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
						    					{ xtype: 'combo', fieldLabel: '�̻���˾����' ,
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
						    					{ fieldLabel: '�̻�Ӫҵִ�պ�' },
						    					{ fieldLabel: '�̻���ַ' },
										        { fieldLabel: '�������֤��' },
										        { fieldLabel: '�����˵绰' },
										        { fieldLabel: '��ϵ�˵绰' },
										        { fieldLabel: '�������˵绰' },
										        { fieldLabel: '�ʺ�����' },
										        { fieldLabel: '�̻�������' },
										        { fieldLabel: '�̻��а���' },
										        { fieldLabel: '�̻�Ӫ����Ա����' },
										        { fieldLabel: '����޸�����' },
										        { xtype: 'combo', fieldLabel: '�̻�״̬' ,
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
										        { fieldLabel: '��ע' }	
						    				]
										}
									]
							    }
							]							    
                	});
                	win.show();
                }
            },
			"-",
            {
                xtype: 'button',
                text: '�޸�'
            },
            "-",
            {
                xtype: 'button',
                text: 'ɾ��'
            }
		])
	});
});