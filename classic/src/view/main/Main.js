Ext.define('iplinfo.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    requires:
        [
            'Ext.plugin.Viewport',
            'Ext.window.MessageBox',
            'iplinfo.view.main.MainController',
            'iplinfo.view.main.MainModel',
            'iplinfo.view.main.List',
            "iplinfo.matchdata.matchView"
        ],

    controller: 'main',
    viewModel: 'main',
    ui: 'navigation',
    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    header:
        {
            layout:
                {
                    align: 'stretchmax'
                },
            title:
                {
                    bind:
                        {
                            text: '{name}'
                        },
                    flex: 0
                },
            iconCls: 'fa-th-list'
        },

    tabBar:
        {
            flex: 1,
            layout:
                {
                    align: 'stretch',
                    overflowHandler: 'none'
                }
        },

    responsiveConfig:
        {
            tall:
                {
                    headerPosition: 'top'
                },
            wide:
                {
                    headerPosition: 'left'
                }
        },

    defaults:
        {
            bodyPadding: 20,
            tabConfig:
                {
                    plugins: 'responsive',
                    responsiveConfig:
                        {
                            wide:
                                {
                                    iconAlign: 'left',
                                    textAlign: 'left'
                                },
                            tall:
                                {
                                    iconAlign: 'top',
                                    textAlign: 'center',
                                    width: 120
                                }
                        }
                }
        },

    items: [{
        title: 'Team Info',
        iconCls: 'fa-info',
        items: [{
            xtype: "panel",
            title: "TEAMS",
            name: "pan",
            items: [{
                xtype: "button",
                text: "MI",
                handler: "mihandler"
            }, {
                xtype: "button",
                text: "CSK",
                handler: "mihandler"
            }, {
                xtype: "button",
                text: "RR",
                handler: "mihandler"

            }, {
                xtype: "button",
                text: "DD",
                handler: "mihandler"

            }, {
                xtype: "button",
                text: "KKR",
                handler: "mihandler"
            }, {
                xtype: "button",
                text: "SRH",
                handler: "mihandler"
            }, {
                xtype: "button",
                text: "RCB",
                handler: "mihandler"
            }, {
                xtype: "button",
                text: "KXIP",
                handler: "mihandler",
                layout: 'hbox'
            }, {
                xtype: 'panel',
                name: 'mipanel',
                flex: 1
            }, {
                xtype: 'panel',
                name: 'playerDetailsPanel',
                flex: 1
            }, {
                xtype: "panel",
                name: "playerInformation",
                flex: 1
            }]
        }]
    }, {
        title: 'Points Table',
        iconCls: 'fa-table',
        items: [{
            xtype: 'pointsview',

        }]
    }, {
        title: 'Stats',
        iconCls: 'fa-star',
        items: [{
            xtype: "panel",
            title: "Statistics",
            name: "mypan",
            items: [{
                xtype: "button",
                text: "Batting",
                handler: "injectPanel"
            }, {
                xtype: "button",
                text: "Bowling",
                handler: "injectPanel"
            }, {
                xtype: 'panel',
                name: 'panel'
            }]
        }]
    }, {
        title: "Search",
        iconCls: "fa-search",
        layout: "border",
        region: "center",
        items: [{
            xtype: "panel",
            region: "east",
            name: "east",
            height: 200,
            width: 300,
            margin: "20 20 20 20"
        }, {
            xtype: "panel",
            region: "center",
            title: "search info",
            items: [{
                xtype: "textfield",
                fieldLabel: "Player Search",
                name: "player"
            },
            {
                xtype: "button",
                text: "Search",
                handler: "mySearch"
            }, {
                xtype: "panel",
                name: "searchpanel",
            }]
        }]
    }, {
        title: 'Seasons',
        iconCls: 'fa-user',
        layout: "border",
        items: [{
            xtype: "seasonview",
            region: "center",
            width: 600
        }, {
            xtype: "panel",
            region: "east",
            name: "barpanel",
            width: 400,
            items: [{
                region: "north",
                text: "chart",
                xtype: "mydropdown",
                menu:
                    [{
                        text: "bar",
                        handler: "myChart"
                    }, {
                        text: "pie",
                        handler: "myChart"
                    },
                    {
                        text: "line",
                        handler: "myChart"
                    }]
            }, {
                xtype: "panel",
                region: "center",
                name: "chartcenter",
                title: "Chart View"
            }]
        }]
    }, {
        title: 'Match Info',
        iconCls: 'fa-info',
        items: [{
            xtype: 'matchview',
        }]
    }, {
        title: "Schedule & Results",
        iconCls: "fa-table",
        items: [{
            xtype: "scheduleview"
        }]
    }, {
        title: 'Team Search',
        iconCls: 'fa-user',
        layout: "border",
        items: [{
            xtype: "playersview",
            region: "center",
            width: 600
        }, {
            xtype: "panel",
            region: "east",
            name: "teampanel",
            width: 400,
            items: [{
                region: "north",
                text: "team search",
                xtype: "teamdropdown",
                menu:
                    [{
                        text: "mi",
                        handler: "miteam"
                    },
                    {
                        text: "csk",
                        handler: "cskteam"
                    },
                    {
                        text: "rr",
                        handler: "rrteam"
                    }]
            }, {
                xtype: "panel",
                region: "center",
                name: "teamcenter",
                title: "Team View"
            }]
        }]
    }]
});
