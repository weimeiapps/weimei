Ext.onReady(function(){
	
	var win = new DataWindow4();
	
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
			{header: "商户号",dataIndex: 'company'},
			{header: "经销商名称",dataIndex: 'price'},
			{header: "经销商所辖行",dataIndex: 'change'},
			{header: "经销商所辖网点",dataIndex: 'pctChange'},
			{header: "分期期数",dataIndex: 'lastChange'},
			{header: "持卡人扣率",dataIndex: 'lastChange'},
			{header: "商户扣率",dataIndex: 'lastChange'}
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
            '商户:',
            {
                xtype: 'textfield'
            },
            "-",
            '经销商名称:',
            {
                xtype: 'textfield'
            },
            "-",
            {
                xtype: 'button',
                text: '查询'
            },
            "->",
            {
                xtype: 'button',
                text: '数据录入',
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