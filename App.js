import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomNavigator} from 'react-navigation-tabs'
import ReadStoryScreen from './screens/ReadStoryScreen'
import WriteStoryScreen from './screens/WriteStoryScreen'

const tabs = createBottomNavigator() 

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <tabs.Navigator>
          <tabs.Screen name="Read Story" component={ReadStoryScreen} />
          <tabs.Screen name="Write Story" component={WriteStoryScreen} />
        </tabs.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
