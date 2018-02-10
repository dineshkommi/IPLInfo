Ext.define("iplinfo.view.playersinfo.PlayersInfoView",
{
    extend:"Ext.grid.Panel",
    xtype:"playersinfoview",
    maxHeight:800,
    maxWidth:800,
    requires: [
      "iplinfo.store.PlayersInfoStore"
    ],

      title: 'Indian Premier League Players Information',

    store: {
        type: 'playersinfostore'
    },

    columns:[
        {
            text: "PLAYER NAME",
            dataIndex: "name",
            align:"center",
            flex:1
        },
        {
            text: "AGE",
            dataIndex: "age",
            align:"center",
            flex:1
        },
        {
            text: "MATCHES",
            dataIndex: "matches",
            align:"center",
            flex:1
        },
        {
            text: "TEAM NAME",
            dataIndex: "teamName",
            align:"center",
            flex:1,
           // hidden: true
        }
    ],  
    features:[{
        text:"teamName",
        ftype:"grouping",
        hideGroupedHeader: true,
    }]
})