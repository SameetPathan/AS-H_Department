google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['', '2016-17', '2017-18', '2018-19','2019-20','2020-21'],
    ['1-10000', 25, 50, 58,65,60],
    ['10001-20000',42,22, 21,22,22],
    ['20001-30000', 12, 10, 8,6,7],
    ['30001-40000', 9, 8, 5,3,5],
    ['40001-50000', 4, 3, 3,2,2],
    ['> 50000', 8, 6, 4,2,3],
  ]);

  var options = {
    chart: {
      title: 'Comparitive Intake Analysis of Last Five Year (rankwise)',
      subtitle: '',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}


google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['', '2016-17', '2017-18', '2018-19','2019-20','2020-21'],
    ['Mechanical', 92, 92, 95,98,100],
    ['E&TC',96,93, 92,95,100],
    ['Computer', 93, 92, 91,95,100],
    ['IT', 96, 95, 98,95,100],
    ['CIVIL', 92, 93, 85,92,100],

  ]);

  var options = {
    chart: {
      title: 'Branchwise Result Analysis of Last Five Year ',
      subtitle: '',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material1'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['', '2016-17', '2017-18', '2018-19','2019-20','2020-21'],
    ['Pass', 73, 67, 75,89,98],
    ['Distinction',65,60, 68,61,83],
    ['First Class', 8, 6, 7,18,15],
    ['High Secondary', 0, 0, 2,1,0],

  ]);

  var options = {
    chart: {
      title: 'Qualitative Result Analysis of Last Five Year ',
      subtitle: '',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material2'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}




google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart3);

function drawChart3() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Toppers'],
    ['2016',  14],
    ['2017',  15],
    ['2018',  25],
    ['2019',  32]
  ]);

  var options = {
    title: 'University Toppers Analysis of Last Four Year ',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}