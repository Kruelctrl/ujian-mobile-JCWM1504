import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import SplashNav from './src/navigations/SplashNavigation'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import allReducer from './src/reducers'

const globalStore = createStore(
  allReducer,
  {},
  composeWithDevTools(applyMiddleware(ReduxThunk))
)

const App = () => {
  return (
    <Provider store={globalStore}>
      <NavigationContainer>
        <SplashNav />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
