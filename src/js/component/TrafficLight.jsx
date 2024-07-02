import React from "react";

export const TrafficLight = (props) => {
  const [redLightOn, setRedLightOn] = React.useState(false);
  const [yellowLightOn, setYellowLightOn] = React.useState(false);
  const [greenLightOn, setGreenLightOn] = React.useState(false);
  const [firstLightColor, setFirstLightColor] = React.useState("undefined");
  return (
    <React.Fragment>
      <div className="traffic-light-box bg-dark d-flex flex-column justify-content-between">
        <div
          className={
            redLightOn === true ? "light bg-danger" : "light bg-secondary"
          }
          onClick={(event) => {
            setRedLightOn(!redLightOn);
          }}
        ></div>
        <div
          className={
            yellowLightOn === true ? "light bg-warning" : "light bg-secondary"
          }
          onClick={(event) => {
            setYellowLightOn(!yellowLightOn);
          }}
        ></div>
        <div
          className={
            greenLightOn === true ? "light bg-success" : "light bg-secondary"
          }
          onClick={(event) => {
            setGreenLightOn(!greenLightOn);
          }}
        ></div>
      </div>
      <div className="d-flex flex-column justify-space-around">
        <div className="d-flex-justify-space-between">
          <input
            className="form-control"
            type="text"
            placeholder="some color"
            value={firstLightColor}
            onKeyDown={(event) => {
              if (event.key === ";") {
                console.log(event.key);
              }
              event.stopPropagation();
            }}
            onChange={(event) => {
              setFirstLightColor(event.target.value);
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
