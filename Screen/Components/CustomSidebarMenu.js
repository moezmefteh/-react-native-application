// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useEffect,useState} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-community/async-storage';

const CustomSidebarMenu = (props) => {
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const getUserData = () => {

    fetch('http://192.168.1.66:8000/user/', {
      method: 'GET',
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        console.log(responseJson);
        setfirst_name(responseJson.first_name)
        setlast_name(responseJson.last_name)

        }
      )
      .catch((error) => {

      });
  };

useEffect(()=>{
  getUserData();
},[]);
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#F8E2CF', '#FDF6F0']}  style={stylesSidebar.sideMenuContainer} >
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
        <Text style={{fontSize: 25, color: '#7D5A50'}}>
           {first_name.charAt(0)}
          </Text>
        </View>
        <Text style={stylesSidebar.profileHeaderText1}>{last_name}</Text>
        <Text style={stylesSidebar.profileHeaderText2}>{first_name}</Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({color}) => <Text style={{          fontWeight: 'bold',
          fontSize: 15,color:'#7D5A50',          
        }}>Logout</Text>}
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    AsyncStorage.clear();
                    props.navigation.replace('Auth');
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        />
      </DrawerContentScrollView>
    </LinearGradient>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width : '100%',
    height : '100%',
    paddingTop : 40,

  },
  profileHeader: {
    flexDirection: 'row',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width : 60,
    height : 60,
    borderRadius: 60 / 2,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText1: {
    color: '#7D5A50',
    alignSelf: 'center',
    paddingLeft: 20,
    fontWeight: 'bold',
    fontSize:17
  },
  profileHeaderText2: {
    color: '#7D5A50',
    alignSelf: 'center',
    paddingLeft: 5,
    fontWeight: 'bold',
    fontSize:17
  },
  profileHeaderLine: {
    height : 1,
    marginHorizontal: 20,
    backgroundColor: '#F5C6AA',
    marginTop : 15,
  },
});
