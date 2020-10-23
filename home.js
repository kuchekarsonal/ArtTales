var respGetAll = ESApis.executeScript(
  "_getAllArts_artgallery",
  ["paramCount"],
  [0]
);
//console.log(respGetAll);
//console.log(JSON.parse(respGetAll.response).CallResponse);
var artData = JSON.parse(respGetAll.response).CallResponse;                                //*************** *
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
  data: artData ,                                                                         //*************** *
  // [
  //   {
  //     "ProductId": "1",
  //     "ArtDetails": "Lisa",
  //     "ProductName": "Monalisa",
  //     "Category": "Drawing",
  //     "EmailId": "kuchekar@gmail.com",
  //     "Price": "555"
  //   },
  //   {
  //     "ProductId": "2",
  //     "ArtDetails": "Bart",
  //     "ProductName": "Da Vinci Code",
  //     "Category": "Drawing",
  //     "EmailId": "kuchekar@gmail.com",
  //     "Price": "1234"
  //   },
  //   {
  //     "ProductId": "3",
  //     "ArtDetails": "Homer",
  //     "ProductName": "Jade island",
  //     "Category": "Drawing",
  //     "EmailId": "kuchekar@gmail.com",
  //     "Price": "1244"
  //   },
  //   {
  //     "ProductId": "4",
  //     "ArtDetails": "Marge",
  //     "ProductName": "Injustice",
  //     "Category": "Drawing",
  //     "EmailId": "kuchekar@gmail.com",
  //     "Price": "1254"
  //   },
  //   {
  //     "ProductId": "5",
  //     "ArtDetails": "Lisa",
  //     "ProductName": "Horizon zero Dawn",
  //     "Category": "Drawing",
  //     "EmailId": "kuchekar@gmail.com",
  //     "Price": "1224"
  //   },
  //   {
  //     "ProductId": "6",
  //     "ArtDetails": "Bart",
  //     "ProductName": "Ragnarock",
  //     "Category": "Quilling",
  //     "EmailId": "kuchekar@gmail.com",
  //     "Price": "5234"
  //   },
  //   {
  //     "ProductId": "7",
  //     "ArtDetails": "Homer",
  //     "ProductName": "New World",
  //     "Category": "Quilling",
  //     "EmailId": "kuchekar@gmail.com",
  //     "Price": "244"
  //   },
  //   {
  //     "ProductId": "8",
  //     "ArtDetails": "Lisa",
  //     "ProductName": "Guide post",
  //     "Category": "Drawing",
  //     "EmailId": "kuchekar@gmail.com",
  //     "Price": "5114"
  //   },
  //   {
  //     "ProductId": "9",
  //     "ArtDetails": "Bart",
  //     "ProductName": "Nen",
  //     "Category": "Drawing",
  //     "EmailId": "kuchekar@gmail.com",
  //     "Price": "534"
  //   },
  //   {
  //     "ProductId": "10",
  //     "ArtDetails": "Homer",
  //     "ProductName": "The Wrath of Asura",
  //     "Category": "Quilling",
  //     "EmailId": "kuchekar@gmail.com",
  //     "Price": "5244"
  //   }
  // ] ,
  paging: "local",
  pageSize: 15,
});

var orderStore = Ext.create("Vistaar.data.DataStore", {                 
  storeId: "orderStore",
  fields: [
    "OrderId",
    "ProductId",
    "Artistname",
    "ProductName",
    "Category",
    "Price",
    "PurchaseDate",

  ],
  //TODO Backend 
  data:                                                                         //*************** *
  [
    {
    "OrderId":'24',
      "ProductId": "1",
      
      "ProductName": "Monalisa",
      "Category": "Drawing",
    "Artistname": "kuchekar@gmail.com",
      "Price": "555"
    },
    {
      "OrderId":'244',
      "ProductId": "2",
      
      "ProductName": "Da Vinci Code",
      "Category": "Drawing",
      "Artistname": "kuchekar@gmail.com",
      "Price": "1234"
    },
  ] ,
  paging: "local",
  pageSize: 15,
});

var config = {
  //title: 'Art Store',
  id:'homeGrid',
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
   
  ],
};
var homeGrid = Ext.create(Vistaar.grid.DataGrid, config);

var orderConfig = {
  //title: 'Art Store',
  id:'orderGrid',
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
  store: Ext.data.StoreManager.lookup("orderStore"),
  

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
      text: "OrderId",
      dataIndex: "OrderId",
      xtype: "gridcolumn",
      flex: 1,
    },
    {
      text: "ProductId",
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
      dataIndex: "Artistname",
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
    { text: "Purchase Date", dataIndex: "PurchaseDate", xtype: "datecolumn", flex: 1 },
  ],
};
var orderGrid = Ext.create(Vistaar.grid.DataGrid, orderConfig);

var myhomeGrid = Ext.create("Ext.Container", {
  id: "tablePic",
  width: "auto",
  scrollable: true,
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
            var temp=[];
            var sum=0;
            //Backend: Adding data to the Order Entity
            if (JSON.stringify(currentUserLoggedIn) !== "{}") {                        //*************** *
              var selectedData = homeGrid.getSelection().length;
              if(!selectedData)
              Ext.Msg.alert("Alert","You have not selected any Product !");
              else{
                    var artList=homeGrid.getSelection();
                    
                    homeGrid.clearSelections();
                    for (var artData = 0; artData < selectedData; artData++) {
                      delete artList[artData].data.id;
                      temp[artData]=artList[artData].data;
                      console.log(temp);
                      sum+=parseInt(temp[artData].Price);


                      //Attributes Required :ProductId,Price,EmailId,OrderId
                  }
                 
                  var buyPopup=Ext.create('Ext.window.Window', {
                    //xtype:'Ext.window.Window',
                      title: 'Order List',
                    draggable: false,
                      resizable: false,
                      height: 400,
                      width: 700,
                      modal:true,
                      layout: {type:'vbox', align:'center'},
                      buttons:[{text:"Ok",handler: function(){buyPopup.destroy();}}
                        
                      ],

                      
                      items: [  
                          {
                          xtype:'label',
                          html:'<p><h2>Product List</h2></p>'
                        },
                        {
                          xtype:'datagrid',
                          //title: 'Order List',
                          pagingConfig: {
                            pageSize: 10,
                            paging: true,
                            serverSidePaging: false,
                            pageSizeCombo: false,
                          },
                          store: Ext.create("Ext.data.Store", {
                            fields: ["ProductName", "Price"],
                            data: temp,
                            paging: "local",
                            pageSize: 10,
                            
                          }),
                          columns: [
                            { text: 'ProductName', dataIndex: 'ProductName' ,flex:1},
                            { text: 'Price', dataIndex: 'Price', flex: 1 ,
                            renderer: function (value) {
                              return "₹" + value;
                            },},
                          ],
                          height: 200,
                          width: 600
                        },
                        {
                          xtype:'container',
                          width:600,
                          layout:'hbox',
                          items:[
                            {xtype:'label',html:'<h3>Total Amount : </h3>',flex:1},{
                              xtype:'label',html:'<h3> ₹'+sum+'</h3>',flex:1
                            }
                          ]
                        }

                      ]});
                  buyPopup.show();

              }
            } else {
              Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
              Ext.getCmp("itemsContainer").add(loginForm);
            }
           },
        },
      ],
    }),
  orderGrid
  
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
