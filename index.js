function loginCallback() {

  Ext.Loader.loadScriptsSync('./project/home.js');
  Ext.Loader.loadScriptsSync('./project/login-signup.js');
  Ext.Loader.loadScriptsSync('./project/artist-home.js');
  Ext.Loader.loadScriptsSync('./project/contact.js');
  Ext.Loader.loadScriptsSync('./project/about.js');

  //breadcrumb
  Ext.define("Myapp.sample.store.mainMenu", {
    extend: "Ext.data.TreeStore",
    root: {
      text: "Home",
      expanded: true,
      iconCls: 'x-fa fa-home',
      containerName: 'myhomeGrid',
      children: [
        {
          text: "My Art",
          expanded: true,
          iconCls: 'x-fa fa-paint-brush',
          containerName: 'artistHomeGrid',
          children: [
            {
              text: "Drawing",
              expanded: true,
              iconCls: 'x-fa fa-pencil',
              filerString: 'Drawing',
              left: true,
              containerName: 'myhomeGrid',
              
            },
            {
              text: "Quilling",
              expanded: true,
              iconCls: 'x-fa fa-paper-plane',
              left: true,
              filerString: 'Quilling',
              containerName: 'myhomeGrid'
            }
          ]
        },
        {
          leaf: true,
          text: "About Us",
          iconCls: 'x-fa fa-user',
          expanded: true,
          containerName: 'aboutUs'
        },
        {
          leaf: true,
          text: "Feedback",
          iconCls: 'x-fa fa-comments',
          expanded: true,
          containerName: 'contactUs'
        },
      ],
    },
  });
  var breadcrumbStore = Ext.create("Myapp.sample.store.mainMenu", {});
  //end breadcrumb

  //footer
  var footer = Ext.create("Ext.container.Container", {
    width: "100%",
    //flex: 0.5,
    height: '50',
    layout: {
      type: "hbox",
      pack: "center",
    },
    style: {
      // borderColor:'#000000',

      backgroundColor: "#fff",
    },
    items: [
      {
        xtype: "label",
        text: "My Art © 2020",
      },
    ],
  });

  var headerContainer = Ext.create("Ext.container.Container", {
    id: "headerContainer",
    //flex: 1,
    height: '100',
    width: "100%",
    margin: 5,
    style: {
      borderBottom: "2px solid black",
      background: "none",
    },
    layout: {
      type: "hbox",
      align: "middle",
      pack: "end",
    },

    items: [
      {
        xtype: "label",
        html: "<h1>Art Tales</h1>",
      },
      { xtype: "tbspacer", flex: 1 },
      {
        xtype: "toolbar",
        id: 'header-toolbar',
        border: false,
        items: [
          {
            xtype: "tbseparator",
            height: 40,
          },
          {
            xtype: "button",
            id: "login-button",
            text: "Login",
            cls: "toolbar-button",
            height: 45,
            margin: "0 8 0 0",
            listeners: {
              click: function () {
                Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
                Ext.getCmp("itemsContainer").add(loginForm);
              },
            },
          },
          {
            xtype: 'label',
            id: 'logged-in-name',
            hidden: true,
            text: 'Logged in'
          },
          {
            xtype: "tbseparator",
            height: 40,
          },
          {
            xtype: "button",
            id: "sign-up-button",
            text: "Sign Up",
            cls: "toolbar-button",
            height: 45,
            listeners: {
              click: function () {
                Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
                Ext.getCmp("itemsContainer").add(signUpForm);
              },
            },
          },
          {
            xtype: "button",
            id: "logout-button",
            text: "Logout",
            hidden: true,
            cls: "toolbar-button",
            height: 45,
            listeners: {
              click: function () {
                Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
                Ext.getCmp("itemsContainer").add(loginForm);
                Ext.getCmp("logged-in-name").hide();
                Ext.getCmp("logout-button").hide();
                Ext.getCmp("sign-up-button").show();
                Ext.getCmp("login-button").show();
                //TODO Later - If sessions are used later, clear them here.
              },
            },
          },
        ],
      },
    ],
  });

  var itemsContainer = Ext.create("Ext.Panel", {
    id: "itemsContainer",
    scrollable: true,
    //flex: 9,
    flex: 1,
    width: "100%",
    margin: 1,
    style: {
      borderBottom: "2px solid black",
      background: "none",
    },

    dockedItems: [
      {
        //Step 2
        xtype: "breadcrumb",
        dock: "top",
        id: "bread-crumb",
        margin: 0,
        store: breadcrumbStore,
        showIcons: true,
        viewModel: true,
        bind: {
          selection: '{selectedNode}'
        },
        listeners: {
          selectionchange: function(){
            var containerToLoad = this.getSelection().data.containerName;
            console.log(containerToLoad);
            if(this.getSelection().data.filerString)
      homeGrid.addFilters({property: 'Category', operator: 'eq', value:this.getSelection().data.filerString} );    
            
            Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
            Ext.getCmp("itemsContainer").add(window[containerToLoad]);
          }
        }
      },
    ],
    items: [myhomeGrid],
  });

  var subMain = Ext.create("Ext.container.Container", {
    //flex: 9,
    flex: 1,
    height: "100%",
    titleAlign: "center",
    layout: "vbox",
    items: [headerContainer, itemsContainer, footer],
  });

  var toolbar = Ext.create("Ext.toolbar.Toolbar", {
    plugins: {
      responsive: true,
    },
    layout: { type: "vbox", stretch: true },
    dock: "left",
    height: "100%",
    width: 100,
    style: "background:#15151e;",
    id: "toolbar",
    margin: 1,
    vertical: true,
    listeners: {
      focusleave: function () {
        Ext.getCmp("Drawing").hide(); //focus leave means tab switching
        Ext.getCmp("Quilling").hide();
      },
    },
    items: [
      {
        cls: "toolbar-button",
        height: 60,
        iconCls: 'x-fa fa-paint-brush',
      },

      { xtype: "tbseparator" },
      {
        cls: "toolbar-button",
        //iconCls: "logo-icon",
        html: "Home",
        listeners: {
          click: function () {
            //Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
            //Ext.getCmp("itemsContainer").add(myhomeGrid);
            Ext.getCmp("bread-crumb").getViewModel().set('selectedNode', breadcrumbStore.findNode('text', 'Home'));
          },
        },
      },
      { xtype: "tbseparator" },
      {
        xtype: "button",
        cls: "toolbar-button",
        iconAlign: "top",
        html: "My Art",
        menu: [],
        listeners: {
          click: function () {
            Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
            if (Ext.getCmp("Drawing").isHidden()) {
              Ext.getCmp("Drawing").show();
              Ext.getCmp("Quilling").show();
            } else {
              Ext.getCmp("Drawing").hide();
              Ext.getCmp("Quilling").hide();
            }
            Ext.getCmp("bread-crumb").getViewModel().set('selectedNode', breadcrumbStore.findNode('text', 'My Art'));
          },
          mouseover: function () {
            //console.log("Mouse Enter");
            //this.showMenu();
            Ext.getCmp("Drawing").show();
            Ext.getCmp("Quilling").show();
          },
        },
      },
      {
        xtype: "button",
        id: "Drawing",
        cls: "toolbar-button",
        hidden: true,
        text: "Drawing",
        listeners: {
          click: function () {
            //Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
            //Ext.getCmp("itemsContainer").add(drawingGrid);
            Ext.getCmp("bread-crumb").getViewModel().set('selectedNode', breadcrumbStore.findNode('text', 'Drawing'));
            homeGrid.addFilters({property: 'Category', operator: 'eq', value:"Drawing"} );            
          },
        },
      },
      {
        hidden: true,
        id: "Quilling",
        cls: "toolbar-button",
        xtype: "button",
        text: "Quilling",
        listeners: {
          click: function () {
            //Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
            //Ext.getCmp("itemsContainer").add(quillingGrid);
            Ext.getCmp("bread-crumb").getViewModel().set('selectedNode', breadcrumbStore.findNode('text', 'Quilling'));
            homeGrid.addFilters({property: 'Category', operator: 'eq', value:"Quilling"} ); 
          },
        },
      },

      { xtype: "tbseparator" },
      {
        cls: "toolbar-button",
        iconAlign: "top",
        text: "About Us",
        listeners: {
          click: function () {
            //Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
            //Ext.getCmp("itemsContainer").add(aboutUs);
            Ext.getCmp("bread-crumb").getViewModel().set('selectedNode', breadcrumbStore.findNode('text', 'About Us'));
            //console.log("AboutUs click");
          },
        },
      },
      { xtype: "tbseparator" },
      {
        cls: "toolbar-button",
        iconAlign: "top",
        text: "Feedback",
        listeners: {
          click: function () {
            //Ext.getCmp("itemsContainer").removeAll((autoDestroy = false));
            //Ext.getCmp("itemsContainer").add(contactUs);
            Ext.getCmp("bread-crumb").getViewModel().set('selectedNode', breadcrumbStore.findNode('text', 'Feedback'));
          },
        },
      },
      { xtype: "tbseparator" },
    ],
  });

  var mainContainer = Ext.create("Ext.container.Container", {
    id: "mainContainer",
    height: '100%',
    plugins: {
      responsive: true,
    },
    layout: "hbox",
    scrollable: true,
    items: [toolbar, subMain],
  });

  Ext.getCmp("viewContainer").add(mainContainer);
}
