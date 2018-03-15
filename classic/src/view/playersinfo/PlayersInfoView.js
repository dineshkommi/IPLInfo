Ext.define("iplinfo.view.playersinfo.PlayersInfoView",
    {
        extend: "Ext.grid.Panel",
        xtype: "playersinfoview",
        layout :"fit",
        height:600,
        width:1000,
        requires: [
            "iplinfo.store.PlayersInfoStore"
        ],

        title: 'Indian Premier League',

        store: {
            type: 'playersinfostore'
        },

        columns: [
            {
                text: "PLAYER NAME",
                dataIndex: "name",
                align: "center",

            },
            {
                text: "AGE",
                dataIndex: "age",
                align: "center",

            },
            {
                text: "MATCHES",
                dataIndex: "matches",
                align: "center",

            },
            {
                text: "TEAM NAME",
                dataIndex: "teamName",
                align: "center",

            },
            {
                text: "IMAGE",
                dataIndex: "image",

                renderer: function (value) {

                    return Ext.String.format("<img src='app/data/iplimages/{0}' height='150' width='150'/>", value);

                },
                flex:1,
                align: "center",
            }],
            
                viewConfig: { 
                    stripeRows: false, 
                    getRowClass: function(record) { 
                        return record.get('age') < 30
                          ? 'child-row' : 'adult-row'; 
                    } 
                } ,
    })