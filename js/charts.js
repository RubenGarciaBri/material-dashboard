// Chart
let myChart = document.getElementById('myChart').getContext('2d');

const colorPrimary = '#E91E63';
const colorSecondary = '#9C27B0';
const colorTertiary = '#3F51B5';
const colorLightGrey = '#f5f5f5';
const colorDarkGrey = '#bbb';

//Create gradient
const primaryGradient = myChart.createLinearGradient(500, 0, 100, 0);
primaryGradient.addColorStop(0, colorPrimary);
primaryGradient.addColorStop(1, colorSecondary);

let firstChart = new Chart(myChart, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Subscribers',
      data: [6.03, 6.635, 7.987, 8.271, 9.965],
      backgroundColor: primaryGradient,
      borderColor: primaryGradient,
      pointRadius: 5,
      pointBackgroundColor: '#fff',
      pointBorderColor: primaryGradient,
      pointBorderWidth: 3,
      borderWidth: 3
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: colorDarkGrey
        },
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        ticks: {
          min: 6,
          max: 10,
          stepSize: 1,
          padding: 10,
          fontColor: colorDarkGrey,
          callback: function (label, index, labels) {
            return label + 'K';
          }
        },
        gridLines: {
          drawBorder: false,
          color: colorLightGrey,
          lineWidth: 2,
        }
      }]
    }
  }
});