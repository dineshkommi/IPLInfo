Ext.define("iplinfo.matchdata.matchView", {
    extend: "Ext.tree.Panel",
    xtype: "matchview",


    requiers: [
        "iplinfo.store.MatchStore"
    ],
    title: "Match Data",
    store: {
        type: "matchstore",
    },

    columns: [
        // {         
        //      xtype:"treecolumn",          
        //     text: "BATSMAN",
        //     dataIndex: "batsman"

        // }, {
        //     text: "BOWLER",
        //     dataIndex: "bowler"

        // }, {
        //     xtype:"treecolumn",
        //     text: "EXTRAS",
        //     dataIndex: "extras"

        // }, {
        //     text: "NON_STRIKER",
        //     dataIndex: "non_striker"

        // },{
        //     text:"RUNS",
        //     dataIndex:"runs"

        // },{
        //     text:"WICKET",
        //     dataIndex:"wicket"
        // }
        {
            xtype: "treecolumn",
            text: "1ST INNINGS",
            dataIndex: "1st innings",
            width: 250
        },
        {
            xtype: "treecolumn",
            text: "2ND INNINGS",
            dataIndex: "2nd innings",
            width: 250
        }
    ]
})