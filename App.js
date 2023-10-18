import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './src/pages/Profile';
import Posts from './src/pages/Posts';



export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Posts" component={Posts} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profle" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
