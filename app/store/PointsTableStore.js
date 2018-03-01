Ext.define("iplinfo.store.PointsTableStore", {
    extend: "Ext.data.Store",
    alias: "store.pointstablestore",
    fields: [
        " team", "played", "won", "lost", "tied", "nr", "net", "pts", "season"
    ],
    proxy: {
        type: "rest",
        url: "app/data/PointsTable.json",
        reader: {
            type: "json",
            rootProperty: "pointstable"
        }

    },
    autoLoad: true
});