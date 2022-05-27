import 'react-native-gesture-handler';
import React, {useEffect,useState}  from 'react';
import {SafeAreaView, View, Text,TouchableOpacity,ImageBackground} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '../../consts/color';
import {ScrollView} from 'react-native-gesture-handler';

const ControlScreen = ({navigation}) => {

    const [presion, setpresion] = useState('');
    const [temp, settemp] = useState('');

  useEffect(()=>{
    async function getSuperData () {
  
      fetch('http://192.168.1.36:8000/MqttApp/presion/last', {
        method: 'GET',
        headers: {
          //Header Defination
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          //Hide Loader
          console.log(responseJson[responseJson.length - 1].value);
          setpresion(responseJson[responseJson.length - 1].value)

          }
        )
        .catch((error) => {
          alert("connexion failed !!")
          
        });
        /*
        fetch('http://192.168.1.118:8000/MqttApp/temp/last', {
          method: 'GET',
          headers: {
            //Header Defination
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            //Hide Loader
            console.log(responseJson[responseJson.length - 1].value);
            settemp(responseJson[responseJson.length - 1].value)
  
            }
          )
          .catch((error) => {
            alert("connexion failed !!")
            
          });
*/
    };
    getSuperData();
  },[]);// @refresh reset

  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.picker }}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{marginTop: 40}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Welcome,  Moez 
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
              22°c
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

      </ScrollView>
    </SafeAreaView>
  );
};

export default ControlScreen;
