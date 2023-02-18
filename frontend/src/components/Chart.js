import { Scatter } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js/auto";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

function Chart({ labels, label, chartData, xTitle, yTitle }) {
  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: yTitle,
        },
      },
      x: {
        title: {
          display: true,
          text: xTitle,
        },
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: chartData,
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  return (
    <>
      <Scatter options={options} data={data} />
    </>
  );
}

export default Chart;
