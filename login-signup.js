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
        //TODO Later
        /*{
          text: "Forgot Password?",
          handler: function () {
            this.up("form").getForm().reset();
          },
        },*/
        {
          text: "Login",
          formBind: true, //only enabled once the form is valid
          disabled: true,
          listeners: {
            click: function () {
              Ext.getCmp("sign-up-button").hide();
              Ext.getCmp("login-button").hide();
              //TODO Backend - Get the first name and last name from backend and put them in userName.
              userName = "Abhijeet Deo";
              Ext.getCmp("logged-in-name").setText("Logged in as " + userName);
              Ext.getCmp("logged-in-name").show();
              Ext.getCmp("logout-button").show();
              //TODO Backend - Check if the data is valid. Return the account type, I am hard-coding it for now.
              var accType = "User";
              switch (accType) {
                case "User":
                  Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
                  Ext.getCmp("itemsContainer").add(myhomeGrid);
                  break;
                case "Artist":
                  Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
                  Ext.getCmp("itemsContainer").add(myArtistGrid);
                  break;
                case "Admin":
                  Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
                  Ext.getCmp("itemsContainer").add(adminhomegrid);
                  break;
                default:
                  Ext.Msg.alert('Invalid User', 'Please check your credentials');

              }
            }
          }
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
          fieldLabel: "Email",
          name: "Email",
          validator: function (value) {
            var emailRegex = new RegExp("\\S+@\\S+\\.\\S+");
            if (!emailRegex.test(value)) {
              return 'Email format is incorrect';
            } else {
              return true;
            }
          }
        },
        {
          id: "passwordlogin",
          fieldLabel: "Password",
          allowBlank: false,
          name: "Password",
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
          text: "Sign Up",
          formBind: true, //only enabled once the form is valid
          disabled: true,
          listeners: {
            click: function () {
              //TODO Backend - Fetch details and insert them in entity

              //TODO Backend - If success, redirect to login page
              if (true) {
                Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
                Ext.getCmp("itemsContainer").add(loginForm);
                Ext.Msg.alert('Success!', 'Account created successfully, login to continue');
              }
            }
          }

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
          allowBlank: false,
          fieldLabel: "First Name",
          name: "First Name",
        },
        {
          id: "lastnamesignup",
          fieldLabel: "Last Name",
          allowBlank: false,
          name: "Last Name",
        },
        {
          id: "passwordsignup",
          xtype: "passwordfield",
          fieldLabel: "Password",
          allowBlank: false,
          name: "Password",
        },
        {
          id: "confirmPasswordSignup",
          xtype: "passwordfield",
          fieldLabel: "Confirm Password",
          allowBlank: false,
          name: "Confirm Password",
          validator: function (value) {
            var pass = Ext.getCmp("passwordsignup").getValue();
            if (pass != value) {
              return 'Passwords do not match';
            } else {
              return true;
            }
          }
        },
        {
          id: "emailidsignup",
          fieldLabel: "Email Id",
          name: "Email Id",
          validator: function (value) {
            var emailRegex = new RegExp("\\S+@\\S+\\.\\S+");
            if (!emailRegex.test(value)) {
              return 'Email format is incorrect';
            } else {
              return true;
            }
          }
        },
        {
          id: "acctypesignup",
          xtype: 'fieldcontainer',
          fieldLabel: 'Sign Up As',
          defaultType: 'radiofield',
          allowBlank: false,
          layout: 'hbox',
          items: [
            {
              boxLabel: 'User',
              name: 'acc_type',
              inputValue: 'User',
              checked: true,
              id: 'user-radio'
            }, {
              xtype: "tbspacer",
              width: 5
            }, {
              boxLabel: 'Artist',
              name: 'acc_type',
              inputValue: 'Artist',
              id: 'artist-radio'
            }
          ]
        },
      ],
    },
  ],
});