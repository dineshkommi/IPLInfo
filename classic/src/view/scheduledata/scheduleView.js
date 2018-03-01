Ext.define("iplinfo.players.scheduleView", {
    extend: "Ext.grid.Panel",
    xtype: "scheduleview",
    height: 600,
    width: 1200,
    requiers: [
        "iplinfo.store.ScheduleStore"
    ],
    title: "SCHEDULE & RESULTS",
    store: {
        type: "schedulestore"
    },
    columns: [
        {
            text: "DATE",
            dataIndex: "date",
            align: "center",
            width: 100
        }, {
            text: "MATCH",
            dataIndex: "match",
            align: "center",
            width: 300
        }, {
            text: "VENUE",
            dataIndex: "venue",
            align: "center",
            width: 300
        }, {
            text: "TIME",
            dataIndex: "time",
            align: "center",
            width: 100
        }, {
            text: "RESULT",
            dataIndex: "result",
            align: "center"
        }

    ],



});