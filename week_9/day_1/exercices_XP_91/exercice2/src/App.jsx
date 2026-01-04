import { useRef, useState } from "react";

function App() {
  // Reference to the input element
  const inputRef = useRef(null);

  // State to display the character count
  const [count, setCount] = useState(0);

  // Runs whenever the user types
  const handleInput = () => {
    setCount(inputRef.current.value.length);
  };

  return (
    <div>
      <h1>Character Counter</h1>

      <input
        ref={inputRef}
        type="text"
        onInput={handleInput}
        placeholder="Type something..."
      />

      <p>Characters: {count}</p>
    </div>
  );
}

export default App;
