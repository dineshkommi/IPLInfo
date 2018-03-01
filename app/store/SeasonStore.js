Ext.define("iplinfo.store.SeasonStore", {
    extend: "Ext.data.Store",
    alias: "store.seasonstore",
    storeId: "seasonstore",
    fields: [
        'season', 'winner', 'runner', 'result', 'player'
    ],

    proxy: {
        type: "rest",
        url: "app/data/seasonsData.json",
        reader: {
            type: "json",
            rootProperty: "seasons"
        }
    },
    autoLoad: true,
    groupField: "winner"
}); 