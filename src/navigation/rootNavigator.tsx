import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeScreen, SplashScreen} from '../screens';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Splash'}
      screenOptions={{headerShown: false, gestureEnabled: true}}>
      <Stack.Screen name={'Splash'} component={SplashScreen} />
      <Stack.Screen
        options={{headerShown: true}}
        name={'Home'}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export const MainRoute = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
