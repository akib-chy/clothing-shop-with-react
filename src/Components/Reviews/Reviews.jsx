import React from "react";
import useClints from "../../Hook/useClints";
import Review from "../Review/Review";

const Reviews = () => {
  const [clints, setClints] = useClints();
  return (
    <div className="container mt-3 mb-5">
      <h1 className="text-primary text-center mb-4">Welcome Reviews Section</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {clints.map((clint) => (
          <Review clint={clint} key={clint.id}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
