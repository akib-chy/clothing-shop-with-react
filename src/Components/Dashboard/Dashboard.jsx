import React from "react";
import WebsiteLineChart from "../LineChart/WebsiteLineChart";

const Dashboard = () => {
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center text-primary">Welcome Dashbord Section</h1>
        <div>
          <WebsiteLineChart></WebsiteLineChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
