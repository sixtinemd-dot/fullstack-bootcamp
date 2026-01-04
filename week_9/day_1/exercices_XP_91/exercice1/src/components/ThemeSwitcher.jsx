import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

/**
 * Button component that toggles the theme.
 * It consumes ThemeContext using useContext.
 */
export default function ThemeSwitcher() {
  // Access theme value and toggle function from context
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
