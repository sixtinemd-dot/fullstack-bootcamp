import React from 'react'
import './App.css'
//1
import ErrorBoundary from './ErrorBoundary'
//2
import FavoriteColor from './FavoriteColor'

// exercice 1
class BuggyCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0}
  }

  handleClick = () => {
    this.setState(({counter}) => ({
      counter: counter + 1
    }))
  }

  render() {
    if (this.state.counter >= 5) {
      throw new Error("I crashed!")
    }

    return (
      <h1 onClick={this.handleClick} style={{cursor: "pointer"}}>
        {this.state.counter}
      </h1>
    )
  }
}
function App() {
  return (
    <>
 {/* exercice 1 */}

      <h1>Exercice 1</h1>
      <h2>Simulation 1</h2>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <h2>Simulation 2</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <h2>Simulation 3</h2>
      <BuggyCounter />

 {/* exercice 2 and 3*/}
      <h1>Exercice 2</h1>
      <FavoriteColor />
    </>
  )
}

export default App
