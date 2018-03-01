Ext.define("iplinfo.Seasonview.SeasonView", {
    extend: "Ext.grid.Panel",
    xtype: "seasonview",
    height: 600,
    width: 900,
    requiers: [
        "iplinfo.store.SeasonStore"
    ],
    title: "SEASONS",
    store: {
        type: "seasonstore"
    },
    columns: [
        {
            text: "SEASON",
            dataIndex: "season",
            align: "center"
        }, {
            text: "WINNER",
            dataIndex: "winner",
            align: "center"
        }, {
            text: "RUNNER",
            dataIndex: "runner",
            align: "center"
        }, {
            text: "RESULT",
            dataIndex: "result",
            align: "center"
        }, {
            text: "PLAYER",
            dataIndex: "player",
            align: "center"
        }

    ],

});
