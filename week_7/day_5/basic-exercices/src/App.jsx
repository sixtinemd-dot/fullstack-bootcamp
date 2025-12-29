import './App.css';
import {useState} from "react"
import Counter from './components/Counter'
import CounterClass from './components/CounterClass';


function App() {

  let [state, setState] = useState(1)
  const [count, setCount] = useState({num: 0})
  const [users, setUsers] = useState()

  const handleClick = (e,param) => {
    setState = 2

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  }

  const handleInput = (e) => {
    console.log(e.target.value)
  }

  const changeBgColor = (e) => {
    e.target.style.backgroundColor = "yellow"
  }
  return (
    <>
      <CounterClass />
      {state}
      <h2>Responding to Events</h2>
      <button onClick={(e) => handleClick(e,"My button")}>Click</button>
      <div onClick={(e) => changeBgColor(e)}>
        <input type='text' onChange={handleInput}/>
      </div>
      {
        users && users.map(item => {
          return <div key={item.id}>{item.name}</div>
        })
      }
      <div>
        <Counter />
        <Counter />
      </div>
    </>
  );
}

export default App
