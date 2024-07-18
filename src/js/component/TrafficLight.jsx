import React, { useState } from "react";

export const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState("red");

  return (
    <div className="traffic-light-box bg-dark d-flex flex-column justify-content-between">
      <div
        className={
          activeLight === "red" ? "light bg-danger" : "light bg-secondary"
        }
        onClick={() => setActiveLight("red")}
      ></div>
      <div
        className={
          activeLight === "yellow" ? "light bg-warning" : "light bg-secondary"
        }
        onClick={() => setActiveLight("yellow")}
      ></div>
      <div
        className={
          activeLight === "green" ? "light bg-success" : "light bg-secondary"
        }
        onClick={() => setActiveLight("green")}
      ></div>
    </div>
  );
};
