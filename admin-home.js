//-------------SAMPLE STORE FOR PURCHASE REPORTS--------------------

var simStore = Ext.create("Vistaar.data.DataStore", {
  storeId: "simpsonsStore",
  fields: [
    { name: "date", type: "date" },
    "artName",
    "artistName",
    { name: "price", type: "number" },
  ],
  data: [
    {
      date: "2020/04/22",
      artName: "Painting",
      artistName: "lisa",
      price: 5784,
    },
    {
      date: "2020/02/19",
      artName: "Quilled Basket",
      artistName: "bart",
      price: 544,
    },
    {
      date: "2020/02/19",
      artName: "Quilled Flower Pot",
      artistName: "homer",
      price: 456,
    },
    { date: "2020/05/19", artName: "Scenery", artistName: "marge", price: 159 },
    { date: "2020/10/19", artName: "Painting", artistName: "lisa", price: 514 },
    {
      date: "2020/05/19",
      artName: "Quilled Basket",
      artistName: "bart",
      price: 234,
    },
    {
      date: "2020/05/19",
      artName: "Quilled Flower Pot",
      artistName: "marge",
      price: 244,
    },
    {
      date: "2020/08/19",
      artName: "Painting",
      artistName: "lisa",
      price: 1124,
    },
    {
      date: "2020/06/19",
      artName: "Quilled Basket",
      artistName: "bart",
      price: 534,
    },
    {
      date: "2020/04/19",
      artName: "Quilled Flower Pot",
      artistName: "homer",
      price: 554,
    },
  ],
  paging: "local",
  pageSize: 4,
});

//-------------SAMPLE STORE FOR FEEDBACK--------------------
var respGetAll = ESApis.executeScript(
  "_getAllFeedback_artgallery",
  ["paramCount"],
  [0]
);
var feedbackData = JSON.parse(respGetAll.response).CallResponse;
var feedbackStore = Ext.create("Vistaar.data.DataStore", {
  storeId: "feedbackStore",
  fields: [
    "Message",
    "FirstName",
    "LastName",
    { name: "Date Created", type: "date" },
  ],
  data: feedbackData /* [
    {
      "Modified By": "ADMINISTRATOR",
      "EmailId": "asd",
      "Message": "asd",
      "FirstName": "asd",
      "Document Id": 491492,
      "Created By": "ADMINISTRATOR",
      "LastName": "asd",
      "Date Modified": "Tue, 20 Oct 2020 12:39:59 GMT",
      "Date Created": "Tue, 20 Oct 2020 12:39:59 GMT",
      "Subject": "asd",
      "RevisionId": 0,
      "MessageId": "2"
    }
  ], */,
  paging: "local",
  pageSize: 4,
});

//--------------SAMPLE BAR GRAPH------------------

obj = {
  chartConfig: {
    id: "cc2",
    popUpMode: false,
    chartConfig: {
      id: "myChartView",
      animation: false,
      allowDuplicateValuesForCategoryAxis: false,
      chartType: "cartesian",
      containerId: "itemsContainer",
      axes: [
        {
          type: "category",
          position: "bottom",
          title: "name",
          fields: ["name"],
          axisId: "axis2",
        },
        {
          type: "numeric",
          position: "left",
          title: "sales",
          fields: ["sales"],
          axisId: "axis1",
        },
      ],
      series: [
        {
          type: "bar",
          xField: "name",
          yField: "sales",
          seriesId: "sales",
          title: "sales",
          style: {},
          highlight: {
            fillStyle: "rgba(255, 115, 51, 1.0)",
            strokeStyle: "black",
          },
          label: {
            field: "sales",
            display: "sales",
          },
          tooltip: {
            trackMouse: true,
            style: "background: #fff",
            renderer: function (toolTip, storeItem, item) {
              toolTip.setHtml(
                storeItem.get("name") + ": " + storeItem.get("sales")
              );
            },
          },
        },
      ],
      legend: true,
    },
    popUpWindowConfig: {
      //"title": "Custom Chart",
      modal: false,
      layout: {
        type: "fit",
      },
      autoShow: true,
      closeAction: "destroy",
    },
  },
  simdata: [
    {
      name: "lisa",
      sales: 3,
    },
    {
      name: "marge",
      sales: 2,
    },
    {
      name: "bart",
      sales: 3,
    },
    {
      name: "homer",
      sales: 2,
    },
  ],
};
var hist = VistaarCC.createCustomChart(obj.chartConfig, obj.simdata);

//------------------GRID FOR PURCHASE REPORTS--------------------

var grid = Ext.create("Vistaar.grid.DataGrid", {
  //title:'Pruchase Reports',
  store: simStore,
  id: "d1",
  //forceFit:true,
  //autoSizeColumns: true,
  width: "80%",
  //flex: 1,
  //width: '99%',
  scrollable: true,
  //minWidth: '425',
  selModel: {
    type: "checkidmodel",
    mode: "MULTI",
    //checkOnly: true,
    //selectionCount: true,
    clearSelection: true,
    //selectionOptions: true
  },
  plugins: [
    {
      ptype: "inlinefilterbar",
    },
  ],
  pagingConfig: {
    paging: true,
    pageSize: 4,
    serverSidePaging: false,
  },
  columns: [
    {
      text: "Date",
      dataIndex: "date",
      xtype: "datecolumn",
      format: "d-m-Y",
      flex: 1,
    },
    {
      text: "Art Name",
      dataIndex: "artName",
      //id:'p1',
      flex: 1,
    },
    {
      text: "Artist Name",
      dataIndex: "artistName",
      flex: 1,
    },
    {
      xtype: "numbercolumn",
      //renderer: Ext.util.Format.usMoney,
      //currencySign: '₹',
      //text: 'Price',
      //dataIndex: 'price'
      text: "Price",
      dataIndex: "price",
      //xtype: 'gridcolumn',
      //flex: 1,
      renderer: function (value) {
        return "₹" + value;
      },
      flex: 1,
    },
  ],
});

//------------------GRID FOR FEEDBACK--------------------

var feedbackGrid = Ext.create("Vistaar.grid.DataGrid", {
  //title:'Feedback',
  store: feedbackStore,
  id: "d2",
  //autoSizeColumns: true,
  width: "80%",
  //flex: 1,
  //width: "95%",
  //forceFit:true,
  selModel: {
    type: "checkidmodel",
    mode: "MULTI",
    checkOnly: true,
    //selectionCount: true,
    clearSelection: true,
    //selectionOptions: true
  },
  plugins: [
    {
      ptype: "inlinefilterbar",
    },
  ],
  pagingConfig: {
    paging: true,
    pageSize: 4,
    serverSidePaging: false,
  },
  columns: [
    {
      text: "Feedback",
      dataIndex: "Message",
      flex: 1,
      //id: 'p1'
    },
    {
      text: "First Name",
      flex: 1,
      dataIndex:
        "FirstName" /*+ 'LastName',
  renderer: function (value, record) {
    var updated = record.get('LastName');
    return value + record.get('LastName');
  }*/,
    },
    {
      text: "Last Name",
      flex: 1,
      dataIndex: "LastName",
    },
    {
      text: "Date",
      dataIndex: "Date Created",
      xtype: "datecolumn",
      flex: 1,
      format: "d-m-Y",
    },
  ],
});

//---------------------MAIN CODE----------------------------

var adminHomeGrid = Ext.create("Ext.Container", {
  id: "admintablePic",
  width: "auto",
  flex: 1,
  layout: {
    type: "fit",
    align: "stretch",
  },
  // scrollable: false,
  items: [
    {
      xtype: "label",
      html: "<h1>Admin Art Gallery</h1>",
      flex: 1,
    },
    {
      xtype: "panel",
      margin: "5 10 10 10",
      width: "100%",
      height: 610,
      // scrollable: 'vertical',
      // flex: 1,
      style: {
        background: "white",
        "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
      },
      scrollable: true,
      layout: {
        type: "vbox",
        align: "middle",
      },
      items: [
        {
          xtype: "panel",
          //flex: 1,
          //autoWidth: true,
          //autoSize: true,
          border: false,
          width: "24%",
          layout: {
            type: "center",
            //align: 'stretch',
          },
          items: [
            {
              xtype: "label",
              //title: 'hi',
              html: "<h1>Purchase Report</h1>",
              flex: 1,
            },
          ],
        },
        {
          xtype: "panel",
          //flex: 1,
          //autoWidth: true,
          //autoSize: true,
          width: "40%",
          border: false,
          layout: {
            type: "fit",
            //align: 'stretch',
          },
          items: [grid],
        },
        {
          xtype: "panel",
          //flex: 1,
          //autoWidth: true,
          //autoSize: true,
          border: false,
          width: "24%",
          layout: {
            type: "center",
            //align: 'stretch',
          },
          items: [
            {
              xtype: "label",
              //title: 'hi',
              html: "<h1>Sales Chart</h1>",
              flex: 1,
            },
          ],
        },
        {
          xtype: "panel",
          //flex: 1,
          //autoWidth: true,
          //autoSize: true,
          border: false,
          width: "40%",
          layout: {
            type: "anchor",
            //align: 'stretch',
          },
          items: [hist],
        },
        {
          xtype: "panel",
          //flex: 1,
          //autoWidth: true,
          //autoSize: true,
          border: false,
          width: "24%",
          layout: {
            type: "center",
            //align: 'stretch',
          },
          items: [
            {
              xtype: "label",
              //title: 'hi',
              html: "<h1>Feedback for website</h1>",
              flex: 1,
            },
          ],
        },
        {
          xtype: "panel",
          //flex: 1,
          margin: "0 0 5 0",
          width: "40%",
          //autoWidth: true,
          border: false,
          layout: {
            type: "fit",
            //align: 'stretch',
          },
          items: [feedbackGrid],
        },
      ],
    },
  ],
});

var drawingGrid = Ext.create("Ext.Container", {
  id: "admindrawingPic",
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
  id: "adminquillingPic",
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
