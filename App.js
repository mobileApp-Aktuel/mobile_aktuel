import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './src/pages/Profile';
import Posts from './src/pages/Posts';
import  IconIo  from 'react-native-vector-icons/Ionicons';
import IconEn from 'react-native-vector-icons/Entypo';
import { View } from 'react-native';



export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarStyle:{backgroundColor:'green',height:60},
        tabBarIconStyle:{},
        tabBarItemStyle:{},
        tabBarShowLabel:false
      }}
      >
        <Tab.Screen name="Posts" component={Posts} 
        options={{
          tabBarIcon: () => (
            <IconIo name="list-outline" color="white" size={30} />
          ),
        }}
        />
        <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: () => (
            <View style={{backgroundColor:'green'}} className="w-[60%] -top-3 h-20 rounded-[40px]  
            flex justify-center items-center">
              <IconEn name="ticket" color="green" size={40} style={{backgroundColor:'white',borderRadius:30,padding:10}}  />
            </View>
          ),
        }}
        />
        <Tab.Screen name="Profle" component={Profile}
        options={{
          tabBarIcon: () => (
            <IconIo name="person-outline" color="white" size={30} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
