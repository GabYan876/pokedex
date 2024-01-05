export default function Header({pokemons, types}) {

    // Fonction pour obtenir le nom du type en fonction de l'ID du type
    const getTypeInfo = typeId => {
        const type = types.find(t => t.id === typeId);
        return type ? { name: type.name.en } : null
    }

    //{Array.isArray(pokemons) && pokemons.map(pokemon => (
    //    <div key={pokemon.id}>
    //        {pokemon.name.en}

    //        {pokemon.types.map(typeId => {
    //        const typeInfo = getTypeInfo(typeId)
    //        return typeInfo ? (
    //            <div key={typeId}>
    //                <h3>{typeInfo.name}</h3>
    //            </div>
    //        ) : null;
    //        })}
    //    </div>
    //))}

    return (
        <div className="header">
        </div>
    )
}