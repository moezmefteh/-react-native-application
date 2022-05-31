
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import COLORS from '../../consts/color';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: COLORS.white}}>
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
            {'\n\n'}
            This is the Settings Screen
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
