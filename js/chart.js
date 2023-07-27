'use strict';

let canvasElem = document.getElementById('chart');

let chartDisplay = new AppState();
chartDisplay.loadItems();

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
console.log(chartDisplay.allProducts);
function renderChart() {
  const productName = [];
  const totalVotes = [];
  const totalShown = [];
  for (let i = 0; i < chartDisplay.allProducts.length; i++) {
    let currentProduct = chartDisplay.allProducts[i];
    productName.push(chartDisplay.allProducts[i].name);
    totalVotes.push(chartDisplay.allProducts[i].timesClicked);
    totalShown.push(chartDisplay.allProducts[i].timesShown);
  }
  return new Chart(canvasElem, {
    type: 'bar',
    data: {
      labels: productName,
      datasets: [
        {
          label: 'Vote Count',
          data: totalVotes,
          borderWidth: 1,
          borderColor: '#2F89FC',
          backgroundColor: '#2F89FC',
        },
        {
          label: 'Shown Count',
          data: totalShown,
          borderWidth: 1,
          borderColor: '#01937C',
          backgroundColor: '#01937C',
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
          },
        },
        x: {
          ticks: {
            maxRotation: 90,
            minRotation: 90,
          },
        },
      },
    },
  });
}

renderChart();
