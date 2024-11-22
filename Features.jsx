// Features.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import shoppingImage from '../assets/AnotherFarmImage.jpeg'; 
import anotherImage from '../assets/AnotherFarmImage.png'; 
import './Features.css';

const Features = () => {
  const navigate = useNavigate();

  const featureData = [
    {
      image: shoppingImage,
      title: 'Shopping Delivery',
      description:
        'Get all your farming essentials, tools, and supplies delivered directly to your farm. Browse a wide range of products and make hassle-free purchases.',
      buttonText: 'Explore Products',
      reverse: false,
      onClick: () => navigate('/explore'), // Navigates to Explore Products page
    },
    {
      image: anotherImage,
      title: 'Farm Management',
      description:
        'Track farm activities, manage tasks efficiently, and assign roles easily. Stay organized and improve productivity on the go.',
      buttonText: 'Start Managing',
      reverse: true,
      onClick: () => navigate('/TaskManager'), // Navigates to Task Manager page
    },
  ];

  return (
    <div className="features-container">
      {featureData.map((feature, index) => (
        <div 
          key={index} 
          className={`feature-item ${feature.reverse ? 'reverse' : ''}`}
        >
          <img 
            src={feature.image} 
            alt={feature.title} 
            className="feature-image" 
          />
          <div className="feature-content">
            <h2 className="feature-title">{feature.title}</h2>
            <p className="feature-description">{feature.description}</p>
            <button 
              className="feature-button"
              onClick={feature.onClick}
            >
              {feature.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
