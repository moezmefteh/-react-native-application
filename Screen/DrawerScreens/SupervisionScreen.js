import 'react-native-gesture-handler';
import React, {useEffect,useState} from 'react';
import {SafeAreaView, View, Text,StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '../../consts/color';
import {ScrollView} from 'react-native-gesture-handler';
import { IPconf } from '../IPconf';

const SupervisionScreen = ({navigation}) => {

  const [presion, setpresion] = useState('');
  const [temp, settemp] = useState('');
  const [msg, setmsg] = useState('');
  const [datepresion, setdatepresion] = useState('');
  const [datetemp, setdatetemp] = useState('');
  const [datemsg, setdatemsg] = useState('');

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
        setdatepresion(responseJson[responseJson.length - 1].pub_date)

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
          setdatetemp(responseJson[responseJson.length - 1].pub_date)

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
            setdatemsg(responseJson[responseJson.length - 1].pub_date)

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
      <Text style={{fontSize: 20, color: COLORS.dark, fontWeight: 'bold'}}>
      Welcome to the monitoring screen,  
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
    <Text style={{ alignContent:'center',alignItems:'center', marginTop : 10, fontWeight: 'bold', color:COLORS.secondary, fontSize: 20 }}>temperature data</Text>
        <View style={{ flexDirection: 'row', marginTop : 10 }}>
        <Text style={styles.prefix}>temperature :</Text>
        <Text style={styles.content}>  {String(temp)} °c</Text>
    </View>
    <View style={{ flexDirection: 'row', marginTop : 10 , marginBottom : 10 }}>
        <Text style={styles.prefix}>last modification date :</Text>
        <Text style={styles.content}> {datetemp.slice(0,10)}  {datetemp.slice(11,19)}</Text>
    </View>


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
    <Text style={{ alignContent:'center',alignItems:'center', marginTop : 10 , fontWeight: 'bold', color:COLORS.secondary, fontSize: 20 }}>Pressure data</Text>
        <View style={{ flexDirection: 'row', marginTop : 10 }}>
        <Text style={styles.prefix}>Pressure :</Text>
        <Text style={styles.content}>{String(presion)} bar</Text>
    </View>
    <View style={{ flexDirection: 'row', marginTop : 10 , marginBottom : 10  }}>
        <Text style={styles.prefix}>last modification date :</Text>
        <Text style={styles.content}> {datepresion.slice(0,10)}  {datepresion.slice(11,19)}</Text>
    </View>

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
    <Text style={{ alignContent:'center',alignItems:'center', marginTop : 10  , fontWeight: 'bold', color:COLORS.secondary, fontSize: 20 }}>Message </Text>
        <View style={{ flexDirection: 'row', marginTop : 10 }}>
        <Text style={styles.prefix}>Message :</Text>
        <Text style={styles.content}>  {String(msg)}</Text>
    </View>
    <View style={{ flexDirection: 'row', marginTop : 10 , marginBottom : 10 }}>
        <Text style={styles.prefix}>last modification date :</Text>
        <Text style={styles.content}> {datemsg.slice(0,10)}  {datemsg.slice(11,19)}</Text>
    </View>
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
fontSize:18,
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
fontSize:18,

},
});

export default SupervisionScreen;
