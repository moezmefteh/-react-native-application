
import React, {useEffect,useState} from 'react';
import {ScrollView,View, Text, SafeAreaView,StyleSheet,ActivityIndicator, TouchableOpacity} from 'react-native';
import COLORS from '../../consts/color';
import { IPconf } from '../IPconf';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = ({navigation}) => {


  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [username, setusername] = useState('');
  const [cin, setcin] = useState('');
  const [email, setemail] = useState('');
  const [poste, setposte] = useState('');
  const [tel, settel] = useState('');

  const [isLoading, setIsLoading] = useState(true);




  const Loaddata = () =>(
        
    <SafeAreaView style={{flex: 1,   backgroundColor: '#ffffff',marginBottom :10}}>
          <View style={{alignContent:'center',alignItems:'center' ,marginTop :'20%'}}>
      <ActivityIndicator size='large' color='#495D7D'></ActivityIndicator>
    </View>
    </SafeAreaView>)

    const UserData = () =>(
      <SafeAreaView style={{flex: 1,   backgroundColor: '#ffffff',marginBottom :10}}>
      <View style={styles.container}>
        <View style={{
            marginHorizontal: 20,
            marginTop : 20,
            paddingVertical: 20,
            paddingHorizontal: 20,
            shadowColor: 'gray',
            shadowOpacity: 0.5,
            shadowOffset: {  height : 3,  width : 3
            },
            shadowRadius: 4,
            elevation: 4,
            backgroundColor: 'white',
            justifyContent: 'flex-start',
        }}>
        <Text style={{ alignContent:'center',alignItems:'center', fontWeight: 'bold', color:'#455156', fontSize: 20 }}>{username}</Text>
            <View style={{ flexDirection: 'row', marginTop : 5 }}>
            <Text style={styles.prefix}>user :</Text>
            <Text style={styles.content}>{first_name} {last_name}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop : 5 }}>
            <Text style={styles.prefix}>cin :</Text>
            <Text style={styles.content}>{cin}</Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop : 5 }}>
            <Text style={styles.prefix}>Poste :</Text>
            <Text style={styles.content}>{poste}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop : 5 }}>
            <Text style={styles.prefix}>Telephone :</Text>
            <Text style={styles.content}>{tel}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop : 5 }}>
            <Text style={styles.prefix}>Email :</Text>
            <Text style={styles.content}>{email}</Text>
        </View>
        
        <TouchableOpacity style={styles.commandButton} onPress={() => {navigation.navigate('HomeEditProfil');}}>
        <Text style={styles.panelButtonTitle}>Edit profile</Text>
      </TouchableOpacity>
        </View>
    </View>
    </SafeAreaView>
    )

  const getUser = () => {
    

    fetch('http://'+IPconf+':8000/user/', {
      method: 'GET',
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        console.log("home");
        setfirst_name(responseJson.first_name)
        setlast_name(responseJson.last_name)
        setcin(responseJson.cin)
        setusername(responseJson.username)
        setemail(responseJson.email)
        setposte(responseJson.poste)
        settel(responseJson.telephone)

        }
      )
      .catch((error) => {
        alert("connexion failed !!")
        setLoading(false);

      });

  };

  useEffect(()=>{
      
      getUser();

      if (username!=''){         
          setIsLoading(false);
          AsyncStorage.setItem('username', username);
          AsyncStorage.setItem('firstname', first_name);
          AsyncStorage.setItem('lastname', last_name);
          AsyncStorage.setItem('tel', tel);
          AsyncStorage.setItem('cin', cin);
          AsyncStorage.setItem('email', email);
        } 
      else{setIsLoading(true);}
          });   

  return (
    <ScrollView
    style={{   backgroundColor: '#ffffff'}}
    showsVerticalScrollIndicator={false}>
       <ScrollView>
       {isLoading ? <Loaddata/> : <UserData/>}
       </ScrollView>
  </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
  },
  prefix: {
      fontWeight: '300',
      color: '#455156',
      marginRight : 5
  },
  content: {
      fontWeight: '600',
      color: '#455156'
  },
  commandButton: {
    padding: 12,
    borderRadius: 40,
    marginLeft :"50%",
    backgroundColor: '#495D7D',
    alignItems: 'center',
    marginTop : 15,
  },
  

  panelButtonTitle: {
    fontSize: 17,
    fontWeight: '500',
    color: '#E8F9FD',
  },

});

export default HomeScreen;
