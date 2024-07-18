import React, { useState, useEffect } from "react";

export const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState("red");
  const [isCycling, setIsCycling] = useState(false);

  useEffect(() => {
    let interval;
    if (isCycling) {
      interval = setInterval(() => {
        setActiveLight((currentLight) => {
          switch (currentLight) {
            case "red":
              return "green";
            case "green":
              return "yellow";
            case "yellow":
              return "red";
            default:
              return "red";
          }
        });
      }, 1000); // Change light every 1 second
    }
    return () => clearInterval(interval);
  }, [isCycling]);

  const handleLightClick = (color) => {
    setActiveLight(color);
    setIsCycling(false); // Stop cycling when a light is manually clicked
  };

  const handleButtonClick = () => {
    setIsCycling((prev) => !prev); // Toggle cycling on button click
  };

  return (
    <>
      <div className="traffic-light-box bg-dark d-flex flex-column justify-content-between">
        <div
          className={
            activeLight === "red" ? "light bg-danger" : "light bg-secondary"
          }
          onClick={() => handleLightClick("red")}
        ></div>
        <div
          className={
            activeLight === "yellow" ? "light bg-warning" : "light bg-secondary"
          }
          onClick={() => handleLightClick("yellow")}
        ></div>
        <div
          className={
            activeLight === "green" ? "light bg-success" : "light bg-secondary"
          }
          onClick={() => handleLightClick("green")}
        ></div>
      </div>
      <button onClick={handleButtonClick}>
        {isCycling ? "Stop Cycling" : "Start Cycling"}
      </button>
    </>
  );
};
