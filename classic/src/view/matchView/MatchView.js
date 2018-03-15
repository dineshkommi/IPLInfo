
Ext.define("iplinfo.matchdata.matchView", {
    extend: "Ext.grid.Panel",
    xtype: "matchgrid",
    requiers: [
        "iplinfo.store.MatchStore"
    ],
    title: "Match Data",
    store: {
        type: "matchstore",
    },

    columns: [{

        text: "Over",
        dataIndex: "overNo",
        align: "center"

    }, {
        text: "Batsman",
        dataIndex: "batsman",
        align: "center"

    }, {

        text: "Ball Number",
        dataIndex: "ballNo",
        align: "center"

    }, {
        text: "Non_Striker",
        dataIndex: "non_striker",
        align: "center"

    }, {
        text: "Bowler",
        dataIndex: "bowler",
        align: "center"

    }, {
        text: "Extras",
        dataIndex: "extras",
        align: "center"
    }, {
        text: "Total",
        dataIndex: "total",
        align: "center"
    }

    ],
    features: [{
        id: 'group',
        ftype: 'grouping',
        groupHeaderTpl: '{name}',
        hideGroupedHeader: true,
        enableGroupingMenu: false
    }]
});