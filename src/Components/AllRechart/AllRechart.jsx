import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
} from "recharts";

const AllRechart = () => {
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
    <div className="row mt-5">
      <div className="col-md-6">
        <h5 className="text-center fw-bold text-primary mb-3">
          MONTH WISE SELL
        </h5>
        <LineChart width={300} height={200} data={data}>
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
        <h5 className="text-center fw-bold text-primary mb-3">
          INVESTMENT VS REVENUE
        </h5>
        <AreaChart width={300} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month"></XAxis>
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#8884d8"
            fill="#8884d8"
            stackId="1"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#137ae0"
            fill="#137ae0"
            stackId="1"
          />
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </AreaChart>
      </div>
      <div className="col-md-6 mt-5">
        <h5 className="text-center fw-bold text-primary mb-3">
          INVESTMENT VS REVENUE
        </h5>
        <BarChart width={300} height={200} data={data}>
          <XAxis dataKey="month"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>

          <Bar dataKey="investment" stackId="a" fill="#8a87f3" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="col-md-6 mt-5">
        <h5 className="text-center fw-bold text-primary mb-3">
          INVESTMENT VS REVENUE
        </h5>
        <PieChart width={300} height={300}>
          <Tooltip></Tooltip>

          <Pie
            data={data}
            dataKey="investment"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={data}
            dataKey="revenue"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </div>
    </div>
  );
};

export default AllRechart;
