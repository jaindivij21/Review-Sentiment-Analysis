import { Box } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";

import { Chart as ChartJS, CategoryScale } from "chart.js/auto";

ChartJS.register(CategoryScale);

function Chart({ labels, label, chartData }) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: chartData,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Bar data={data} />
    </>
  );
}

export default Chart;
