Ext.define('iplinfo.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    width: 700,

    requires: [
        'iplinfo.store.Personnel'
    ],

    title: 'IPL TEAMS',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'TEAMS', dataIndex: 'Teams', flex: 1, align: 'left' },
    ],
    listeners: {
        select: 'onItemSelected'
    }
});
