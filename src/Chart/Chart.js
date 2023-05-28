import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); //here it returns a array of values
  const totalMaximum = Math.max(...dataPointValues);
  //in max function it can only read numbers not arrays so we uses spread operators to get the numbers individualy from the dataPointValue
  return (
    <div className="Chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
