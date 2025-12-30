import React, {useState, useEffect} from 'react'
import {Link} from 'react-router'

export default function Shop() {

  const [products, setProducts] = useState()

    // const products = [
    //     { id: 111, name: "Iphone", price: 350},
    //     { id: 222, name: "Mac", price: 500},
    //     { id: 333, name: "Ipad", price: 400},
    // ]

    useEffect(() => {
      getAllProducts()
    }, [])

    const getAllProducts = async() => {
      try {
        const res = await fetch('http://localhost:5002/api/products/all')
        const data = await res.json()
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div>
      <h2>My Shop</h2>
        {
        products && products.map((item) => {
            return (
                <div key={item.id} style={{
                    display:'inline-block',
                    border: '1px solid',
                    padding: '20px',
                    margin: '20px',
                    borderRadius: '12px',
                }}
                >
                <h2>{item.name}</h2>
                <h3>{item.price}</h3>
                <Link to={`/prd/${item.id}`}>Buy Now</Link>
                </div>
            )
        })
    }
    </div>
  )
}
