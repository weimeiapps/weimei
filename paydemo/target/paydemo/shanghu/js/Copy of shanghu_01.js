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
			{header: "商户MCC代码",dataIndex: 'change'},
			{header: "商户大类",dataIndex: 'pctChange'},
			{header: "商户所处地域",dataIndex: 'lastChange'},
			{header: "POS机具投入方",dataIndex: 'lastChange'},
			{header: "POS机具维护方",dataIndex: 'lastChange'},
			{header: "商户公司性质",dataIndex: 'lastChange'},
			{header: "商户经营范围",dataIndex: 'lastChange'},
			{header: "商户营业执照号",dataIndex: 'lastChange'},
			{header: "商户税务登记证号",dataIndex: 'lastChange'},
			{header: "商户组织机构代码证号",dataIndex: 'lastChange'},
			{header: "商户地址",dataIndex: 'lastChange'},
			{header: "法人姓名",dataIndex: 'lastChange'},
			{header: "法人身份证号",dataIndex: 'lastChange'},
			{header: "负责人",dataIndex: 'lastChange'},
			{header: "负责人电话",dataIndex: 'lastChange'},
			{header: "联系人",dataIndex: 'lastChange'},
			{header: "联系人电话",dataIndex: 'lastChange'},
			{header: "财务负责人",dataIndex: 'lastChange'},
			{header: "财务负责人电话",dataIndex: 'lastChange'},
			{header: "入帐账号",dataIndex: 'lastChange'},
			{header: "账户名称",dataIndex: 'lastChange'},
			{header: "开户行",dataIndex: 'lastChange'},
			{header: "商户主办行",dataIndex: 'lastChange'},
			{header: "商户主办网点",dataIndex: 'lastChange'},
			{header: "商户承办行",dataIndex: 'lastChange'},
			{header: "商户承办网点",dataIndex: 'lastChange'},
			{header: "商户营销人员姓名",dataIndex: 'lastChange'},
			{header: "商户装机日期",dataIndex: 'lastChange'},
			{header: "押金",dataIndex: 'lastChange'},
			{header: "商户状态",dataIndex: 'lastChange'},
			{header: "分期商户类型",dataIndex: 'lastChange'},
			{header: "备注",dataIndex: 'lastChange'}
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
            },
            "->",
            {
                xtype: 'button',
                text: '数据录入',
                handler:function(){
                	var win = new Ext.Window({
					    title: '数据录入',
                		layout:"fit",
					    width: 750,
					    height: 400,
					    plain:true,
					    frame: true,
					    modal:true,
					    resizable:false,
					    buttons:[
					    	{text:"保存",handler:function(){
													    		
					    	}},
					    	{text:"关闭",handler:function(){
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
						    					{ fieldLabel: '商户号' },
						    					{ fieldLabel: '商户MCC代码' },
						    					{ xtype: 'combo', fieldLabel: '商户所处地域' ,
							    					store:new Ext.data.SimpleStore({
											        	fields:['value','label'],
											        	data: [['','请选择...'],
											        		['1','湖南省市'],
											        		['2','县名称']
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
						    					{ xtype: 'combo', fieldLabel: 'POS机具维护方' ,
						    						store:new Ext.data.SimpleStore({
											        	fields:['value','label'],
											        	data: [['','请选择...'],
											        		['1','银行'],
											        		['2','通联'],
											        		['2','宇信'],
											        		['2','卡友'],
											        		['2','银博']
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
						    					{ fieldLabel: '商户经营范围' },
						    					{ fieldLabel: '商户税务登记证号' },
						    					{ fieldLabel: '法人姓名' },
						    					{ fieldLabel: '负责人' },
						    					{ fieldLabel: '联系人' },
						    					{ fieldLabel: '财务负责人' },
						    					{ fieldLabel: '入帐帐号' },
						    					{ fieldLabel: '开户行' },
							        			{ fieldLabel: '商户主办网点' },	
							        			{ fieldLabel: '商户承办行网点' },
							        			{ fieldLabel: '商户装机日期' },
							        			{ fieldLabel: '押金' },
							        			{ xtype: 'combo', fieldLabel: '分期商户类型' ,
							    					store:new Ext.data.SimpleStore({
											        	fields:['value','label'],
											        	data: [['','请选择...'],
											        		['1','汽车'],
											        		['2','装修'],
											        		['2','家电'],
											        		['2','通讯'],
											        		['2','旅游'],
											        		['2','IT数码'],
											        		['2','酒店'],
											        		['2','婚纱摄影'],
											        		['2','其他']
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
						    					{ fieldLabel: '商户名称' },
						    					{ xtype: 'combo', fieldLabel: '商户大类' ,
						    						store:new Ext.data.SimpleStore({
											        	fields:['value','label'],
											        	data: [
											        		['','请选择...'],
											        		['1','分期'],
											        		['2','普通'],
											        		['2','外卡'],
											        		['2','网银'],
											        		['2','中粮项目'],
											        		['2','EPOS'],
											        		['2','测试'],
											        		['2','分期+普通'],
											        		['2','外卡+普通'],
											        		['2','洗车+普通'],
											        		['2','财务POS'],
											        		['2','权益积分'],
											        		['2','积分兑换'],
											        		['2','签约POS'],
											        		['2','洗车点'],
											        		['2','非现场支付'],
											        		['2','其他']
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
						    					{ xtype: 'combo', fieldLabel: 'POS机具投入方' ,
						    						store:new Ext.data.SimpleStore({
											        	fields:['value','label'],
											        	data: [['','请选择...'],
											        		['1','银行'],
											        		['2','通联'],
											        		['2','宇信'],
											        		['2','卡友'],
											        		['2','银博']
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
						    					{ xtype: 'combo', fieldLabel: '商户公司性质' ,
						    						store:new Ext.data.SimpleStore({
											        	fields:['value','label'],
											        	data: [['','请选择...'],
											        		['1','个体'],
											        		['2','企业'],
											        		['2','事业']
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
						    					{ fieldLabel: '商户营业执照号' },
						    					{ fieldLabel: '商户地址' },
										        { fieldLabel: '法人身份证号' },
										        { fieldLabel: '负责人电话' },
										        { fieldLabel: '联系人电话' },
										        { fieldLabel: '财务负责人电话' },
										        { fieldLabel: '帐号名称' },
										        { fieldLabel: '商户主办行' },
										        { fieldLabel: '商户承办行' },
										        { fieldLabel: '商户营销人员姓名' },
										        { fieldLabel: '最后修改日期' },
										        { xtype: 'combo', fieldLabel: '商户状态' ,
							    					store:new Ext.data.SimpleStore({
											        	fields:['value','label'],
											        	data: [['','请选择...'],
											        		['1','正常'],
											        		['2','关闭'],
											        		['2','撤机']
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
										        { fieldLabel: '备注' }	
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