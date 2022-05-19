import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text,TouchableOpacity,ImageBackground} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '../../consts/color';
import {ScrollView} from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const ControlScreen = ({navigation}) => {
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
             Temperature : 22°c
          </Text>
        </View>

        <View style={{marginTop: 20}}>
            <Icon
              name="car-brake-low-pressure"
              color={COLORS.light}
              size={20}
            />
            <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Presion : 5 bar
            </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ControlScreen;
