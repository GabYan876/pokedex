import Header from './components/Header.js'
import Home from './pages/Home.js'
import './css/app.css'

import React, { useState, useEffect } from 'react'

function App() {

  const [pokemons, setPokemons] = useState([])
  const [types, setTypes] = useState([])

  useEffect(() => {
    // Requête pour obtenir la liste des Pokémon
    fetch('https://pokedex-api.3rgo.tech/api/pokemon')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          setPokemons(data.data)
        }
      })

    // Requête pour obtenir la liste des types
    fetch('https://pokedex-api.3rgo.tech/api/types')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          setTypes(data.data)
        }
      })
  }, [])


  return (
    <>
    <Header pokemons={pokemons} types={types}/>
    <Home pokemons={pokemons} types={types}/>
    </>
  )
}

export default App
