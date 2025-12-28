//exercice 1

import { useState } from "react";   // Import useState hook from React
import Garage from "./Garage";      // Import the Garage component

function Car(props) {
    // State to store the car color
    const [color, setColor] = useState("red");

    // Render car information and the Garage component
    return (
        <>
            {/* Display the car color and model */}
            <h1>This car is {color} {props.carInfo.model}</h1>

            {/* Pass the size prop to the Garage component */}
            <Garage size="small" />
        </>
    );
}

// Export Car so it can be used in other files
export default Car;
