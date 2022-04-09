import React from 'react';
import {SnapshotViewIOSComponent} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import MainNav from './src/navigation/mainNav';

const App = () => {
  return (
    // <MapScreen />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainNav />
      </PersistGate>
    </Provider>
  );
};
export default App;
