import 'react-native-gesture-handler';
import React, {useEffect,useState}  from 'react';
import {SafeAreaView, View, Text,Switch,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '../../consts/color';
import {ScrollView} from 'react-native-gesture-handler';
import { IPconf } from '../IPconf';

const ControlScreen = ({navigation}) => {
  const [motor, setmotor] = useState('');
  const [vanne, setvanne] = useState('0');

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
          console.log(motor)
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
            console.log(vanne)
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
                Motor : {String(motor)}
            </Text>
            

        </View>

        <View style={{marginTop: 20}}>
            <Icon
              name="car-brake-low-pressure"
              color={COLORS.light}
              size={20}
            />
            <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Vanne : {String(vanne)}
            </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
    
  );
  
};

export default ControlScreen;
