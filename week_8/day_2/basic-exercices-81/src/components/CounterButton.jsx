import React from "react";

export default function CounterButton({setCount, num}) {
    return (
        <button onClick={() => setCount((count) => count + num)}>{num > 0 ? "+" : "-"}</button>
    )
}