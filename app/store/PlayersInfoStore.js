Ext.define('iplinfo.store.PlayersInfoStore', {
    extend: 'Ext.data.Store',

    alias: 'store.playersinfostore',
    
    fields:[
        {
            name:"name"
        },
        {
            name:"age"
        },
        {
            name:"matches"
        },
        {
            name:"teamName"
        }
    ],
    proxy: {
        type: 'rest',
        url:"app/data/PlayersInfo.json",
        reader: {
            type: 'json',
            rootProperty: 'players'
        }
    },
    groupField:"teamName",
    autoLoad:true
});
