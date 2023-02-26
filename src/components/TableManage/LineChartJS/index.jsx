// styles
import styles from "./LineChartJS.module.css";
// chart
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "",
    },
  },
  maintainAspectRatio: false,
};

const labels = [];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [],
    },
  ],
};
function LineChartJS() {
  return (
    <div>
      <Line className={styles.canvasStyle} options={options} data={data} />
    </div>
  );
}

export default LineChartJS;
