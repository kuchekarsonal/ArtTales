function loginCallback() {

  var signUpForm;

  //breadcrumb
  Ext.define("Myapp.sample.store.mainMenu", {
    extend: "Ext.data.TreeStore",
    root: {
      text: "HomePage",
      expanded: true,
      children: [
        {
          leaf: true,
          text: "Home",
          expanded: true,
        },
        {
          text: "My Art",
          expanded: true,
          leaf: true,
        },
        {
          leaf: true,
          text: "About Us",
          expanded: true,
        },
        {
          leaf: true,
          text: "Contact Us",
          expanded: true,
        },
      ],
    },
  });
  var breadcrumbStore = Ext.create("Myapp.sample.store.mainMenu", {});
  //end breadcrumb

  //footer
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

  var contactUs = Ext.create("Ext.Container", {
    id: "contactUs",
    
    layout: {
      type: "vbox",
      align: "center",
    },

    items: [
      {
        xtype: "form",
        /* title:
          "Don’t hesitate to chat with us,just drop a line below or contact via email.", */
        margin: "5 5 5 5",
        width: "auto",
        flex:1,
        forcefit: true,
        style: {
          background: "white",
          "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
        },
        layout: {
          type: "vbox",
          align: "center",
        },
        bodyPadding: 10,
        defaultType: "textfield",
        buttons: [
          {
            text: "Reset",
            handler: function () {
              this.up("form").getForm().reset();
            },
          },
          {
            text: "Submit",
            formBind: true, //only enabled once the form is valid
            disabled: true,
            handler: function () {
              var data = Ext.getCmp("getName").getValue();
              console.log(Ext.getCmp("getEmail").getValue());
              console.log(Ext.getCmp("getSubject").getValue());
              console.log(Ext.getCmp("getMessage").getValue());
              console.log(data);
              var form = this.up("form").getForm();
              if (form.isValid()) {
                form.submit({
                  success: function (form, action) {
                    Ext.Msg.alert("Success", action.result.msg);
                  },
                  failure: function (form, action) {
                    Ext.Msg.alert("Failed", action.result.msg);
                  },
                });
              }
            },
          },
        ],
        items: [
          {
            xtype: "label",
            html:
              "<h1>Don’t hesitate to chat with us, just drop a line below or contact via email.</h1>",
          },
          {
            xtype: "image",
            margin: "5 5 20 5",
            width: 100,
            heigth: 100,
            src: "./project/images/3.jpg",
          },
          {
            id: "getName",
            fieldLabel: "First Name",
            name: "first NAme",
          },
          {
            id: "getEmail",
            fieldLabel: "Email Address",
            name: "Email Address",
          },
          {
            id: "getSubject",
            fieldLabel: "Subject:",
            name: "Subject",
          },
          {
            xtype: "textareafield",
            grow: true,
            id: "getMessage",
            fieldLabel: "Message ",
            name: "Message",
          },
        ],
      },
    ],
  });

  var aboutUs = Ext.create("Ext.Container", {
    id: "aboutUs",
    
    layout: {
      type: "vbox",
      align: "center",
    },
    items: [
      {
        xtype: "container",
        margin: "5 5 5 5",
        width: 300,
        flex:1,
        style: {
          background: "white",
          "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
        },
        layout: {
          type: "vbox",
          align: "center",
        },
        
        items: [
          {
            xtype: "label",
            html: "<h1>Helloooo!!</h1>",
            height: 50,
          },
          {
            flex: 1,
            xtype: "image",
            style: "border-radius:50%;border:1px solid black",
            width: 250,
            heigth: 250,
            src: "./project/images/nophoto.png",
          },
          {
            flex: 1,
            xtype: "label",
            html:
              "<h1 align='center'>Jack Kirtikar</h1><h2 align='center'>I am An Artist.</h2>",
          },
        ],
      },
    ],
  });


  var myhomeGrid = Ext.create('Ext.panel.Panel', {
    title: 'Table Layout',
    id  : "tablePic",
    width: 300,
    height: 150,
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
        html: 'Cell A content',
        rowspan: 2
    },{
        html: 'Cell B content',
        colspan: 2
    },{
        html: 'Cell C content',
        cellCls: 'highlight'
    },{
        html: 'Cell D content'
    }],
    renderTo: Ext.getBody()
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
      pack: "end",
    },

    items: [
      {
        xtype: "label",
        html: "<h1>Art Tales</h1>",
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
            listeners:{
              click:function(){
                Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
                Ext.getCmp("itemsContainer").add(signUpForm);
              }
            }
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
  });

  var itemsContainer = Ext.create("Ext.Panel", {
    id: "itemsContainer",
    scrollable: true,
    flex: 9,
    width: "100%",
    margin: 1,
    style: {
      borderBottom: "2px solid black",
      background: "none",
    },
    dockedItems: [
      {
        //Step 2
        xtype: "breadcrumb",
        dock: "top",
        margin: 0,
        store: breadcrumbStore,
        showIcons: true,
        selection: breadcrumbStore.getRoot().childNodes[0],
      },
    ],
    items: [],
  });

  var subMain = Ext.create("Ext.container.Container", {
    flex: 9,
    height: "100%",
    titleAlign: "center",
    layout: "vbox",
    items: [headerContainer, itemsContainer, footer],
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
        Ext.getCmp("Drawing").hide(); //focus leave means tab switching
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
        html: "Home",
        listeners: {
          click: function () {
            Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
          },
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
            Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
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
            Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
            Ext.getCmp("itemsContainer").add(aboutUs);
            //console.log("AboutUs click");
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
            Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
            Ext.getCmp("itemsContainer").add(contactUs);
          },
        },
      },
      { xtype: "tbseparator" },
    ],
  });

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
