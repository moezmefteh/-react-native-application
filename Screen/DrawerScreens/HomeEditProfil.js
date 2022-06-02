
import React ,{useState,useEffect,createRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,ToastAndroid,
  StyleSheet,Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import { IPconf } from '../IPconf';
import COLORS from '../../consts/color';

const HomeEditProfil = ({navigation}) => {
  const [user, setUser] = useState('');
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [cin, setcin] = useState('');
  const [tel, settel] = useState('');
  const [email, setemail] = useState('');
  const [poste, setposte] = useState('');


  AsyncStorage.getItem('username').then((value) =>setUser(value));
  AsyncStorage.getItem('firstname').then((value) =>setfirst_name(value));
  AsyncStorage.getItem('lastname').then((value) =>setlast_name(value));
  AsyncStorage.getItem('tel').then((value) =>settel(value));
  AsyncStorage.getItem('cin').then((value) =>setcin(value));
  AsyncStorage.getItem('email').then((value) =>setemail(value));
  AsyncStorage.getItem('poste').then((value) =>setposte(value));

  var [first_name2, setfirst_name2] = useState('');
  var [last_name2, setlast_name2] = useState('');
  var [cin2, setcin2] = useState('');
  var [tel2, settel2] = useState('');
  var [email2, setemail2] = useState('');

  const handleupdateuser = () => {

    first_name2=='' ? first_name2 =first_name: first_name2=first_name2;

    if (last_name2==="" ) {
      last_name2=last_name
    }    
    if (cin2==="" ) {
      cin2=cin
    }
    if (tel2==="" ) {
      tel2=tel
    }
    if (email2==="" ) {
      email2=email
    }

    var updateJson = { "first_name": String(first_name2), "last_name":String(last_name2), "cin":String(cin2),  
      "poste":String(poste), "email":String(email2), "telephone":String(tel2)};
      console.log(updateJson);
      console.log("cv");

  Alert.alert(
    'Editing data',
    'You are sure ?',
    [
      {
        text: 'Cancel',
        onPress: () => {
          return null;
        },
      },
      {
        text: 'Yes',
        onPress: () => {
          axios({
            headers: { 'Content-Type': 'application/json'},
            method: 'patch',
            url:'http://'+IPconf+':8000/update/'+String(user)+'/',
            data: updateJson,
          }).then(response=>{
            ToastAndroid.show('Your data is well modified',2000)      
          })
          navigation.replace('HomeScreen')
      },},
    ],
    {cancelable: false},
  );

}

    return (
        <View style={styles.container}>
        
            <View style={{alignItems: 'center'}}>
              <Text style={{marginBottom : 30, fontSize: 22, fontWeight: 'bold' ,color:COLORS.secondary}}>
              {user}
              </Text>
            </View>
    
            <View style={styles.action}>
              <FontAwesome name="user-o" color='#495D7D' size={22} />
              <TextInput
                placeholder={first_name}
                placeholderTextColor="#666666"
                autoCorrect={false}
                onChangeText={(first_name) => setfirst_name2(first_name)}

                style={[
                  styles.textInput,
                  {
                    color:COLORS.dark,
                  },
                ]}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome name="user-o" color='#495D7D' size={22} />
              <TextInput
                placeholder={last_name}
                placeholderTextColor="#666666"
                autoCorrect={false}
                onChangeText={(last_name) => setlast_name2(last_name)}
                style={[
                  styles.textInput,
                  {
                    color: '#000000'
                  },
                ]}
              />
            </View>
            <View style={styles.action}>
              <Feather name="phone" color='#495D7D' size={22} />
              <TextInput
                placeholder={tel}
                placeholderTextColor="#666666"
                keyboardType="number-pad"
                autoCorrect={false}
                onChangeText={(tel) => settel2(tel)}

                style={[
                  styles.textInput,
                  {
                    color:'#000000',
                  },
                ]}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome name="envelope-o" color='#495D7D' size={22} />
              <TextInput
                placeholder={email}
                placeholderTextColor="#666666"
                keyboardType="email-address"
                autoCorrect={false}
                onChangeText={(email) => setemail2(email)}

                style={[
                  styles.textInput,
                  {
                    color:'#000000',
                  },
                ]}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome name="globe" color='#495D7D' size={22} />
              <TextInput
                placeholder={cin}
                placeholderTextColor="#666666"
                keyboardType="number-pad"
                autoCorrect={false}
                onChangeText={(cin) => setcin2(cin)}
                style={[
                  styles.textInput,
                  {
                    color: '#000000',
                  },
                ]}
              />
            </View>

            <TouchableOpacity style={styles.commandButton} onPress={() => handleupdateuser()}>
              <Text style={styles.panelButtonTitle}>Save</Text>
            </TouchableOpacity>
        </View>
      );
    };
  
  export default HomeEditProfil;
  
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingTop : 50
    },
    commandButton: {
      padding: 15,
      borderRadius: 25,
      marginHorizontal:100,
      backgroundColor: COLORS.tertiary,
      alignItems: 'center',
      marginTop : 40,
    },
    
    panelButtonTitle: {
      fontSize: 18,
      fontWeight: '500',
      color: '#E8F9FD',
    },
    action: {
      flexDirection: 'row',
      marginTop : 15,
      marginHorizontal:30,
      marginBottom : 15,
      borderBottomWidth : 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom :  10,
    },
  
    textInput: {
      flex: 1,
      marginTop : Platform.OS === 'ios' ? 0 : -12,
      paddingLeft : 20,
      color: '#05375a',
    },
  });