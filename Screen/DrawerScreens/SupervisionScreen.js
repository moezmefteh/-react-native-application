import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '../../consts/color';
import {ScrollView} from 'react-native-gesture-handler';

const SupervisionScreen = ({navigation}) => {

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
             Motor : On

          </Text>

          <View>
            
            <SwitchButton
                onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                text1 = 'ON'                        // optional: first text in switch button --- default ON
                text2 = 'OFF'                       // optional: second text in switch button --- default OFF
                switchWidth = {100}                 // optional: switch width --- default 44
                switchHeight = {44}                 // optional: switch height --- default 100
                switchdirection = 'rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                switchBorderRadius = {100}          // optional: switch border radius --- default oval
                switchSpeedChange = {500}           // optional: button change speed --- default 100
                switchBorderColor = '#d4d4d4'       // optional: switch border color --- default #d4d4d4
                switchBackgroundColor = '#fff'      // optional: switch background color --- default #fff
                btnBorderColor = '#00a4b9'          // optional: button border color --- default #00a4b9
                btnBackgroundColor = '#00bcd4'      // optional: button background color --- default #00bcd4
                fontColor = '#b1b1b1'               // optional: text font color --- default #b1b1b1
                activeFontColor = '#fff'            // optional: active font color --- default #fff
            />
            
            { this.state.activeSwitch === 1 ? console.log('view1') : console.log('view2') }
            
        </View>

        </View>

        <View style={{marginTop: 20}}>
            <Icon
              name="car-brake-low-pressure"
              color={COLORS.light}
              size={20}
            />
            <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Vanne : Off
            </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default SupervisionScreen;
