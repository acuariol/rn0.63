import React from 'react';
import { Root } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import HomeScreen from './src/pages/Home';
import GuideScreen from './src/pages/Guide';

function todos(state = ['7:30起床'], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text]);
    default:
      return state;
  }
}

const store = createStore(todos, applyMiddleware(thunk));

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
              <Stack.Screen name="Guide" component={GuideScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Root>
      </Provider>

    );
  }
}

export default App;
