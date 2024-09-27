import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CartList from './components/CartList';
import Footer from './components/Footer';

function App() {
    const [products, setProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then((res) => res.json())
            .then((data) => {
                const productsWithQuantity = data.map((product) => ({
                    ...product,
                    quantity: 0,
                }));
                setProducts(productsWithQuantity);
                updateCartCount(productsWithQuantity);
            });
    }, []);

    const handleQuantityChange = (productId, newQuantity) => {
        const updatedProducts = products.map((product) =>
            product.id === productId
                ? { ...product, quantity: newQuantity }
                : product
        );
        setProducts(updatedProducts);
        updateCartCount(updatedProducts);
    };

    const updateCartCount = (products) => {
        const totalItems = products.reduce((acc, product) => acc + product.quantity, 0);
        setCartCount(totalItems);
    };

    const handleCartClick = () => {
        const cartItems = products.filter(product => product.quantity > 0);
        if (cartItems.length === 0) {
            alert("Keranjang Anda kosong!");
            return;
        }

        let totalCost = 0;
        let message = "<table style='width: 100%; border-collapse: collapse;'>";
        message += "<tr><th style='border: 1px solid black;'>Nama Produk</th><th style='border: 1px solid black;'>Jumlah</th><th style='border: 1px solid black;'>Harga Per Item</th><th style='border: 1px solid black;'>Total Harga</th></tr>";

        cartItems.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalCost += itemTotal;
            message += `<tr><td style='border: 1px solid black;'>${item.title}</td><td style='border: 1px solid black;'>${item.quantity}</td><td style='border: 1px solid black;'>${item.price.toFixed(2)}</td><td style='border: 1px solid black;'>${itemTotal.toFixed(2)}</td></tr>`;
        });

        message += `<tr><td colspan='3' style='border: 1px solid black;'>Total</td><td style='border: 1px solid black;'>${totalCost.toFixed(2)}</td></tr>`;
        message += "</table>";

        setModalMessage(message);
        setIsModalOpen(true);
    };

    const handleBuyClick = () => {
        alert("Produk berhasil disimpan. Pembeli dipersilahkan untuk melanjutkan tahapan pembayaran dengan menghubungi kontak berikut: WA 0234568");
        closeModal(); 
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="App">
            <Navbar cartCount={cartCount} handleCartClick={handleCartClick} />
            <CartList products={products} handleQuantityChange={handleQuantityChange} />
            <Footer />

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <div dangerouslySetInnerHTML={{ __html: modalMessage }} />
                        <div className="flex justify-between mt-4">
                            <button onClick={handleBuyClick} className="px-4 py-2 bg-green-500 text-white rounded">Beli</button>
                            <button onClick={closeModal} className="px-4 py-2 bg-blue-500 text-white rounded">Tutup</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
