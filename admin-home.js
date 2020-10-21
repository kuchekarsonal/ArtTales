//-------------SAMPLE STORE FOR PURCHASE REPORTS--------------------

var simStore=Ext.create('Vistaar.data.DataStore', {
	storeId: 'simpsonsStore',
	fields:[ 'date', 'artName', 'artistName', 'price'],
	data: [
		{ date: '19-02-2020', artName: 'Painting', artistName: 'lisa', price: 5784 },
		{ date: '19-02-2020', artName: 'Quilled Basket', artistName: 'bart', price: 544 },
		{ date: '19-02-2020', artName: 'Quilled Flower Pot', artistName: 'homer', price: 456 },
		{ date: '19-05-2020', artName: 'Scenery', artistName: 'marge', price: 159 },
		{ date: '19-10-2020', artName: 'Painting', artistName: 'lisa', price: 514 },
		{ date: '19-05-2020', artName: 'Quilled Basket', artistName: 'bart', price: 234 },
		{ date: '19-05-2020', artName: 'Quilled Flower Pot', artistName: 'marge', price: 244 },
		{ date: '19-08-2020', artName: 'Painting', artistName: 'lisa', price: 1124 },
		{ date: '19-06-2020', artName: 'Quilled Basket', artistName: 'bart', price: 534 },
		{ date: '19-04-2020', artName: 'Quilled Flower Pot', artistName: 'homer', price: 554 }
	]
});

//-------------SAMPLE STORE FOR FEEDBACK--------------------

var feedbackStore=Ext.create('Vistaar.data.DataStore', {
	storeId: 'feedbackStore',
	fields:[ 'date', 'feedback', 'username'],
	data: [
		{ date: '19-02-2020', feedback: 'Great product.', username: 'lisa'},
		{ date: '19-02-2020', feedback: 'Very beautifull product.', username: 'bart'},
		{ date: '19-02-2020', feedback: 'I liked the basket', username: 'homer'},
		{ date: '19-05-2020', feedback: 'Not good.', username: 'marge'},
		{ date: '19-10-2020', feedback: 'Great product.', username: 'lisa'},
		{ date: '19-05-2020', feedback: 'Very beautifull product.', username: 'bart'},
		{ date: '19-05-2020', feedback: 'I liked the basket', username: 'marge'},
		{ date: '19-08-2020', feedback: 'Great product.', username: 'lisa'},
		{ date: '19-06-2020', feedback: 'Very beautifull product.', username: 'bart'},
		{ date: '19-04-2020', feedback: 'I liked the basket', username: 'homer'}
	]
});

//--------------SAMPLE BAR GRAPH------------------

obj = {
    "chartConfig": {
			"id": "CC1",
			"popUpMode": false,
            "chartConfig": {
                id: "myChartView",
                "animation": false,
                "allowDuplicateValuesForCategoryAxis": false,
                "chartType": "cartesian",
                "containerId": "viewContainer",
                "axes": [{
                    "type": "category",
                    "position": "bottom",
                    "title": "name",
                    "fields": [
                        "name"
                    ],
                    "axisId": "axis2"
                }, {
                    "type": "numeric",
                    "position": "left",
                    "title": "sales",
                    "fields": [
                        "sales",
                    ],
                    "axisId": "axis1"
                }],
                "series": [{
                    "type": "bar",
                    "xField": "name",
                    "yField": "sales",
                    "seriesId": "sales",
                    "title": "sales",
                    style: {},
                    highlight: {
                        fillStyle: 'rgba(255, 115, 51, 1.0)',
                        strokeStyle: 'black'
                    },
                    label: {
                        field: 'sales',
                        display: 'sales'
                    },
                    tooltip: {
                        trackMouse: true,
                        style: 'background: #fff',
                        renderer: function(toolTip, storeItem, item) {
                            toolTip.setHtml(storeItem.get('name') + ': ' + storeItem.get('sales'));
                        }
                    }
                }],
                "legend": true
            },
            "popUpWindowConfig": {
                "title": "Custom Chart",
                "modal": false,
                "layout": {
                    "type": "fit"
                },
                "autoShow": true,
                "closeAction": "destroy"
            }
        },
        "simdata": [{
            'name': 'lisa',
            'sales': 3
        }, {
            'name': 'marge',
            'sales': 2
        }, {
            'name': 'bart',
            'sales': 3
        }, {
            'name': 'homer',
            'sales': 2
        }, ]  
};
var hist = VistaarCC.createCustomChart(obj.chartConfig, obj.simdata);

//------------------GRID FOR PURCHASE REPORTS--------------------

var grid = Ext.create('Vistaar.grid.DataGrid', {
		title:'Pruchase Reports',
		store: simStore,
		id:'d1',
		autoSizeColumns: true,
		//flex: 1,
		width: 'auto',
		//forceFit:true,		
		selModel: {
			type: 'checkidmodel',	
			mode: "MULTI",				
			checkOnly: true,
			selectionCount: true,
			clearSelection: true,
			selectionOptions: true
		},
		plugins: [
		{
			ptype:'inlinefilterbar',
		}],	
		columns: [{
			text: 'Date',
			dataIndex: 'date'
		},{
			text: 'Art Name',
			dataIndex: 'artName',
			//id:'p1'
		}, {
			text: 'Artist Name',
			dataIndex: 'artistName'
		}, {
			text: 'Price',
			dataIndex: 'price'
		}],
	});
	
//------------------GRID FOR FEEDBACK--------------------

var feedbackGrid = Ext.create('Vistaar.grid.DataGrid', {
		title:'Feedback',
		store: feedbackStore,
		id:'d2',
		//autoSizeColumns: true,
		flex: 1,
		forceFit:true,		
		selModel: {
			type: 'checkidmodel',	
			mode: "MULTI",				
			checkOnly: true,
			selectionCount: true,
			clearSelection: true,
			selectionOptions: true
		},
		plugins: [
		{
			ptype:'inlinefilterbar',
		}],	
		columns: [{
			text: 'Date',
			dataIndex: 'date'
		},{
			text: 'Feedback',
			dataIndex: 'feedback',
			id:'p1'
		}, {
			text: 'User Name',
			dataIndex: 'username'
		}],
	});

//---------------------MAIN CODE----------------------------

var adminHomeGrid = Ext.create("Ext.Container", {
    id: "admintablePic",
    //width: "auto",
	flex: 1,
    layout: {
      //type: "vbox",
      align: "stretch",
    },
    items: [
      {
        xtype: "label",
        html: "<h1>Admin Art Gallery</h1>",
		flex: 1,
      },
      {
        xtype: "panel",
        margin: "5 5 5 5",
        //width: "auto",
        //height: 420,
		flex: 1,
        style: {
          background: "white",
          "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
        },
        scrollable: true,
        layout: {
          align: 'stretch',
		  type: 'fit'
        },
        items: [
		grid,
		{
			xtype: "label",
			html: "<h2>Purchase reports</h2>",
			flex: 1,
		},
		hist,
		feedbackGrid
		],
      },
		/*{
			xtype: 'button',
			text : 'date selection',
			flex: 1,
			width: "100%",
			listeners: {
				click: function(){
				console.log('hello')
				}
			},
		}*/
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