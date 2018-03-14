Ext.define('iplinfo.view.batbowlcontroller.batBowlController', {
    extend: 'Ext.app.ViewController',
    alias:"controller.batbowlController",
    
    battinghandler: function () {
        var battingBowlingPanel = Ext.ComponentQuery.query("[name=battingBowlingPanel]")[0]
        battingBowlingPanel.removeAll();
        battingBowlingPanel.add({
            xtype: 'battingview'
        })
    },
    bowlinghandler: function () {
        var battingBowlingPanel = Ext.ComponentQuery.query("[name=battingBowlingPanel]")[0]
        battingBowlingPanel.removeAll();
        battingBowlingPanel.add({
            xtype: 'bowlingview'
        })
    }

});