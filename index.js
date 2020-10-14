function loginCallback() {
  var footer = Ext.create("Ext.container.Container", {
    width: "100%",
    flex:0.5,
    layout: {
      type: "hbox",
      pack: "center",
    },
    style: {
      // borderColor:'#000000',
      borderTopStyle: "groove",
      backgroundColor: "#fff",
    },
    items: [
      {
        xtype: "label",
        text: "My Art © 2020",
      },
    ],
  });
  var toolbar = Ext.create("Ext.toolbar.Toolbar", {
    plugins: {
      responsive: true,
    },
    layout: { type: "vbox", stretch: true },
    dock:'left',
    height: "100%",
    width: 100,
    style: "background:#15151e;",
    id: "toolbar",
    margin: 1,
    vertical: true,
    defaults: {},
    items: [
      {
        cls: "toolbar-button",
        //iconCls: "logo-icon",
        html: "Title",
        listeners: {
          click: function () {},
        },
      },
      { xtype: "tbseparator" },
      {
        cls: "toolbar-button",
        iconAlign: "top",
        html: "My Art",
        listeners: {
          click: function () {},
        },
      },
      { xtype: "tbseparator" },
      {
        cls: "toolbar-button",
        iconAlign: "top",
        text: "Gallery",
        listeners: {
          click: function () {},
        },
      },
      { xtype: "tbseparator" },
      {
        cls: "toolbar-button",
        iconAlign: "top",
        text: "About Us",
        listeners: {
          click: function () {
            Ext.getCmp('aboutUs').show();
            console.log("AboutUs click");
          },
        },
      },
      { xtype: "tbseparator" },
      {
        cls: "toolbar-button",
        iconAlign: "top",
        text: "Contact Us",
        listeners: {
          click: function () {
            Ext.getCmp('contactUs').show();
            Ext.getCmp('aboutUs').hide();
          },
        },
      },
      { xtype: "tbseparator" },
    ],
  });
  
  var headerContainer=Ext.create("Ext.container.Container",{
    id: "headerContainer",
    flex:1,
    width: "100%",
    margin: 1,
    style: {
      borderBottom: "2px solid black",
      background: "none",
    },
    layout: {
      type: "hbox",
      align: "middle",
      pack: "end",
    },
    items: [
      {
        xtype: "toolbar",
        border: false,
        items: [
          {
            xtype: "tbseparator",
            height: 40,
          },
          {
            xtype: "button",
            iconCls: "logout",
            cls: "toolbar-button",
            height: 45,
            width: 45,
          },
        ],
      },
    ],
  },)
  

  var aboutUs = Ext.create("Ext.container.Container",{
    id: "aboutUs",
    width: "100%",
    height : "100%",
    hidden : true,
    layout : "vbox",

    items : [
      {
        xtype : "image",
        width :250,
        heigth :250,
 
        margin : "50 0 0 500",
        src : "./project/images/1.jpg"
      },
     
      {
        xtype : 'label',
        html : "<h1>Helloooo</h1>"
      }

    ]



  });


  var contactUs = Ext.create("Ext.form.Panel",{
    id: "contactUs",
    height: "100%",
    width: "100%",
    align : "center",
    bodyPadding: 10,
    defaultType: 'textfield',
    hidden :true,

    items : [
      {
        xtype : "image",
        width :250,
        heigth :250,
        margin : "50 0 0 500",
        src : "./project/images/3.jpg"
      },
     
      {
        xtype : 'label',
        html : "<h1>Don’t hesitate to chat with us, just drop a line below or contact via email.</h1>"
      },
      {
        id : "getName",
        fieldLabel: 'First Name',
        name : "first NAme"
        
      },
      {
        id : "getEmail",
        fieldLabel: 'Email Address',
        name : "Email Address"
        
      },
      {
        id : "getSubject",
        fieldLabel: "Subject:",
        name : "Subject"
        
      },
      {
        id : "getMessage",
        fieldLabel: "Message ",
        name : "Message"
        
      },

      {
        xtype : "button",
        text: "Submit",
        listeners:{
          click :function(){
            var data = Ext.getCmp("getName").getValue();
            console.log(Ext.getCmp("getEmail").getValue());
            console.log(Ext.getCmp("getSubject").getValue());
            console.log(Ext.getCmp("getMessage").getValue());
            console.log(data);
          }
        }
      }

    ]



  });


  var itemsContainer=Ext.create("Ext.container.Container",{
    id: "itemsContainer",
    flex:9,
    width: "100%",
    scrollable : true,
 
    margin: 1,
    style: {
      borderBottom: "2px solid black",
      background: "none",
    },
    items :[
      {
        xtype : "button",
        text :"Hello welcome to our homepage"
      },aboutUs, contactUs  ]
    
  },)
  
  var subMain=Ext.create("Ext.container.Container",{
    flex:9,
    height:'100%',
    title:'Final Assignment',
    titleAlign:'center',
    
    layout:'vbox',
    items:[ headerContainer,itemsContainer,footer]
  })
  
  var mainContainer = Ext.create("Ext.container.Container", {
    id: "mainContainer",
    plugins: {
      responsive: true,
    },
    layout: "hbox",
    scrollable: true,
    style: {
      background: "none",
    },
    border: 1,
    margin: "5",
    items: [toolbar, subMain],
  });

  Ext.getCmp("viewContainer").add(mainContainer);
}
