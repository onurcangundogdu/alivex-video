import 'react-native-get-random-values'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'
import DetailScreen from './src/screens/DetailScreen'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home'}} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{title: 'Detail'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;