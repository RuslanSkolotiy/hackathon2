import React from "react";

const Progress = ({ now, label, min, max, variant }) => {
  return (
    <>
      <h1>HTML</h1>
      <div className="progress">
        <div
          className={"progress-bar" + variant}
          role="progressbar"
          style={{ width: label }}
          aria-valuenow={now}
          aria-valuemin={min}
          aria-valuemax={max}
        >
          {now}
        </div>
      </div>
    </>
  );
};

export default Progress;
