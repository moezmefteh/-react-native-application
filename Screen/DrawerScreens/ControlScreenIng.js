import 'react-native-gesture-handler';
import React, {useEffect,useState}  from 'react';
import {Switch,SafeAreaView, View, Text,StyleSheet,TouchableOpacity,TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '../../consts/color';
import {ScrollView} from 'react-native-gesture-handler';
import { IPconf } from '../IPconf';

var valmotor = 'False';
const ControlScreenIng = ({navigation}) => {

  const [motor, setmotor] = useState(false);
  const toggleSwitchmotor = () => {
    var today=new Date();
    motor ? valmotor='False':valmotor='True';
    fetch('http://'+IPconf+':8000/MqttApp/motor/last', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pub_date: today,
        value: valmotor,
        cmdfromapp: '1'
      })
        });
        
  };

  const [vanne, setvanne] = useState(false);
  const toggleSwitchvanne = () => {
    var today=new Date();
    vanne ? valvanne='False':valvanne='True';
    fetch('http://'+IPconf+':8000/MqttApp/vanne/last', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pub_date: today,
        value: valvanne,
        cmdfromapp: '1'
      })
        });
  };

useEffect(()=>{
  const interval = setInterval(() => {

  async function getSuperData () {

    fetch('http://'+IPconf+':8000/MqttApp/motor/last', {
      method: 'GET',
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        newmotor=(responseJson[responseJson.length - 1].value)==='True' ? true : false;
        if(newmotor!=motor){
          newmotor ? setmotor(true):setmotor(false);
        }
        console.log(responseJson[responseJson.length - 1].value);
      }
      )
      .catch((error) => {
        alert("connexion failed !!")
        
      });

      fetch('http://'+IPconf+':8000/MqttApp/vanne/last', {
        method: 'GET',
        headers: {
          //Header Defination
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          newvanne=(responseJson[responseJson.length - 1].value)==='True' ? true : false;
          if(newvanne!=vanne){
            newvanne ? setvanne(true):setvanne(false);
          }
          //Hide Loader
          console.log(responseJson[responseJson.length - 1].value);
          //(responseJson[responseJson.length - 1].value)==='True'?setvanne(true):setvanne(false);
          }
        )
        .catch((error) => {
          alert("connexion failed !!")
          
        });
    };
    getSuperData();
  }, 1000);
  return () => {
    clearInterval(interval);
  };
  });
  
  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{marginTop: 40}}>
          <Text style={{fontSize: 20, color: COLORS.dark}}>
          Welcome on the controlling screen, 
          </Text>
        </View>

        <View style={{marginTop: 20}}>
            <Icon
              name="coolant-temperature"
              color={COLORS.light}
              size={20}
            />
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
             Motor {String(motor)}

          </Text>

            <Switch
              style={{ marginTop: 30 }}
              onValueChange={toggleSwitchmotor}
              value={motor}
            />

        </View>

        <View style={{marginTop: 20}}>
            <Icon
              name="car-brake-low-pressure"
              color={COLORS.light}
              size={20}
            />
            <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Vanne {String(vanne)}
            </Text>
            <Switch
              style={{ marginTop: 30 }}
              onValueChange={toggleSwitchvanne}
              value={vanne}
            />

        </View>

      </ScrollView>
    </SafeAreaView>
    
  );
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  view: {
    margin: 10,
  },
});


export default ControlScreenIng;
