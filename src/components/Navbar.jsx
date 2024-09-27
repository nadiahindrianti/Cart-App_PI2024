import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar({ cartCount, handleCartClick }) {
    const [isOpen, setIsOpen] = useState(false); 
    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <nav className="bg-darkblue p-6 shadow-lg flex justify-between items-center">
            <h1 className="text-rosegold text-2xl font-bold tracking-wide">StoreMe</h1>
            <div className="hidden md:flex items-center space-x-6">
                <a href="/" className="text-white hover:text-yellow-400">Home</a>
                <a href="/about" className="text-white hover:text-yellow-400">About</a>
                <a href="/products" className="text-white hover:text-yellow-400">Produk</a>
                <span className="text-yellow-400 font-medium">Cart: {cartCount} items</span>
                <div className="ml-4 relative">
                    <button onClick={handleCartClick} className="flex items-center">
                        <FaShoppingCart className="w-8 h-8 text-white" />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs font-semibold">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-16 right-0 bg-darkblue w-48 rounded-md shadow-lg z-10 md:hidden">
                    <a href="/" className="block px-4 py-2 text-white hover:bg-yellow-400">Home</a>
                    <a href="/about" className="block px-4 py-2 text-white hover:bg-yellow-400">About</a>
                    <a href="/products" className="block px-4 py-2 text-white hover:bg-yellow-400">Produk</a>
                    <div className="flex items-center px-4 py-2">
                        <button onClick={handleCartClick} className="flex items-center">
                            <FaShoppingCart className="w-6 h-6 text-white mr-2" />
                            <span className="text-yellow-400 font-medium">Cart: {cartCount} items</span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
