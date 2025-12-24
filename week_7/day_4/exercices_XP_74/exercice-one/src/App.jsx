// Import the Car component
import Car from "./components/Car";

// Import the App CSS file
import "./App.css";

function App() {
  // Object containing car details
  const carinfo = { 
    name: "Porsche", 
    model: "Carrera" 
  };

  // Render the Car component and pass carinfo as props
  return (
    <div>
      <Car carInfo={carinfo} />
    </div>
  );
}

// Export App so it can be used by React
export default App;
