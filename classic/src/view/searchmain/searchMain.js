Ext.define("iplinfo.view.searchmain.searchMain",
{
    extend:"Ext.panel.Panel",
    xtype:"searchmain",
    layout:"border",
    height: 900,
    width: 1100,    
    controller:"searchController",

    items: [ {
        xtype: "panel",        
        title: "Search Result",
        region: "center",
        width:900,

        items: [{
            xtype: "textfield",
            fieldLabel: "Player Search",
            name: "searchName"
        },
        {
            xtype: "button",
            text: "Search",
            handler: "searchHandler"
        }, {
            xtype: "panel",
            name: "searchPanel",
        }]
    },{
        xtype: "panel",
        region: "east",
        name: "east",
        title: "Player",
        height: 200,
        width: 300,
        margin: "20 20 20 20"
    }]
});