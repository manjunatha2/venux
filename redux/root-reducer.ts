import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import pokemonReducer from './pokemon/pokemon.reducer';

const persistConfig = {
    key: "root",
    storage,
    whitelist:['pokemon']
}

const rootReducer = combineReducers({
    pokemon: pokemonReducer
})

export default persistReducer(persistConfig,rootReducer);