/**
 * This view is an example list of people.
 */
Ext.define('iplinfo.view.points.PointsView', {
    extend: 'Ext.grid.Panel',
    xtype: 'pointsview',
    maxHeight:800,
    maxWidth:800,
    requires: [
      "iplinfo.store.PointsTableStore"
    ],

     title: 'Indian Premier League Points Table',

    store: {
        type: 'pointstablestore'
    },

    columns: [
        {
            text: "TEAM",
            dataIndex: "team",
            align:"center",
            flex: 1
        },
        {
            text: "PLAYED", 
            dataIndex: "played",
            align:"center",
            flex: 1
        },
        {
            text: "WON",
            dataIndex: "won",
            align:"center",
            flex: 1
        },
        {
            text: "LOST",
            dataIndex: "lost",
            align:"center",
            flex: 1
        },
        {
            text: "TIED",
            dataIndex: "tied",
            align:"center",
            flex: 1
        },
        {
            text: "N/R",
            dataIndex: "nr",
            align:"center",
            flex: 1
        },
        {
            text: "NET RR",
            dataIndex: "net",
            align:"center",
            flex: 1
        },
        {
            text: "PTS",
            dataIndex: "pts",
            align:"center",
            flex: 1
        },
        {
            text:"SEASON",
            dataIndex:"season",
            align:"center",
            flex:1
        }
    ],
    features:[{
        text:"season",
        ftype: 'grouping',
       // groupHeaderTpl : '{season}',
         hideGroupedHeader: true,
    }]
});
