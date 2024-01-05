import {NavLink} from 'react-router-dom'

export default function HomeCard({pokemons, types}) {

  // Fonction pour obtenir le nom du type en fonction de l'ID du type
  const getTypeInfo = typeId => {
    const type = types.find(t => t.id === typeId);
    return type ? { name: type.name.en } : null
  }
  
  return (
    <div className="home">
        {Array.isArray(pokemons) && pokemons.map(pokemon => (
          <div className="card" key={pokemon.id}>
            <NavLink className="profil" to={`/${pokemon.name.en.toLowerCase()}`}>
              <img className="image" src={pokemon.image} alt={pokemon.name.en}/>
              <h2 className="name">{pokemon.name.en}</h2>
            </NavLink>

            <section className='stats'>
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
                    ) : null;
                    })}
                </section>
            </section>
          </div>
        ))}
    </div>
  )
}