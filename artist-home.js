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
        mode: 'single',
        checkOnly: true,
        type: 'cellmodel',
        selectionCount: false,
        clearSelection: false,
        selectionOptions: false
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
        {text:'Price',dataIndex:'Price', xtype:'gridcolumn',editor:'textfield',flex:1},
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
   {
    text: 'Delete',
    flex:1,
    align: 'center',
    renderer: function() {
         var id = Ext.id();
         Ext.defer(function(){
             new Ext.Button({
                 text: 'Delete Item',
                 handler : function(btn, e) {
                     // do whatever you want here
                 }
             }).render(document.body, id);
         },50);
         return Ext.String.format('<div id="{0}"></div>', id);
     }
}
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
          Ext.create("Ext.Container",{layout: {type: "hbox",align: "right"},width:'80%',items:[
			  {
				  xtype:'label',
				  flex: 7,
			  },
		  {
			xtype:'button',
			text:'Save',
			margin: '5 50% 5 5',
			flex:1,
			
				
		  },
		  {
			xtype:'button',
			text:'Reset',
			margin: '5 50% 5 5',
			flex:1,
			handler: function(){artistGrid.rejectChanges();}
		  }]
		  })
    ]});