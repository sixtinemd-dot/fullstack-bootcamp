import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import ErrorBoundary from './helpers/ErrorBoundary'
//import Voting from './components/Voting'

function App() {
  const [count, setCount] = useState(0)
  const [fullname, setFullname] = useState('')
  const [color, setColor] = useState('')
  const [yesno, setYesno] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.fullname.value, fullname)
    console.log(e.target.colors.value, color)
    console.log(e.target.yesno.checked)
    console.log(e.target.text.value)
  }

  return (
    <>
    <h2>Passing Functions via props/ Handling Render Errord/ Forms iin react</h2>
    <form onSubmit={handleSubmit}>
      <input 
      onChange={(e) => setFullname(e.target.value)} 
      type='text' 
      placeholder='name' 
      name='fullname' 
      />
      {fullname}
      <br />
      <select name='colors' onChange={(e) => setColor(e.target.value)}>
        <option value={""}></option>
        <option value={"yellow"}>Yellow</option>
        <option value={"orange"}>Orange</option>
        <option value={"red"}>Red</option>
      </select>
      {color}
      <br />
      Are you coming on-site ?
      <input 
      onChange={(e) => setYesno(e.target.checked)} 
      type='checkbox' 
      name="yesno"
      /> {yesno? "YES" : "NO"}
      <br />
      <textarea name="text"></textarea>
      <br />
      <input type='submit' />
    </form>
    
    {/* <ErrorBoundary message={'counter problem'}>
      <Counter count={count} setCount={setCount}/>
    </ErrorBoundary> */}

    {/* <h2>Voting App</h2>
    <Voting /> */}
    </>
  )
}

export default App
