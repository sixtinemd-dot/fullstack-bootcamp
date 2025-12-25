import React from "react";

class UserFavAnimals extends React.Component {
  render() {
    return (
      <ul>
        {this.props.favAnimals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    );
  }
}

export default UserFavAnimals;
