
import React,{useState,useEffect} from 'react';
import {ScrollView,View, Text, SafeAreaView,StyleSheet,ActivityIndicator,  TouchableOpacity} from 'react-native';
import { IPconf } from '../IPconf';


const SettingsScreenAdmin = ({navigation}) => {
    const [users,setusers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const Loaddata = () =>(
        
        <SafeAreaView style={{flex: 1,   backgroundColor: '#ffffff',marginBottom :10}}>
              <View style={{alignContent:'center',alignItems:'center' ,marginTop :'20%'}}>
          <ActivityIndicator size='large' color='#495D7D'></ActivityIndicator>
        </View>
        </SafeAreaView>)
    
    const Listusers = () =>(
        <ScrollView>
        {users.map((usr) => (
        <SafeAreaView key={usr.username} style={{flex: 1,   backgroundColor: '#ffffff',marginBottom :10}}>
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
              <Text style={{ alignContent:'center',alignItems:'center', fontWeight: 'bold', color:'#455156', fontSize: 20 }}>{usr.username}</Text>
                  <View style={{ flexDirection: 'row', marginTop : 5 }}>
                  <Text style={styles.prefix}>users :</Text>
                  <Text style={styles.content}>{usr.first_name} {usr.last_name}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop : 5 }}>
                  <Text style={styles.prefix}>cin :</Text>
                  <Text style={styles.content}>{usr.cin}</Text>
              </View>
    
              <View style={{ flexDirection: 'row', marginTop : 5 }}>
                  <Text style={styles.prefix}>Poste :</Text>
                  <Text style={styles.content}>{usr.poste}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop : 5 }}>
                  <Text style={styles.prefix}>Telephone :</Text>
                  <Text style={styles.content}>{usr.telephone}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop : 5 }}>
                  <Text style={styles.prefix}>Email :</Text>
                  <Text style={styles.content}>{usr.email}</Text>
              </View>
              <TouchableOpacity style={styles.commandButton} onPress={() => {navigation.navigate('SettingEditProfil');}}>
              <Text style={styles.panelButtonTitle}>Edit profile</Text>
            </TouchableOpacity>
              </View>
          </View>
        </SafeAreaView>))}
        </ScrollView>)
    
    const GetDataUsers  = () => {
        fetch('http://'+IPconf+':8000/users/', {
          method: 'GET',
          headers: {
            //Header Defination
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            //Hide Loader
            console.log("users");
            setusers(responseJson)
            }
          )
          .catch((error) => {
            alert("connexion failed !!")
            setLoading(false);
          });
    };
        
    useEffect(() => {   
      const interval = setInterval(() => {

        GetDataUsers();
        
        if (users.length!==0){         
             setIsLoading(false);} 
        else{setIsLoading(true);}
         
      }, 1000);
      return () => {
        clearInterval(interval);
      };
      }); 
      
      return (
        <ScrollView
        style={{   backgroundColor: '#ffffff'}}
        showsVerticalScrollIndicator={false}>
           <ScrollView>
           {isLoading ? <Loaddata/> : <Listusers/>}
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
export default SettingsScreenAdmin;
