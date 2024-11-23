// Get the canvas element
const ctx = document.getElementById('trafficChart').getContext('2d');

// Data for the chart
const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Visitors',
      data: [100, 120, 90, 140, 150, 170, 200],
      borderColor: '#4a69bd',
      fill: true,
      backgroundColor: 'rgba(74, 105, 189, 0.1)',
    },
    {
      label: 'New Signups',
      data: [70, 80, 60, 100, 110, 140, 180],
      borderColor: '#78e08f',
      fill: true,
      backgroundColor: 'rgba(120, 224, 143, 0.1)',
    },
  ],
};

// Options for the chart
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};

// Initialize the Chart
const trafficChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options,
});
