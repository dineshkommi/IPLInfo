Ext.define("iplinfo.view.playersinfomain.playerinfoMain",
{
    extend:"Ext.panel.Panel",
    xtype:"playersinfomain",
    controller:"playerInfoController",
   
    items: [{
        xtype: 'panel',
        title: 'TEAMS',
        name: 'teamPanel',
        width:1040,       
        
        items: [{
            text: 'RR',
            xtype: 'button',
            width:130,
            handler: 'teamhandler',
            
        }, {
            xtype: 'button',
            text: 'CSK',
            handler: 'teamhandler',
            width:130
        }, {
            xtype: 'button',
            text: 'RCB',
            handler: 'teamhandler',
            width:130
        }, {
            xtype: 'button',
            text: 'DD',
            handler: 'teamhandler',
            width:130
        }, {
            xtype: 'button',
            text: 'SRH',
            handler: 'teamhandler',
            width:130
        }, {
            xtype: 'button',
            text: 'KKR',
            handler: 'teamhandler',
            width:130
        }, {
            xtype: 'button',
            text: 'KXIP',
            handler: 'teamhandler',
            width:130
        }, {
            xtype: 'button',
            text: 'MI',
            handler: 'teamhandler',
            width:130
        }, {
            xtype: "panel",
            name: "teamInfoPanel",
            layout:"fit",
            height:500,                        
            flex:1
            

        }]
    }]
});