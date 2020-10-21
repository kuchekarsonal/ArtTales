//TODO Backend - Load data dynamically
Ext.create('Ext.data.Store', {
  id:'artistsStore',
  data: [
    { name:'Abhijeet', description: '20 year experience in drawing' },
    { name:'Mohan', description: 'Good at Quilling' },
    { name:'Shashank', description: 'Good at Drawing' },
    { name:'Rushabh', description: 'Unique Art Maker' },
    { name:'Sonal', description: '5 year experience' },
    { name:'Reema', description: 'Expert in free hand drawing' },
  ],
  pageSize: 3
  });

  var pagingBar = new Ext.PagingToolbar({
    pageSize: 3,
    store: Ext.data.StoreManager.lookup('artistsStore'),
    autoLoad: true
    });
    
    var panel= new Ext.Panel({
    items: {
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
      emptyText: 'No artists available',
      "listeners": {
          "itemclick": function(item, record){
              alert('Artist clicked');
          }
      },
      tbar:  new Ext.PagingToolbar({
        pageSize: 3,
        store: Ext.data.StoreManager.lookup('artistsStore'),
        autoLoad: true
        })
  },
    tbar : pagingBar
    });

var aboutUs = Ext.create("Ext.Container", {
    id: "aboutUs",
    height: '100%',
    scrollable: 'y',
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
        id: 'artist-dataview',
        cls: 'artist-container',
        width: '100%',
        store: Ext.data.StoreManager.lookup('artistsStore'),
        tpl: new Ext.XTemplate(
            '<tpl for=".">',
              '<tpl if="xindex &lt; this.getStart()+3">',
                '<div class="thumb-wrap about-card">',
                '<h2 class="centered-text">{name}</h2>',
                '<img src="./project/images/nophoto.png"/>',
                '<p class="centered-text">{description}</p>',
                '</div>',
              '</tpl>',
            '</tpl>',
            {
              startIndex: 1,
              getStart: function() {
                return this.startIndex;
            }
            }
        ),
        itemSelector: 'div.thumb-wrap',
        emptyText: 'No artists available',
        "listeners": {
            "itemclick": function(item, record){
                alert('Artist clicked');
            },          
        }
    },
    {
      xtype: 'button',
      text: 'View More',
      handler: function(){        
        var dv = Ext.getCmp('artist-dataview');

        if(Ext.data.StoreManager.lookup('artistsStore').getCount()-3 <= dv.tpl.startIndex + 3){
          this.hide();
        }

        dv.tpl.startIndex = dv.tpl.startIndex + 3;
        dv.refresh();
      }
    }
    ],
  });
