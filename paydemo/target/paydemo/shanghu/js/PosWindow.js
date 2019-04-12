var PosWindow = function(){
	
	 // sample static data for the store
    var myData = {
    	datas:[
    	 {shopNO:'HN00000001',shopName:"XXXX�̻�",posNo:"",endNO:"",endType:''}         
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
		{header: "POS���",dataIndex: 'posNo', 
			editor:new Ext.form.TextField()},	
	    {header: "�ն˺�",dataIndex: 'endNO', 
			editor:new Ext.form.TextField()},
		{header: "POS����",dataIndex: 'endType', 
			editor:new Ext.form.TextField()},					
		{header: "POSϵ�к�",dataIndex: 'endTypeNO', editor:new Ext.form.TextField()},
		{header: "POS����Ͷ�뷽",dataIndex: 'inputMode', 
			editor:new Ext.form.ComboBox({
				store:new Ext.data.SimpleStore({
					fields:['value','label'],
		        	data: [['','��ѡ��...'],
		        		['1','����'],
		        		['2','ͨ��'],
		        		['2','����'],
		        		['2','����'],
		        		['2','����']
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
			})},		
		{header: "POS����ά����",dataIndex: 'outputMode', 
			editor:new Ext.form.ComboBox({
				store:new Ext.data.SimpleStore({
					fields:['value','label'],
		        	data: [['','��ѡ��...'],
		        		['1','����'],
		        		['2','ͨ��'],
		        		['2','����'],
		        		['2','����'],
		        		['2','����']
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
			})
		}	,
		{header: "װ����ַ",dataIndex: 'address', editor:new Ext.form.TextField()},
		{header: "��ϵ��",dataIndex: 'linkman', editor:new Ext.form.TextField()},
		{header: "��ϵ�绰",dataIndex: 'linkTel', editor:new Ext.form.TextField()},
		{header: "װ������",dataIndex: 'zhuanJiDate', editor:new Ext.form.DateField()},
		{header: "POS״̬",dataIndex: 'posSate', editor:new Ext.form.ComboBox({
				store:new Ext.data.SimpleStore({
					fields:['value','label'],
		        	data: [['','��ѡ��...'],
		        		['1','����'],
		        		['2','�ر�'],
		        		['3','����']
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
			})
		},
		{header: "�����ʺ�",dataIndex: 'inputAccountNO',hidden:true},
		{header: "�ʻ�����",dataIndex: 'accountName',hidden:true},		
		{header: "������",dataIndex: 'kuaiHuHuang',hidden:true},	
		{header: "��������",dataIndex: 'channelDate', editor:new Ext.form.DateField()}
	]);
	
	//������
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
                text:'���',
                tooltip:'���һ��',
                handler:function(){
					var aRow = new AddRow({
			            shopNO: '�̻����',
			            shopName:'�̻�����',
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
                text:'ɾ��',
                tooltip:'ɾ��ѡ�еļ�¼',
                handler:function(){
            		store.remove(store.getAt(0));
            	}
            }
       ]
    });
    
	var win = new Ext.Window({
		title:"POS̨��¼��",
		layout:"fit",
		width:900,
		autoHeight:true,
		closeAction:"hide",
		items:[
		   grid    
		],
		buttons:[
		   {text:"ȷ��"},
		   {text:"ȡ��",handler:function(){
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