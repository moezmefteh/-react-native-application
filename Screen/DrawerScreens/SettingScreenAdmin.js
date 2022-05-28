
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import COLORS from '../../consts/color';

const SettingsScreenAdmin = () => {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: '#FDF6F0'}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom : 16,
              color: COLORS.dark
            }}>
            This is the Settings Screen Admin
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default SettingsScreenAdmin;
