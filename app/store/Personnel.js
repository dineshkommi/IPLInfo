Ext.define('iplinfo.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'Teams'
    ],
    proxy: {
        type: 'rest',
        url: "app/data/teams.json",
        reader: {
            type: 'json',
            rootProperty: 'teams'
        }
    },
    autoLoad: true
});
