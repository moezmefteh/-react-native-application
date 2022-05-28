
import React, {useEffect,useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import COLORS from '../../consts/color';
const HomeScreen = () => {
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [cin, setcin] = useState('');
  const [email, setemail] = useState('');
  const [poste, setposte] = useState('');
  const [tel, settel] = useState('');

  const getUser = () => {

    fetch('http://192.168.1.118:8000/user/', {
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
        setcin(responseJson.cin)
        setemail(responseJson.email)
        setposte(responseJson.poste)
        settel(responseJson.tel)

        }
      )
      .catch((error) => {
        //console.log('3');
        setLoading(false);
      });
  };

useEffect(()=>{
  getUser();
},[]);
  return (
    <SafeAreaView style={{flex: 1,   backgroundColor: '#FDF6F0',}}>
      <View style={{flex: 1, padding:4}}>
        <View>
          <Text
            style={{
              fontSize: 20,
              margin:15,
              fontWeight: 'bold', 
              color: COLORS.dark
            }}>
            {first_name}
            
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              marginLeft:15,
              fontWeight: 'bold', 
              color: COLORS.dark
            }}>
            
            {last_name}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              marginLeft:15,
              fontWeight: 'bold', 
              color: COLORS.dark
            }}>
            
            {poste}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              marginLeft:15,
              fontWeight: 'bold', 
              color: COLORS.dark
            }}>
            
            {email}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
