Ext.define('iplinfo.view.main.MainController',
    {
        extend: 'Ext.app.ViewController',
        alias: 'controller.main',

        mihandler: function (me) {
            var team = Ext.ComponentQuery.query("[name=mipanel]")[0];
            var gridView = Ext.create
                ({
                    xtype: "playersview",
                });
            gridView.getStore().filter
                ([
                    {
                        property: 'Team Name',
                        value: me.text
                    }
                ]);
            team.removeAll();
            team.add(gridView);
        },

        injectPanel: function (me) {
            var stats = Ext.ComponentQuery.query("[name=panel]")[0]
            stats.removeAll();
            if (me.text == 'Batting') {
                stats.add
                    ({
                        xtype: "battingview"
                    })
            } else {
                stats.add
                    ({
                        xtype: "bowlingview"
                    })
            }
        },

        playerInfoClicked: function (me, record) {
            var playerInfo = Ext.ComponentQuery.query("[name=east]")[0]
            var playerInformation = "<b>Player Name</b>" + record.data.name + "<br><b>Age</b>" + record.data.age
                + "<br><b>Matches</b>" + record.data.matchesplayerInfo.setHtml(playerInformation);
        },

        playerInfo: function (me) {
            var miPanel = Ext.ComponentQuery.query("[name=mipanel]")[0];
            var searchText = Ext.ComponentQuery.query("[name=searchText]")[0];
            var myGrid = Ext.create
                ({
                    xtype: "playersview",
                })
            myGrid.getStore().filter
                ([
                    {
                        property: 'name',
                        value: searchText.getValue()
                    }
                ]);
            miPanel.add(myGrid);
        },
        mySearch: function (me) {
            var myPanel = Ext.ComponentQuery.query("[name=searchpanel]")[0]
            var myForm = Ext.ComponentQuery.query("[name=player]")[0]
            var myGrid = Ext.create
                ({
                    xtype: "playersview",
                    listeners:
                        [{
                            select: 'playerSelected'
                        }]
                })
            myGrid.getStore().filter
                ([
                    {
                        property: 'name',
                        value: myForm.getValue()
                    }
                ]);
            myPanel.add(myGrid);
        },

        playerSelected: function (me, record) {
            var playerData = record.data;
            var battingInformation = null;
            Ext.Ajax.request
                ({
                    url: 'app/data/batting.json',
                    success: function (response, opts) {
                        var obj = Ext.decode(response.responseText);
                        obj.batting.forEach(function (batting) {
                            if (playerData.name == batting.player) {
                                battingInformation = batting;
                                var playerInfo = Ext.ComponentQuery.query("[name=east]")[0]
                                var playerInformation = "<b>Player Name-</b>" + record.data.name +
                                    "<br><b>Age-</b>" + record.data.age + "<br><b>Matches-</b>" + record.data.matches
                                    + "</br><b>Runs-</b>" + battingInformation.Runs + "</br><b>HS-</b>" + battingInfo.HS;
                                playerInfo.setTitle(record.data.name);
                                playerInfo.setHtml(playerInformation);
                            }
                        })

                    },

                    failure: function (response, opts) {
                        console.log('server-side failure with status code ' + response.status);
                    }
                });
        },

        onSeriesTooltipRenderr: function (tooltip, record, item) {
            tooltip.setHtml(record.get('winner') + ': ' + record.get('times') + ' Times Winner');
        },

        init: function () {
            this.listen
                ({
                    store:
                        {
                            '#seasons':
                                {
                                    load: 'seasonLoad'
                                }
                        }
                });
        },

        seasonLoad: function (store, records, options) {
            var myPanel = Ext.ComponentQuery.query("[name=barpanel]")[0]

            var newStore = Ext.create('Ext.data.Store',
                {
                    fields: ["winner", "times"],
                });
            console.log(store.getGroups())

            store.getGroups().each(function (item) {
                newStore.add({
                    winner: item.getGroupKey(),
                    times: item.count()
                });
            });

            var barchart = Ext.create("Ext.Panel",
                {
                    xtype: 'test-pie',
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
                            tooltip:
                                {
                                    trackMouse: true,
                                    renderer: 'onSeriesTooltipRenderr'
                                }

                        }
                    }]
                })
            myPanel.add(barchart)
        },

        treeHandler: function (me) {
            var myPanel = Ext.ComponentQuery.query("[name=treepanel]")[0]
            var myGrid = Ext.create({
                xtype: "matchview",
            })
            myPanel.add(myGrid);
        },

        seasonHandler: function (me) {
            var myPanel = Ext.ComponentQuery.query("[name=seasonPanel]")[0]
            var myGrid = Ext.create({
                xtype: "seasonview"
            })
            myPanel.add(myGrid);
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

        teamSelector: function (me, record) {
            var myPanel = Ext.ComponentQuery.query("[name=teamtcenter]")[0]
            var seasonStore = Ext.data.StoreManager.lookup("playersstore")
            if (record.data.name === "Mumbai Indians") {
                myPanel.removeAll()
                var myteam = Ext.create({
                    xtype: "playersview"
                });
                myPanel.add(myteam)
            }
            if (record.data.name === "Chennai Super Kings") {
                myPanel.removeAll()
                var myteam = Ext.create({
                    xtype: "playersview"
                });
                myPanel.add(myteam)
            }
            if (record.data.name === "Delhi Daredevils") {
                myPanel.removeAll()
                var myteam = Ext.create({
                    xtype: "playersview"
                });
                myPanel.add(myteam)
            }
        }
    });

