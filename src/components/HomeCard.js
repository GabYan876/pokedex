import React, { useState, useEffect } from 'react'

import {NavLink} from 'react-router-dom'

export default function HomeCard() {

  // Fonction pour obtenir le nom et l'image du type en fonction de l'ID du type
  const getTypeInfo = typeId => {
    const type = Types.find(t => t.id === typeId);
    return type ? { name: type.name.en, image: type.image } : null;
  }

  return (
    <div className="home">
      {Array.isArray(Pokemons) &&
        Pokemons.map(pokemon => (
          <div className="card" key={pokemon.id}>
            <NavLink className="profil" to='/pokemon'>
              <img className="image" src={pokemon.image} alt={pokemon.name.en}/>
              <h2 className="name">{pokemon.name.en}</h2>
            </NavLink>

            <section className='stats'>
                <h3 className="id">N° {pokemon.id}</h3>
                <h3 className="generation">Generation: {pokemon.generation}</h3>
                <section className='typeSection'>
                    <h3 className='type'>Type:</h3>
                    {pokemon.types.map(typeId => {
                    const typeInfo = getTypeInfo(typeId)
                    return typeInfo ? (
                        <div key={typeId}>
                            <p className='typeName'>{typeInfo.name}</p>
                        </div>
                    ) : null;
                    })}
                </section>
            </section>
          </div>
        ))}
    </div>
  );
}