// voting.js

async function createVotingChart(ctx) {
    // Fetch data from voting.json
    const response = await fetch('voting.json');
    const votingData = await response.json();

    return new Chart(ctx, {
        type: 'pie',
        data: {
            labels: votingData.labels,
            datasets: [{
                label: '# of Votes',
                data: votingData.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                }
            }
        }
    });
}
