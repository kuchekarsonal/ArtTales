function loginCallback(){
  
    var header=Ext.create('Ext.container.Container',{
        width:'100%',
        flex:1.5,
        layout: {
            type: 'hbox',
            align: 'center'
        },
        style:{
            borderColor:'#000000', 
            borderStyle:'solid',
            backgroundColor:'#fff'
        },
        items:[
            {
                xtype:'button',
                iconCls:'logo-icon',
                cls:'logo-button'
    
            },{
                xtype:'label',
                html:'<h1>Art Gallery</h1>',
                margin:'0 0 0 5'
            },
            {
                xtype: "tbspacer",
                flex: 1,
            },
            {
                xtype: "container",
                margin: 2,
                border: false,
                layout: {
                  type: "hbox",
                  pack: "end",
                },
                items: [
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
                ],
              }
          
            
          
        ]
       
        
    })

    var footer=Ext.create('Ext.container.Container',{
        width:'100%',
        flex:0.5,
        layout:{
            type:'hbox',
            pack:'center'
        },
        style:{
            // borderColor:'#000000', 
            borderTopStyle:'groove',
            backgroundColor:'#fff'
        },
        items:[
            {
                xtype:'label',
                text:'My Art © 2020',
                textAlign:'center'
            }
        ]
        
    })

    var navigate = function(panel, direction){
        // This routine could contain business logic required to manage the navigation steps.
        // It would call setActiveItem as needed, manage navigation button state, handle any
        // branching logic that might be required, handle alternate actions like cancellation
        // or finalization, etc. A complete wizard implementation could get pretty
        // sophisticated depending on the complexity required, and should probably be
        // done as a subclass of CardLayout in a real-world implementation.
        var layout = panel.getLayout();
        layout[direction]();
        Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
        Ext.getCmp('move-next').setDisabled(!layout.getNext());
        };
        
    var cardLayout=Ext.create('Ext.panel.Panel', {
        width: "100%",
        flex:5,
        layout: 'card',
        bodyStyle: 'padding:15px',
        defaults: {
        // applied to each contained panel
        border: false
        },
        // just an example of one possible navigation scheme, using buttons
        bbar: [
        {
        id: 'move-prev',
        text: 'Back',
        handler: function(btn) {
        navigate(btn.up("panel"), "prev");
        },
        disabled: true
        },
        '->', // greedy spacer so that the buttons are aligned to each side
        {
        id: 'move-next',
        text: 'Next',
        handler: function(btn) {
        navigate(btn.up("panel"), "next");
        }
        }
        ],
        // the panels (or "cards") within the layout
        items: [{
        id: 'card-0',
        html: '<h1>Welcome to the Wizard!</h1><p>Step 1 of 3</p>'
        },{
        id: 'card-1',
        html: '<p>Step 2 of 3</p>'
        },{
        id: 'card-2',
        html: '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'
        }],
        });

    var sections=Ext.create('Ext.tab.Panel', {
        width: "100%",
        flex:5,
        activeTab: 0,
        items: [
        {
        title: 'Drawing',
        bodyPadding: 10,
        html : 'A simple tab'
        },
        {
        title: 'Quilling',
        html : 'Another one'
        }
        ],
        });
    
    var cardContainer=Ext.create('Ext.container.Container', {
		border: true,
        width: 600,
        flex:3,
        html: '<h4 align="center">Jack</h4>',
        margin:'10 10 10 10',
        style: {
            'background': 'white',
            'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.5)'
        }
		
	});
	var lessonCont=Ext.create('Ext.container.Container', {
		id: 'lessonContainer',
		border: true,
        width: '100%',
        height:"100%",
        layout:'vbox',
        scrollable:true,
        //margin:'10 10 10 10',
        style: {
            borderColor:'#000000', 
            borderStyle:'solid', 
            borderWidth:'1px',
            padding:'5px',
        },
        items:[
            header,cardLayout,
            {
                xtype:'label',
                flex:1.5,
                html:'<h1>My art</h1>'
            },sections,{
                xtype:'label',
                flex:1.5,
                html:'<h1>About me</h1>'
            },cardContainer,footer
        ]
		
	});
	
	Ext.getCmp("viewContainer").add(lessonCont);
}