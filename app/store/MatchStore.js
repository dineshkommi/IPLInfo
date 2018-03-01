Ext.define("iplinfo.store.MatchStore", {
    extend: "Ext.data.TreeStore",
    alias: "store.matchstore",

    fields: [
        // "batsman","bowler","extras","non_striker","runs"
        "1st innings", "2nd innings"
    ],
    proxy: {
        type: "rest",
        url: "app/data/MatchData.json",
        reader: {
            type: "json",
            rootProperty: "innings"
        }

    },
    autoLoad: true

}); 