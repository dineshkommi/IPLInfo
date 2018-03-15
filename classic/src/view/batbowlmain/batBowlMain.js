Ext.define("iplinfo.view.batbowlmain.batBowlMain",
{
    extend:"Ext.panel.Panel",
    xtype:"batbowlmain",
    controller:"batbowlController",
    items: [{
        xtype: 'panel',
        title: 'Stats',
        name: 'mypan',
        items: [{
            xtype: 'button',
            text: 'Batting',
            handler: 'battinghandler'
        }, {
            xtype: 'button',
            text: 'Bowling',
            handler: 'bowlinghandler'
        }, {
            xtype: 'panel',
            name: 'battingBowlingPanel'
        }]
    }]
});