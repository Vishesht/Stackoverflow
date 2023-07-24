import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NodeScreen, RNScreen, ReactScreen} from '../../screens';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="React" component={ReactScreen} />
      <Tab.Screen name="RN" component={RNScreen} />
      <Tab.Screen name="Node" component={NodeScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
