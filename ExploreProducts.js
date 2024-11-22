import React, { useState } from 'react';
import './ExploreProducts.css'; // Import custom CSS for styling
import capsicumImage from '../images/capsicum.jpg';
import carrotImage from '../images/carrots.jpg';
import cauliflowerImage from '../images/cauliflower.jpg';
import corianderImage from '../images/coriander.jpg';
import tomatoImage from '../images/tomato.jpg';
import spinachImage from '../images/spinach.jpg';
import onionImage from '../images/onions.jpg';
import potatoImage from '../images/potato.jpg';
import gingerImage from '../images/ginger.jpg';
import garlicImage from '../images/garlic.jpg';
import brinjalImage from '../images/brinja.jpg';
import okraImage from '../images/okra.jpg';
import methiImage from '../images/methi.jpg';
import pineappleImage from '../images/pineapple.jpg';
import cucumberImage from '../images/cucumber.jpg';
import appleImage from '../images/apple.jpg';
import bananaImage from '../images/banana.jpg';
import papayaImage from '../images/papaya.jpg';
import watermelonImage from '../images/watermelon.jpg';
import strawberryImage from '../images/strawberry.jpg';
import axios from 'axios';

const ExploreProducts = () => {
  // Mock data for products
  const [products] = useState([
    { id: 1, name: 'Capsicum - Green (Loose)', quantity: '1 kg', location: 'Karnataka', price: 80, originalPrice: 123.29, discount: 35, image: capsicumImage },
    { id: 2, name: 'Carrot - Orange (Loose)', quantity: '1 kg', location: 'Tamil Nadu', price: 52, originalPrice: 101.37, discount: 49, image: carrotImage },
    { id: 3, name: 'Cauliflower', quantity: '1 pc (approx. 400 to 600 g)', location: 'Maharashtra', price: 28, originalPrice: 45.21, discount: 38, image: cauliflowerImage },
    { id: 4, name: 'Coriander Leaves', quantity: '1 kg', location: 'Gujarat', price: 106.19, originalPrice: 139.73, discount: 24, image: corianderImage },
    { id: 5, name: 'Tomato - Red (Loose)', quantity: '1 kg', location: 'Andhra Pradesh', price: 40, originalPrice: 60.50, discount: 34, image:tomatoImage },
    { id: 6, name: 'Spinach (Palak)', quantity: '1 kg', location: 'Karnataka', price: 45, originalPrice: 75.80, discount: 40, image:spinachImage },
    { id: 7, name: 'Onion - Red (Loose)', quantity: '1 kg', location: 'Maharashtra', price: 35, originalPrice: 60.00, discount: 42, image:onionImage },
    { id: 8, name: 'Potato - Fresh', quantity: '1 kg', location: 'Uttar Pradesh', price: 25, originalPrice: 45.00, discount: 44, image: potatoImage },
    { id: 9, name: 'Ginger - Fresh', quantity: '500 g', location: 'West Bengal', price: 60, originalPrice: 100.00, discount: 40, image: gingerImage },
    { id: 10, name: 'Garlic - Fresh', quantity: '500 g', location: 'Rajasthan', price: 50, originalPrice: 80.00, discount: 37, image: garlicImage },
    { id: 11, name: 'Brinjal - Purple (Loose)', quantity: '1 kg', location: 'Tamil Nadu', price: 60, originalPrice: 85.50, discount: 30, image: brinjalImage },
    { id: 12, name: 'Okra (Ladyfinger)', quantity: '500 g', location: 'Madhya Pradesh', price: 30, originalPrice: 45.00, discount: 33, image:okraImage },
    { id: 13, name: 'Methi Leaves', quantity: '1 kg', location: 'Maharashtra', price: 55, originalPrice: 75.00, discount: 27, image: methiImage },
    { id: 14, name: 'Pineapple - Fresh', quantity: '1 pc', location: 'Kerala', price: 150, originalPrice: 180.00, discount: 17, image:pineappleImage },
    { id: 15, name: 'Cucumber - Fresh', quantity: '1 kg', location: 'Gujarat', price: 30, originalPrice: 50.00, discount: 40, image:cucumberImage },
    { id: 16, name: 'Apple - Red (Loose)', quantity: '500 g', location: 'Himachal Pradesh', price: 75, originalPrice: 100.00, discount: 25, image: appleImage },
    { id: 17, name: 'Banana - Fresh', quantity: '1 dozen', location: 'Kerala', price: 50, originalPrice: 70.00, discount: 29, image: bananaImage },
    { id: 18, name: 'Papaya - Fresh', quantity: '1 pc', location: 'Madhya Pradesh', price: 40, originalPrice: 60.00, discount: 33, image: papayaImage },
    { id: 19, name: 'Watermelon - Fresh', quantity: '1 pc', location: 'Rajasthan', price: 120, originalPrice: 160.00, discount: 25, image: watermelonImage},
    { id: 20, name: 'Strawberry - Fresh', quantity: '500 g', location: 'Maharashtra', price: 150, originalPrice: 200.00, discount: 25, image:strawberryImage }
  ]);

  const [cart, setCart] = useState([]); // State for cart items
  const [cartMessage, setCartMessage] = useState('');

  // Function to handle adding product to cart
  const addToCart = (productId, quantity) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingCartItem = cart.find(item => item.product_id === productId);
    if (existingCartItem) {
      const updatedCart = cart.map(item =>
        item.product_id === productId
          ? { ...item, quantity: item.quantity + parseInt(quantity) }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { product_id: productId, name: product.name, price: product.price, quantity: parseInt(quantity) }]);
    }

    setCartMessage('Product added to cart!');
    setTimeout(() => setCartMessage(''), 3000); // Hide cart message after 3 seconds
  };

  // Function to remove item from cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.product_id !== productId);
    setCart(updatedCart);
  };

  // Function to proceed to checkout
  const checkout = async () => {
    try {
      const orderData = {
        items: cart,
        totalAmount: cart.reduce((acc, item) => acc + item.price * item.quantity, 0), // Calculate total price
        user: { id: 'user_id' } // Replace with actual user data (e.g., from auth state)
      };

      const response = await axios.post('http://localhost/my_api/checkout.php', orderData);

      if (response.status === 200) {
        alert('Checkout successful!');
        setCart([]); // Reset cart after successful checkout
        setCartMessage('Your order has been placed!');
      } else {
        alert('Something went wrong, please try again.');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('Error while processing your order. Please try again.');
    }
  };

  return (
    <div className="explore-products">
      <h1>Explore Farm Vegetables</h1>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p className="product-location">Location: {product.location}</p>
            <div className="product-quantity">
              <select id={`quantity-${product.id}`}>
                <option value="1">1 kg</option>
                <option value="500">500 g</option>
                <option value="2">2 kg</option>
              </select>
            </div>
            <div className="product-pricing">
              <p className="price">₹{product.price}</p>
              <p className="original-price">₹{product.originalPrice}</p>
              <p className="discount">{product.discount}% off</p>
            </div>
            <button onClick={() => addToCart(product.id, document.getElementById(`quantity-${product.id}`).value)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Your Cart</h3>
        <ul>
          {cart.map(item => (
            <li key={item.product_id}>
              {item.name} - {item.quantity} x ₹{item.price}
              <button onClick={() => removeFromCart(item.product_id)}>Remove</button>
            </li>
          ))}
        </ul>
        {cart.length > 0 && (
          <div className="cart-actions">
            <button onClick={checkout}>Checkout</button>
          </div>
        )}
      </div>

      {cartMessage && <div className="cart-message">{cartMessage}</div>}
    </div>
  );
};

export default ExploreProducts;
