function loginCallback() {
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
        height: 470,
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
            listeners: {
              click: function () {
                var firstName = Ext.getCmp("firstname").getValue();
                var lastName = Ext.getCmp("lastname").getValue();
                var email = Ext.getCmp("emailaddress").getValue();
                var subject = Ext.getCmp("subject").getValue();
                var message = Ext.getCmp("message").getValue();
                var respGetAll = ESApis.executeScript(
                  "_getAllJSONDocs_akirtikar",
                  ["paramCount", "params1"],
                  [1, "ContactUs_akirtikar"]
                );
                if (respGetAll.status == "success") {
                  Ext.Msg.alert("Alert", "Submitted Successfully");
                  var esResp = respGetAll.response;
                  var esParse = JSON.parse(esResp);
                  console.log(esParse.CallResponse);
                  var count = esParse.CallResponse.length;
                }
                var resp = ESApis.executeScript(
                  "_createDoc_akirtikar",
                  ["paramCount", "params1", "params2"],
                  [
                    2,
                    "ContactUs_akirtikar",
                    {
                      MessageId: (count + 1).toString(),
                      FirstName: firstName,
                      LastName: lastName,
                      EmailId: email,
                      Subject: subject,
                      Message: message,
                    },
                  ]
                );
                if (resp.status == "success") {
                  Ext.Msg.alert("Alert", "Submitted Successfully");
                  var esResp = resp.response;
                  var esParse = JSON.parse(esResp);
                  console.log(esParse.CallResponse);
                }
              },
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
            xtype: "label",
            html:
              '<h3><a href = "mailto: rsarvaiya@vistaar.in">Email Us</a><br><br>OR<br></h3>',
          },
          {
            id: "firstname",
            fieldLabel: "First Name",
            name: "First Name",
          },
          {
            id: "lastname",
            fieldLabel: "Last Name",
            name: "Last Name",
          },
          {
            id: "emailaddress",
            fieldLabel: "Email Address",
            //email:true, to validate if email is proper
            name: "Email Address",
          },
          {
            id: "subject",
            fieldLabel: "Subject:",
            name: "Subject",
          },
          {
            id: "message",
            fieldLabel: "Message ",
            name: "Message",
            xtype: "textareafield",
            grow: true,
          },
        ],
      },
    ],
  });

  var loginForm = Ext.create("Ext.Container", {
    id: "loginForm",
    
    layout: {
      type: "vbox",
      align: "center",
    },

    items: [
      {
        xtype: "form",
        /* title:
          "Don’t hesitate to chat with us,just drop a line below or contact via email.", */
        margin: "100% 5 5 5",
        width: "auto",
        flex: 1,
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
            text: "Forgot Password?",
            handler: function () {
              this.up("form").getForm().reset();
            },
          },
          {
            text: "Login",
            formBind: true, //only enabled once the form is valid
            disabled: true,
            // listeners:{
            //   click :function(){
            //     var firstName = Ext.getCmp("firstname").getValue();
            //     var lastName = Ext.getCmp("lastname").getValue();
            //     var email=Ext.getCmp("emailaddress").getValue();
            //     var subject=Ext.getCmp("subject").getValue();
            //     var message=Ext.getCmp("message").getValue();
            //     var respGetAll = ESApis.executeScript("_getAllJSONDocs_akirtikar", ['paramCount', 'params1',], [1, 'ContactUs_akirtikar', ]);
            // if(respGetAll.status=='success'){
            // 	Ext.Msg.alert('Alert','Submitted Successfully');
            // 	var esResp = respGetAll.response;
            // 	var esParse = JSON.parse(esResp);
            //                 console.log(esParse.CallResponse)
            //                 var count=esParse.CallResponse.length;

            // }
            //     var resp = ESApis.executeScript("_createDoc_akirtikar", ['paramCount', 'params1', 'params2'], [2, 'ContactUs_akirtikar', {"MessageId":(count+1).toString(),"FirstName":firstName,"LastName":lastName,"EmailId":email,"Subject":subject,"Message":message}]);
            // if(resp.status=='success'){
            // 	Ext.Msg.alert('Alert','Submitted Successfully');
            // 	var esResp = resp.response;
            // 	var esParse = JSON.parse(esResp);
            // 	console.log(esParse.CallResponse)
            // }
            //   }
            // }
          },
        ],
        items: [
          {
            xtype: "label",
            html: "<h1>Login Form</h1>",
          },
          {
            id: "usernamelogin",
            fieldLabel: "UserName\\Email",
            name: "UserName\Email",
          },
          {
            id: "passwordlogin",
            fieldLabel: "Password",
            name: "Passowrd",
          },
        ],
      },
    ],
  });

  var signUpForm = Ext.create("Ext.Container", {
    id: "signUpForm",

    layout: {
      type: "vbox",
      align: "center",
    },

    items: [
      {
        xtype: "form",
        /* title:
          "Don’t hesitate to chat with us,just drop a line below or contact via email.", */
          margin: "100% 5 5 5",
        width: "auto",
        flex: 1,
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
            text: "SignUp",
            formBind: true, //only enabled once the form is valid
            disabled: true,
            // listeners:{
            //   click :function(){
            //     var firstName = Ext.getCmp("firstname").getValue();
            //     var lastName = Ext.getCmp("lastname").getValue();
            //     var email=Ext.getCmp("emailaddress").getValue();
            //     var subject=Ext.getCmp("subject").getValue();
            //     var message=Ext.getCmp("message").getValue();
            //     var respGetAll = ESApis.executeScript("_getAllJSONDocs_akirtikar", ['paramCount', 'params1',], [1, 'ContactUs_akirtikar', ]);
            // if(respGetAll.status=='success'){
            // 	Ext.Msg.alert('Alert','Submitted Successfully');
            // 	var esResp = respGetAll.response;
            // 	var esParse = JSON.parse(esResp);
            //                 console.log(esParse.CallResponse)
            //                 var count=esParse.CallResponse.length;

            // }
            //     var resp = ESApis.executeScript("_createDoc_akirtikar", ['paramCount', 'params1', 'params2'], [2, 'ContactUs_akirtikar', {"MessageId":(count+1).toString(),"FirstName":firstName,"LastName":lastName,"EmailId":email,"Subject":subject,"Message":message}]);
            // if(resp.status=='success'){
            // 	Ext.Msg.alert('Alert','Submitted Successfully');
            // 	var esResp = resp.response;
            // 	var esParse = JSON.parse(esResp);
            // 	console.log(esParse.CallResponse)
            // }
            //   }
            // }
          },
        ],
        items: [
          {
            xtype: "label",
            html: "<h1>Sign Up Form</h1>",
          },
          {
            id: "firstnamesignup",
            fieldLabel: "First Name",
            name: "First Name",
          },
          {
            id: "lastnamesignup",
            fieldLabel: "Last Name",
            name: "Last Name",
          },
          {
            id: "username",
            fieldLabel: "UserName",
            name: "UserName",
          },
          {
            id: "emailidsignup",
            fieldLabel: "EmailId",
            name: "EmailId",
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
        height: 470,
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

  var myhomeGrid = Ext.create("Ext.Container", {
    id: "tablePic",
    width: "auto",
    layout: {
      type: "vbox",
      align: "center",
    },
    items: [
      {
        xtype: "label",
        html: "<h1>Art Gallery</h1>",
      },
      {
        xtype: "panel",
        margin: "5 5 5 5",
        width: "auto",
        height: 420,
        style: {
          background: "white",
          "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
        },
        scrollable: true,
        layout: {
          type: "table",
          tdAttrs: {
            style: {
              border: "3px solid black",
            },
          },
          columns: 3,
        },
        items: [
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/1.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/1.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/3.jpg",
            cellCls: "highlight",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/1.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/3.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/3.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/3.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/3.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/3.jpg",
          },
        ],
      },
    ],
  });

  var drawingGrid = Ext.create("Ext.Container", {
    id: "drawingPic",
    width: "auto",
    layout: {
      type: "vbox",
      align: "center",
    },
    items: [
      {
        xtype: "label",
        html: "<h1>Drawing Gallery</h1>",
      },
      {
        xtype: "panel",
        margin: "5 5 5 5",
        width: "auto",
        height: 420,
        style: {
          background: "white",
          "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
        },
        scrollable: true,
        layout: {
          type: "table",
          tdAttrs: {
            style: {
              border: "3px solid black",
            },
          },
          columns: 3,
        },
        items: [
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/1.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/1.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/3.jpg",
            cellCls: "highlight",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/1.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/3.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/3.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/3.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/3.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/3.jpg",
          },
        ],
      },
    ],
  });

  var quillingGrid = Ext.create("Ext.Container", {
    id: "quillingPic",
    width: "auto",
    layout: {
      type: "vbox",
      align: "center",
    },
    items: [
      {
        xtype: "label",
        html: "<h1>Quilling Gallery</h1>",
      },
      {
        xtype: "panel",
        margin: "5 5 5 5",
        width: "auto",
        height: 420,
        style: {
          background: "white",
          "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
        },
        scrollable: true,
        layout: {
          type: "table",
          tdAttrs: {
            style: {
              border: "3px solid black",
            },
          },
          columns: 3,
        },
        items: [
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/1.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/1.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/3.jpg",
            cellCls: "highlight",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/1.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/3.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/3.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/3.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/3.jpg",
          },
          {
            flex: 1,
            xtype: "image",
            width: 250,
            heigth: 250,
            src: "./project/images/3.jpg",
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
            listeners: {
              click: function () {
                Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
                Ext.getCmp("itemsContainer").add(loginForm);
              },
            },
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
            listeners: {
              click: function () {
                Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
                Ext.getCmp("itemsContainer").add(signUpForm);
              },
            },
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
    items: [myhomeGrid],
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
            Ext.getCmp("itemsContainer").add(myhomeGrid);
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
        listeners: {
          click: function () {
            Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
            Ext.getCmp("itemsContainer").add(drawingGrid);
          },
        },
      },
      {
        hidden: true,
        id: "Quilling",
        xtype: "button",
        text: "Quilling",
        listeners: {
          click: function () {
            Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
            Ext.getCmp("itemsContainer").add(quillingGrid);
          },
        },
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
