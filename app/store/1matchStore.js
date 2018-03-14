Ext.define("iplinfo.store.1matchStore", {
    extend: "Ext.data.TreeStore",
    alias: "store.matchstore",
    root: {
        expanded: true,
        text: 'Matches',
        children: [{
            text: 'Antarctica',
            leaf: true
            }],
    }
    // proxy: {
    //     type: "rest",
    //     url: "app/data/1match.json",
    //     reader: {
    //         type: "json",
    //         rootProperty: "innings"
    //     }

    // },
    // autoLoad:true   
})