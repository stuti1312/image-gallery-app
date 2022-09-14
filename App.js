import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';

import StackNavigator from './src/routes/Stack'
import store from './rootReducer';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App