import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TrafficLight } from "./TrafficLight";

//create your first component
const Home = () => {
  return (
    <div className="container w-100 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column align-items-center">
        <TrafficLight />
      </div>
    </div>
  );
};

export default Home;
