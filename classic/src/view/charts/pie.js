Ext.define('iplinfo.view.charts.Pie', {
    extend: 'Ext.Panel',
    xtype: 'basic-pie',
    items: [{
        xtype: 'polar',
        width: 400,
        height: 400,
        interactions: ['rotate', 'itemhighlight'],
        series: {
            type: 'pie',
            highlight: true,
            angleField: 'times',
            label: {
                field: 'winner',
                display: 'rotate'
            },
            donut: 30,
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRenderr'
            }

        }
    }]
});