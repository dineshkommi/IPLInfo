Ext.define("iplinfo.store.MatchStore", {
    extend: "Ext.data.Store",
    alias: "store.matchstore",

    fields: [
        {
            name: "overNo",
            type: "number",
            // rootVisible: false
        },
        {
            name: "batsman",
            type: "string"
        },
        {
            name: "ballNo",
            type: "string"
        },
        {
            name: "non_striker",
            type: "string"
        },
        {
            name: "bowler",
            type: "string"
        },
        {
            name: "extras",
            type: "string"
        },
        {
            name: "total",
            type: "string"
        }],

    // proxy: {
    //     type: "ajax",
    //     url: "app/data/MatchData.json",
    //     reader: {
    //         type: "json",
    //         rootProperty: 'innings[0]["1st innings"].deliveries'
    //     }

    // },
    groupField:"overNo",
    
});