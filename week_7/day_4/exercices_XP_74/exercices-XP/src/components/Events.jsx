//exercice 2

import { useState } from "react";

function Events() {
    // Part I: function triggered by button click
    const clickMe = () => {
        alert("I was clicked");
    };

    //Part II: function triggered when a key is pressed
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            alert(`The enter key was pressed, your input is: ${event.target.value}`);
        }
    }

    //Part III: 
    // toggling ON and OFF
    const [isToggleOn, setIsToggleOn] = useState(true);

    // toggle function
    const toggle = () => {
        setIsToggleOn(!isToggleOn);
    }

    return (
        <div>
            {/* Part I: Button */}
            <button onClick={clickMe}>Click me</button><br/><br/>

            {/* Part II: ENter Key */}
            <input type="text" placeholder="Type and press Enter" onKeyDown={handleKeyDown}/><br/><br/>

            <button onClick={toggle}>
                {isToggleOn ? "ON" : "OFF"}
            </button>
        </div>
    );
}

export default Events;

