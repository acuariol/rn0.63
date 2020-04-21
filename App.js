import React from 'react';
import { Root } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/pages/Home';
import GuideScreen from './src/pages/Guide';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <Root>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
            <Stack.Screen name="Guide" component={GuideScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    );
  }
}

export default App;
