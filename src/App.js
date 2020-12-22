import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Asteroid from './components/asteroidImage'
import './App.css'

function App() {
  return (
    <div>
      <Navbar/>
      <div class='container'>
        <Asteroid/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
