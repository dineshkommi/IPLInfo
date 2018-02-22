Ext.define("iplinfo.store.BattingStore", {
    extend: "Ext.data.Store",
    alias: "store.battingstore",
    storeId:"battingstore",
    fields: [
        {name:"pos",type:"number"},
        {name:"player",type:"string"},
        {name:"mat",type:"number"}, 
        {name:"Inns",type:"number"},
        {name:"No",type:"number"},
        {name:"Runs",type:"number"},
        {name:"HS",type:"number"},
        {name:"Avg",type:"number"},
        {name:"BF",type:"number"},
        {name:"SR",type:"number"},
        {name:"100",type:"number"},
        {name:"50",type:"number"},
        {name:"4s",type:"number"},
        {name:"6s",type:"number"}
    ],
    proxy: {
        type: "rest",
        url: "app/data/BattingStats.json",
        reader: {
            type: "json",
            rootProperty: "batting"
        }

    },
    autoLoad:true
});
