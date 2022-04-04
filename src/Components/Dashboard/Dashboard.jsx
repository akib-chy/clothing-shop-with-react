import React from "react";
import AllRechart from "../AllRechart/AllRechart";

const Dashboard = () => {
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center text-primary">Welcome Dashbord Section</h1>
        <div>
          <AllRechart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
