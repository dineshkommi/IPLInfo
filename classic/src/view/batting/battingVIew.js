Ext.define("iplinfo.batting.BattingView", {
    extend: "Ext.grid.Panel",
    xtype: "battingview",
    height: 600,
    width: 900,
    requiers: [
        "iplinfo.store.BattingStore"
    ],
    title: "BATTING",
    store: {
        type: "battingstore"
    },
    columns: [
        {
            text: "POS",
            dataIndex: "pos",
            align: "center"
        }, {
            text: "PLAYER",
            dataIndex: "player",
            align: "center"
        }, {
            text: "MAT",
            dataIndex: "mat",
            align: "center"
        }, {
            text: "INNS",
            dataIndex: "Inns",
            align: "center"
        }, {
            text: "NO",
            dataIndex: "No",
            align: "center"
        }, {
            text: "RUNS",
            dataIndex: "Runs",
            align: "center"
        }, {
            text: "HS",
            dataIndex: "HS",
            align: "center"
        }, {
            text: "AVG",
            dataIndex: "Avg",
            align: "center"
        }, {
            text: "BF",
            dataIndex: "BF",
            align: "center"
        }, {
            text: "SR",
            dataIndex: "SR",
            align: "center"
        }, {
            text: "100",
            dataIndex: "100",
            align: "center"
        }, {
            text: "50",
            dataIndex: "50",
            align: "center"
        }, {
            text: "4S",
            dataIndex: "4s",
            align: "center"
        }, {
            text: "6S",
            dataIndex: "6s",
            align: "center"
        }

    ]
})