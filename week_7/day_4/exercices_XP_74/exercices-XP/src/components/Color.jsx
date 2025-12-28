//exercice 4

import {useState, useEffect} from "react";

function Color() {
    // State variable with initial value "red"
    const [favoriteColor, setFavoriteColor] = useState("red");

    // useEffect runs after the component renders
    useEffect(() => {
        alert("useEffect reached");
    });

    // Function to change the color to blue
    const changeColor = () => {
        setFavoriteColor("blue");
    };

    return (
        <div>
            {/* Display the current favorite color */}
            <h1>My favourite color is {favoriteColor}</h1>

            {/* Button to change color */}
            <button onClick={changeColor}>Change color</button>
        </div>
    )
}

export default Color;