function loginCallback() {
  var footer = Ext.create("Ext.container.Container", {
    width: "100%",
    flex: 0.5,
    layout: {
      type: "hbox",
      pack: "center",
    },
    style: {
      // borderColor:'#000000',
      
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
    dock: "left",
    height: "100%",
    width: 100,
    style: "background:#15151e;",
    id: "toolbar",
    margin: 1,
    vertical: true,
    listeners: {
      focusleave: function () {
        Ext.getCmp("Drawing").hide();
        Ext.getCmp("Quilling").hide();
      },
    },
    items: [
      {
        cls: "toolbar-button",
        height: 60,
        text: "<h1>D</h1>",
      },

      { xtype: "tbseparator" },
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
        xtype: "button",
        cls: "toolbar-button",
        iconAlign: "top",
        html: "My Art",
        menu: [],
        listeners: {
          click: function () {
            if (Ext.getCmp("Drawing").isHidden()) {
              Ext.getCmp("Drawing").show();
              Ext.getCmp("Quilling").show();
            } else {
              Ext.getCmp("Drawing").hide();
              Ext.getCmp("Quilling").hide();
            }
          },
          mouseover: function () {
            //console.log("Mouse Enter");
            //this.showMenu();
            Ext.getCmp("Drawing").show();
            Ext.getCmp("Quilling").show();
          },
        },

        /* listeners: {
          hover: function () {},
        }, */
      },
      {
        xtype: "button",
        id: "Drawing",
        hidden: true,
        text: "Drawing",
      },
      {
        hidden: true,
        id: "Quilling",
        xtype: "button",
        text: "Quilling",
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

  var headerContainer = Ext.create("Ext.container.Container", {
    id: "headerContainer",
    flex: 1,
    width: "100%",
    margin: 5,
    style: {
      borderBottom: "2px solid black",
      background: "none",
    },
    layout: {
      type: "hbox",
      align: "middle",
      pack:'end',
    },
    items: [
      {
        xtype: "label",
        html: "<h1>Art Gallery</h1>",
      },
      { xtype: "tbspacer", flex: 1 },
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
            text: "Login",
            cls: "toolbar-button",
            height: 45,
            margin: "0 8 0 0",
          },
          {
            xtype: "tbseparator",
            height: 40,
          },
          {
            xtype: "button",
            text: "Sign Up",
            cls: "toolbar-button",
            height: 45,
          },
        ],
      },
    ],
<<<<<<< HEAD
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
=======
  });

  var itemsContainer = Ext.create("Ext.container.Container", {
>>>>>>> 91b534b77f6c32315d1fe463b0c960278f8b90a4
    id: "itemsContainer",
    flex: 9,
    width: "100%",
    scrollable : true,
 
    margin: 1,
    style: {
      borderBottom: "2px solid black",
      background: "none",
    },
<<<<<<< HEAD
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
  
=======
  });

  var subMain = Ext.create("Ext.container.Container", {
    flex: 9,
    height: "100%",
    title: "Final Assignment",
    titleAlign: "center",
    layout: "vbox",
    items: [headerContainer, itemsContainer, footer],
  });

>>>>>>> 91b534b77f6c32315d1fe463b0c960278f8b90a4
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
