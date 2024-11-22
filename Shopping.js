import React from 'react';
import './Shopping.css'; // Custom CSS for Shopping page

function Shopping() {
  return (
    <section className="shopping" id="shopping">
      <h2>Our Marketplace</h2>
      <div className="product-list">
        <div className="product-item">
          <h3>Fresh Tomatoes</h3>
          <p>Locally sourced, pesticide-free tomatoes.</p>
          <button className="buy-now">Buy Now</button>
        </div>
        <div className="product-item">
          <h3>Organic Lettuce</h3>
          <p>Crisp and fresh organic lettuce.</p>
          <button className="buy-now">Buy Now</button>
        </div>
        <div className="product-item">
          <h3>Free-Range Eggs</h3>
          <p>Farm-fresh eggs from free-range chickens.</p>
          <button className="buy-now">Buy Now</button>
        </div>
        {/* Add more products here */}
      </div>
    </section>
  );
}

export default Shopping;
