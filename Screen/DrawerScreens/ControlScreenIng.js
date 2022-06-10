import 'react-native-gesture-handler';
import React, {useEffect,useState}  from 'react';
import {Switch,SafeAreaView, View, Text,StyleSheet,TouchableOpacity,TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '../../consts/color';
import {ScrollView} from 'react-native-gesture-handler';
import { IPconf } from '../IPconf';

var valmotor = 'False';
var valvanne = 'False';
const ControlScreenIng = ({navigation}) => {

  const [motor, setmotor] = useState("");
  const [datemotor, setdatemotor] = useState("");
  const [cmdmotor, setcmdmotor] = useState("");

  const toggleSwitchmotor = () => {
    function addHours(numOfHours, date = new Date()) {
      date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
    
      return date;
    }
    var today=addHours(1);

    motor ? valmotor='0':valmotor='1';
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

  const [vanne, setvanne] = useState("");
  const [datevanne, setdatevanne] = useState("");
  const [cmdvanne, setcmdvanne] = useState("");

  const toggleSwitchvanne = () => {
    function addHours(numOfHours, date = new Date()) {
      date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
      return date;
    }
    var today=addHours(1);
    vanne ? valvanne='0':valvanne='1';
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

  const [action, setaction] = useState("");
  const [dateaction, setdateaction] = useState("");
  const [cmdaction, setcmdaction] = useState("");

  const [valaction, setvalaction] = useState("");
  const ChangeAction = () => {
    function addHours(numOfHours, date = new Date()) {
      date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
    
      return date;
    }
    var today=addHours(1);
    fetch('http://'+IPconf+':8000/MqttApp/action/last', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pub_date: today,
        value: valaction,
        cmdfromapp: '1'
      })
        });
      }


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
        if(newmotor!==motor){
          newmotor ? setmotor(true):setmotor(false);
          setdatemotor(responseJson[responseJson.length - 1].pub_date)
          if(responseJson[responseJson.length - 1].cmdfromapp==="1"){
            setcmdmotor("APP")
          }else{
            setcmdmotor("PLC")
          }

        }
        console.log("motor");
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
          if(newvanne!==vanne){
            newvanne ? setvanne(true):setvanne(false);
            setdatevanne(responseJson[responseJson.length - 1].pub_date)
            if(responseJson[responseJson.length - 1].cmdfromapp==="1"){
              setcmdvanne("APP")
            }else{
              setcmdvanne("PLC")
            }
          }
          console.log("vanne");

          }
        )
        .catch((error) => {
          //alert("connexion failed !!")
          
        });
        fetch('http://'+IPconf+':8000/MqttApp/action/last', {
        method: 'GET',
        headers: {
          //Header Defination
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          newaction=(responseJson[responseJson.length - 1].value)
          if(newaction!==action){
            setaction(newaction);
            setdateaction(responseJson[responseJson.length - 1].pub_date)
            if(responseJson[responseJson.length - 1].cmdfromapp==="1"){
              setcmdaction("APP")
            }else{
              setcmdaction("PLC")
            }
          }
          console.log("speed");
          }
        )
        .catch((error) => {
          //alert("connexion failed !!")
          
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
          <Text style={{fontSize: 20, color: COLORS.dark, fontWeight: 'bold'}}>
          Welcome on the controlling screen, 
          </Text>
        </View>


      <SafeAreaView style={{flex: 1,   backgroundColor: '#ffffff' }}>
      <View style={styles.container}>
        <View style={{
            marginHorizontal: 10,
            marginTop : 30,
            paddingVertical: 20,
            paddingHorizontal: 10,
            shadowColor: 'gray',
            shadowOpacity: 0.5,
            shadowOffset: {  height : 3,  width : 3
            },
            shadowRadius: 4,
            elevation: 4,
            backgroundColor: 'white',
            justifyContent: 'flex-start',
        }}>
        <Text style={{ alignContent:'center',alignItems:'center', marginTop : 10, fontWeight: 'bold', color:'#455156', fontSize: 20 }}>Motor controlling</Text>
            <View style={{ flexDirection: 'row', marginTop : 10 }}>
            <Text style={styles.prefix}>Motor :</Text>
            <Text style={styles.content}>  {motor ? "On":"Off"}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop : 10 }}>
            <Text style={styles.prefix}>last modification date :</Text>
            <Text style={styles.content}> {datemotor.slice(0,10)}  {datemotor.slice(11,19)}</Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop : 10, marginBottom : 10 }}>
            <Text style={styles.prefix}>commande from :</Text>
            <Text style={styles.content}>{cmdmotor} </Text>
        </View>
        
            <Switch
              style={{ marginTop: 10}}
              trackColor={{ false: COLORS.secondary , true: COLORS.primary }}
              thumbColor={motor ? COLORS.tertiary : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchmotor}
              value={motor}
            
            />
        </View>
    </View>
    </SafeAreaView>



    <SafeAreaView style={{flex: 1,   backgroundColor: '#ffffff' }}>
      <View style={styles.container}>
        <View style={{
            marginHorizontal: 10,
            marginTop : 20,
            paddingVertical: 20,
            paddingHorizontal: 10,
            shadowColor: 'gray',
            shadowOpacity: 0.5,
            shadowOffset: {  height : 3,  width : 3
            },
            shadowRadius: 4,
            elevation: 4,
            backgroundColor: 'white',
            justifyContent: 'flex-start',
        }}>
        <Text style={{ alignContent:'center',alignItems:'center', marginBottom : 10, fontWeight: 'bold', color:'#455156', fontSize: 20 }}>Vanne controlling</Text>
            <View style={{ flexDirection: 'row', marginTop : 10 }}>
            <Text style={styles.prefix}>Vanne :</Text>
            <Text style={styles.content}>  {vanne ? 'On':'Off'}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop : 10 }}>
            <Text style={styles.prefix}>last modification date :</Text>
            <Text style={styles.content}> {datevanne.slice(0,10)}  {datevanne.slice(11,19)}</Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop : 10 }}>
            <Text style={styles.prefix}>commande from :</Text>
            <Text style={styles.content}> {cmdvanne}</Text>
        </View>
        
            <Switch
              style={{ marginTop: 10}}
              trackColor={{ false: COLORS.secondary , true: COLORS.primary }}
              thumbColor={vanne ? COLORS.tertiary : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchvanne}
              value={vanne}
            
            />
        </View>
    </View>
    </SafeAreaView>



    <SafeAreaView style={{flex: 1,   backgroundColor: '#ffffff' }}>
      <View style={styles.container}>
        <View style={{
            marginHorizontal: 10,
            marginTop : 20,
            paddingVertical: 20,
            paddingHorizontal: 10,
            shadowColor: 'gray',
            shadowOpacity: 0.5,
            shadowOffset: {  height : 3,  width : 3
            },
            shadowRadius: 4,
            elevation: 4,
            backgroundColor: 'white',
            justifyContent: 'flex-start',
        }}>
        <Text style={{ alignContent:'center',alignItems:'center', marginBottom : 10, fontWeight: 'bold', color:'#455156', fontSize: 20 }}>Motor Speed controlling</Text>
            <View style={{ flexDirection: 'row', marginTop : 10 }}>
            <Text style={styles.prefix}>Speed :</Text>
            <Text style={styles.content}>  {String(action)}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop : 10 }}>
            <Text style={styles.prefix}>last modification date :</Text>
            <Text style={styles.content}> {dateaction.slice(0,10)}  {dateaction.slice(11,19)}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop : 10 }}>
            <Text style={styles.prefix}>commande from :</Text>
            <Text style={styles.content}> {cmdaction}</Text>

        </View>
        <View style={styles.action}>
        <TextInput
                placeholder={action}
                placeholderTextColor="#666666"
                autoCorrect={false}
                keyboardType="number-pad"
                onChangeText={(val) => setvalaction(val)}
                style={[
                  styles.inputStyle,
                  {
                    color:'#000000',
                  },
                ]}
              />
        </View>
            <TouchableOpacity style={styles.commandButton} onPress={() => ChangeAction()}>
              <Text style={styles.panelButtonTitle}>Send</Text>
            </TouchableOpacity>
        </View>
    </View>
    </SafeAreaView>

      </ScrollView>
    </SafeAreaView>
    
  );
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom : 10,
  },
  inputStyle: {
    //flex: 1,
    color: COLORS.light,
    paddingLeft : 15,
    paddingRight : 15,
    paddingBottom : -10,
    borderColor: COLORS.dark,
    fontSize : 25
  },
  prefix: {
    fontWeight: '300',
    color: COLORS.dark,
    marginRight : 5,
    fontSize:18

},
  action: {
    borderBottomWidth : 2,
    borderBottomColor: '#f2f2f2',
    marginRight : "50%",
    marginBottom: 10,

  },
  commandButton: {
    padding: 12,
    borderRadius: 40,
    marginLeft :"50%",
    backgroundColor: COLORS.tertiary,
    alignItems: 'center',
  },
  view: {
    margin: 10,
  },
  content: {
    fontWeight: 'bold',
    color: COLORS.dark,
    fontSize:18
},
});


export default ControlScreenIng;
