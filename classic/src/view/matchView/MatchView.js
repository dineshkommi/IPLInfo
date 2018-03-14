Ext.define("iplinfo.view.matchView.MatchView",{
    
    extend:"Ext.tree.Panel",
    title: 'Matches',
    xtype:"matchview",    
    width: 200,
    height: 500,
    requires: [
        "iplinfo.store.1matchStore"
      ],
    store: {
        type: 'matchstore'
    },  
   
   });