import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Asteroid from './components/asteroidImage'
import Header from './components/header-content'
import GetNeos from './components/api-request'
import './App.css'

function App() {
  return (
    <div>
      <Navbar/>
      <div class='container'>
        <Asteroid/>
        <Header/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
