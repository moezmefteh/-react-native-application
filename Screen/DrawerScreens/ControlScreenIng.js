import 'react-native-gesture-handler';
import React, {useEffect,useState}  from 'react';
import {SafeAreaView, View, Text,Switch,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '../../consts/color';
import {ScrollView} from 'react-native-gesture-handler';

const ControlScreenIng = ({navigation}) => {
  const [isMotorEnabled, setIsMotorEnabled] = useState(false);
  const toggleSwitchMotor = () => setIsMotorEnabled(previousState => !previousState);
  const [isVanneEnabled, setIsVanneEnabled] = useState(false);
  const toggleSwitchVanne = () => setIsVanneEnabled(previousState => !previousState);

  const [motor, setmotor] = useState('');
  const [vanne, setvanne] = useState('');

useEffect(()=>{
  async function getSuperData () {

    fetch('http://192.168.1.118:8000/MqttApp/motor/last', {
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
        setmotor(responseJson[responseJson.length - 1].value)

        }
      )
      .catch((error) => {
        alert("connexion failed !!")
        
      });
    };
    getSuperData();
  },[]);// @refresh reset
  
  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.picker}}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{marginTop: 40}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Welcome,  Moez 
          </Text>
        </View>

        <View style={{marginTop: 20}}>
            <Icon
              name="coolant-temperature"
              color={COLORS.light}
              size={20}
            />
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
             Motor 

          </Text>
          <View style={styles.container}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isMotorEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                value={motor}
                onValueChange={toggleSwitchMotor}
              />
          </View>
        </View>

        <View style={{marginTop: 20}}>
            <Icon
              name="car-brake-low-pressure"
              color={COLORS.light}
              size={20}
            />
            <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Vanne 
            </Text>

            <View style={styles.container}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isVanneEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchVanne}
                value={isVanneEnabled}
              />
          </View>
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
  }
});
export default ControlScreenIng;
