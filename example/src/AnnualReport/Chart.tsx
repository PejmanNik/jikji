import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jun",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Jul",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Aug",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Sept",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Oct",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Nov",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Dec",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Chart() {
  return (
    <BarChart
      width={700}
      height={600}
      data={data}
      margin={{
        top: 60,
        right: 10,
        left: 10,
        bottom: 30,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar isAnimationActive={false} dataKey="pv" fill="#44CFCB" />
      <Bar isAnimationActive={false} dataKey="uv" fill="#B5DFCA" />
    </BarChart>
  );
}

export default Chart;
