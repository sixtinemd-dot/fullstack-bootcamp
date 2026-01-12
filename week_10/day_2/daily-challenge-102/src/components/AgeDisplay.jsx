import React from "react";
import { useSelector } from "react-redux";

const AgeDisplay = () => {
  const { age, loading } = useSelector((state) => state.age);

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h2>Current Age: {age}</h2>
      {loading && <p>Updating age... ⏳</p>}
    </div>
  );
};

export default AgeDisplay;
