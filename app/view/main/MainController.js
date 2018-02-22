/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('iplinfo.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onclickFun: function (me) {
        console.log(arguments);
        if (me.text == "Most Runs") {
            var myPanel = Ext.ComponentQuery.query("[name=batpanel]")[0]
            var myGrid = Ext.create({ xtype: "BattingStat" })
            myPanel.add(myGrid)
        }
        if (me.text == "Most Fifites") {
            var grid = Ext.ComponentQuery.query("[xtype=BattingStat]")[0];
            var myStore = grid.getStore();
            myStore.sort("50", "DESC");
            // parentPanel.add(2, { xtype: 'BattingStat' });
            // parentPanel.remove(3)


        }
        if (me.text == "Most Centuries") {
            var grid = Ext.ComponentQuery.query("[xtype=BattingStat]")[0];
            var myStore = grid.getStore();
            myStore.sort("100", "DESC");

        }
        if (me.text == "Highest Stike Rate") {
            var grid = Ext.ComponentQuery.query("[xtype=BattingStat]")[0];
            var myStore = grid.getStore();
            myStore.sort("SR", "DESC");

        }
        if (me.text == "Most Fours") {
            var grid = Ext.ComponentQuery.query("[xtype=BattingStat]")[0];
            var myStore = grid.getStore();
            myStore.sort("4s", "DESC");
        }
        if (me.text == "Most Sixes") {
            var grid = Ext.ComponentQuery.query("[xtype=BattingStat]")[0];
            var myStore = grid.getStore();
            myStore.sort("6s", "DESC");
        }

    },

    searchPlayer: function (me) {
        var myPanel = Ext.ComponentQuery.query("[name=searchcenter]")[0]
        var myForm = Ext.ComponentQuery.query("[name=player]")[0]
        var formValue = myForm.getValue()
        me.text = formValue
        var myGrid = Ext.create({
            xtype: "playersinfoview"
        })
        var myStore = myGrid.getStore()
        myStore.filter([{
            property: "name",
            value: me.text
        }])
        myPanel.removeAll()
        myPanel.add(myGrid)
    },
    playerSelected: function (me, record) {
        var myPanel = Ext.ComponentQuery.query("[name=playerinfo]")[0];
        var data = record.data;

        var htmlText = '<h1> Player Name:' + data.player + '</h1>';

        myPanel.setHtml(htmlText);


        //  var val=myPanel.getValue()
        //  alert(val)
        // myPanel.getComponent(0).find('pos','pos');


    },
    playersinfo: function (me, record) {
        var myPanel = Ext.ComponentQuery.query("[name=playerinformation]")[0]
        var htmlText = "<b>Player Name: </b>" + record.data.name + "<br>" + "<b>Tean Name: </b>" + record.data.teamName + "<br>" + "<b>Match: </b>" + record.data.matches + "<br>" + "<b>AGE: </b>" + record.data.age + "<br>"
        myPanel.setHtml(htmlText)
    },
    onSeriesTooltipRender: function (tooltip, record, item) {
        tooltip.setHtml(record.get('winner') + ': ' + record.get('count') + ' Times Winner');
    },
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
        // bar chart
        var barchart = Ext.create("Ext.Panel",
            {
                xtype: 'basic-pie',
                items: [{
                    xtype: 'polar',
                    width: 400,
                    height: 700,
                    interactions: ['rotate', 'itemhighlight'],
                    store: newStore,
                    series: {
                        type: 'pie',
                        highlight: true,
                        angleField: 'times',
                        label: {
                            field: 'winner',
                            display: 'rotate'
                        },
                        donut: 30,
                        tooltip: {
                            trackMouse: true,
                            renderer: 'onSeriesTooltipRenderr'
                        }

                    }
                }]
            })
        myPanel.add(barchart)
    }



});

