import { useState } from "react";
import ProgressBar from "./component/ProgressBar";

function App() {
  const [progress, setProgress] = useState<number>(0);

  const increaseProgress = () => {
    setProgress(prev => (prev + 10 > 100 ? 100 : prev + 10));
  };

  const decreaseProgress = () => {
    setProgress(prev => (prev - 10 < 0 ? 0 : prev - 10));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Manual Progress Bar</h2>
      <ProgressBar progress={progress} />

      <button onClick={increaseProgress} style={{ marginRight: "10px" }}> +10
      </button>
      <button onClick={decreaseProgress} style={{ marginLeft: "10px" }}>-10</button>
    </div>
  );
}

export default App;
