import { useRef, useState } from "react";

/**
 * CharacterCounter demonstrates useRef.
 * It tracks the input value length without controlling the input.
 */
export default function CharacterCounter() {
  // Reference to the input DOM element
  const inputRef = useRef(null);

  // State to display the character count
  const [count, setCount] = useState(0);

  /**
   * Runs whenever the user types.
   * Reads the input value directly using the ref.
   */
  const handleInput = () => {
    setCount(inputRef.current.value.length);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onInput={handleInput}
        placeholder="Type something..."
      />
      <p>Character count: {count}</p>
    </div>
  );
}
