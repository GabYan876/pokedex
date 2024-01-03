import { useParams } from 'react-router-dom'
import React, { useState } from 'react'

export default function Pokemon({pokemons, types}) {

  // obtenir le nom du/des type(s) en fonction de l'ID du type
  const getTypeInfo = typeId => {
    const type = types.find(t => t.id === typeId)
    return type ? { name: type.name.en, image: type.image } : null
  }

  const { name } = useParams()
  const pokemonName = name ? name.toLowerCase() : ''

  const pokemon = pokemons.find(pokemon => pokemon.name.en.toLowerCase() === pokemonName)

  const [pokemonImage, setPokemonImage] = useState(pokemon.image)

  function imageLeftClick() {
    if (pokemonImage === pokemon.image) {
      setPokemonImage(pokemon.image_shiny || pokemon.image);
    } else if (pokemonImage === pokemon.image_shiny) {
      setPokemonImage(pokemon.image)
    }
  }

  return (
    <div className="pokemon">
        {pokemon? (
            <div className="cardPokemon" key={pokemon.id}>
              <section className="profilPokemon">
                <h2 className="namePokemon">{pokemon.name.en}</h2>
                <button className='buttonImagePokemon' onClick={imageLeftClick}>
                  <img className="imagePokemon" src={pokemonImage} alt={pokemon.name.en}/>
                </button>
              </section>

              <section className='statsPokemon'>
                  <h3 className="statGrey">N° {pokemon.id}</h3>
                  <h3 className="statWhite">Generation: {pokemon.generation}</h3>
                  <section className='typeSection'>
                      <h3 className='type'>Type:</h3>
                      {pokemon.types.map(typeId => {
                      const typeInfo = getTypeInfo(typeId)
                      return typeInfo ? (
                          <div key={typeId}>
                              <h3 className='typeName'>{typeInfo.name}</h3>
                          </div>
                      ) : null
                      })}
                  </section>
                  <h3 className='statWhite'>Height: {pokemon.height} m</h3>
                  <h3 className='statGrey'>Weight: {pokemon.weight} lbs</h3>
                  <h3 className='statWhite'>Hp: {pokemon.stats.hp}</h3>
                  <h3 className='statGrey'>Atk: {pokemon.stats.atk}</h3>
                  <h3 className='statWhite'>Def: {pokemon.stats.def}</h3>
                  <h3 className='statGrey'>Vit: {pokemon.stats.vit}</h3>
                  <h3 className='statWhite'>Spe Def: {pokemon.stats.spe_def}</h3>
                  <h3 className='statGrey'>Spe Atk: {pokemon.stats.spe_atk}</h3>
              </section>
            </div>
        ) : null}

      <section className='evolution'>
        {pokemon.evolvedFrom && Object.keys(pokemon.evolvedFrom).length > 0 ? (
              Object.keys(pokemon.evolvedFrom).map(id => {
                const evolvedPokemon = pokemons.find(p => p.id === parseInt(id, 10));
                return (
                  <div className='pokemonEvolutionCard' key={id}>
                    {evolvedPokemon && (
                      <>
                      <section className='evolutionNameSection'>
                        <h1 className='evolutionName'>{evolvedPokemon.name.en}</h1>
                      </section>

                      <section className='evolutionImageSection'>
                        <img className='evolutionImage' src={evolvedPokemon.image} alt={evolvedPokemon.name.en} />
                      </section>

                      <section className='evolutionLvlSection'>
                        <h2 className='evolutionLvl'>{pokemon.evolvedFrom[id]}</h2>
                      </section>
                      </>
                    )}
                  </div>
                );
              })
            ) : null}

        {pokemon.evolvesTo && Object.keys(pokemon.evolvesTo).length > 0 ? (
            Object.keys(pokemon.evolvesTo).map(id => {
              const evolvedPokemon = pokemons.find(p => p.id === parseInt(id, 10));
              return (
                <div className='pokemonEvolutionCard' key={id}>
                  {evolvedPokemon && (
                    <>
                    <section className='evolutionNameSection'>
                      <h1 className='evolutionName'>{evolvedPokemon.name.en}</h1>
                    </section>

                    <section className='evolutionImageSection'>
                      <img className='evolutionImage' src={evolvedPokemon.image} alt={evolvedPokemon.name.en} />
                    </section>

                    <section className='evolutionLvlSection'>
                      <h2 className='evolutionLvl'>{pokemon.evolvesTo[id]}</h2>
                    </section>
                    </>
                  )}
                </div>
              );
            })
          ) : null}
      </section>

    </div>
  )
}