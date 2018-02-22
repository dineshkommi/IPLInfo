Ext.define('iplinfo.view.charts.Basic', {
    extend: 'Ext.Panel',
    xtype: 'basic-pie',
    items: [{
        xtype: 'polar',
        width: 400,
        height: 900,
        interactions: ['rotate', 'itemhighlight'],
        store: {
            type: "seasonsstore"
        },
        series: {
            type: 'pie',
            highlight: true,
            angleField: 'season',
            label: {
                field: 'winner',
                display: 'rotate'
            },
            donut: 30,
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }

        }
    }]
});

