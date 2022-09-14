var ctx = document.getElementById("myChart");

const mixedChart = new Chart(ctx, {
    

    
    data: {
        datasets: [{
            type: 'bar',
            label: 'Entrevistadores',
            data: [3, 2, 2, 1.5, 2.5, 1, 1, 1],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(65,105,225,0.7)'
        }, {
            type: 'line',
            label: 'valores lineales',
            data: [3, 2, 2, 1.5, 2.5, 1, 1, 1],
            fill: false,
            borderColor: 'rgb(255, 128, 0, 1)'
        }],
        labels: ['entrevistador1', 'entrevistador2', 'entrevistador3', 'entrevistador4', 'entrevistador5', 'entrevistador6', 'entrevistador7', 'entrevistador8']
        
    },
});

const config = {
    type: 'bar',
    options: {
      scales: {
        y: {
          beginAtZero: true,
          type:'linear',
          position:'left'
        },
        quantity:{
            beginAtZero: true,
            type:'linear',
            position:'left'
        }
      }
    }
  };

  const actions = [
    {
      name: 'Randomize',
      handler(chart) {
        chart.data.datasets.forEach(dataset => {
          dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100});
        });
        chart.update();
      }
    },
  ];