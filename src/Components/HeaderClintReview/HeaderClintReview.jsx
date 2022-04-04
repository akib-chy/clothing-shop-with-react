import React from "react";

const HeaderClintReview = ({ clint }) => {
  const { name, img, clintReview, rating } = clint;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title mb-4">Name: {name}</h5>
          <h5>Rating: {rating} star</h5>
          <p className="card-text">{clintReview}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderClintReview;
