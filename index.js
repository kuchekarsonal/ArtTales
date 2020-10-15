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
        Ext.getCmp("Drawing").hide(); //doesn't work
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
            Ext.getCmp("contactUs").hide();
            Ext.getCmp("aboutUs").show();
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
            Ext.getCmp("aboutUs").hide();
            Ext.getCmp("contactUs").show();
          },
        },
      },
      { xtype: "tbseparator" },
    ],
  });

  var contactUs = Ext.create("Ext.Container", {
    id: "contactUs",
    hidden: true,
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
        height: 500,
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
    hidden: true,
    layout: {
      type: "vbox",
      align: "center",
    },
    items: [
      {
        xtype: "container",
        margin: "5 5 5 5",
        width: 300,
        height: 500,
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

  var itemsContainer = Ext.create("Ext.container.Container", {
    id: "itemsContainer",
    scrollable: true,
    flex: 9,
    width: "100%",
    margin: 1,
    style: {
      borderBottom: "2px solid black",
      background: "none",
    },
    items: [aboutUs, contactUs],
  });

  var subMain = Ext.create("Ext.container.Container", {
    flex: 9,
    height: "100%",
    titleAlign: "center",
    layout: "vbox",
    items: [headerContainer, itemsContainer, footer],
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
