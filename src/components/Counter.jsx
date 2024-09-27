import React from 'react';

function Counter({ quantity, productId, handleQuantityChange }) {
  return (
    <div className="flex items-center">
      <button
        onClick={() => handleQuantityChange(productId, Math.max(0, quantity - 1))} 
        className="px-3 py-1 bg-red-400 text-white rounded-full hover:bg-red-500 transition duration-200"
      >
        -
      </button>
      <span className="mx-2 text-darkblue font-semibold">{quantity}</span>
      <button
        onClick={() => handleQuantityChange(productId, quantity + 1)}
        className="px-3 py-1 bg-green-400 text-white rounded-full hover:bg-green-500 transition duration-200"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
