// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import HomeScreen from './DrawerScreens/HomeScreen';
import SettingsScreen from './DrawerScreens/SettingScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import ControlScreen from './DrawerScreens/ControlScreen';
import SupervisionScreen from './DrawerScreens/SupervisionScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home', //Set Header Title
          headerLeft : () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#FDF6F0', //Set Header color
          },
          headerTintColor: '#7D5A50', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};
const ControlScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="ControlScreen"
      screenOptions={{
        headerLeft : () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#FDF6F0', //Set Header color
        },
        headerTintColor: '#7D5A50', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ControlScreen"
        component={ControlScreen}
        options={{
          title: 'Control', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const SupervisionScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SupervisionScreen"
      screenOptions={{
        headerLeft : () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#FDF6F0', //Set Header color
        },
        headerTintColor: '#7D5A50', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SupervisionScreen"
        component={SupervisionScreen}
        options={{
          title: 'Supervision', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const SettingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft : () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#FDF6F0', //Set Header color
        },
        headerTintColor: '#7D5A50', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
  
      screenOptions={{headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          width : 250,
        },
        overlayColor: null,
        drawerLabelStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor:'#E5B299',
        drawerInactiveTintColor: '#7D5A50',
        drawerActiveBackgroundColor: '#FDF6F0',
      }}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="HomeScreenStack"
        options={{drawerLabel: 'Home'}}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="ControlScreenStack"
        options={{drawerLabel: 'Control'}}
        component={ControlScreenStack}
      />
      <Drawer.Screen
        name="SupervisionScreenStack"
        options={{drawerLabel: 'Supervision'}}
        component={SupervisionScreenStack}
      />
      <Drawer.Screen
        name="SettingScreenStack"
        options={{drawerLabel: 'Settings'}}
        component={SettingScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
