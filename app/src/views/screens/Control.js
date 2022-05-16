import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles/index';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Control = ({navigation}) => {
  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
          supervising
          </Text>
        </View>

        <View style={{marginTop: 70}}>
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
             Temperature : 22°c
          </Text>
        </View>

        <View style={{marginTop: 20}}>
            <Icon
              name="mail-outline"
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

export default Control;
