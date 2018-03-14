Ext.define('iplinfo.view.searchcontroller.searchController', {
    extend: 'Ext.app.ViewController',
    alias: "controller.searchController",

    searchHandler: function (me) {
        var spanel = Ext.ComponentQuery.query("[name=searchPanel]")[0]
        var myForm = Ext.ComponentQuery.query("[name=searchName]")[0]
        var myview = Ext.create({
            xtype: "teamview",
            listeners: {
                select: "selectHandler"
            }
        })
        myview.getStore().filter([
            {
                property: "name",
                value: myForm.getValue()
            }
        ])
        spanel.add(myview);
    },


    selectHandler: function (me, record) {
        var playerData = record.data;
        var battingInfo = null;
        var personalInfo = Ext.ComponentQuery.query("[name=east]")[0]
        Ext.Ajax.request({
            url: 'app/data/batting.json',

            success: function (response, opts) {
                var obj = Ext.decode(response.responseText);
                obj.batting.forEach(function (batting) {
                    if (playerData.name == batting.player) {
                        battingInfo = batting;
                        
                        var myHtml = "<b>Player Name-</b>" + record.data.name + "<br><b>BEST-</b>" + battingInfo.BF;
                        personalInfo.setTitle(record.data.name);
                        personalInfo.setHtml(myHtml);
                    }
                })
            },
            failure: function (response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });

    },
});