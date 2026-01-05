import {useContext} from 'react'
import { TitleContext } from './One'

export default function () {
    const {setTitle} = useContext(TitleContext)
  return (
    <div>
        <input 
        onChange={(e) => setTitle(e.target.value) }
        placeholder='change title'>
        </input>
    </div>
  )
}
