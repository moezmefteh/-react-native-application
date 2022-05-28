// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image,Text} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('username').then((value) =>
      {if(value!==null){
        AsyncStorage.getItem('poste').then((value) =>{
        if(value==="technicien" ){
          navigation.replace('DrawerNavigationRoutes')
        }else{
          if(value==="ingenieur"){
          navigation.replace('DrawerNavigationRoutesIng')
          }
          else{
            if(value==="admin"){
              navigation.replace('DrawerNavigationRoutesAdmin')
              } 
              else{
                navigation.replace('Auth')
              }
          }
        }
      } );
    }      
    else{
      navigation.replace('Auth')

    }
  }
      );
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../Image/logoapp.png')}
        style={{width : 160,height : 140, resizeMode: 'stretch', }}
      />
<Text style={styles.text}>  By <Text style={styles.blod}>IMSR</Text> </Text>
   <ActivityIndicator
        animating={animating}
        color="#7097ab"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  activityIndicator: {
    alignItems: 'center',
    height : 80,
  },
  text: {
    fontSize : 17,
    letterSpacing :2,
    textAlign : 'center',
    color: '#000000',
    top : 300
  },
  blod: {
    
    fontWeight: 'bold',
    color: '#000000',
    
  },
});
