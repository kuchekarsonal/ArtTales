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
          click: function () {},
        },
      },
      { xtype: "tbseparator" },
      {
        cls: "toolbar-button",
        iconAlign: "top",
        text: "Contact Us",
        listeners: {
          click: function () {},
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
  
  var itemsContainer=Ext.create("Ext.container.Container",{
    id: "itemsContainer",
    flex:9,
    width: "100%",
    margin: 1,
    style: {
      borderBottom: "2px solid black",
      background: "none",
    }
    
  },)
  
  var subMain=Ext.create("Ext.container.Container",{
    flex:9,
    height:'100%',
    title:'Final Assignment',
    titleAlign:'center',
    layout:'vbox',
    items:[ headerContainer,itemsContainer,footer

    ]
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
