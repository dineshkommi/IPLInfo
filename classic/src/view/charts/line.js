Ext.define('iplinfo.view.charts.Line', {
    extend: 'Ext.Panel',
    xtype: "lineview",
    items: [{
        xtype: 'cartesian',
        width: 350,
        height: 400,
        insetPadding: 60,
        axes: [{
            type: 'numeric',
            position: 'left',
            fields: ['times'],
            title: {
                text: 'Count',
                fontSize: 20
            },
            grid: true,
            minimum: 0
        }, {
            type: 'category',
            position: 'bottom',
            fields: ['winner'],
            title: {
                text: 'WINNING TEAM',
                fontSize: 20
            }
        }],
        series: [{
            type: 'line',
            style: {
                stroke: '#30BDA7',
                lineWidth: 2
            },
            xField: 'winner',
            yField: 'times',
            marker: {
                type: 'path',
                path: ['M', - 4, 0, 0, 4, 4, 0, 0, - 4, 'Z'],
                stroke: '#30BDA7',
                lineWidth: 2,
                fill: 'blue'
            }
        }, {
            type: 'line',
            fill: true,
            style: {
                fill: '#96D4C6',
                fillOpacity: .6,
                stroke: '#0A3F50',
                strokeOpacity: .6,
            }
        }]
    }
    ]
});