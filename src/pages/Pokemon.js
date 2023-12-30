import { useParams } from 'react-router-dom'

export default function Pokemon({pokemons, types}) {

  // Fonction pour obtenir le nom et l'image du type en fonction de l'ID du type
  const getTypeInfo = typeId => {
    const type = types.find(t => t.id === typeId);
    return type ? { name: type.name.en, image: type.image } : null
  }

  const { name } = useParams();
  const pokemonName = name ? name.toLowerCase() : ''

  const pokemon = pokemons.find(pokemon => pokemon.name.en.toLowerCase() === pokemonName);
  console.log(pokemon);

  return (
    <div className="home">
        {pokemon? (
            <div className="card" key={pokemon.id}>
            <section className="profil">
              <img className="image" src={pokemon.image} alt={pokemon.name.en}/>
              <h2 className="name">{pokemon.name.en}</h2>
            </section>

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
        ) : console.log("rien")}
    </div>
  )
}