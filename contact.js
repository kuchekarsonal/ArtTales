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
        width: "100%",
        height: 470,
        forcefit: true,
        scrollable: true,
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
                //console.log(firstName,lastName,email,subject,message);
                var respGetAll = ESApis.executeScript(
                  "_getAllJSONDocs_artgallery",
                  ["paramCount", "params1"],
                  [1, "Feedback_artgallery"]
                );
                if (respGetAll.status == "success") {
                  Ext.Msg.alert("Alert", "Submitted Successfully");
                  var esResp = respGetAll.response;
                  var esParse = JSON.parse(esResp);
                  console.log(esParse.CallResponse);
                  var count = esParse.CallResponse.length;
                }
                var resp = ESApis.executeScript(
                  "_createDoc_artgallery",
                  ["paramCount", "params1", "params2"],
                  [
                    2,
                    "Feedback_artgallery",
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
                else{
                  Ext.Msg.alert("Alert", "Failed");
                }
              },
            },
          },
        ],
        items: [
          {
            xtype: "label",
            cls: 'contact-title',
            width: '100%',
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
            allowBlank: false,
            name: "First Name",
          },
          {
            id: "lastname",
            fieldLabel: "Last Name",
            allowBlank: false,
            name: "Last Name",
          },
          {
            id: "emailaddress",
            fieldLabel: "Email Address",
            //email:true, to validate if email is proper
            name: "Email Address",
            validator: function (value) {
              var emailRegex = new RegExp("\\S+@\\S+\\.\\S+");
              if (!emailRegex.test(value)) {
                return "Email format is incorrect";
              } else {
                return true;
              }
            }
          },
          {
            id: "subject",
            allowBlank: false,
            fieldLabel: "Subject:",
            name: "Subject",
          },
          {
            id: "message",
            fieldLabel: "Message ",
            allowBlank: false,
            name: "Message",
            xtype: "textareafield",
            grow: true,
          },
        ],
      },
    ],
  });
