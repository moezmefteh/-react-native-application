import 'react-native-gesture-handler';
import React, {useEffect,useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '../../consts/color';
import {ScrollView} from 'react-native-gesture-handler';
import { IPconf } from '../IPconf';

const SupervisionScreen = ({navigation}) => {

  const [presion, setpresion] = useState('');
  const [temp, settemp] = useState('');
  const [msg, setmsg] = useState('');

useEffect(() => {
  const interval = setInterval(() => {

  async function getSuperData () {

    fetch('http://'+IPconf+':8000/MqttApp/presion/last', {
      method: 'GET',
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        console.log("pression");
        setpresion(responseJson[responseJson.length - 1].value)

        }
      )
      .catch((error) => {
        alert("connexion failed !!")
        
      });
      
      fetch('http://'+IPconf+':8000/MqttApp/temp/last', {
        method: 'GET',
        headers: {
          //Header Defination
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          //Hide Loader
          console.log("temp");
          settemp(responseJson[responseJson.length - 1].value)

          }
        )
        .catch((error) => {
          alert("connexion failed !!")
          
        });

        fetch('http://'+IPconf+':8000/MqttApp/msg/last', {
          method: 'GET',
          headers: {
            //Header Defination
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            //Hide Loader
            console.log("msg");
            setmsg(responseJson[responseJson.length - 1].value)
  
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
    style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}>
    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={{marginTop: 40}}>
        <Text style={{fontSize: 20, color: COLORS.dark}}>
        Welcome to the monitoring screen,  
        </Text>
      </View>

      <View style={{marginTop: 30}}>
          <Icon
            name="coolant-temperature"
            color={COLORS.light}
            size={20}
          />
        <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
           Temperature :
        </Text>
        <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            {temp} °c
        </Text>
      </View>

      <View style={{marginTop: 20}}>
          <Icon
            name="car-brake-low-pressure"
            color={COLORS.light}
            size={20}
          />
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
          Pressure : 
          </Text>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
           {presion} bar
          </Text>
      </View>

      <View style={{marginTop: 20}}>
          <Icon
            name="message"
            color={COLORS.light}
            size={20}
          />
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
          Message : 
          </Text>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
           {msg} 
          </Text>
      </View>


    </ScrollView>
  </SafeAreaView>
);
};

export default SupervisionScreen;
