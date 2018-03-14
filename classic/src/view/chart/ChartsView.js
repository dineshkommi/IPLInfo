Ext.define("iplinfo.chart.ChartsView", {
    extend: "Ext.panel.Panel",
    xtype: "chartsview",
    items: [{
        xtype: "polar",
        height: 300,
        width: 400,
        margin:"20 20 20 20",
        interactions: ['rotate', 'itemhighlight'],
        store: {
            type: "chartstore"
        },
        series: {
            type: 'pie',
            highlight: true,
            angleField: 'season',
            label:{
                field: 'winner',
                display: 'rotate'
            },
            donut: 10
        },
    }],
});

