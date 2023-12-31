import { useParams } from 'react-router-dom'

export default function Pokemon({pokemons, types}) {

  // Fonction pour obtenir le nom et l'image du type en fonction de l'ID du type
  const getTypeInfo = typeId => {
    const type = types.find(t => t.id === typeId)
    return type ? { name: type.name.en, image: type.image } : null
  }

  const { name } = useParams()
  const pokemonName = name ? name.toLowerCase() : ''

  const pokemon = pokemons.find(pokemon => pokemon.name.en.toLowerCase() === pokemonName);
  console.log(pokemon);

  return (
    <div className="pokemon">
        {pokemon? (
            <div className="cardPokemon" key={pokemon.id}>
              <section className="profilPokemon">
                <h2 className="namePokemon">{pokemon.name.en}</h2>
                <img className="imagePokemon" src={pokemon.image} alt={pokemon.name.en}/>
              </section>

              <section className='statsPokemon'>
                  <h3 className="statGris">N° {pokemon.id}</h3>
                  <h3 className="statWhite">Generation: {pokemon.generation}</h3>
                  <section className='typeSectionPokemon'>
                      <h3 className='type'>Type:</h3>
                      {pokemon.types.map(typeId => {
                      const typeInfo = getTypeInfo(typeId)
                      return typeInfo ? (
                          <div key={typeId}>
                              <p className='typeName'>{typeInfo.name}</p>
                          </div>
                      ) : null
                      })}
                  </section>
                  <h3 className='statWhite'>Height: {pokemon.height} m</h3>
                  <h3 className='statGris'>Weight: {pokemon.weight} lbs</h3>
                  <h3 className='statWhite'>Hp: {pokemon.stats.hp}</h3>
                  <h3 className='statGris'>Atk: {pokemon.stats.atk}</h3>
                  <h3 className='statWhite'>Def: {pokemon.stats.def}</h3>
                  <h3 className='statGris'>Vit: {pokemon.stats.vit}</h3>
                  <h3 className='statWhite'>Spe Def: {pokemon.stats.spe_def}</h3>
                  <h3 className='statGris'>Spe Atk: {pokemon.stats.spe_atk}</h3>
              </section>
            </div>
        ) : console.log("rien")}
    </div>
  )
}