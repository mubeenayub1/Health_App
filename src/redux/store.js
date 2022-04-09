import {createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import {Reducer} from './reducers';
import middleware from './middlewares';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const pReducer = persistReducer(persistConfig, Reducer);

const store = createStore(pReducer, applyMiddleware(...middleware));

const persistor = persistStore(store);

export {store, persistor};
