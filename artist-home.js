var myArtStore=Ext.create('Vistaar.data.DataStore', {
    storeId: 'myArtStore',
    fields:[ 'Art_desc', 'Art', 'Category', 'Price'],
    data: [
        { Art_desc: 'Lisa', Art: 'Monalisa',Category: 'Drawing', Price: '555' },
        { Art_desc: 'Bart', Art: "Da Vinci's Code",Category: 'Drawing', Price: '1234' },
        { Art_desc: 'Homer', Art: 'Jade island',Category: 'Drawing', Price: '1244' },
        { Art_desc: 'Marge', Art: 'Injustice',Category: 'Drawing', Price: '1254' },
        { Art_desc: 'Lisa', Art: 'Horizon zero Dawn',Category: 'Drawing', Price: '1224' },
        { Art_desc: 'Bart', Art: 'Ragnarock',Category: 'Drawing', Price: '5234' },
        { Art_desc: 'Homer', Art: 'New World',Category: 'Drawing', Price: '244' },
        { Art_desc: 'Lisa', Art: 'Guide post',Category: 'Drawing', Price: '5114' },
        { Art_desc: 'Bart', Art: 'Nen',Category: 'Drawing', Price: '534' },
        { Art_desc: 'Homer', Art: 'The Wrath of Asura',Category: 'Drawing', Price: '5244' }
    ]
});

var config = {
    title: 'My Art',
    stateful: false,
    stateId: 'grid-1',
    cls: '',
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
        type: 'checkboxmodel',
        selectionCount: false,
        clearSelection: false,
        selectionOptions: false
    },
    
    
    
    plugins: [{
        ptype: 'inlinefilterbar'
    }, {
        ptype: 'cellediting',
        clicksToEdit: 1,
        pluginid: 'celEditing'
    }],
    columns: [
        {text:'Art',dataIndex:'Art', xtype:'gridcolumn',editor:'textfield',flex:1},
        {text:'Art_desc',dataIndex:'Art_desc', xtype:'gridcolumn',editor:'textfield',flex:1},
        {text:'Category',dataIndex:'Category', xtype:'gridcolumn',editor:'textfield',flex:1},
        {text:'Price',dataIndex:'Price', xtype:'gridcolumn',editor:'textfield',flex:1},
//        {
//        text: 'Edit',
//        flex:1,
//        align: 'center',
//        renderer: function() {
//             var id = Ext.id();
//             Ext.defer(function(){
//                 new Ext.Button({
//                     text: 'Edit Item',
//                     handler : function(btn, e) {
//                         // do whatever you want here
//                     }
//                 }).render(document.body, id);
//             },50);
//             return Ext.String.format('<div id="{0}"></div>', id);
//         }
//    },
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
var artistHomeGrid = Ext.create(Vistaar.grid.DataGrid, config);