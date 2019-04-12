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
			{header: "MCC码",dataIndex: 'company'},
			{header: "所属行业类型",dataIndex: 'price'},
			{header: "标准扣率",dataIndex: 'change'},
			{header: "上限",dataIndex: 'pctChange'},
			{header: "发卡行分润",dataIndex: 'lastChange'},
			{header: "发卡行分润上限",dataIndex: 'lastChange'},
			{header: "银联分润",dataIndex: 'lastChange'},
			{header: "银联分润上限",dataIndex: 'lastChange'},
			{header: "描述",dataIndex: 'lastChange'}
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
            'MCC码:',
            {
                xtype: 'textfield'
            },
            "-",
            '所属行业类型:',
            {
                xtype: 'combo',
                store:new Ext.data.SimpleStore({
		        	fields:['value','label'],
		        	data: [['','请选择...'],
		        		['1','宾馆餐饮类'],
		        		['2','超市类'],
		        		['3','汽车房地产类'],
		        		['4','批发类'],
		        		['5','公益类'],
		        		['6','一般类']
		        	]
		        }),
		        value:'',
				emptyText:'请选择...',
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