/**
 * This view is an example list of people.
 */
Ext.define('iplinfo.view.seasons.SeasonsView', {
    extend: 'Ext.grid.Panel',
    xtype: 'seasonsview',
    maxHeight: 800,
    maxWidth: 800,
    requires: [
        "iplinfo.store.SeasonsStore"
    ],

    title: 'Indian Premier League Seasons', align: "center",

    store: {
        type: 'seasonsstore'
    },

    columns: [
        { text: 'SEASON', align: "center", dataIndex: 'season', flex: 1 },
        {
            dataIndex: 'image',
            renderer: function(value){
                return Ext.String.format("<img src='app/iplimage/{0}' height='32' width='62'/>",value);
            },
            flex:0
        },
        { text: 'WINNER', align: "center", dataIndex: 'winner', flex: 1 },
        { text: 'RUNNERS-UP', align: "center", dataIndex: 'runner', flex: 1 },
        { text: 'FINAL RESULT', align: "center", dataIndex: 'result', flex: 1 },
        { text: 'PLAYER OF THE SERIES', align: "center", dataIndex: 'player', flex: 1 }
      
    ]
    
});



