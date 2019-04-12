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
			{header: "����ʱ��",dataIndex: 'checkDate'},
			{header: "����������",dataIndex: 'company'},
			{header: "�����յ��̻�������",dataIndex: 'price'},
			{header: "���������̻�������",dataIndex: 'change'},
			{header: "��������������������",dataIndex: 'pctChange'},
			{header: "����һ����������",dataIndex: 'lastChange'},
			{header: "�������ڽ��׶�������",dataIndex: 'lastChange'},
			{header: "���������м�ҵ������������",dataIndex: 'lastChange'},
			{header: "�����յ��м�ҵ������������",dataIndex: 'lastChange'}
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
            '����������:',
            {
                xtype: 'combo'
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