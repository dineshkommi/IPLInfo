
Ext.define("iplinfo.store.ChartStore", {
    extend: "Ext.data.Store",
    alias: "store.chartstore",
    fields: [
        'season', 'winner'
    ],

    proxy: {
        type: "rest",
        url: "app/data/seasons.json",
        reader: {
            type: "json",
            rootProperty: "seasons"
        }

    },
    autoLoad:true
}); 
