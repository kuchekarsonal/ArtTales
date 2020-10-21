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
			{
				xtype      : 'fieldcontainer',
				fieldLabel : 'Account Type',
				defaultType: 'radiofield',
				defaults: {
					flex: 1
				},
				layout: 'hbox',
				items: [
					{
						boxLabel  : 'user',
						name      : 'acc_type',
						inputValue: 'user',
						id        : 'user'
					}, {
						xtype: "tbspacer",
						width: 10
					},{
						boxLabel  : 'artist',
						name      : 'acc_type',
						inputValue: 'artist',
						id        : 'artist'
					}
				]
			},
        ],
      },
    ],
  });
