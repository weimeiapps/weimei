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
			{header: "考核时间",dataIndex: 'checkDate'},
			{header: "二级行名称",dataIndex: 'company'},
			{header: "新增收单商户任务数",dataIndex: 'price'},
			{header: "新增分期商户任务数",dataIndex: 'change'},
			{header: "新增餐饮宾馆类任务数",dataIndex: 'pctChange'},
			{header: "新增一般类任务数",dataIndex: 'lastChange'},
			{header: "新增分期交易额任务数",dataIndex: 'lastChange'},
			{header: "新增分期中间业务收入任务数",dataIndex: 'lastChange'},
			{header: "新增收单中间业务收入任务数",dataIndex: 'lastChange'}
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
            '二级行名称:',
            {
                xtype: 'combo'
            },
            "-",
            {
                xtype: 'button',
                text: '查询'
            },
            "->",
            {
                xtype: 'button',
                text: '新增',
                handler:function(){
                	win.show();
                }
            },
			"-",
            {
                xtype: 'button',
                text: '修改'
            },
            "-",
            {
                xtype: 'button',
                text: '删除'
            }          
		])
	});
});