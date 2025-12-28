// Exercice 1 :Import the Car component
import Car from "./components/Car";
//exercice 2
import Events from "./components/Events";
//exercice 3
import Phone from "./components/Phone"
//exercice 4
import Color from "./components/Color"

import "./App.css";


function App() {
  // exercice 1
  const carinfo = { 
    name: "Porsche", 
    model: "Carrera" 
  };

  return (
    <div>
      {/* 2 */}
      <Car carInfo={carinfo} />
      {/* 1 */}
      <Events />
      {/* 3 */}
      <Phone />
      {/* 4 */}
      <Color />
    </div>
  );
}

// Export App so it can be used by React
export default App;

