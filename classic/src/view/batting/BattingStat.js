
Ext.define("iplinfo.batting.BattingStat", {
    extend: "Ext.grid.Panel",
    xtype: "BattingStat",
    height: 400,
    width: 1000,
    marigin: "40 40 40 40",
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
            flex: 1,
            align: "center"
        }, {
            text: "PLAYER",
            dataIndex: "player",
            flex: 0,
            align: "center"
        }, {
            text: "MAT",
            dataIndex: "mat",
            flex: 1,
            align: "center"
        }, {
            text: "INNS",
            dataIndex: "Inns",
            flex: 1,
            align: "center"
        }, {
            text: "NO",
            dataIndex: "No",
            flex: 1,
            align: "center"
        }, {
            text: "RUNS",
            dataIndex: "Runs",
            flex: 1,
            align: "center"
        }, {
            text: "HS",
            dataIndex: "HS",
            flex: 1,
            align: "center"
        }, {
            text: "AVG",
            dataIndex: "Avg",
            flex: 1,
            align: "center"
        }, {
            text: "BF",
            dataIndex: "BF",
            flex: 1,
            align: "center"
        }, {
            text: "SR",
            dataIndex: "SR",
            flex: 1,
            align: "center"
        }, {
            text: "100",
            dataIndex: "100",
            flex: 1,
            align: "center"
        }, {
            text: "50",
            dataIndex: "50",
            flex: 1,
            align: "center"
        }, {
            text: "4S",
            dataIndex: "4s",
            flex: 1,
            align: "center"
        }, {
            text: "6S",
            dataIndex: "6s",
            flex: 1,
            align: "center"
        }

    ],
    listeners: [
        {
            select: 'playerSelected'
        }
    ]
})

