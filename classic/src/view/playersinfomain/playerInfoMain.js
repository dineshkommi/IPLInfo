Ext.define("iplinfo.view.playersinfomain.playerinfoMain",
{
    extend:"Ext.panel.Panel",
    xtype:"playersinfomain",
    controller:"playerInfoController",
    items: [{
        xtype: 'panel',
        title: 'TEAMS',
        name: 'teamPanel',
        defaults: {
            xtype: 'button',
            },
        items: [{
            text: 'RR',
            xtype: 'button',
            handler: 'teamhandler'
        }, {
            xtype: 'button',
            text: 'CSk',
            handler: 'teamhandler'
        }, {
            xtype: 'button',
            text: 'RCB',
            handler: 'teamhandler'
        }, {
            xtype: 'button',
            text: 'DD',
            handler: 'teamhandler'
        }, {
            xtype: 'button',
            text: 'SRH',
            handler: 'teamhandler'
        }, {
            xtype: 'button',
            text: 'KKR',
            handler: 'teamhandler'
        }, {
            xtype: 'button',
            text: 'KXIP',
            handler: 'teamhandler'
        }, {
            xtype: 'button',
            text: 'MI',
            handler: 'teamhandler'
        }, {
            xtype: "panel",
            name: "teamInfoPanel",

        }]
    }]
});