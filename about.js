Ext.create('Ext.data.Store', {
  id:'artistsStore',
  data: [
    { name:'Abhijeet', description: '20 year experience in drawing' },
    { name:'Mohan', description: 'Good at Quilling' },
    { name:'Shashank', description: 'Good at Drawing' },
    { name:'Rushabh', description: 'Unique Art Maker' },
    { name:'Sonal', description: '5 year experience' },
    { name:'Reema', description: 'Expert in free hand drawing' },
  ]
  });

var aboutUs = Ext.create("Ext.Container", {
    id: "aboutUs",
    height: '100%',
    scrollable: true,
    layout: {
      type: "vbox",
      align: "center",
    },
    items: [
      {
        xtype: 'label',
        cls: 'page-title',
        text: 'About Us'
      },
      {
        xtype: 'label',
        cls: 'centered-text',
        html: 'Art Tales brings together the artists and art lovers!<br/>Buy any piece of art you love and sell any piece of art you make!'
      },
      {
        xtype: 'label',
        cls: 'page-title',
        text: 'Our Artists'
      },
      {
        xtype: 'dataview',
        cls: 'artist-container',
        width: '100%',
        store: Ext.data.StoreManager.lookup('artistsStore'),
        tpl: new Ext.XTemplate(
            '<tpl for=".">',
                '<div class="thumb-wrap about-card">',
                '<h2 class="centered-text">{name}</h2>',
                '<img src="./project/images/nophoto.png"/>',
                '<p class="centered-text">{description}</p>',
                '</div>',
            '</tpl>'
        ),
        itemSelector: 'div.thumb-wrap',
        emptyText: 'No images available',
        "listeners": {
            "itemclick": function(item, record){
                alert('working');
            }
        }
    },
      // {
      //   xtype: "container",
      //   margin: "5 5 5 5",
      //   width: 300,
      //   height: 470,
      //   style: {
      //     background: "white",
      //     "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
      //   },
      //   layout: {
      //     type: "vbox",
      //     align: "center",
      //   },

      //   items: [
      //     {
      //       xtype: "label",
      //       html: "<h1>Helloooo!!</h1>",
      //       height: 50,
      //     },
      //     {
      //       flex: 1,
      //       xtype: "image",
      //       style: "border-radius:50%;border:1px solid black",
      //       width: 250,
      //       heigth: 250,
      //       src: "./project/images/nophoto.png",
      //     },
      //     {
      //       flex: 1,
      //       xtype: "label",
      //       html:
      //         "<h1 align='center'>Jack Kirtikar</h1><h2 align='center'>I am An Artist.</h2>",
      //     },
      //   ],
      // },
    ],
  });
