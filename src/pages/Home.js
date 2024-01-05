import {Routes, Route} from 'react-router-dom'

import HomeCard from '../components/HomeCard.js'
import Pokemon from '../pages/Pokemon.js'

export default function Home({pokemons, types}) {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomeCard pokemons={pokemons} types={types}/>}/>
      <Route path='/:name' element={<Pokemon pokemons={pokemons} types={types}/>}/>
    </Routes>
    </>
  )
}