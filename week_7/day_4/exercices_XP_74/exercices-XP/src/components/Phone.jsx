//exercice 3

import { useState } from "react";

function Phone() {
    // Part I: state variables
    const [brand, setBrand] = useState("Samsung");
    const [model, setModel] = useState("Galaxy S20");
    const [color, setColor] = useState("black");
    const [year, setYear] = useState("2020");

    //Part II: func to change the phone color
    const changeColor = () => {
        setColor("blue");
    };

    return (
        <div>
            <h1>My phone is a {brand}</h1><br/><br/>
            <p>It is a {color} {model} from {year}</p>

            {/* Button to change color */}
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default Phone;