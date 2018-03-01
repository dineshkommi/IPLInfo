Ext.define("iplinfo.batting.bowlingView", {
    extend: "Ext.grid.Panel",
    xtype: "bowlingview",
    height: 600,
    width: 900,
    requiers: [
        "iplinfo.store.BowlingStore"
    ],
    title: "BOWLING",
    store: {
        type: "bowlingstore"
    },
    columns: [
        {
            text: "TN",
            dataIndex: "tn",
            align: "center"
        }, {
            text: "NAME",
            dataIndex: "name",
            align: "center"
        }, {
            text: "MAT",
            dataIndex: "mat",
            align: "center"
        }, {
            text: "INNg",
            dataIndex: "inng",
            align: "center"
        }, {
            text: "OVER",
            dataIndex: "over",
            align: "center"
        }, {
            text: "RUN",
            dataIndex: "run",
            align: "center"
        }, {
            text: "WKT",
            dataIndex: "wkt",
            align: "center"
        }, {
            text: "BBI",
            dataIndex: "bbi",
            align: "center"
        }, {
            text: "AVG",
            dataIndex: "avg",
            align: "center"
        }, {
            text: "ECO",
            dataIndex: "eco",
            align: "center"
        }, {
            text: "SR",
            dataIndex: "sr",
            align: "center"
        }, {
            text: "4W",
            dataIndex: "4w",
            align: "center"
        }, {
            text: "5W",
            dataIndex: "5w",
            align: "center"
        },
    ]
})