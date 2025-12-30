import React from "react";

export default function CounterHeader({ count }) {

  if (count > 5) {
    throw new Error('Oops...')
  }  
  return (
    <h3>Count = {count}</h3>
  );
}