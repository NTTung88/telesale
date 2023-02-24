import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

// Sample chart data
const pdata = [
  {
    name: "MongoDb",
    call: 2,
    fees: 1,
  },
];
//Style
import styles from "./LineChartCallStatistics.module.css";
function LineChartCallStatistics() {
  return (
    <div className={styles.container}>
      <ResponsiveContainer aspect={3}>
        <LineChart data={pdata} margin={{ right: 100 }}>
          <Line dataKey="Answered" stroke="green" activeDot={{ r: 8 }} />
          <Line dataKey="Hung Up" stroke="violet" activeDot={{ r: 8 }} />
          <Line dataKey="Busy" stroke="yellow" activeDot={{ r: 8 }} />
          <Line dataKey="Not Available" stroke="red" activeDot={{ r: 8 }} />
          <CartesianGrid />

          <YAxis></YAxis>
          <Legend />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartCallStatistics;
