
Ext.onReady(function(){
	
	var win = new DataWindow2();
	 // sample static data for the store
    var myData = {datas:[
    	{company:'',price:"",change:"",pctChange:"",lastChange:''},           
    	{company:'',price:"",change:"",pctChange:"",lastChange:''},           
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
			{header: "商户号",dataIndex: 'clientNumber'},
			{header: "申请日期",dataIndex: 'price'},
			{header: "交易单号",dataIndex: 'orderId'},
			{header: "交易状态",dataIndex: 'status'},
			{header: "验证文本",dataIndex: 'verifyText'},
			{header: "是否有错误",dataIndex: 'error'}
		],
		defaults: {
	        sortable: true,
	        width: 100
	    }
	});
	
	
	var tbar2 = new Ext.Toolbar({ 
		items:[
			"商户号:",
			{
				id:"clientNumber",
				name:"clientNumber",
				xtype:"textfield",
				width:100
			},
			'-',
            '交易单号:',
            {
            	id:"orderId",
            	name:"orderId",
                xtype: 'textfield',
                width:150
            },  
			"-",
            {
                xtype: 'button',
                text: '查询',
                handler: function () {

                    //store.load();

                    $(".x-grid3-cell-inner x-grid3-col-2").text(10000);

                    var MyRecord = Ext.data.Record.create([
                        { company: '22', price: "33", change: "33", pctChange: "44", lastChange: '22' },        
                        { company: '11', price: "11", change: "11", pctChange: "11", lastChange: '11' }        
                    ]);
                    //store.load(MyRecord);

               // 	JSLoader.load({    
     		   //		 scripts: [basePath+"JQuery.md5.js"]   
                // });
                	//alert(hex_md5(Ext.get("clientNumber").getValue()));
                	//alert($("#clientNumber").val());

                   //alert(33333);
                   //alert(Ext.get("clientNumber").getValue());
                   //alert(Ext.get("orderId").getValue());
                 
                }
            },
           
		]
	});
	
	//表格显示
	
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
		listeners:{			
			render: function () {  
                 tbar2.render(this.tbar); //add one tbar        
             }  
		},
	    tbar: new Ext.Toolbar([
               
		])
		
    });


});