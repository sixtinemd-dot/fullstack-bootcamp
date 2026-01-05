import { useState, createContext } from "react";
import DisplayCounter from "./DisplayCounter";
import ActionCounter from "./ActionCounter";

export const CounterCountext = createContext();

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CounterCountext.Provider value={{ count, setCount }}>
        <DisplayCounter />
        <ActionCounter />
      </CounterCountext.Provider>
    </div>
  );
}