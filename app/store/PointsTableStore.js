Ext.define('iplinfo.store.PointsTableStore', {
    extend: 'Ext.data.Store',

    alias: 'store.pointstablestore',

    fields: [
        {
            name: "team"
        },
        {
            name: "played"
        },
        {
            name: "won"
        },
        {
            name: "lost"
        },
        {
            name: "tied"
        },
        {
            name: "nr"
        },
        {
            name: "net"
        },
        {
            name: "pts"
        },
        {
            name: "season"
        }
    ],
    proxy: {
        type: 'rest',
        url: "app/data/PointsTable.json",
        reader: {
            type: 'json',
            rootProperty: 'pointstable'
        }
    },sorters: [{
        property: 'season',
        direction: 'DESC'
    }],
    groupField: "season",
    
    autoLoad: true
});
