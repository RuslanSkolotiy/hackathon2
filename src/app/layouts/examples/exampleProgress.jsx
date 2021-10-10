import React from "react";
import Progress from "../../components/ui/progress/progress";

const ExampleProgress = () => {
  const now = 0;
  return (
    <div className="mb-5">
      <h2>Progress</h2>
      <div>
        <Progress
          now={40}
          label={`${now}%`}
          min={0}
          max={100}
          variant="success"
        />
      </div>
    </div>
  );
};

export default ExampleProgress;
