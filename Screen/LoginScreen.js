
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import COLORS from '../consts/color';

import Loader from './Components/Loader';

const LoginScreen = ({navigation}) => {
  const [user, setUser] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  //const [poste, setposte] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!user) {
      alert("Please fill in your username");
      return;
    }
    if (!userPassword) {
      alert('Please fill in your password');
      return;
    }
    setLoading(true);
    let dataToSend = {username: user, password: userPassword};
    console.log(dataToSend)
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://192.168.1.118:8000/login/', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.jwt !== undefined) {
          
          //console.log(AsyncStorage.getItem('user_id'));
              if(responseJson.poste==="technicien"){
                navigation.replace('DrawerNavigationRoutes');
                AsyncStorage.setItem('username', user);
                AsyncStorage.setItem('poste', "technicien");

              }
              else{
                if(responseJson.poste==="ingenieur"){
                  navigation.replace('DrawerNavigationRoutesIng');
                  AsyncStorage.setItem('username', user);
                  AsyncStorage.setItem('poste', "ingenieur");
                }
                else{
                  if(responseJson.poste==="admin"){
                    navigation.replace('DrawerNavigationRoutesAdmin');
                    AsyncStorage.setItem('username', user);
                    AsyncStorage.setItem('poste', "admin");
                  }
                }            
              }
        } else {
          console.log(responseJson.detail);
          alert(responseJson.detail);
        }
      })
      .catch((error) => {
        //console.log('3');
        alert("connexion failed !")
        setLoading(false);
      });
      
  };

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row',marginBottom:20}}>
            <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.primary}}>
            KEEP
          </Text>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.secondary}}>
            ACCESS 
          </Text>
          </View>
              <Image
                source={require('../Image/logoapp.png')}
                style={{
                  width : '70%',
                  height : 200,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(User) => setUser(User)}
                placeholder="Username" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                color="#15143a"
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                placeholder="Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                color="#15143a"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Connexion</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
            >
              <Text style={styles.text}><Text style={styles.blod}>Pas encore de compte ?</Text>  vous êtes intéressé, contacter rapidement notre service administratif <Text style={styles.blod}>IMSR</Text> </Text>
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height : 40,
    marginTop : 20,
    marginLeft : 35,
    marginRight : 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: COLORS.primary,
    borderWidth : 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height : 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft : 120,
    marginRight : 120,
    marginTop : 35,
    marginBottom : 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft : 15,
    paddingRight : 15,
    borderWidth : 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#000000',
    textAlign: 'center',
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  text: {
    fontSize : 17,
    letterSpacing :2,
    textAlign : 'center',
    bottom : -50, 

  },
  blod: {
    fontWeight: 'bold'

  },
});
