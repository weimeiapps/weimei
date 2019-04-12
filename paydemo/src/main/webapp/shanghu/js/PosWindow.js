var PosWindow = function(){
	
	 // sample static data for the store
    var myData = {
    	datas:[
    	 {shopNO:'HN00000001',shopName:"XXXX商户",posNo:"",endNO:"",endType:''}         
	    ],
	    totalCount:"1" 
    };
    
    var store = new Ext.data.JsonStore({
    	data:myData,
    	root:"datas",
    	totalProperty:"totalCount",
        fields: [
           {name: 'shopNO'},
           {name: 'shopName'},
           {name: 'posNo'},
           {name: 'endNO'},
           {name: 'endType'}
        ]
    });
	
	var columModel = new Ext.grid.ColumnModel([
		new Ext.grid.CheckboxSelectionModel(),
		{header: "POS编号",dataIndex: 'posNo', 
			editor:new Ext.form.TextField()},	
	    {header: "终端号",dataIndex: 'endNO', 
			editor:new Ext.form.TextField()},
		{header: "POS机型",dataIndex: 'endType', 
			editor:new Ext.form.TextField()},					
		{header: "POS系列号",dataIndex: 'endTypeNO', editor:new Ext.form.TextField()},
		{header: "POS机具投入方",dataIndex: 'inputMode', 
			editor:new Ext.form.ComboBox({
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
			})},		
		{header: "POS机具维护方",dataIndex: 'outputMode', 
			editor:new Ext.form.ComboBox({
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
			})
		}	,
		{header: "装机地址",dataIndex: 'address', editor:new Ext.form.TextField()},
		{header: "联系人",dataIndex: 'linkman', editor:new Ext.form.TextField()},
		{header: "联系电话",dataIndex: 'linkTel', editor:new Ext.form.TextField()},
		{header: "装机日期",dataIndex: 'zhuanJiDate', editor:new Ext.form.DateField()},
		{header: "POS状态",dataIndex: 'posSate', editor:new Ext.form.ComboBox({
				store:new Ext.data.SimpleStore({
					fields:['value','label'],
		        	data: [['','请选择...'],
		        		['1','正常'],
		        		['2','关闭'],
		        		['3','撤机']
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
			})
		},
		{header: "入帐帐号",dataIndex: 'inputAccountNO',hidden:true},
		{header: "帐户名称",dataIndex: 'accountName',hidden:true},		
		{header: "开户行",dataIndex: 'kuaiHuHuang',hidden:true},	
		{header: "撤机日期",dataIndex: 'channelDate', editor:new Ext.form.DateField()}
	]);
	
	//新增行
	var AddRow = Ext.data.Record.create([
           {name: 'shopNO', type: 'string'},
           {name: 'shopName', type: 'string'},
           {name: 'posNo', type: 'string'},
           {name: 'endNO', type: 'string'},
           {name: 'endType', type: 'string'},
           {name: 'endTypeNO', type: 'string'},
           {name: 'inputMode', type: 'string'},
           {name: 'outputMode', type: 'string'},
           {name: 'address', type: 'string'},
           {name: 'linkman', type: 'string'},
           {name: 'linkTel', type: 'string'},
           {name: 'zhuanJiDate', type: 'string'},
           {name: 'posSate', type: 'string'},
           {name: 'inputAccountNO', type: 'string'},
           {name: 'accountName', type: 'string'},
           {name: 'kuaiHuHuang', type: 'string'},
           {name: 'channelDate', type: 'string'}
    ]);
	
	var grid = new Ext.grid.EditorGridPanel({
        store: store,
        cm: columModel,
        sm: new Ext.grid.CheckboxSelectionModel(),
        loadMask: true,
        stripeRows:true,
        border:false,
        deferHeight:true,
        enableColumnHide:true,
        frame:false,
        columnLines: true,
        clicksToEdit:1,
        height:200,
		tbar:[
			{
                text:'添加',
                tooltip:'添加一行',
                handler:function(){
					var aRow = new AddRow({
			            shopNO: '商户编号',
			            shopName:'商户名称',
			            posNo:'',
			            endNO:'',
			            endType:'',
			            endTypeNO:'',
			            inputMode:'',
			            outputMode:'',
			            address:'',
			            linkman:'',
			            linkTel:'',
			            zhuanJiDate:'',
			            posSate:'',
			            inputAccountNO:'',
			            accountName:'',
			            kuaiHuHuang:'',
			            channelDate:''
			        });
			        
			        grid.stopEditing();
			        store.insert(0, aRow);
			        grid.getView().refresh();
			        grid.startEditing(0, 1);
				}
            },
            {
                text:'删除',
                tooltip:'删除选中的记录',
                handler:function(){
            		store.remove(store.getAt(0));
            	}
            }
       ]
    });
    
	var win = new Ext.Window({
		title:"POS台帐录入",
		layout:"fit",
		width:900,
		autoHeight:true,
		closeAction:"hide",
		items:[
		   grid    
		],
		buttons:[
		   {text:"确定"},
		   {text:"取消",handler:function(){
			   win.hide();
		   }}
		]
	});
	
	return {
		getWindow:function(){
			return win;
		},
		show:function(){
			return win.show();
		}
	};
};