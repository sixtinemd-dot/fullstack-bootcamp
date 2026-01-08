import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <h2>Redux Core</h2>
      <Counter />
    </>
  );
}

export default App;

// import { useState, useReducer, useRef } from "react";
// import "./App.css";

// const initialState = {
//   count: 5,
// };

// const ACTION_INCREMENT = "increment";
// const ACTION_DECREMENT = "decrement";
// const ACTION_BY_INPUT = "input_value";

// const counterReducer = (state, action) => {
//   console.log("action=>", action);
//   if (action.type === ACTION_INCREMENT) {
//     return { ...state, count: state.count + action.payload };
//   } else if (action.type === ACTION_DECREMENT) {
//     return { ...state, count: state.count - action.payload };
//   } else if (action.type === ACTION_BY_INPUT) {
//     return {
//       ...state,
//       count: state.count + action.payload.num1 + action.payload.num2,
//     };
//   }
//   return state;
// };

// function App() {
//   const [count, setCount] = useState(0);
//   const [countState, dispatch] = useReducer(counterReducer, initialState);

//   // console.log("countState=>", countState);

//   const inputRef = useRef();
//   const inputRef2 = useRef();

//   return (
//     <>
//       <h1>useReducer</h1>
//       <div className='card'>
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//       <h2>Count Reducer: {countState.count}</h2>
//       <div className='card'>
//         <button
//           onClick={() => dispatch({ type: ACTION_INCREMENT, payload: 1 })}
//         >
//           +
//         </button>
//         <button
//           onClick={() => dispatch({ type: ACTION_DECREMENT, payload: 5 })}
//         >
//           -
//         </button>
//       </div>
//       <div>
//         <input ref={inputRef} />
//         <input ref={inputRef2} />
//         <button
//           onClick={() =>
//             dispatch({
//               type: ACTION_BY_INPUT,
//               payload: {
//                 num1: Number(inputRef.current.value),
//                 num2: Number(inputRef2.current.value),
//               },
//             })
//           }
//         >
//           {" "}
//           + Input Value
//         </button>
//       </div>
//     </>
//   );
// }

// export default App;

