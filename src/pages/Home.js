import React, { useState, useEffect } from 'react';

export default function Home() {
  const [Pokemons, setPokemons] = useState([]);
  const [Types, setTypes] = useState([]);

  useEffect(() => {
    // Requête pour obtenir la liste des Pokémon
    fetch('https://pokedex-api.3rgo.tech/api/pokemon')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          setPokemons(data.data);
        } else {
          console.error('Invalid data format received from the API:', data);
        }
      })
      .catch(error => console.error('Error fetching pokemon:', error));

    // Requête pour obtenir la liste des types
    fetch('https://pokedex-api.3rgo.tech/api/types')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          setTypes(data.data);
        } else {
          console.error('Invalid data format received from the API:', data);
        }
      })
      .catch(error => console.error('Error fetching types:', error));
  }, []);

  // Fonction pour obtenir le nom et l'image du type en fonction de l'ID du type
  const getTypeInfo = typeId => {
    const type = Types.find(t => t.id === typeId);
    return type ? { name: type.name.en, image: type.image } : null;
  };

  return (
    <div className="home">
      {Array.isArray(Pokemons) &&
        Pokemons.map(pokemon => (
          <div className="pokemon" key={pokemon.id}>
            <section className="profil">
              <img className="image" src={pokemon.image} alt={pokemon.name.en} />
              <h2 className="name">{pokemon.name.en}</h2>
            </section>

            <section className='stats'>
                <h3 className="id">N° {pokemon.id}</h3>
                <h3 className="generation">Generation: {pokemon.generation}</h3>
                <section className='typeSection'>
                    <h3 className='type'>Type:</h3>
                    {pokemon.types.map(typeId => {
                    const typeInfo = getTypeInfo(typeId);
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