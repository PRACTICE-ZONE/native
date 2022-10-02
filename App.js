
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import Details from './screens/Details';
import Home from './screens/Home';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => {
  const [loaded] = useFonts({
    
  });
  
  return (
    <NavigationContainer theme = {theme}>
      <Stack.Navigator screenOptions = {{ headerShown: false }}
      initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>

        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
