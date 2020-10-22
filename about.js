/*var respGetAll = ESApis.executeScript(
  "getArtistDataForAbout_artgallery",
  ["paramCount"],
  [0]
);*/

//var artistData = JSON.parse(respGetAll.response).CallResponse;
//console.log(artistData);

//TODO Backend - Load data dynamically
Ext.create("Ext.data.Store", {
  id: "artistsStore",
  data: [
    {
      "Modified By": "ADMINISTRATOR",
      EmailId: "kuchekar@gmail.com",
      FirstName: "Sonal",
      Account_Type: "Artist",
      "Document Id": 490490,
      "Created By": "ADMINISTRATOR",
      LastName: "kuchekar",
      "Date Modified": "Tue, 20 Oct 2020 11:59:14 GMT",
      "Date Created": "Tue, 20 Oct 2020 11:59:14 GMT",
      RevisionId: 0,
      Password: "1234",
    },
    {
      "Modified By": "ADMINISTRATOR",
      EmailId: "asd@sf.as",
      FirstName: "asd",
      Account_Type: "Artist",
      "Document Id": 490494,
      "Created By": "ADMINISTRATOR",
      LastName: "asd",
      "Date Modified": "Wed, 21 Oct 2020 04:50:22 GMT",
      "Date Created": "Wed, 21 Oct 2020 04:50:22 GMT",
      RevisionId: 0,
      Password: "1234",
    },
  ],
});

var aboutUs = Ext.create("Ext.Container", {
  id: "aboutUs",
  height: "100%",
  width: "100%",
  scrollable: "y",
  layout: {
    type: "anchor",
    align: "center",
  },
  items: [
    {
      xtype: "container",
      layout: {
        type: "vbox",
        align: "center",
      },
      width: "100%",
      items: [
        {
          xtype: "label",
          anchor: "100%",
          cls: "page-title",
          text: "About Us",
        },
        {
          xtype: "label",
          cls: "centered-text",
          html:
            "Art Tales brings together the artists and art lovers!<br/>Buy any piece of art you love and sell any piece of art you make!",
        },
      ],
    },

    {
      xtype: "label",
      cls: "page-title",
      text: "Our Artists",
      width: "100%",
      style: "display:inline-block;text-align:center",
    },
    {
      xtype: "dataview",
      id: "artist-dataview",
      cls: "artist-container",
      width: "100%",
      store: Ext.data.StoreManager.lookup("artistsStore"),
      tpl: new Ext.XTemplate(
        '<tpl for=".">',
        '<tpl if="xindex &lt; this.getStart()+3">',
        '<div class="thumb-wrap about-card">',
        '<h2 class="centered-text">{FirstName} {LastName}</h2>',
        '<img src="./project/images/nophoto.png"/>',
        //'<p class="centered-text">{description}</p>', //TODO Later - Get some appropriate metric to display along with the list, like products published or categories he is selling
        "</div>",
        "</tpl>",
        "</tpl>",
        {
          startIndex: 1,
          getStart: function () {
            return this.startIndex;
          },
        }
      ),
      itemSelector: "div.thumb-wrap",
      emptyText: "No artists available",
      listeners: {
        itemclick: function (item, record) {
          alert("Artist clicked");
        },
      },
    },

    {
      xtype: "container",
      layout: {
        type: "vbox",
        align: "center",
      },
      width: "100%",
      items: [
        {
          xtype: "button",
          text: "View More",
          id: "view-more-btn-about",
          handler: function () {
            var dv = Ext.getCmp("artist-dataview");

            if (
              Ext.data.StoreManager.lookup("artistsStore").getCount() - 3 <=
              dv.tpl.startIndex + 3
            ) {
              this.hide();
            }

            dv.tpl.startIndex = dv.tpl.startIndex + 3;
            dv.refresh();
          },
        },
      ],
      listeners: {
        afterrender: function () {
          if (Ext.data.StoreManager.lookup("artistsStore").getCount() <= 3) {
            Ext.getCmp("view-more-btn-about").hide();
          }
        },
      },
    },
  ],
});
