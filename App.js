import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import All from './screens/All';
import Buisness from './screens/Buisness';
import HealthScreen from './screens/Health';
import SportsScreen from './screens/Sports';
import TechScreen from './screens/Tech';
import { Icon } from 'react-native-elements'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator tabBarOptions= {{showLabel: false, activeTintColor: 'blue'}}>
      <Tab.Screen name="All" component={All} options={{headerShown: false, tabBarIcon: (props) => (
           <Icon name='rowing' name='home' type='feather' color= {props.color}/>         
          ),
      }} />
      <Tab.Screen name="Buisness" component={Buisness} options={{headerShown: false,tabBarIcon: (props) => (
           <Icon name='rowing' name='dollar-sign' type='feather' color= {props.color}/>         
          ),}} />
      <Tab.Screen name="Health" component={HealthScreen} options={{headerShown: false, tabBarIcon: (props) => (
           <Icon name='rowing' name='heart' type='feather' color= {props.color}/>         
          ),}} />
      <Tab.Screen name="Sports" component={SportsScreen} options={{headerShown: false , tabBarIcon: (props) => (
           <Icon name='rowing' name='tennisball-outline' type='ionicon' color= {props.color}/>         
          ),}} />
      <Tab.Screen name="Tech" component={TechScreen} options={{headerShown: false, tabBarIcon: (props) => (
           <Icon name='rowing' name='hardware-chip-outline' type='ionicon' color= {props.color}/>         
          ),}} />
    </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

