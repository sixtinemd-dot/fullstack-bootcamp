import React from "react";
import "./Exercice.css"

class Exercise extends React.Component {
  render() {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };

    return (
      <div>
        <h1 style={style_header}>This is a Header</h1>

        <p className="p">This is a paragraph</p>

        <a href="https://reactjs.org">This is a link</a>

        <form>
          <h2>This is a Form:</h2>
          <p>Enter your name</p>
          <input type="text" />
          <button>Submit</button>
        </form>

        <p>Here is an image:</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React"
          width="100"
        />

        <p>This is a List:</p>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
