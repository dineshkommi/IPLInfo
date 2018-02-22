/**
 * This view is an example list of people.
 */
Ext.define('iplinfo.view.matches.Matches', {
    extend: 'Ext.tree.Panel',
    xtype: 'matchesview',
    height: 800,
    width: 800,
    reserveScrollbar: true,
    useArrows: true,
    rootVisible: false,
    multiSelect: true,
    singleExpand: true,
    requires: [
        'iplinfo.store.Ts'
    ],

    title: 'Indian Premier League Matches', 
    store: {
        fields:["match","batting","innings","bn","batsman","bowler"],

    proxy: {
        type: "ajax",
        url: "app/data/matches/match1.json",
        reader: {
            type: 'json',
            rootProperty: 'cric'
                }

    },
    autoLoad:true
    },
    columns:[{
        xtype: 'treecolumn',
        flex:1,
        text:"IPL Matches",
        dataIndex:"match",
        align:"left"   
    },{
        text:"BattingTeam",
        flex:1,
        dataIndex:"batting",
        align:"left"     
    },  
{
    text:"Innings",
    flex:1,
    dataIndex:"innings",
    align:"left"   
},{
    //xtype:"treecolumn",
    flex:1,
    text:"Ball Number",
    dataIndex:"bn",
    align:"left"
},{
    text:"Batsman",
    flex:1,
    dataIndex:"batsman",
    align:"left"
},{
    text:"Bowler",
    flex:1,
    dataIndex:"bowler",
    align:"left"
}
]
});



