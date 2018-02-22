Ext.define('iplinfo.store.SeasonsStore', {
    extend: 'Ext.data.Store',

    alias: 'store.seasonsstore',
    storeId: "seasons",
    fields: [
        'season', 'winner', 'runner', 'result', 'player', "image"
    ],
    proxy: {
        type: 'rest',
        url: "app/data/seasons.json",
        reader: {
            type: 'json',
            rootProperty: 'seasons'
        }
    },
    autoLoad: true,
    groupField: 'winner'
});
