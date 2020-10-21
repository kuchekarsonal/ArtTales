var myArtStore=Ext.create('Vistaar.data.DataStore', {
    storeId: 'myArtStore',
    fields:[ 'Product_Id','Art_desc', 'Art', 'Category', 'Price'],
    data: [
        { Product_Id:'1', Art_desc: 'Lisa', Art: 'Monalisa',Category: 'Drawing', Price: '555' },
        { Product_Id:'2',Art_desc: 'Bart', Art: "Da Vinci's Code",Category: 'Drawing', Price: '1234' },
        { Product_Id:'3',Art_desc: 'Homer', Art: 'Jade island',Category: 'Drawing', Price: '1244' },
        { Product_Id:'4',Art_desc: 'Marge', Art: 'Injustice',Category: 'Drawing', Price: '1254' },
        { Product_Id:'5',Art_desc: 'Lisa', Art: 'Horizon zero Dawn',Category: 'Drawing', Price: '1224' },
        { Product_Id:'6',Art_desc: 'Bart', Art: 'Ragnarock',Category: 'Drawing', Price: '5234' },
        { Product_Id:'7',Art_desc: 'Homer', Art: 'New World',Category: 'Drawing', Price: '244' },
        { Product_Id:'8',Art_desc: 'Lisa', Art: 'Guide post',Category: 'Drawing', Price: '5114' },
        { Product_Id:'9',Art_desc: 'Bart', Art: 'Nen',Category: 'Drawing', Price: '534' },
        { Product_Id:'10',Art_desc: 'Homer', Art: 'The Wrath of Asura',Category: 'Drawing', Price: '5244' }
    ],
	paging:'local',
		pageSize: 5,
});

var popupFormConfig={
	//xtype:'Ext.window.Window',
    title: 'Add Art',
	draggable: false,
    resizable: false,
    height: 400,
    width: 700,
    modal:true,
    layout: {type:'vbox', align:'center'},
    items: [  
        {
				xtype:'label',
				html:'<p><h2>Add Art Details</h2></p>'
			},{
				xtype:'form',
				margin : '10% 5 5 5',
				//title: 'Add Art',
				bodyPadding: 5,
				width: '80%',
				
				url: 'submitURl',
				
				layout: {type:'vbox', align: "center",},
				
				// The fields
				
				items: [{
					fieldLabel: 'Art Name',
					name: 'Art Name',
					id: "artname",
					xtype: 'textfield',
					width: '80%',
					allowBlank: false
				},{
					fieldLabel: 'Art Description',
					name: 'Art Description',
					id: "artdesc",
					xtype: 'textarea',
					width: '80%',
					allowBlank: false
				},{
					fieldLabel: 'Art Category',
					xtype: 'combobox',
					width: '80%',
					editable: false,
					store: Ext.create('Ext.data.Store', {
						 fields: ['abbr', 'name'],
						 data: [{
							'abbr': 'Drawing',
							'name': 'Drawing'
						 },{
							'abbr': 'Quilling',
							'name': 'Quilling'
						 }]
					  }),
					  valueField: 'abbr',
					  displayField: 'name',
					name: 'Art Category',
					id: "artcategory",
					allowBlank: false
				},{
					fieldLabel: 'Price',
					name: 'Price',
					width: '80%',
					id: "price",
					xtype: 'numberfield',
					allowBlank: false
				}],

				// Reset and Submit buttons
				buttons: [{
					text: 'Reset',
					handler: function() {
						this.up('form').getForm().reset();
					}
				}, {
					text: 'Submit',
					formBind: true,
					disabled: true,
					handler: function() {
						var form = this.up('form').getForm();
						if (form.isValid()) {
							var artname = Ext.getCmp("artname").getValue();
                var artdesc = Ext.getCmp("artdesc").getValue();
                var artcategory = Ext.getCmp("artcategory").getValue();
                var price = Ext.getCmp("price").getValue();
				//todo BACKEND
							artistGrid.addRecords({
								  Art: artname,
								  Art_desc: artdesc,
								  Category: artcategory,
								  Price: price,
								  },0);
						}
					}
				}],
			}
    ]
};
var config = {
    
    filterOnChange: true,
    sortOnChange: true,
    //forceFit:true,
    width: '80%',
    defaultColumnConfig: {
        sortable: true
    },
    store: Ext.data.StoreManager.lookup('myArtStore'),
    selModel: {
        mode: 'multi',
        checkOnly: true,
        type: 'checkidmodel',
        selectionCount: false,
        clearSelection: false,
        selectionOptions: false
    },
    style: {
          background: "white",
          "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
        },
    
    
    plugins: [{
        ptype: 'inlinefilterbar'
    }, {
        ptype: 'cellediting',
        clicksToEdit: 2,
        pluginid: 'celEditing'
    }],
	pagingConfig: {
			pageSize: 5,
			paging: true,
			serverSidePaging: false,
            pageSizeCombo: false
		},
    columns: [
        {text:'Product_Id',dataIndex:'Product_Id', xtype:'gridcolumn',hidden: true},
        {text:'Art',dataIndex:'Art', xtype:'gridcolumn',editor:'textfield',flex:1},
        {text:'Art_desc',dataIndex:'Art_desc', xtype:'gridcolumn',editor:'textfield',flex:1},
        {text:'Category',dataIndex:'Category', xtype:'gridcolumn',editor:'textfield',flex:1},
        {
        text: 'Price', 
        dataIndex: 'Price', 
        xtype: 'numbercolumn', 
        flex: 1,
        renderer: function (value) {
          return "₹"+value;
        }
      },
//       {
//       text: 'Edit',
//       flex:1,
//       align: 'center',
 //      renderer: function() {
//            var id = Ext.id();
//            Ext.defer(function(){
//                new Ext.Button({
//                    text: 'Edit Item',
//                    handler : function(btn, e) {
//                        // do whatever you want here
//                    }
 //               }).render(document.body, id);
 //           },50);
 //           return Ext.String.format('<div id="{0}"></div>', id);
  //      }
//   },
//    {
//     text: 'Delete',
//     flex:1,
//     align: 'center',
//     renderer: function() {
//          var id = Ext.id();
//          Ext.defer(function(){
//              new Ext.Button({
//                  text: 'Delete Item',
//                  handler : function(btn, e) {
//                      // do whatever you want here
//                  }
//              }).render(document.body, id);
//          },50);
//          return Ext.String.format('<div id="{0}"></div>', id);
//      }
// }
    ]
};
	
var artistGrid = Ext.create(Vistaar.grid.DataGrid, config);

var artistHomeGrid = Ext.create("Ext.Container", {
    id: "artistGrid",
    width: "auto",
    layout: {
      type: "vbox",
      align: "center",
    },
    items: [
        {
            xtype: "label",
            html:
              "<h1>My Art</h1>",
          },
          artistGrid,
          Ext.create("Ext.Container",{layout: "hbox",width:'80%',items:[
			  {
				  xtype:'label',
				  flex: 6,
			  },
			  {
					xtype:'button',
					text:'Add Art',
					margin: '10 50% 5 5',
					flex:1,	
					handler:function(){
						var addArtPopup=Ext.create('Ext.window.Window', popupFormConfig);
						addArtPopup.show();}
			  },
		  {
			xtype:'button',
			text:'Save',
			margin: '10 50% 5 5',
			flex:1,	
          },
          {
            xtype:'button',
			text:'Delete',
			margin: '10 50% 5 5',
			flex:1,	
          },
		  {
			xtype:'button',
			text:'Reset',
			margin: '10 50% 5 5',
			flex:1,
			handler: function(){artistGrid.rejectChanges();}
		  }]
		  })
    ]});