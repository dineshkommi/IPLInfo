/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('iplinfo.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    // onItemSelected: function (sender, record) {
    //     Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    // },

    // onConfirm: function (choice) {
    //     if (choice === 'yes') {
    //         // 
    //     }
    // // },   

    // searchHandler: function (me) {
    //     var spanel = Ext.ComponentQuery.query("[name=searchPanel]")[0]
    //     var myForm = Ext.ComponentQuery.query("[name=searchName]")[0]
    //     var myview = Ext.create({
    //         xtype: "teamview",
    //         listeners: {
    //             select: "selectHandler"
    //         }
    //     })
    //     myview.getStore().filter([
    //         {
    //             property: "name",
    //             value: myForm.getValue()
    //         }
    //     ])
    //     spanel.add(myview);
    // },


    // selectHandler: function (me, record) {
    //     var playerData = record.data;
    //     var battingInfo = null;        
    //     Ext.Ajax.request({
    //         url: 'app/data/batting.json',

    //         success: function (response, opts) {
    //             var obj = Ext.decode(response.responseText);
    //             obj.batting.forEach(function (batting) {
    //                 if (playerData.name == batting.player) {
    //                     battingInfo = batting;                        
    //                     var personalInfo = Ext.ComponentQuery.query("[name=east]")[0]
    //                     var myHtml = "<b>Player Name-</b>" + record.data.name+"<br><b>BEST-</b>" + battingInfo.BF;                       
    //                     personalInfo.setTitle(record.data.name);
    //                     personalInfo.setHtml(myHtml);
    //                 }
    //             })
    //        },
    //         failure: function (response, opts) {
    //             console.log('server-side failure with status code ' + response.status);
    //         }
    //     });

    // },



    onSeriesTooltipRenderr: function (tooltip, record, item) {
        tooltip.setHtml(record.get('winner') + ': ' + record.get('times') + ' Times Winner');
    },
    init: function () {
        this.listen({
            store: {

                '#seasons': {
                    load: 'seasonLoad'
                }
            }
        });
    },
    seasonLoad: function (store, records, options) {
        var myPanel = Ext.ComponentQuery.query("[name=barpanel]")[0]
        // new Stroe
        var newStore = Ext.create('Ext.data.Store', {
            fields: ["winner", "times"],
        });


        store.getGroups().each(function (item) {
            newStore.add({
                winner: item.getGroupKey(),
                times: item.count()
            });
        });
        //         // bar chart
        //         var barchart = Ext.create("Ext.Panel",
        //             {
        //                 xtype: 'basic-pie',
        //                 items: [{
        //                     xtype: 'polar',
        //                     width: 400,
        //                     height: 700,
        //                     interactions: ['rotate', 'itemhighlight'],
        //                     store: newStore,
        //                     series: {
        //                         type: 'pie',
        //                         highlight: true,
        //                         angleField: 'times',
        //                         label: {
        //                             field: 'winner',
        //                             display: 'rotate'
        //                         },
        //                         donut: 10,
        //                         tooltip: {
        //                             trackMouse: true,
        //                             renderer: 'onSeriesTooltipRenderr'
        //                         }

        //                     }
        //                 }]
        //             })
        //         myPanel.add(barchart)
    },

    barSelector: function (me, record) {
        var myPanel = Ext.ComponentQuery.query("[name=chartcenter]")[0]
        var newStore = Ext.create('Ext.data.Store',
            {
                fields: ["winner", "times"],
                storeId: 'piestore'
            });
        var seasonStore = Ext.data.StoreManager.lookup("seasonstore")
        seasonStore.setGroupField("winner")
        seasonStore.getGroups().each(function (item) {
            newStore.add({
                winner: item.getGroupKey(),
                times: item.count()
            });
        });
        if (record.data.name === "bar") {
            myPanel.removeAll()
            var mybar = Ext.create({
                xtype: "basic-bar"
            });
            mybar.items.get(0).bindStore(newStore);
            myPanel.add(mybar)
        }
        if (record.data.name === "pie") {
            myPanel.removeAll()
            var mybar = Ext.create({
                xtype: "basic-pie"
            });
            mybar.items.get(0).bindStore(newStore);
            myPanel.add(mybar)
        }
        if (record.data.name === "line") {
            myPanel.removeAll()
            var mybar = Ext.create({
                xtype: "lineview"
            });
            mybar.items.get(0).bindStore(newStore);
            myPanel.add(mybar)
        }
    },
});
