
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
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    RobotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
  });
  
  return (
    <NavigationContainer theme = {theme}>
      <Stack.Navigator screenOptions = {{ headerShown: false }}
      initialRouteName="Home">
        <Stack.screen name="Home" component={Home}/>

        <Stack.screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
