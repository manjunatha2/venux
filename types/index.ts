export interface tType  {
    name:string;
    url:string
}

export interface pokemonType  {
    name:string;
    url:string
}
export type StoreState = {
    pokemon:{
        types:[],
        pokemons:[],
        activeType:string,
        activePokemon:string
    },
    persist: Object
}