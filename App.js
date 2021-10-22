import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {Home} from './screens';

const theme = {
  ...DefaultTheme,
  border: 'transparent',
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme} style={styles.sectionContainer}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
  },
});

export default App;
