import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ExploreProducts from './components/ExploreProducts';
import SignupForm from './components/Signup';
import SignInForm from './components/signin';
import ShoppingComponent from './components/Shopping';
import TaskManager from './components/TaskManager';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreProducts />} />
        <Route path="/TaskManager" element={<TaskManager />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/shopping" element={<ShoppingComponent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
