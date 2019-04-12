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
			{header: "商户号",dataIndex: 'company'},
			{header: "商户名称",dataIndex: 'price'},
			{header: "POS编号",dataIndex: 'change'},
			{header: "终端号",dataIndex: 'pctChange'},
			{header: "POS机型",dataIndex: 'lastChange'},
			{header: "POS系列号",dataIndex: 'lastChange'},
			{header: "装机地址",dataIndex: 'lastChange'},
			{header: "POS机具投入方",dataIndex: 'lastChange'},
			{header: "POS机具维护方",dataIndex: 'lastChange'},
			{header: "商户联系人",dataIndex: 'lastChange'},
			{header: "联系电话",dataIndex: 'lastChange'},
			{header: "装机日期",dataIndex: 'lastChange'},
			{header: "POS状态",dataIndex: 'lastChange'},
			{header: "入帐帐号",dataIndex: 'lastChange'},
			{header: "帐户名称",dataIndex: 'lastChange'}
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
            '商户号:',
            {
                xtype: 'textfield'
            },
            "-",
            '商户名称:',
            {
                xtype: 'textfield'
            },          
            "-",
            {
                xtype: 'button',
                text: '查询'
            }          
		])
	});
});