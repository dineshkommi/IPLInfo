Ext.define('iplinfo.view.MatchMain.MatchMain', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-matchmain',
    controller: 'matchcontroller',

    items: [{
        xtype: "panel",
        title: "Match Info",
        region: "north",
        items: [{
            xtype: "button",
            text: "Innings",
            menu: [{
                text: "1st Innings",
                handler: "onInnings1"
            }, {
                text: "2nd Innings",
                handler: "onInnings2"
            }]
        }, {
            xtype: "panel",
            region: "center",              
            reference: "inningsview",
            height: 500,
            width: 800,
            layout:"fit"
        }]
    }]
});