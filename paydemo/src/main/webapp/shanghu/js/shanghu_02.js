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
			{header: "��������",dataIndex: 'company'},
			{header: "��������",dataIndex: 'price'},
			{header: "�ͻ�����",dataIndex: 'change'},
			{header: "�ͻ�֤������",dataIndex: 'lastChange'},
			{header: "�̻�����",dataIndex: 'lastChange'},
			{header: "�̻���",dataIndex: 'lastChange'},
			{header: "����Ʒ��",dataIndex: 'lastChange'},
			{header: "��������",dataIndex: 'lastChange'},
			{header: "����������",dataIndex: 'lastChange'},
			{header: "��������",dataIndex: 'lastChange'}
		],
		defaults: {
	        sortable: true,
	        width: 100
	    }
	});
	
	var tbar2 = new Ext.Toolbar({ 
		items:[
			"�̻����:",
			{
				xtype:"textfield",
				width:100
			},
			'-',
            '��������:',
            {
                xtype: 'combo',
                width:100,
                store:new Ext.data.SimpleStore({
		        	fields:['value','label'],
		        	data: [['','��ѡ��...'],
		        		['1','�쿨��'],
		        		['2','������'],
		        		['3','ͨ��'],
		        		['4','δͨ��']
		        	]
		        }),
				emptyText:'��ѡ��...',
				shadow:false,
				displayField:'label',
				valueField:'value',
				mode:'local',
				triggerAction:'all',
				editable:false
            },  
			"-",
            '��������:',
			{	
				xtype:'datefield',
				format:'Y-m-d',
				width:80
			},
			'��',
			{	
				xtype:'datefield',
				format:'Y-m-d',
				width:80
			},
			"-",
            {
                xtype: 'button',
                text: '��ѯ',
                handler:function(){
                }
            },
            "->",
            {
                xtype: 'button',
                text: '���',
                handler:function(){
                	win.show();
                }
            },
			"-",
            {
                xtype: 'button',
                text: '�޸�',
                handler:function(){
                	var sm = grid.getSelectionModel(); 
			    	if(sm.getCount()==0){
			    		Ext.MessageBox.alert('��ʾ','��ѡ��Ҫ���в��������ݣ�');    	
			    		return false;
			    	}
			    	if(sm.getCount()>1){
			    		Ext.MessageBox.alert('��ʾ','ÿ��ֻ���޸�һ�����ݣ�');    	
			    		return false;
			    	}		
			    	
			    	var record = sm.getSelected();
			    	win.show();
                }
            },
            "-",
            {
                xtype: 'button',
                text: 'ɾ��',
                handler:function(){
                	var sm = grid.getSelectionModel(); 
			    	if(sm.getCount()==0){
			    		Ext.MessageBox.alert('��ʾ','��ѡ��Ҫ���в��������ݣ�');    	
			    		return false;
			    	}
				 	Ext.MessageBox.confirm('��ʾ','ȷ��ɾ����',function(param){
						if('yes' == param){	
							var records = sm.getSelections();
			    			Ext.Msg.alert("��ʾ","ɾ�����ݳɹ���",function(){
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
			'�������:',
            {
            	width:100,
                xtype: 'textfield'
            },
            "-",
            '�ͻ�����:',
            {
            	width:100,
                xtype: 'textfield'
            },
            "-",
            '�ͻ�֤������:',
            {
            	width:150,
                xtype: 'textfield'
            },  
            "->",
            {
                xtype: 'button',
                text: '��������',
                handler:function(){
                	var win = new FileImportWindow();
					win.show();	
                }
            } ,  
            "-",            
            {
                xtype: 'button',
                text: '��',
                handler:function(){
                		
                }
            } ,  
            "-",
            {
                xtype: 'button',
                text: '֪ͨ��',
                handler:function(){
                		
                }
            }                 
		])
	});
});