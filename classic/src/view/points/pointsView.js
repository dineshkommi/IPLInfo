Ext.define("iplinfo.points.pointsView", {
    extend: "Ext.grid.Panel",
    xtype: "pointsview",
    height: 600,
    width: 900,
    requiers: [
        "iplinfo.store.PointsTableStore"
    ],
    title: "Points Table",
    store: {
        type: "pointstablestore"
    },
    columns: [
        {
            text: "TEAM",
            dataIndex: "team",
            align: "center"
        }, {
            text: "PLAYED",
            dataIndex: "played",
            align: "center"
        }, {
            text: "WON",
            dataIndex: "won",
            align: "center"
        }, {
            text: "LOST",
            dataIndex: "lost",
            align: "center"
        }, {
            text: "TIED",
            dataIndex: "tied",
            align: "center"
        }, {
            text: "NR",
            dataIndex: "nr",
            align: "center"
        }, {
            text: "NET",
            dataIndex: "net",
            align: "center"
        }, {
            text: "PTS",
            dataIndex: "pts",
            align: "center"
        }, {
            text: "SEASON",
            dataIndex: "season",
            align: "center"
        }

    ]
})