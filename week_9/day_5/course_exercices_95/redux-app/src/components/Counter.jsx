import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, byInputVal } from "../redux/actions";

export default function Counter() {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();
  const inputRef = useRef();
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      <div>
        <input ref={inputRef} />
        <button
          onClick={() => dispatch(byInputVal(Number(inputRef.current.value)))}
        >
          By Input Value
        </button>
      </div>
    </div>
  );
}
