import {pokemonActionTypes} from './pokemon.types';

const INITIAL_STATE = {
    types:[],
    pokemons:[],
    activeType:'all',
    activePokemon:''
}

type actionType = {
    type: string,
    payload?: any;
};

const pokemonReducer = (state = INITIAL_STATE, action:actionType) => {
    switch(action.type){
        case pokemonActionTypes.SET_TYPES :
            return {
                ...state,
                types:action.payload,
            }
        case pokemonActionTypes.SET_ACTIVE_TYPE:
            return{
                ...state,
                activeType:action.payload
            }
        case pokemonActionTypes.ADD_NEW_POKEMONS:
            return{
                ...state,
                pokemons:[...state.pokemons,...action.payload]
            }
        case pokemonActionTypes.SET_POKEMONS :
            return {
                ...state,
                pokemons: [...action.payload]
            }
        default:
            return state;
    }
}

export default pokemonReducer;