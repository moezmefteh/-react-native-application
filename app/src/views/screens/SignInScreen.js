import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles/index';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const SignInScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
            KEEP 
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.secondary}}>
            ACCESS
          </Text>
        </View>

        <View style={{marginTop: 70}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Welcome,
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>
            Sign in to continue
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Email" style={STYLES.input} />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Control')}>
          <View style={STYLES.btnPrimary}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Sign In
            </Text>
          </View>
          </TouchableOpacity>
          <View
            style={{rtical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
