import { useState } from 'react'
import './App.css'

function App() {
   // Step 1: state with array of language objects
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  // Step 2: function to increase votes
  const vote = (index) => {
    // Create a copy of the languages array
    const newLanguages = [...languages];

    // Increase votes for the selected language
    newLanguages[index].votes += 1;

    // Update the state
    setLanguages(newLanguages);
  };

  return (
    <div>
      <h1>Vote Your Language</h1>

      {/* Step 3: display languages */}
      {languages.map((language, index) => (
        <div id='div' key={index}>
          <span>{language.votes}</span>
          <span>{language.name}</span>

          {/* Button to vote */}
          <button className="button" onClick={() => vote(index)}>Click here !</button>
        </div>
      ))}
    </div>
  );
}

export default App
