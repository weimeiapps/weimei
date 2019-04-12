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
			{header: "申请书编号",dataIndex: 'company'},
			{header: "申请日期",dataIndex: 'price'},
			{header: "客户姓名",dataIndex: 'change'},
			{header: "客户证件号码",dataIndex: 'lastChange'},
			{header: "商户名称",dataIndex: 'lastChange'},
			{header: "商户号",dataIndex: 'lastChange'},
			{header: "汽车品牌",dataIndex: 'lastChange'},
			{header: "审批日期",dataIndex: 'lastChange'},
			{header: "审批人姓名",dataIndex: 'lastChange'},
			{header: "审批环节",dataIndex: 'lastChange'}
		],
		defaults: {
	        sortable: true,
	        width: 100
	    }
	});
	
	var tbar2 = new Ext.Toolbar({ 
		items:[
			"商户编号:",
			{
				xtype:"textfield",
				width:100
			},
			'-',
            '审批环节:',
            {
                xtype: 'combo',
                width:100,
                store:new Ext.data.SimpleStore({
		        	fields:['value','label'],
		        	data: [['','请选择...'],
		        		['1','办卡中'],
		        		['2','审批中'],
		        		['3','通过'],
		        		['4','未通过']
		        	]
		        }),
				emptyText:'请选择...',
				shadow:false,
				displayField:'label',
				valueField:'value',
				mode:'local',
				triggerAction:'all',
				editable:false
            },  
			"-",
            '审批日期:',
			{	
				xtype:'datefield',
				format:'Y-m-d',
				width:80
			},
			'至',
			{	
				xtype:'datefield',
				format:'Y-m-d',
				width:80
			},
			"-",
            {
                xtype: 'button',
                text: '查询',
                handler:function(){
                }
            },
            "->",
            {
                xtype: 'button',
                text: '添加',
                handler:function(){
                	win.show();
                }
            },
			"-",
            {
                xtype: 'button',
                text: '修改',
                handler:function(){
                	var sm = grid.getSelectionModel(); 
			    	if(sm.getCount()==0){
			    		Ext.MessageBox.alert('提示','请选择要进行操作的数据！');    	
			    		return false;
			    	}
			    	if(sm.getCount()>1){
			    		Ext.MessageBox.alert('提示','每次只能修改一条数据！');    	
			    		return false;
			    	}		
			    	
			    	var record = sm.getSelected();
			    	win.show();
                }
            },
            "-",
            {
                xtype: 'button',
                text: '删除',
                handler:function(){
                	var sm = grid.getSelectionModel(); 
			    	if(sm.getCount()==0){
			    		Ext.MessageBox.alert('提示','请选择要进行操作的数据！');    	
			    		return false;
			    	}
				 	Ext.MessageBox.confirm('提示','确定删除吗？',function(param){
						if('yes' == param){	
							var records = sm.getSelections();
			    			Ext.Msg.alert("提示","删除数据成功！",function(){
			    			});
						}
				 	});
                }
            } 
		]
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
		listeners:{
			rowdblclick:function(grid, rowIndex, e){
				win.show();
			},
			render: function () {  
                 tbar2.render(this.tbar); //add one tbar        
             }  
		},
	    tbar: new Ext.Toolbar([
			'申请书号:',
            {
            	width:100,
                xtype: 'textfield'
            },
            "-",
            '客户姓名:',
            {
            	width:100,
                xtype: 'textfield'
            },
            "-",
            '客户证件号码:',
            {
            	width:150,
                xtype: 'textfield'
            },  
            "->",
            {
                xtype: 'button',
                text: '批量导入',
                handler:function(){
                	var win = new FileImportWindow();
					win.show();	
                }
            } ,  
            "-",            
            {
                xtype: 'button',
                text: '请款单',
                handler:function(){
                		
                }
            } ,  
            "-",
            {
                xtype: 'button',
                text: '通知书',
                handler:function(){
                		
                }
            }                 
		])
	});
});