import React from 'react';
import { Button, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './components/HomeScreen';
import { AboutScreen } from './components/AboutScreen';
import { ChatScreen } from './components/ChatScreen';
import { NewsScreen } from './components/NewsScreen';
import { SettingsScreen } from './components/SettingsScreen';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStack} options={{ title: 'Home', headerShown: false }} />
      <Tab.Screen name="News" component={NewsScreen} options={{
        headerLeft: () => (
          <Text style={{ paddingLeft: 10, fontSize: 18 }}>News</Text>
        ),
        headerTitleAlign: 'center',
        headerTitle: () => (
          <FontAwesome name="newspaper-o" size={40} color="black" />
        )
      }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{
        headerLeft: () => (
          <Text style={{ paddingLeft: 10, fontSize: 18 }}>Chat</Text>
        ),
        headerTitleAlign: 'center',
        headerTitle: () => (
          <FontAwesome name="comments" size={40} color="black" />
        )
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        headerLeft: () => (
          <Text style={{ paddingLeft: 10, fontSize: 18 }}>Settings</Text>
        ),
        headerTitleAlign: 'center',
        headerTitle: () => (
          <FontAwesome name="cog" size={40} color="black" />
        )
      }} />
    </Tab.Navigator>
  );
}
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Home'}
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Text style={{ paddingLeft: 10, fontSize: 18 }}>Home</Text>
          ),
          headerTitleAlign: 'center',
          headerTitle: () => (
            <FontAwesome name="home" size={40} color="black" />
          ),
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('About')}
              title="About"
              color="#000"
            />
          )
        })}
      />
      <Stack.Screen name={'About'} component={AboutScreen} options={{ title: 'About' }} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}