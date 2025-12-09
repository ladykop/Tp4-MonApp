import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import HomeScreen from './screens/homeScreen';
import DetailsScreen from './screens/detailsScreen';
import SettingsScreen from './screens/settingsScreen';
import AppBar from './screens/appBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ===== HOME STACK (with header) =====
function HomeStack() {
  return (
    <Stack.Navigator>

      {/* Header with color, tint, bold title */}
      <Stack.Screen 
        name="Accueil"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: '#007AFF' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />

      {/* Custom title */}
      <Stack.Screen 
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Mes Détails Personnalisés' }}
      />

    </Stack.Navigator>
  );
}

// ===== TAB NAVIGATOR =====
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,                // hide header
        tabBarActiveTintColor: 'blue',    // active color
        tabBarInactiveTintColor: 'gray',  // inactive color
        tabBarStyle: { backgroundColor: '#f0f0f0' }, // tab bar style
        tabBarLabelStyle: { fontSize: 14 },
      }}
    >
      <Tab.Screen 
        name="Maison" 
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen 
        name="Paramètres" 
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      {/* Adapt to Safe Area globally */}
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

        <NavigationContainer>

          {/* Top Bar inside SafeArea */}
          <SafeAreaView style={{ backgroundColor: '#007AFF' }}>
            <AppBar />
          </SafeAreaView>

          {/* Tabs */}
          <Tabs />

        </NavigationContainer>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
