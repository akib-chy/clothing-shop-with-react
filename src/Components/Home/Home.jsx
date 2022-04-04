import React from "react";
import { Link } from "react-router-dom";
import useClints from "../../Hook/useClints";
import headerImg from "../../img/header-img.png";
import HeaderClintReview from "../HeaderClintReview/HeaderClintReview";
import "./Home.css";

const Home = () => {
  const [clints, setClints] = useClints();
  return (
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <h1 className="fw-bold web-heading">
            Exclosive
            <small className="heading-light"> Clothing</small> Shop
          </h1>
          <div className="mt-4">
            <p>
              Welcome to Clothing Shop Online – the web's one-stop shop for
              apparel of all kinds.We offer a wide selection of blank apparel
              styles, brands, and sizes for crafting, DIY projects, and just
              wearing every day.Our goal is to satisfy the apparel needs of
              online shoppers with plenty of options, a user-friendly site and
              affordable prices. From cozy fleeces, to casual t-shirts and
              sweat-wicking athletic wear, Clothing Shop Online has it all.
            </p>
            <button className="btn btn-primary rounded-0 btn-lg mt-3">
              View More
            </button>
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <img className="img-fluid" src={headerImg} alt="" />
        </div>
      </div>
      <div className="text-center mt-5 pt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {clints.slice(0, 3).map((clint) => (
            <HeaderClintReview clint={clint} key={clint.id}></HeaderClintReview>
          ))}
        </div>
        <Link to="/reviews">
          {" "}
          <button className="btn btn-info mt-4 mb-4">See All Review</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
