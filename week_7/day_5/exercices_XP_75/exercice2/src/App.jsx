//EXERCICE 2, linked with UserFavAnimals.jsx 

import UserFavAnimals from "./UserFavAnimals";

function App() {
  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };

  return (
    <div>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>

      <UserFavAnimals favAnimals={user.favAnimals} />
    </div>
  );
}

export default App;