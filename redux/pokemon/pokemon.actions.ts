import { pokemonType, tType } from '../../types';
import { pokemonActionTypes } from './pokemon.types';

export const setPokemonTypes =  (pokemons:Array<tType>) => ({
    type:pokemonActionTypes.SET_TYPES,
    payload:pokemons
});

export const setActivePokemonType =  (pokemon:string) => ({
    type:pokemonActionTypes.SET_ACTIVE_TYPE,
    payload:pokemon
});


export const addNewPokemons =  (pokemons:Array<pokemonType>) => ({
    type:pokemonActionTypes.ADD_NEW_POKEMONS,
    payload:pokemons
});

export const setPokemons = (pokemons:Array<pokemonType>) => ({
        type: pokemonActionTypes.SET_POKEMONS,
        payload:pokemons
})

