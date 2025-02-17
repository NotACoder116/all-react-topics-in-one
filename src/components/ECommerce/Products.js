import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Product.css';

const Products = () => {
    const [cartItems, setCartItem] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
           const response = await axios.get('https://fakestoreapi.com/carts/2');
           const fetchedProducts = response.data.products;

           const productDetails = await Promise.all(
            fetchedProducts.map(async (product) => {
               const productResponse = await axios.get(`https://fakestoreapi.com/products/${product.productId}`);
               return productResponse.data;
            })
           );
           setCartItem(productDetails);
        //    
        }

        fetchCartItems();
    }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
            <img src={item.image} alt={item.title} className="w-32 h-32 object-contain mb-4" />
            <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">{item.title}</h2>
            <p className="text-gray-600 text-center mb-4">${item.price.toFixed(2)}</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products