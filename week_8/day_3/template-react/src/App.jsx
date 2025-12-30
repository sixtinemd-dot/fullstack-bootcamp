import Home from "./components/Home"
import About from "./components/About"
import Shop from "./components/Shop"
import './App.css'
import {Routes, Route, Link} from 'react-router'
import Products from "./components/Products"

function App() {

  return (
    <>
    <header>
      <nav>
        <Link to="/home">Home</Link><br/>
        <Link to="/about">About</Link><br/>
        <Link to="/shop">Shop</Link><br/>
      </nav>
    </header>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/prd/:prdid" element={<Products/>} />
        <Route path="*" element={<h2>404 page not found</h2>} />
      </Routes>
    </>
  )
}

export default App
