Ext.define('iplinfo.view.players.teamsdropdown', {
    extend: 'Ext.form.Panel',
    xtype: "teamdropdown",
    width: 400,
    items: [{
        //  xtype:"combo",
        xtype: 'combobox',
        store: {
            fields: ["name", "value"],
            data: [
                {
                    name: "Mumbai Indians",
                    value: "mi"
                },
                {
                    name: "Chennai Super Kings",
                    value: "csk"
                },
                {
                    name: "Rajasthan Royals",
                    value: "rr"
                },
                {
                    name: "Delhi Daredevils",
                    value: "dd"
                },
                {
                    name: "Kolkata Kinght Riders",
                    value: "kkr"
                },
                {
                    name: "Sun Risers Hyderabad",
                    value: "srh"
                },
                {
                    name: "KingsXI Punjab",
                    value: "kxip"
                },
                {
                    name: "Royal Challengers Bangalore",
                    value: "rcb"
                }
            ]
        },
        fieldLabel: 'Choose team',
        width: 350,
        queryMode: 'local',
        displayField: "name",
        valueField: "value",
        listeners: {
            select: "teamSelector"
        }
    }]
});