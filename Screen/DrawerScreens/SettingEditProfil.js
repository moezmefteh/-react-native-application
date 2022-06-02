
import React ,{useState,useEffect,createRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,ToastAndroid,
  StyleSheet,Alert,ScrollView
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import { IPconf } from '../IPconf';
import COLORS from '../../consts/color';

const SettingEditProfil = (props) => {
    var [user, setUser] = useState('');
    var [first_name, setfirst_name] = useState('');
    var [last_name, setlast_name] = useState('');
    var [cin, setcin] = useState('');
    var [tel, settel] = useState('');
    var [email, setemail] = useState('');
    var [poste, setposte] = useState('');

    var [first_name2, setfirst_name2] = useState('');
    var [last_name2, setlast_name2] = useState('');
    var [cin2, setcin2] = useState('');
    var [tel2, settel2] = useState('');
    var [email2, setemail2] = useState('');
    var [poste2, setposte2] = useState('');
    user=props.route.params.datauser.username
    last_name=props.route.params.datauser.last_name
    first_name=props.route.params.datauser.first_name
    cin=props.route.params.datauser.cin
    tel=props.route.params.datauser.telephone
    email=props.route.params.datauser.email
    poste=props.route.params.datauser.poste

    const updateusr = () => {
      console.log(props.route.params.datauser)
      
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
        if (poste2==="" ) {
          poste2=poste
        }
    
        var updateJson = { "first_name": String(first_name2), "last_name":String(last_name2), "cin":String(cin2),  
          "poste":String(poste2), "email":String(email2), "telephone":String(tel2)};
          console.log(updateJson);
    
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
    
          },},
        ],
        {cancelable: false},
      );
    
    }

  return (
    <ScrollView style={{backgroundColor:'#ffffff'}}>
    <View style={styles.container}>
    
        <View style={{alignItems: 'center'}}>
          <Text style={{marginBottom : 25, fontSize: 18, fontWeight: 'bold' ,color:COLORS.secondary}}>
          {user}
          </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color='#495D7D' size={20} />
          <TextInput
            placeholder={first_name}
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(first_name) => setfirst_name2(first_name)}

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
          <FontAwesome name="graduation-cap" color='#495D7D' size={15} />
          <TextInput
            placeholder={poste}
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(poste) => setposte2(poste)}

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
          <FontAwesome name="envelope-o" color='#495D7D' size={20} />
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
          <FontAwesome name="globe" color='#495D7D' size={20} />
          <TextInput
            placeholder={cin}
            placeholderTextColor="#666666"
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

        <TouchableOpacity style={styles.commandButton} onPress={() =>updateusr()}>
          <Text style={styles.panelButtonTitle}>Save</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

  export default SettingEditProfil;
  
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingTop : 40,
      paddingBottom : 40

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