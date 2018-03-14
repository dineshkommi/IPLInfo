Ext.define('iplinfo.view.charts.dropdown', {
    extend: 'Ext.form.Panel',
    xtype: "mydropdown",
    width: 400,
    items: [{         
        xtype: 'combobox',
        store: {
            fields: ["name", "value"],
            data: [
                {
                    name: "bar",
                    value: "bar"
                },
                {
                    name: "pie",
                    value: "pie"
                },
                {
                    name: "line",
                    value: "line"
                }
            ]
        },
        fieldLabel: 'Choose chart',
        queryMode: 'local',
        displayField: "name",
        valueField: "value",
        listeners: {
            select: "barSelector"
        }
    }]
});