import {useContext} from 'react'

import { TitleContext } from './One'

export default function Four() {

    const {title} = useContext(TitleContext)
  return (
    <div>
        <h1>Title : {title}</h1>
    </div>
  )
}
