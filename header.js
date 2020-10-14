var header=Ext.create('Ext.container.Container',{
    width:'100%',
    flex:1.5,
    layout: {
        type: 'hbox',
        //align: 'center'
    },
    style:{
        borderColor:'#000000', 
        borderStyle:'solid',
        backgroundColor:'#fff'
    },
    items:[{
        xtype:'toolbar',
        width:'100%',
        height:'100%',
        items:[
            {
                xtype:'button',
                iconCls:'logo-icon',

            },
            {
                xtype:'label',
                html:'<h1>Art Gallery</h1>',
                margin:'0 0 0 5'
            },
            {
                xtype:'tbfill'
            },
            {
                xtype:'button',
                text:'Home',
                cls:'toolbar-button'
            },
            {
                xtype:'button',
                text:'My Art',
                cls:'toolbar-button'
            },
            {
                xtype:'button',
                text:'About me',
                cls:'toolbar-button'
            },
            {
                xtype:'button',
                text:'Contact me',
                cls:'toolbar-button'
            }
        ]
    }
        
        
    ]
   
    
})