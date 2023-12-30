import {Routes, Route} from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import HomeCard from '../components/HomeCard.js'
import Pokemon from '../pages/Pokemon.js'

export default function Home() {
  const [Pokemons, setPokemons] = useState([])
  const [Types, setTypes] = useState([])

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
    <Routes>
      <Route path='/' element={<HomeCard pokemons={Pokemons} types={Types}/>}/>
      <Route path='/:name' element={<Pokemon pokemons={Pokemons} types={Types}/>}/>
    </Routes>
    </>
  )
}