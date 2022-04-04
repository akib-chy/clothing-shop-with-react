import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const WebsiteLineChart = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="row">
      <div className="col-md-6">
        <LineChart width={400} height={300} data={data}>
          <XAxis dataKey="month"></XAxis>
          <Line
            type="monotone"
            dataKey="sell"
            strokeWidth={"3px"}
            stroke="#137ae0"
          />
          <YAxis></YAxis>

          <Tooltip></Tooltip>
        </LineChart>
      </div>

      <div className="col-md-6">
        <AreaChart width={400} height={300} data={data}>
          <XAxis dataKey="month"></XAxis>
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#137ae0"
            fill="#137ae0"
            fillOpacity={0.3}
          />
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Legend></Legend>
        </AreaChart>
      </div>
    </div>
  );
};

export default WebsiteLineChart;
