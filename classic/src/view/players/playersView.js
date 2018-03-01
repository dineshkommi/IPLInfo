Ext.define("iplinfo.players.playersView", {
    extend: "Ext.grid.Panel",
    xtype: "playersview",
    height: 600,
    width: 900,
    // style:"color:red",
    requiers: [
        "iplinfo.store.PlayersStore"
    ],
    title: "PLAYERS",
    store: {
        type: "playersstore"
    },
    columns: [
        {
            text: "NAME",
            dataIndex: "name",
            align: "center"
        }, {
            text: "AGE",
            dataIndex: "age",
            align: "center"
        }, {
            text: "MATCHES",
            dataIndex: "matches",
            align: "center"
        }, {
            text: "TEAM NAME",
            dataIndex: "Team Name",
            align: "center"
        }

    ],
    // listeners:{
    //     viewready: function(g){
    //         g.getView().getRow(1).style.color="#f30";
    //     }
    // }
});