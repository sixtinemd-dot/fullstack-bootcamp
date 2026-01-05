import { useContext } from "react";
import { CounterCountext } from "./Counter";
export default function HeaderCounter() {
  const { count } = useContext(CounterCountext);
  return (
    <div>
      <h2>Count = {count}</h2>
    </div>
  );
}
                                                                                                                                            