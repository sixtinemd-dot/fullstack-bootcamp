import {useContext} from 'react'
import { TitleContext } from './One'
import Four from './Four'

export default function Three() {
    const {a} = useContext(TitleContext)
  return (
    <div>
        <h2>{a}</h2>
        <Four />
    </div>
  )
}
