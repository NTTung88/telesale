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

function LineChartTotalCall() {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata} margin={{ right: 100 }}>
          <CartesianGrid />

          <YAxis></YAxis>
          <Legend />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default LineChartTotalCall;
