import React from "react";
import CounterHeader from "./CounterHeader"
import CounterButton from "./CounterButton";

export default function Counter({count, setCount}) {
    return (
        <>
        <h2>Counter</h2>
        <CounterHeader count={count}/>
        <CounterButton setCount={setCount} num={1}/>
        <CounterButton setCount={setCount} num={-1}/>
        </>
    )
}

/**
 * drill down the props
 * Counter -
 *         |_ <h3>Count= {count}</h3> - CounterHeader.jsx
 *         |_  <button> + </button> - CounterButton.jsx
 */
