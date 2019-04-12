Ext.onReady(function(){
	
	var win = new DataWindowMCC();
	
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
			{header: "MCC��",dataIndex: 'company'},
			{header: "������ҵ����",dataIndex: 'price'},
			{header: "��׼����",dataIndex: 'change'},
			{header: "����",dataIndex: 'pctChange'},
			{header: "�����з���",dataIndex: 'lastChange'},
			{header: "�����з�������",dataIndex: 'lastChange'},
			{header: "��������",dataIndex: 'lastChange'},
			{header: "������������",dataIndex: 'lastChange'},
			{header: "����",dataIndex: 'lastChange'}
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
		width:1200,
		store : store,
		columnLines: true,
		stripeRows : true,
		viewConfig : {
			autoFill: true
		},	    
	    bbar : new Ext.PagingToolbar({
			store : store,
			displayInfo : true
		}),
		sm : new Ext.grid.CheckboxSelectionModel(),
	    tbar: new Ext.Toolbar([
            'MCC��:',
            {
                xtype: 'textfield'
            },
            "-",
            '������ҵ����:',
            {
                xtype: 'combo',
                store:new Ext.data.SimpleStore({
		        	fields:['value','label'],
		        	data: [['','��ѡ��...'],
		        		['1','���ݲ�����'],
		        		['2','������'],
		        		['3','�������ز���'],
		        		['4','������'],
		        		['5','������'],
		        		['6','һ����']
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
            "-",
            {
                xtype: 'button',
                text: '��ѯ'
            },
            "->",
            {
                xtype: 'button',
                text: '����',
                handler:function(){
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