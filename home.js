var respGetAll = ESApis.executeScript(
  "_getAllArts_artgallery",
  ["paramCount"],
  [0]
);
//console.log(respGetAll);
//console.log(JSON.parse(respGetAll.response).CallResponse);
var artData = JSON.parse(respGetAll.response).CallResponse;
//console.log(artData);
var ArtStore = Ext.create("Vistaar.data.DataStore", {
  storeId: "ArtStore",
  fields: [
    "Product_Id",
    "Artist_name",
    "Art_name",
    "Art_desc",
    "Category",
    "Price",
  ],
  //TODO Backend /////////////    artData is ready column config needs to be changed
  data: artData /* [
    {
      "ProductId": "1",
      "ArtDetails": "Lisa",
      "ProductName": "Monalisa",
      "Category": "Drawing",
      "EmailId": "kuchekar@gmail.com",
      "Price": "555"
    },
    {
      "ProductId": "2",
      "ArtDetails": "Bart",
      "ProductName": "Da Vinci Code",
      "Category": "Drawing",
      "EmailId": "kuchekar@gmail.com",
      "Price": "1234"
    },
    {
      "ProductId": "3",
      "ArtDetails": "Homer",
      "ProductName": "Jade island",
      "Category": "Drawing",
      "EmailId": "kuchekar@gmail.com",
      "Price": "1244"
    },
    {
      "ProductId": "4",
      "ArtDetails": "Marge",
      "ProductName": "Injustice",
      "Category": "Drawing",
      "EmailId": "kuchekar@gmail.com",
      "Price": "1254"
    },
    {
      "ProductId": "5",
      "ArtDetails": "Lisa",
      "ProductName": "Horizon zero Dawn",
      "Category": "Drawing",
      "EmailId": "kuchekar@gmail.com",
      "Price": "1224"
    },
    {
      "ProductId": "6",
      "ArtDetails": "Bart",
      "ProductName": "Ragnarock",
      "Category": "Quilling",
      "EmailId": "kuchekar@gmail.com",
      "Price": "5234"
    },
    {
      "ProductId": "7",
      "ArtDetails": "Homer",
      "ProductName": "New World",
      "Category": "Quilling",
      "EmailId": "kuchekar@gmail.com",
      "Price": "244"
    },
    {
      "ProductId": "8",
      "ArtDetails": "Lisa",
      "ProductName": "Guide post",
      "Category": "Drawing",
      "EmailId": "kuchekar@gmail.com",
      "Price": "5114"
    },
    {
      "ProductId": "9",
      "ArtDetails": "Bart",
      "ProductName": "Nen",
      "Category": "Drawing",
      "EmailId": "kuchekar@gmail.com",
      "Price": "534"
    },
    {
      "ProductId": "10",
      "ArtDetails": "Homer",
      "ProductName": "The Wrath of Asura",
      "Category": "Quilling",
      "EmailId": "kuchekar@gmail.com",
      "Price": "5244"
    }
  ] */,
  paging: "local",
  pageSize: 15,
});

var config = {
  //title: 'Art Store',
  width: "80%",
  margin: "50% 0 0 0 ",
  //height: 'auto',
  flex: 9,
  //scrollable: true,
  filterOnChange: true,
  sortOnChange: true,
  //forceFit:true,
  defaultColumnConfig: {
    sortable: true,
  },
  store: Ext.data.StoreManager.lookup("ArtStore"),
  selModel: {
    mode: "multi",
    checkOnly: true,
    type: "checkidmodel",
    selectionCount: false,
    clearSelection: false,
    selectionOptions: false,
  },

  plugins: [
    {
      ptype: "inlinefilterbar",
    },
  ],
  pagingConfig: {
    pageSize: 15,
    paging: true,
    serverSidePaging: false,
    pageSizeCombo: false,
  },
  style: {
    background: "white",
    "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
  },
  columns: [
    {
      text: "Product_Id",
      dataIndex: "ProductId",
      xtype: "gridcolumn",
      hidden: true,
    },
    {
      text: "Art Name",
      dataIndex: "ProductName",
      xtype: "gridcolumn",
      flex: 1,
    },
    {
      text: "Artist Name",
      dataIndex: "FirstName",
      xtype: "gridcolumn",
      flex: 1,
    },
    {
      text: "Art Description",
      dataIndex: "ArtDetails",
      xtype: "gridcolumn",
      flex: 1,
    },
    { text: "Category", dataIndex: "Category", xtype: "gridcolumn", flex: 1 },
    {
      text: "Price",
      dataIndex: "Price",
      xtype: "numbercolumn",
      flex: 1,
      renderer: function (value) {
        return "₹" + value;
      },
    },
    // {
    //   text: "Buy",
    //   flex: 1,
    //   align: "center",
    //   renderer: function () {
    //     var id = Ext.id();
    //     Ext.defer(function () {
    //       new Ext.Button({
    //         text: "Buy",
    //         handler: function (btn, e) {
    //           //TODO Backend
    //         },
    //       }).render(document.body, id);
    //     }, 50);
    //     return Ext.String.format('<div id="{0}"></div>', id);
    //   },
    // },
  ],
};
var homeGrid = Ext.create(Vistaar.grid.DataGrid, config);

var myhomeGrid = Ext.create("Ext.Container", {
  id: "tablePic",
  width: "auto",
  layout: {
    type: "vbox",
    align: "center",
  },
  items: [
    homeGrid,
    Ext.create("Ext.Container", {
      layout: "hbox",
      flex: 1,
      width: "80%",
      items: [
        {
          xtype: "label",
          flex: 7,
        },
        {
          xtype: "button",
          text: "Buy",
          margin: "5 50% 5 5",
          flex: 1,
          handler: function () {
            //Backend: Adding data to the Order Entity
            if (JSON.stringify(currentUserLoggedIn) !== "{}") {
              var selectedData = homeGrid.getSelection().length;
              for (var artData = 0; artData < selectedData; artData++) {
                console.log(homeGrid.getSelection()[artData].data);
                //Attributes Required :ProductId,Price,EmailId,OrderId
              }
            } else {
              Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
              Ext.getCmp("itemsContainer").add(loginForm);
            }
          },
        },
      ],
    }),
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
