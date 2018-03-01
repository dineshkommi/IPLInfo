Ext.define('iplinfo.view.charts.Bar', {
    extend: 'Ext.Panel',
    xtype: 'basic-bar',
    layout: 'fit',
    width: 400,
    height: 400,
    items: [{
        xtype: 'chart',
        flipXY: true,
        insetPadding: { top: 60, bottom: 20, left: 20, right: 40 },
         
        axes: [{
            type: 'numeric',
            position: 'bottom',
            grid: true,
            title: {
                text: 'Winners',
                fontSize: 10
            }
        }, {
            type: 'category',
            position: 'left',
            title: {
                text: 'Seasons',
                fontSize: 15
            }
        }],
        series: {
            type: 'bar',
            subStyle: {
                fill: ['#388FAD'],
                stroke: '#1F6D91'
            },
            xField: 'winner',
            yField: 'times'
        }
    }]
});