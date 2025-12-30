import React from 'react'
import { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router'

export default function Products() {

  const params = useParams()
  console.log(params)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
        navigate("/")
    }, 5 * 1000)
  }, [])

  const goBackHome = () => {
    navigate('/')
  }
  return (
    <>
    <div>
        <h2>products #{params.prdid}</h2>
        <Link to={'/shop'}>Continue Shopping</Link>
        <div>
        <button onClick={goBackHome}>Go back to Homepage</button>
        </div>
    </div>
    </>
  )
}