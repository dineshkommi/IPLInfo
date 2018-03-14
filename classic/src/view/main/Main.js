/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('iplinfo.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'iplinfo.view.main.MainController',
        'iplinfo.view.main.MainModel',
        // 'iplinfo.view.main.List',
        'iplinfo.view.seasons.SeasonsView',
        'iplinfo.view.points.PointsView',
        "iplinfo.view.playersinfo.PlayersInfoView",
       
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-users',
        items: [{
            xtype: "playersinfomain"
        }]
    },
    {
        title: 'Seasons',
        iconCls: 'fa-user',
        layout: "border",
        items: [{
            xtype: "seasonsview",
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
                menu: [{
                    text: "bar",
                    handler: "myChart"
                }, {
                    text: "pie",
                    handler: "myChart"
                }, {
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
    },

    {
        title: 'Matches',
        iconCls: 'fa-user',
        items: [{
            xtype: "matchview"
        }]
    },
    {
        title: 'Charts',
        iconCls: 'fa-table',

        items: [{
            xtype: "chartsview"
        }]
    },

    {
        title: 'PointsTable',
        iconCls: 'fa-users',
        // layout:"border",
        items: [{
            xtype: "pointsview",

        }]
    }, {
        title: 'Players Information',
        iconCls: 'fa-info',
        items: {
            xtype: 'playersinfoview'
        }
    }, {
        title: 'Player Stats',
        iconCls: 'fa-table',
        items: [{
            xtype: "batbowlmain"
        }]
    }, {
        title: "Search",
        iconCls: "fa-search",
        layout: "border",
        region: "center",
        items: [{
            xtype: 'searchmain'
        }]
    }]
});
