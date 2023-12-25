import React, { useState, useEffect } from 'react';

export default function PokemonList() {
    const [Pokemons, setPokemons] = useState([]);

    useEffect(() => {
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
    }, []);

    return (
    <div>
        {/* Afficher les données uniquement si Pokemons est un tableau */}
        {Array.isArray(Pokemons) && Pokemons.map(pokemon => (
        <div key={pokemon.id}>
            <h2>{pokemon.name.en}</h2>
            <img src={pokemon.image} alt={pokemon.name.en} />
            {/* Ajoutez ici d'autres éléments à afficher */}
        </div>
        ))}
    </div>
    );
 
}