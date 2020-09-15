import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/Home'
import Favorites from '../pages/Favorites'
import Store from '../pages/Store'
import Download from '../pages/Download'

const Tab = createBottomTabNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#000'
          },
          activeTintColor: '#F7AB21',
          inactiveTintColor: '#FFFFFF'
        }}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            title: 'INÍCIO'
          }}
        />
        <Tab.Screen
          name='Favorites'
          component={Favorites}
          options={{
            title: 'FAVORITOS'
          }}
        />
        <Tab.Screen
          name='Store'
          component={Store}
          options={{
            title: 'LOJA'
          }}
        />
        <Tab.Screen
          name='Download'
          component={Download}
          options={{
            title: 'DOWNLOAD'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
