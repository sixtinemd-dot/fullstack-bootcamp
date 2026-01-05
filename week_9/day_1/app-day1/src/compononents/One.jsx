import {useState, createContext} from 'react'
import Two from './Two'
import Five from './Five'

export const TitleContext = createContext()

export default function One() {
    const [title, setTitle] = useState('My title')
  return (
    <div>
       <TitleContext value={{title, setTitle, a:10}}>
        <Two />
        <Five />
       </TitleContext> 
    </div>
  )
}


