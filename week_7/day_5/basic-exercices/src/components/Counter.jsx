import React from 'react'
import {useState, useEffect} from 'react'

export default function Counter() {
    const [count, setCount] = useState({num: 0})
    const [inputNum, setInputNum] = useState(0)

    useEffect(() => {
        return () => alert('Please dont remove me from page')
    }, [])

    const increment = (param) => {
        // const newCount = {...count}
        // newCount.num++
        // setCount(newCount)
        setCount({...count, num:count.num + Number(inputNum)})
    }

    const decrement = () => {
        console.log("inputNum=>", inputNum)
        setCount({...count, num: count.num - Number(inputNum)})
    }

    return (
        <div>
            <h2>Counter</h2>
            <h3>Count = {count.num} </h3>
            <button onClick={() => increment(5)}>+</button>
            <button onClick={() => decrement(10)}>-</button>
            <input type="number" onChange={e => setInputNum(e.target.value)}/>
        </div>
    )
}