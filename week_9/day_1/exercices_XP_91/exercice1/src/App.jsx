import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

/**
 * Main application component.
 * Uses the current theme to apply styles.
 */
function App() {
  // Get the current theme from context
  const { theme } = useTheme();

  // Simple inline styles based on theme
  const styles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    padding: "2rem",
  };

  return (
    <div style={styles}>
      <h1>{theme.toUpperCase()} THEME</h1>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
