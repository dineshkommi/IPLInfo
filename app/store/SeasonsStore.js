Ext.define('iplinfo.store.SeasonsStore', {
    extend: 'Ext.data.Store',

    alias: 'store.seasonsstore',
    
    fields: [
        'season', 'winner','runner','result','player'
    ],
    proxy: {
        type: 'rest',
        url:"app/data/seasons.json",
        reader: {
            type: 'json',
            rootProperty: 'seasons'
        }
    },
    autoLoad:true
});
