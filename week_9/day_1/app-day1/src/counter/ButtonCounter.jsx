import { useContext } from "react";
import { CounterCountext } from "./Counter";
export default function ButtonCounter() {
  const { setCount } = useContext(CounterCountext);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}> + </button>
    </div>
  );
}
