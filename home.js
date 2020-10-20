var ArtStore=Ext.create('Vistaar.data.DataStore', {
  storeId: 'ArtStore',
  fields:[ 'Artist_name', 'Art_name','Art_desc', 'Category', 'Price'],
  data: [
      { Artist_name: 'Lisa', Art_name: 'Monalisa',Art_desc: 'Fine oil painting on..',Category: 'Drawing', Price: '555' },
      { Artist_name: 'Bart', Art_name: "Da Vinci's Code",Art_desc: 'Fine oil painting on..',Category: 'Drawing', Price: '1234' },
      { Artist_name: 'Homer', Art_name: 'Jade island',Art_desc: 'Fine oil painting on..',Category: 'Drawing', Price: '1244' },
      { Artist_name: 'Marge', Art_name: 'Injustice', Art_desc: 'Fine oil painting on..',Category: 'Drawing',Price: '1254' },
      { Artist_name: 'Lisa', Art_name: 'Horizon zero Dawn',Art_desc: 'Fine oil painting on..',Category: 'Drawing', Price: '1224' },
      { Artist_name: 'Bart', Art_name: 'Ragnarock', Art_desc: 'Fine oil painting on..',Category: 'Drawing', Price: '5234' },
      { Artist_name: 'Homer', Art_name: 'New World', Art_desc: 'Fine oil painting on..',Category: 'Drawing', Price: '244' },
      { Artist_name: 'Lisa', Art_name: 'Guide post', Art_desc: 'Fine oil painting on..',Category: 'Drawing', Price: '5114' },
      { Artist_name: 'Bart', Art_name: 'Nen', Art_desc: 'Fine oil painting on..',Category: 'Drawing', Price: '534' },
      { Artist_name: 'Homer', Art_name: 'The Wrath of Asura', Art_desc: 'Fine oil painting on..',Category: 'Drawing', Price: '5244' }
  ]
});

var config = {
  title: 'Art Store',
  stateful: false,
  width: '80%',
  stateId: 'grid-1',
  cls: '',
  filterOnChange: true,
  sortOnChange: true,
  //forceFit:true,
  defaultColumnConfig: {
      sortable: true
  },
  store: Ext.data.StoreManager.lookup('ArtStore'),
  selModel: {
      mode: 'single',
      checkOnly: true,
      type: 'checkboxmodel',
      selectionCount: false,
      clearSelection: false,
      selectionOptions: false
  },
  
  
  
  plugins: [{
      ptype: 'inlinefilterbar'
  },],
  columns: [
      {text:'Art_name',dataIndex:'Art_name', xtype:'gridcolumn',flex:1},
      {text:'Artist_name',dataIndex:'Artist_name', xtype:'gridcolumn',flex:1},
      {text:'Art_desc',dataIndex:'Art_desc', xtype:'gridcolumn',flex:1},
      {text:'Category',dataIndex:'Category', xtype:'gridcolumn',flex:1},
      {text:'Price',dataIndex:'Price', xtype:'gridcolumn',flex:1},
     {
     text: 'Buy',
     flex:1,
     align: 'center',
     renderer: function() {
          var id = Ext.id();
          Ext.defer(function(){
              new Ext.Button({
                  text: 'Buy',
                  handler : function(btn, e) {
                      // do whatever you want here
                  }
              }).render(document.body, id);
          },50);
          return Ext.String.format('<div id="{0}"></div>', id);
      }
 }
  ]
};
var artistHomeGrid = Ext.create(Vistaar.grid.DataGrid, config);

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
    artistHomeGrid

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
