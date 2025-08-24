import React from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <h1 className="title">🌾 Seetharama Millets & Nuts</h1>
        <ProductList />
      </main>
    </div>
  )
}

export default App