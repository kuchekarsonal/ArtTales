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
