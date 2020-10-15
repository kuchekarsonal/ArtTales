

var myhomeGrid = Ext.create('Ext.panel.Panel', {
    title: 'Table Layout',
    id  : "tablePic",
    width: "100%",
    margin : 10,
    scrollable :true,
    layout: {
        type: 'table',
        // The total column count must be specified here
        columns: 3
    },
    defaults: {
        // applied to each contained panel
        bodyStyle: 'padding:20px'
    },
    items: [{
        flex:1,
        xtype: "image",
        html: 'Cell 1 content',
        width: 250,
        heigth: 250,
        src : "./project/images/1.jpg"
    },{
        flex:1,
        xtype: "image",
        html: 'Cell 1 content',
        width: 250,
        heigth: 250,
        src : "./project/images/1.jpg"
        
    },{
        flex:1,
        xtype: "image",
        html: 'Cell 1 content',
        width: 250,
        heigth: 250,
        src : "./project/images/3.jpg",
        cellCls: 'highlight'
    },{
        flex:1,
        xtype: "image",
        html: 'Cell 1 content',
        width: 250,
        heigth: 250,
        src : "./project/images/1.jpg"
    },
    {
        flex:1,
        xtype: "image",
        html: 'Cell 1 content',
        width: 250,
        heigth: 250,
        src : "./project/images/3.jpg"
    },
    {
    
        flex:1,
        xtype: "image",
        html: 'Cell 1 content',
        width: 250,
        heigth: 250,
        src : "./project/images/3.jpg"
    },
    {
        flex:1,
        xtype: "image",
        html: 'Cell 1 content',
        width: 250,
        heigth: 250,
        src : "./project/images/3.jpg"
    },
    {
        flex:1,
        xtype: "image",
        html: 'Cell 1 content',
        width: 250,
        heigth: 250,
        src : "./project/images/3.jpg"
    },
    {
        flex:1,
        xtype: "image",
        html: 'Cell 1 content',
        width: 250,
        heigth: 250,
        src : "./project/images/3.jpg"
    }
],
    renderTo: Ext.getBody()
});

//Ext.getCmp("viewContainer").add(myhomeGrid);
