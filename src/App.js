import React, { useState, useEffect } from 'react'

import Header from './components/Header.js'
import Home from './pages/Home.js'
import './css/app.css'

function App() {

  return (
    <>
    <Header pokemons={Pokemons} types={Types}/>
    <Home/>
    </>
  )
}

export default App
