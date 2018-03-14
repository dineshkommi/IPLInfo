Ext.define("iplinfo.store.BattingStore", {
    extend: "Ext.data.Store",
    alias: "store.battingstore",
    
    fields: [
       "pos","player","mat","Inns","No","Runs","HS","Avg","BF","SR","100","50","4s","6s"
    ],

    proxy: {
        type: "rest",
        url: "app/data/batting.json",
        reader: {
            type: "json",
            rootProperty: "batting"
        }

    },
    autoLoad:true
});