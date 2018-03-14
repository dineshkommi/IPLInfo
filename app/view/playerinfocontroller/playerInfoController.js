Ext.define('iplinfo.view.playerinfocontroller.playerInfoController', {
    extend: 'Ext.app.ViewController',
    alias:"controller.playerInfoController",
    teamhandler: function (me) {
        // console.log("button clicked")
        var team = Ext.ComponentQuery.query("[name=teamInfoPanel]")[0]
        var myGrid = Ext.create({
            xtype: "teamview"
        });
        var myStore = myGrid.getStore();
        myStore.filter([
            {
                property: "Team Name",
                value: me.text
            }
        ]);
        team.removeAll();
        team.add(myGrid);
    },
})    