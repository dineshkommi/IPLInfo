Ext.define('iplinfo.view.match.matchController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.matchcontroller',

    onInnings1: function () {
        var matchview = this.lookupReference("inningsview")
        var matchgrid = Ext.create(
            {
                xtype: "matchgrid"
            }
        )
        var matchStore = matchgrid.getStore()
        matchStore.getProxy().setReader({
            type: 'json',
             rootProperty: 'innings[0]["1st innings"].deliveries'
        });
        Ext.Ajax.request({
            url: 'app/data/MatchData.json',
            success: function (response, opts) {
                var returnedData = Ext.decode(response.responseText);
                var matchData = returnedData.innings[0]["1st innings"].deliveries;
                Ext.Array.forEach(matchData, function (ballInfo) {
                    var ballNos = Object.keys(ballInfo);
                    var ballNo = ballNos[0];
                    matchStore.add({
                        overNo: parseInt(ballNo),
                        ballno: ballNo,
                        batsman: ballInfo[ballNo].batsman,
                        non_striker: ballInfo[ballNo].non_striker,
                        bowler: ballInfo[ballNo].bowler,
                        extras: ballInfo[ballNo].runs.extras,
                        total: ballInfo[ballNo].runs.total
                    });
                });
            }
        });
        matchview.removeAll()
        matchview.add(matchgrid)
    },
    onInnings2: function () {
        var matchview = this.lookupReference("inningsview")
        var matchgrid = Ext.create(
            {
                xtype: "matchgrid"
            }
        )
        var matchStore = matchgrid.getStore()
        matchStore.getProxy().setReader({
            type: 'json',
            rootProperty: 'innings[1]["2nd innings"].deliveries'
        });
        Ext.Ajax.request({
            url: 'app/data/MatchData.json',
            success: function (response, opts) {
                var returnedData = Ext.decode(response.responseText);
                var matchData = returnedData.innings[1]["2nd innings"].deliveries;
                Ext.Array.forEach(matchData, function (ballInfo) {
                    var ballNos = Object.keys(ballInfo);
                    var ballNo = ballNos[0];
                    matchStore.add({
                        overNo: parseInt(ballNo),
                        ballno: ballNo,
                        batsman: ballInfo[ballNo].batsman,
                        non_striker: ballInfo[ballNo].non_striker,
                        bowler: ballInfo[ballNo].bowler,
                        extras: ballInfo[ballNo].runs.extras,
                        total: ballInfo[ballNo].runs.total
                    });
                });
            }
        });
        matchview.removeAll()
        matchview.add(matchgrid)
    }
});