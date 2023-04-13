bcklic.addEventListener('click' , () => {
    window.location = "a_dashboard.html"
})
var barChartOptions = {
    series: [{
      name: "Non-AC",
      data: [ 4,2,3,6,1]
    },{
        name: "R12 CFC",
        data: [ 4,2,1,2,5]
      },{
          name: "R134a CFC",
          data: [ 4,2,4,5,3]
        } 
  ],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: true
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%',
        distributed: false
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: [
      '#89375F', 
      '#F7B844',
      '#4F4557'
    ],
    legend: {
      show: true,
      onItemHover: {
        highlightDataSeries: true
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: ["CARS", "UV","SUV","BUSES","TRUCKS"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chartmv"), barChartOptions);
  barChart.render();