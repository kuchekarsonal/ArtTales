var respGetAll = ESApis.executeScript(
  "_getAllArts_artgallery",
  ["paramCount"],
  [0]
);
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
  data: artData,
  paging: "local",
  pageSize: 8,
});

var config = {
  //title: 'Art Store',
  width: "80%",
  margin: "50% 0 0 0 ",
  height: "auto",
  //scrollable: true,
  filterOnChange: true,
  sortOnChange: true,
  //forceFit:true,
  defaultColumnConfig: {
    sortable: true,
  },
  store: Ext.data.StoreManager.lookup("ArtStore"),
  selModel: {
    mode: "single",
    checkOnly: true,
    type: "cellmodel",
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
    pageSize: 8,
    paging: true,
    serverSidePaging: false,
    pageSizeCombo: false,
  },
  columns: [
    {
      text: "Product_Id",
      dataIndex: "ProductId",
      xtype: "gridcolumn",
      hidden: true,
    },
    { text: "Art Name", dataIndex: "ProductName", xtype: "gridcolumn", flex: 1 },
    {
      text: "Artist Name",
      dataIndex: "FirstName",
      xtype: "gridcolumn",
      flex: 1,
    },
    { text: "Art Description", dataIndex: "ArtDetails", xtype: "gridcolumn", flex: 1 },
    { text: "Category", dataIndex: "Category", xtype: "gridcolumn", flex: 1 },
    { text: "Price", dataIndex: "Price", xtype: "gridcolumn", flex: 1 },
    {
      text: "Buy",
      flex: 1,
      align: "center",
      renderer: function () {
        var id = Ext.id();
        Ext.defer(function () {
          new Ext.Button({
            text: "Buy",
            handler: function (btn, e) {
              //TODO Backend
            },
          }).render(document.body, id);
        }, 50);
        return Ext.String.format('<div id="{0}"></div>', id);
      },
    },
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
    //   {
    //     xtype: "label",
    //     html: "<h1>Art Gallery</h1>",
    //   },
    //   {
    //     xtype: "panel",
    //     margin: "5 5 5 5",
    //     width: "auto",
    //     height: 420,
    //     style: {
    //       background: "white",
    //       "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
    //     },
    //     scrollable: true,
    //     layout: {
    //       type: "table",
    //       tdAttrs: {
    //         style: {
    //           border: "3px solid black",
    //         },
    //       },
    //       columns: 3,
    //     },
    //     items: [
    //       {
    //         flex: 1,
    //         xtype: "image",
    //         width: 250,
    //         heigth: 250,
    //         src: "./project/images/1.jpg",
    //       },
    //       {
    //         flex: 1,
    //         xtype: "image",
    //         width: 250,
    //         heigth: 250,
    //         src: "./project/images/1.jpg",
    //       },
    //       {
    //         flex: 1,
    //         xtype: "image",
    //         width: 250,
    //         heigth: 250,
    //         src: "./project/images/3.jpg",
    //         cellCls: "highlight",
    //       },
    //       {
    //         flex: 1,
    //         xtype: "image",
    //         width: 250,
    //         heigth: 250,
    //         src: "./project/images/1.jpg",
    //       },
    //       {
    //         flex: 1,
    //         xtype: "image",
    //         width: 250,
    //         heigth: 250,
    //         src: "./project/images/3.jpg",
    //       },
    //       {
    //         flex: 1,
    //         xtype: "image",
    //         width: 250,
    //         heigth: 250,
    //         src: "./project/images/3.jpg",
    //       },
    //       {
    //         flex: 1,
    //         xtype: "image",
    //         width: 250,
    //         heigth: 250,
    //         src: "./project/images/3.jpg",
    //       },
    //       {
    //         flex: 1,
    //         xtype: "image",
    //         width: 250,
    //         heigth: 250,
    //         src: "./project/images/3.jpg",
    //       },
    //       {
    //         flex: 1,
    //         xtype: "image",
    //         width: 250,
    //         heigth: 250,
    //         src: "./project/images/3.jpg",
    //       },
    //     ],
    //   },
    homeGrid,
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
