import React, { useEffect, useState } from 'react'

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/products`)
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.error('Error fetching products:', err)
      }
    }
    fetchProducts()
  }, [])

  return (
    <section className="products">
      <h2>Our Products</h2>
      {products.length > 0 ? (
        <ul>
          {products.map((p) => (
            <li key={p._id}>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <strong>₹{p.price}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available yet.</p>
      )}
    </section>
  )
}

export default ProductList