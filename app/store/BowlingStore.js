
Ext.define("iplinfo.store.BowlingStore", {
    extend: "Ext.data.Store",
    alias: "store.bowlingstore",
    fields: [
       "tn","name","mat","inng","over","run","wkt","bbi","avg","eco","sr","4w","5w"
    ],

    proxy: {
        type: "rest",
        url: "app/data/bowling.json",
        reader: {
            type: "json",
            rootProperty: "bowling"
        }

    },
    autoLoad:true
}); 
