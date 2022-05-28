
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import HomeScreen from './DrawerScreens/HomeScreen';
import SettingsScreenAdmin from './DrawerScreens/SettingScreenAdmin';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import ControlScreenIng from './DrawerScreens/ControlScreenIng';
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
const ControlScreenIngStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="ControlScreenIng"
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
        name="ControlScreenIng"
        component={ControlScreenIng}
        options={{
          title: 'Control', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const SettingScreenAdminStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreenAdmin"
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
        name="SettingsScreenAdmin"
        component={SettingsScreenAdmin}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutesIng = (props) => {
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
        name="SupervisionScreenStack"
        options={{drawerLabel: 'Supervision'}}
        component={SupervisionScreenStack}
      />

      <Drawer.Screen
        name="ControlScreenIngStack"
        options={{drawerLabel: 'Control'}}
        component={ControlScreenIngStack}
      />

      <Drawer.Screen
        name="SettingScreenAdminStack"
        options={{drawerLabel: 'Settings'}}
        component={SettingScreenAdminStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutesIng;
