// store.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';
import authReducer from './slices/authSlice';
// import other reducers here

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

// Combine reducers and wrap with persistReducer
const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  // other reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with the persisted reducer
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

// Create a persistor
const persistor = persistStore(store);

export default { store, persistor };
