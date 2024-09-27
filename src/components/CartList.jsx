import React from 'react';
import CartItem from "./CarItem"; 

function CartList({ products, handleQuantityChange }) {
  return (
    <div className="p-4">
      {products.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          handleQuantityChange={handleQuantityChange}
        />
      ))}
    </div>
  );
}

export default CartList;

