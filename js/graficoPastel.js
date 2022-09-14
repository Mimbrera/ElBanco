var ctx = document.getElementById("myChart2");

    const myChart2 = new Chart(ctx, {
        type: "pie",
        data: {

            labels: ['Entrevistador1', 'Entrevistador2', 'Entrevistador3'],



            datasets: [{
                label: '# of Votes',
                data: [15, 20, 5],
                backgroundColor: [
                    '#4472C4',
                    '#ED7D31',
                    '#B0C4DE',
                ],
                borderColor: [
                    '#FFFFFF',
                    '#FFFFFF',
                    '#FFFFFF',
                ],
                borderWidth: 5,


            }]

        }
    });