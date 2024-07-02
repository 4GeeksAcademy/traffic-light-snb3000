import React from "react";

export const TrafficLight = (props) => {
  return (
    <div className="traffic-light-box bg-dark d-flex flex column justify-content-between">
      <div className="light bg-secondary"></div>
      <div className="light bg-secondary"></div>
      <div className="light bg-secondary"></div>
    </div>
  );
};
