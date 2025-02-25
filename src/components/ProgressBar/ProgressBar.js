import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progress }) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentProgress(progress);
    }, 100);
  }, [progress]);

  return (
    <div
      className="outer"
    >
      <div style={{ transform: `translateX(${currentProgress - 100}%)`, color: currentProgress < 5 ? 'black' : 'white' }} className="inner" role="progressbar" aria-valuenow={progress}  aria-valuemin="0" aria-valuemax="100">
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
