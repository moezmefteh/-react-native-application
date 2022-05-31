
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

import { IPconf } from './IPconf';

const SettingEditProfil = () => {
    const [user, setUser] = useState('');
    const [first_name, setfirst_name] = useState('');
    const [last_name, setlast_name] = useState('');
    const [cin, setcin] = useState('');
    const [tel, settel] = useState('');
    const [email, setemail] = useState('');
    const [poste, setposte] = useState('');


  return (
    <View style={styles.container}>
    
        <View style={{alignItems: 'center'}}>
          <Text style={{marginBottom : 25, fontSize: 18, fontWeight: 'bold' ,color:'#495D7D'}}>
          {user}
          </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color='#495D7D' size={20} />
          <TextInput
            placeholder={first_name}
            placeholderTextColor="#666666"
            autoCorrect={false}
            
            style={[
              styles.textInput,
              {
                color:'#000000',
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color='#495D7D' size={20} />
          <TextInput
            placeholder={last_name}
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: '#000000'
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="graduation-cap" color='#495D7D' size={20} />
          <TextInput
            placeholder={poste}
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: '#000000'
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color='#495D7D' size={20} />
          <TextInput
            placeholder={tel}
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color:'#000000',
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color='#495D7D' size={20} />
          <TextInput
            placeholder={email}
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color:'#000000',
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="globe" color='#495D7D' size={20} />
          <TextInput
            placeholder={cin}
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: '#000000',
              },
            ]}
          />
        </View>

        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Save</Text>
        </TouchableOpacity>
    </View>
  );
};

  export default SettingEditProfil;
  
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingTop : 80
    },
    commandButton: {
      padding: 15,
      borderRadius: 25,
      marginHorizontal:100,
      backgroundColor: '#495D7D',
      alignItems: 'center',
      marginTop : 40,
    },
    
  
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: '500',
      color: '#E8F9FD',
    },
    action: {
      flexDirection: 'row',
      marginTop : 10,
      marginHorizontal:30,
      marginBottom : 10,
      borderBottomWidth : 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom :  5,
    },
  
    textInput: {
      flex: 1,
      marginTop : Platform.OS === 'ios' ? 0 : -12,
      paddingLeft : 20,
      color: '#05375a',
    },
  });