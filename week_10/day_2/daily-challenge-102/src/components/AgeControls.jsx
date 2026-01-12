import React from "react";
import { useDispatch } from "react-redux";
import { ageUpAsync, ageDownAsync } from "../store/ageSlice";

const AgeControls = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={() => dispatch(ageUpAsync())}
        style={{ marginRight: "10px", padding: "10px" }}
      >
        Age Up
      </button>
      <button
        onClick={() => dispatch(ageDownAsync())}
        style={{ padding: "10px" }}
      >
        Age Down
      </button>
    </div>
  );
};

export default AgeControls;
