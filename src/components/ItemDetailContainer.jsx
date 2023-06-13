import React from 'react'
import ProductCard from "./ProductCard"


const ItemDetailContainer = ({ productsData }) => {
  return (
    <div>
      {
      productsData.map(product => {
      return (
        <ProductCard key={product.id} productsData={product} />
      )
    }
      )}
    </div>
  )
}

export default ItemDetailContainer