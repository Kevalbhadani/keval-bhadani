import './App.css';
import { Routes, Route } from "react-router-dom"
import Pro from './Componet/Pro'
import Rout from './Componet/Rout'
import Cart from './Componet/Cart'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Pro />} />
        <Route path="/detail/:id" element={<Rout />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </>
  )
}

export default App;
