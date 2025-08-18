import React from "react";
import "./Progress.css";

interface ProgressBarProps {
  progress: number;
}


const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  let barColor = "";

  if (progress <= 30) {
    barColor = "#e63946"; // red
  } else if (progress <= 60) {
    barColor = "#f72585"; // hotpink
  } else if (progress <= 80) {
    barColor = "#ffba08"; // orange/yellow
  } else {
    barColor = "#38b000"; // green
  }

  return (
    <div className="progress-container">
      <div
        className="progress-fill"
        style={{ width: `${progress}%`, backgroundColor: barColor }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
