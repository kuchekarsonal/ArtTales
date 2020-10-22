//console.log(currentUserLoggedIn.firstName);
var respGetAll = ESApis.executeScript(
  "_getAllArtistArts_artgallery",
  ["paramCount", "params1"],
  [1, currentUserLoggedIn.email]
);

//console.log(JSON.parse(respGetAll.response).CallResponse);
var artistArtData = JSON.parse(respGetAll.response).CallResponse;
//console.log(artistArtData);
var myArtStore = Ext.create("Vistaar.data.DataStore", {
  storeId: "myArtStore",
  fields: ["ProductId", "ArtDetails", "ProductName", "Category", "Price"],
  data: artistArtData /* [
		  { ProductId:'1', Art_desc: 'Lisa', Art: 'Monalisa',Category: 'Drawing', Price: '555' },
		  { ProductId:'2',Art_desc: 'Bart', Art: "Da Vinci's Code",Category: 'Drawing', Price: '1234' },
		  { ProductId:'3',Art_desc: 'Homer', Art: 'Jade island',Category: 'Drawing', Price: '1244' },
		  { ProductId:'4',Art_desc: 'Marge', Art: 'Injustice',Category: 'Drawing', Price: '1254' },
		  { ProductId:'5',Art_desc: 'Lisa', Art: 'Horizon zero Dawn',Category: 'Drawing', Price: '1224' },
		  { ProductId:'6',Art_desc: 'Bart', Art: 'Ragnarock',Category: 'Drawing', Price: '5234' },
		  { ProductId:'7',Art_desc: 'Homer', Art: 'New World',Category: 'Drawing', Price: '244' },
		  { ProductId:'8',Art_desc: 'Lisa', Art: 'Guide post',Category: 'Drawing', Price: '5114' },
		  { ProductId:'9',Art_desc: 'Bart', Art: 'Nen',Category: 'Drawing', Price: '534' },
		  { ProductId:'10',Art_desc: 'Homer', Art: 'The Wrath of Asura',Category: 'Drawing', Price: '5244' }
	  ], */,
  paging: "local",
  pageSize: 5,
});

var obj = {
  chartConfig: {
    id: "CC1",

    popUpMode: false,
    chartConfig: {
      id: "myChartView",
      animation: true,
      flipXY: true,
      height: "50%",
      allowDuplicateValuesForCategoryAxis: false,

      chartType: "cartesian",
      containerId: "itemsContainer",

      axes: [
        {
          type: "category",
          position: "left",
          title: "Date",
          fields: ["year"],
          axisId: "axis2",
        },
        {
          type: "numeric",
          position: "bottom",
          title: "Sales",
          fields: ["Drawing_Sales", "Quilling_Sales"],
          axisId: "axis1",
        },
      ],
      series: [
        {
          type: "bar",
          xField: "year",
          yField: "Drawing_Sales",
          seriesId: "Drawing_Sales",
          title: "Drawing Sales",
          style: {},
          highlight: {
            fillStyle: "rgba(255, 255, 51, 1.0)",
            strokeStyle: "black",
          },
          label: {
            field: "Drawing_Sales",
            display: "Drawing Sales",
          },
          tooltip: {
            trackMouse: true,
            style: "background: #fff",
            renderer: function (toolTip, storeItem, item) {
              toolTip.setHtml(
                storeItem.get("year") + ": " + storeItem.get("Drawing_Sales")
              );
            },
          },
        },
        {
          type: "bar",
          xField: "year",
          yField: "Quilling_Sales",
          seriesId: "Quilling_Sales",
          title: "Quilling Sales",
          highlight: {
            fillStyle: "rgba(255, 255, 51, 1.0)",
            strokeStyle: "black",
          },
          label: {
            field: "Quilling_Sales",
            display: "Quilling Sales",
          },
          tooltip: {
            trackMouse: true,
            style: "background: #fff",
            renderer: function (toolTip, storeItem, item) {
              toolTip.setHtml(
                storeItem.get("year") + ": " + storeItem.get("Quilling_Sales")
              );
            },
          },
        },
      ],
      legend: true,
    },
    popUpWindowConfig: {
      title: "Custom Chart",
      modal: false,
      layout: {
        type: "fit",
      },
      autoShow: true,
      closeAction: "destroy",
    },
  },
  chartData: [
    {
      Quilling_Sales: 50,
      Drawing_Sales: 150,
      year: "2019",
      asp: 3,
    },
    {
      Quilling_Sales: 30,
      Drawing_Sales: 130,
      year: "2018",
      asp: 4.33,
    },
    {
      Quilling_Sales: 40,
      Drawing_Sales: 140,
      year: "2017",
      asp: 3.5,
    },
    {
      Quilling_Sales: 10,
      Drawing_Sales: 100,
      year: "2016",
      asp: 10,
    },
    {
      Quilling_Sales: 180,
      Drawing_Sales: 90,
      year: "2015",
      asp: 2.42,
    },
  ],
};

var barChart = VistaarCC.createCustomChart(obj.chartConfig, obj.chartData);

var popupFormConfig = {
  //xtype:'Ext.window.Window',
  title: "Add Art",
  draggable: false,
  resizable: false,
  height: 400,
  width: 700,
  modal: true,
  layout: { type: "vbox", align: "center" },
  items: [
    {
      xtype: "label",
      html: "<p><h2>Add Art Details</h2></p>",
    },
    {
      xtype: "form",
      margin: "10% 5 5 5",
      //title: 'Add Art',
      bodyPadding: 5,
      width: "80%",

      //url: 'submitURl',

      layout: { type: "vbox", align: "center" },

      // The fields

      items: [
        {
          fieldLabel: "Art Name",
          name: "Art Name",
          id: "artname",
          xtype: "textfield",
          width: "80%",
          allowBlank: false,
        },
        {
          fieldLabel: "Art Description",
          name: "Art Description",
          id: "artdesc",
          xtype: "textarea",
          width: "80%",
          allowBlank: false,
        },
        {
          fieldLabel: "Art Category",
          xtype: "combobox",
          width: "80%",
          editable: false,
          store: Ext.create("Ext.data.Store", {
            fields: ["abbr", "name"],
            data: [
              {
                abbr: "Drawing",
                name: "Drawing",
              },
              {
                abbr: "Quilling",
                name: "Quilling",
              },
            ],
          }),
          valueField: "abbr",
          displayField: "name",
          name: "Art Category",
          id: "artcategory",
          allowBlank: false,
        },
        {
          fieldLabel: "Price",
          name: "Price",
          width: "80%",
          id: "price",
          xtype: "numberfield",
          allowBlank: false,
        },
      ],

      // Reset and Submit buttons
      buttons: [
        {
          text: "Reset",
          handler: function () {
            this.up("form").getForm().reset();
          },
        },
        {
          text: "Submit",
          formBind: true,
          disabled: true,
          handler: function () {
            var form = this.up("form").getForm();
            if (form.isValid()) {
              var artname = Ext.getCmp("artname").getValue();
              var artdesc = Ext.getCmp("artdesc").getValue();
              var artcategory = Ext.getCmp("artcategory").getValue();
              var price = Ext.getCmp("price").getValue();
              //todo BACKEND
              var resp = ESApis.executeScript(
                "Addart",
                ["paramCount", "params2"],
                [
                  1,
                  {
                    ProductName: artname,
                    ArtDetails: artdesc,
                    EmailId: currentUserLoggedIn.email,
                    Price: price,
                    Category: artcategory,
                  },
                ]
              );
              console.log(resp);
              if (resp.status == "success") {
                //	Ext.Msg.alert("Alert", "Submitted Successfully");
                var esResp = resp.response;
                var esParse = JSON.parse(esResp);
                console.log(esParse.CallResponse);
                //Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
                // Ext.getCmp("itemsContainer").add(loginForm);
                Ext.Msg.alert("Success!", "Product item added successfully");
                artistGrid.addRecords(
                  {
                    ProductName: artname,
                    ArtDetails: artdesc,
                    Category: artcategory,
                    Price: price,
                  },
                  0
                );
                artistGrid.commitChanges();
              } else {
                Ext.Msg.alert("Alert", "Failed");
              }
            }
          },
        },
      ],
    },
  ],
};
var config = {
  filterOnChange: true,
  sortOnChange: true,
  //forceFit:true,
  width: "80%",
  defaultColumnConfig: {
    sortable: true,
  },
  store: Ext.data.StoreManager.lookup("myArtStore"),
  selModel: {
    mode: "multi",
    checkOnly: true,
    type: "checkidmodel",
    selectionCount: false,
    clearSelection: false,
    selectionOptions: false,
  },
  style: {
    background: "white",
    "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
  },

  plugins: [
    {
      ptype: "inlinefilterbar",
    },
    {
      ptype: "cellediting",
      clicksToEdit: 2,
      pluginid: "celEditing",
    },
  ],
  pagingConfig: {
    pageSize: 5,
    paging: true,
    serverSidePaging: false,
    pageSizeCombo: false,
  },
  columns: [
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
      editor: "textfield",
      flex: 1,
    },
    {
      text: "Art Description",
      dataIndex: "ArtDetails",
      xtype: "gridcolumn",
      editor: "textfield",
      flex: 1,
    },
    {
      text: "Category",
      dataIndex: "Category",
      xtype: "gridcolumn",
      editor: {
        xtype: "combobox",
        width: "80%",
        editable: false,
        store: Ext.create("Ext.data.Store", {
          fields: ["abbr", "name"],
          data: [
            {
              abbr: "Drawing",
              name: "Drawing",
            },
            {
              abbr: "Quilling",
              name: "Quilling",
            },
          ],
        }),
        valueField: "abbr",
        displayField: "name",
        name: "Art Category",
      },
      flex: 1,
    },
    {
      text: "Price",
      dataIndex: "Price",
      xtype: "numbercolumn",
      editor: "numberfield",
      flex: 1,
      renderer: function (value) {
        return "₹" + value;
      },
    },
    //       {
    //       text: 'Edit',
    //       flex:1,
    //       align: 'center',
    //      renderer: function() {
    //            var id = Ext.id();
    //            Ext.defer(function(){
    //                new Ext.Button({
    //                    text: 'Edit Item',
    //                    handler : function(btn, e) {
    //                        // do whatever you want here
    //                    }
    //               }).render(document.body, id);
    //           },50);
    //           return Ext.String.format('<div id="{0}"></div>', id);
    //      }
    //   },
    //    {
    //     text: 'Delete',
    //     flex:1,
    //     align: 'center',
    //     renderer: function() {
    //          var id = Ext.id();
    //          Ext.defer(function(){
    //              new Ext.Button({
    //                  text: 'Delete Item',
    //                  handler : function(btn, e) {
    //                      // do whatever you want here
    //                  }
    //              }).render(document.body, id);
    //          },50);
    //          return Ext.String.format('<div id="{0}"></div>', id);
    //      }
    // }
  ],
};

var artistGrid = Ext.create(Vistaar.grid.DataGrid, config);

var artistHomeGrid = Ext.create("Ext.Container", {
  id: "artistHome",
  scrollable: true,
  width: "auto",
  layout: {
    type: "vbox",
    align: "center",
  },
  items: [
    {
      xtype: "label",
      html: "<h1>My Art</h1>",
    },
    artistGrid,
    Ext.create("Ext.Container", {
      layout: "hbox",
      width: "80%",
      items: [
        {
          xtype: "label",
          flex: 6,
        },
        {
          xtype: "button",
          text: "Add Art",
          margin: "10 50% 5 5",
          flex: 1,
          handler: function () {
            var addArtPopup = Ext.create("Ext.window.Window", popupFormConfig);
            addArtPopup.show();
          },
        },
        {
          xtype: "button",
          text: "Save",
          margin: "10 50% 5 5",
          flex: 1,
          handler: function () {
            //BACKEND update JSON docs
            console.log(artistGrid.getUpdatedData());
            console.log(artistGrid.getUpdatedData().length);
            var updatedLength = artistGrid.getUpdatedData().length;
            var updatedData = artistGrid.getUpdatedData();
            for (var i = 0; i < updatedData.length; i++) {
              delete updatedData[i].id;
              updatedData[i].EmailId = currentUserLoggedIn.email;
            }
            console.log(updatedData);
            if (updatedLength != 0) {
              var resp = ESApis.executeScript(
                "_updateDoc_artgallery",
                ["paramCount", "params2"],
                [1, updatedData]
              );
              console.log(resp);
              var esResp = resp.response;
              var esParse = JSON.parse(esResp);
              console.log(esParse.CallStatus);
              if (esParse.CallStatus) {
                Ext.Msg.alert("Success", "Successfully Updated Data");
                artistGrid.commitChanges();
              } else {
                Ext.Msg.alert("Alert", "Failed to Save Changes");
              }
            } else {
              console.log("Nothing has been selected");
            }
          },
        },
        {
          xtype: "button",
          text: "Delete",
          margin: "10 50% 5 5",
          flex: 1,
          handler: function () {
            //TODO BACKEND

            var selectedRow = artistGrid.getSelection(false, true);
            var selectedArray = [];
            for (var i = 0; i < selectedRow.length; i++) {
              //For back end
              //selectedArray[i]=selectedRow[i].data.ProductId;
              selectedArray[i] = selectedRow[i].data.ProductId;
            }
            console.log(typeof selectedArray);

            if (true) {
              //Delete backend.  Don't make any changes
              var resp = ESApis.executeScript(
                "deleteArt_artgallery",
                ["paramCount", "params2"],
                [1, selectedArray]
              );
              console.log(resp);
              var esResp = resp.response;
              var esParse = JSON.parse(esResp);
              console.log(esParse.CallStatus);
              if (esParse.CallStatus == "success") {
                Ext.Msg.alert("Success!", "Product item deleted successfully");
                artistGrid.removeRecords(selectedRow);
                artistGrid.commitChanges();
              } else {
                Ext.Msg.alert("Alert", "Failed");
              }
            } else {
              console.log("Failed to Delete");
            }
          },
        },
        {
          xtype: "button",
          text: "Reset",
          margin: "10 50% 5 5",
          flex: 1,
          handler: function () {
            artistGrid.rejectChanges();
          },
        },
      ],
    }),
    {
      xtype: "label",
      margin: "10% 5 5 5",
      html: "<h3><p>Sales Statistics for last 5 years</p></h3>",
    },
    barChart,
  ],
});
