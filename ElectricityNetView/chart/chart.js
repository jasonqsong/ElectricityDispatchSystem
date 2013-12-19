﻿var options;
var chart;
$(document).ready(function () {
    options={
        chart: {
            renderTo:'container'
        },
        title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        // xAxis: {
        //     type:'datatime',
        //     dateTimeLabelFormats:{
        //         hour: '%H:%M'
        //     }
        // },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                hour: '%H:%M'
            }
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        // series: [{
        //     data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        //     pointStart: Date.UTC(2010, 0, 1),
        //     pointInterval: 60 * 1000 // one day
        // }]
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            pointStart: Date.UTC(2010, 0, 1),
            pointInterval: 900 * 1000 // one day
        }]
        /*
        series: [{
            name: '有功功率',
            data: [0.0, 0.1, 0.2, 0.3, 1.0, 1.1, 1.2, 1.3, 2.0, 2.1, 2.2, 2.3, 3.0, 3.1, 3.2, 3.3, 4.0, 4.1, 4.2, 4.3, 5.0, 5.1, 5.2, 5.3,
                6.0, 6.1, 6.2, 6.3, 7.0, 7.1, 7.2, 7.3, 8.0, 8.1, 8.2, 8.3, 9.0, 9.1, 9.2, 9.3, 10.0, 10.1, 10.2, 10.3, 11.0, 11.1, 11.2, 11.3,
                12.0, 12.1, 12.2, 12.3, 13.0, 13.1, 13.2, 13.3, 14.0, 14.1, 14.2, 14.3, 15.0, 15.1, 15.2, 15.3, 16.0, 16.1, 16.2, 16.3, 17.0, 17.1, 17.2, 17.3,
                18.0, 18.1, 18.2, 18.3, 19.0, 19.1, 19.2, 19.3, 20.0, 20.1, 20.2, 20.3, 21.0, 21.1, 21.2, 21.3, 22.0, 22.1, 22.2, 22.3, 23.0, 23.1, 23.2, 23.3]
        },
        {
            name: '无功功率',
            data: [0.0, 0.1, 0.2, 0.3, 1.0, 1.1, 1.2, 1.3, 2.0, 2.1, 2.2, 2.3,3.0, 3.1, 3.2, 3.3,4.0, 4.1, 4.2, 4.3,5.0, 5.1, 5.2, 5.3,
                6.0, 6.1, 6.2, 6.3,7.0, 7.1, 7.2, 7.3,  8.0, 8.1, 8.2, 8.3,9.0, 9.1, 9.2, 9.3,10.0, 10.1, 10.2, 10.3,11.0, 11.1, 11.2, 11.3,
                12.0, 12.1, 12.2, 12.3,13.0, 13.1, 13.2, 13.3,14.0, 14.1, 14.2, 14.3,15.0, 15.1, 15.2, 15.3,16.0, 16.1, 16.2, 16.3,17.0, 17.1, 17.2, 17.3,
                18.0, 18.1, 18.2, 18.3,19.0, 19.1, 19.2, 19.3,20.0, 20.1, 20.2, 20.3,21.0, 21.1, 21.2, 21.3,22.0, 22.1, 22.2, 22.3,23.0, 23.1, 23.2, 23.3]
        }]
        */
    };
    chart = new Highcharts.Chart(options);
});
function pushdata(time, active, reactive) {
    chart.series[0].addPoint([time, active],true,true);

}

