import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";


import rootReducer from "./root-reducer";


export const store = createStore(rootReducer);

export const persistor = persistStore(store);
const reduxStore = {
    store,
    persistor
}

export default reduxStore;