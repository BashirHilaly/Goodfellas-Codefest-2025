import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { CarFront, User, Wrench } from 'lucide-react-native'

const blue = "#008CFF"

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          minHeight: 80,
          paddingTop: 10,
        },
      })}
    >
      <Tabs.Screen name="index" 
      options={({ navigation }) => ({ 
        title: 'Builds',
        tabBarLabel: 'Builds', 
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <CarFront size={35} color={focused ? blue : '#000000'} />
        ),
      })} />
      <Tabs.Screen name="mechanic" 
      options={({ navigation }) => ({
        title: 'Mechanic',
        tabBarLabel: 'Mechanic',
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Wrench size={35} color={focused ? blue : '#000000'} />
        ),
      })} />
      <Tabs.Screen name="profile"
        options={({ navigation }) => ({ 
          title: 'Profile',
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <User size={35} color={focused ? blue : '#000000'} />
          ),
        })} />
    </Tabs>
  )
}

export default TabsLayout