/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/Home'
import Favorites from '../pages/Favorites'
import Store from '../pages/Store'
import Download from '../pages/Download'

import HomeSvg from '../assets/icons/home.svg'
import LikeSvg from '../assets/icons/like.svg'
import StoreSvg from '../assets/icons/store.svg'
import DownloadSvg from '../assets/icons/download.svg'

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
            title: 'INÍCIO',
            tabBarIcon: ({ color, size }) => (
              <HomeSvg height={size} fill={color} />
            )
          }}
        />
        <Tab.Screen
          name='Favorites'
          component={Favorites}
          options={{
            title: 'FAVORITOS',
            tabBarIcon: ({ color, size }) => (
              <LikeSvg height={size} fill={color} />
            )
          }}
        />
        <Tab.Screen
          name='Store'
          component={Store}
          options={{
            title: 'LOJA',
            tabBarIcon: ({ color, size }) => (
              <StoreSvg height={size} fill={color} />
            )
          }}
        />
        <Tab.Screen
          name='Download'
          component={Download}
          options={{
            title: 'DOWNLOAD',
            tabBarIcon: ({ color, size }) => (
              <DownloadSvg height={size} fill={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
