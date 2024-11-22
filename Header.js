import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        {/* Make AgroSmart clickable and link it to the home page */}
        <Link to="/" className="logo-link">
          <h1>AgroSmart</h1>
        </Link>
      </div>
      <nav>
        <ul className="nav-list">
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/shopping">Shopping</Link></li> {/* Shopping Tab */}
          <li><Link to="/Signup">Contact</Link></li>
          <li><button className="cta">Get Started</button></li>
          <li><Link to="/signin" className="signin">Sign In</Link></li> {/* Sign In button as a Link */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
