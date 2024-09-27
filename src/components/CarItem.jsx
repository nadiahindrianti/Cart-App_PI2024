import React from 'react';
import Counter from './Counter';

function CartItem({ product, handleQuantityChange }) {
  const totalPrice = product.price * product.quantity;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 mb-4 shadow-md rounded-lg hover:bg-gray-50 transition duration-200">
      <div className="flex items-center space-x-4 w-full sm:w-2/3">
        <img src={product.image} alt={product.title} className="w-16 h-16 rounded-lg border-2 border-yellow-400" />
        <span className="text-darkblue font-semibold truncate">{product.title}</span>
      </div>
      <div className="flex items-center space-x-6 mt-2 sm:mt-0">
        <span className="text-rosegold font-medium">${product.price}</span>
        <Counter
          quantity={product.quantity}
          productId={product.id}
          handleQuantityChange={handleQuantityChange}
        />
        <span className="text-yellow-400 font-bold">${(totalPrice).toFixed(2)}</span>
      </div>
    </div>
  );
}

export default CartItem;
