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
        'iplinfo.view.main.List',
        'iplinfo.view.seasons.SeasonsView',
        'iplinfo.view.points.PointsView',
        "iplinfo.view.playersinfo.PlayersInfoView",
        "iplinfo.batting.BattingStat",
        'iplinfo.view.matches.Matches'

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
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        // layout:"border",
        // region:"center",
        items: [{
            xtype:"panel",
            title:"IPL",
            html:"<img src='http://im.rediff.com/cricket/2015/mar/31ipl-trophy.jpg'>",
            width:700
        }]
    }, {
        title: 'Charts',
        iconCls: 'fa-user',
        items: [{   
            xtype: "basic-pie"
            
        }]
    },{
        title: 'Seasons',
        iconCls: 'fa-user',
        layout:"border",
        items: [{
            xtype: "seasonsview",
            region:"center"
        },
    {
        xtype:"panel",
        region:"east",
        name:"barpanel",
        items :[{
            xtype:"button",
            text:"chart",
            menu:[
                {
                    text:"bar"
                },
                {
                    text:"Pie"
                },
                {
                    text:"line"
                }
            ]
        }]
    }]
    }, {
        title: 'PointsTable',
        iconCls: 'fa-table',
        items: [{
            xtype: "pointsview"
        }]
    }, {
        title: 'Players Information',
        iconCls: 'fa-info',
        xtype:"panel",
        layout:"border",
        region:"center",
        items: [{
            xtype:"panel",
            title:'Indian Premier League Players Information',
            items:[{
                region:"center",
                width:900,
                xtype: 'playersinfoview'
            }]
        },{
            region:"east",
            title:"Player Information",
            height:0,
            width:200,
            margin:"80 80 100 100",
            name:"playerinformation"
        }]
    }, {
        title: "Stats",
        iconCls: 'fa-user',
        layout: "border",
        items: [{
            xtype: "panel",
            title: "Indian Premier League Seasons Statistics",
            region: "north",
            items: [{
                xtype: "button",
                widht: 200,
                margin: "20 20 20 20",
                text: "Batting",
                menu: [{
                    text: "Most Runs",
                    handler: 'onclickFun'
                }, {
                    text: "Most Fifites",
                    handler: "onclickFun"
                }, {
                    text: "Most Centuries",
                    handler: "onclickFun"
                }, {
                    text: "Most Sixes",
                    handler: "onclickFun"
                }, {
                    text: "Highest Stike Rate",
                    handler: "onclickFun"
                }, {
                    text: "Most Fours",
                    handler: "onclickFun"
                }]
            },
            {
                xtype: "button",
                widht: 200,
                margin: "20 20 20 20",
                text: "Bowling"
            }]
        }, {
            xtype: "panel",
            name: 'batpanel',
            region: "center",
        }, {
            xtype: "panel",
            name: "playerinfo",
            region: "south",
            height: 50,
            width: 100,
            margin:"20"
        }]
    }, {
        title: 'Matches',
        iconCls: 'fa-users',
        height:300,
        width:400,
        items: [{
            xtype: "matchesview"
        }]

    }, {
        title: "Search",
        iconCls: "fa-search",
        //layout:"border",
        items: [{
            xtype: "textfield",
            fieldLabel: "PlayerSearch",
            name: "player"
        }, {
            xtype: "button",
            text: "Search",
            handler: "searchPlayer"
        }, {
            layout: "border",
            region: "center",
            height: 800,
            width: 1000,
            name: "searchcenter"
        }]
    }]
});
