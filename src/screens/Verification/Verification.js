import React, { useState} from 'react'
import {
  SafeAreaView,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchUser,
  selectAll
} from 'e:/new/react-native-boilerplate/template/src/stores/user.reducer'
import OtpInputs from 'react-native-otp-inputs'
import { useNavigation } from '@react-navigation/native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import verificationStyle from './verification.style'
import { ScrollView } from 'react-native-gesture-handler'

const Verification = () => {
  const navigation = useNavigation()
  const [matchotp, setMatchotp] = useState('')



  return (
    <View style={verificationStyle.mainView}>
      <StatusBar backgroundColor={'white'} />
      <ScrollView showsHorizontalScrollIndicator={false}>

      <View style={verificationStyle.topsetting}>
        <Image
          style={{ width: '100%', height: 150 }}
          resizeMode="contain"
          source={require('../Asset/icon.png')}
        />
      </View>
      <Text
       style={verificationStyle.Textdeco}>
        Code has been sent to registered email
      </Text>
      <Text
        style={verificationStyle.Textdeco}>
        mike.smith@gmail.com
      </Text>
      <Text style={verificationStyle.Textdecoo}>
        Please enter 4 digit code
      </Text>
      
      <View style={{flexDirection:'row', justifyContent:'center', width:'100%'}}>
      <View
        style={{
         width:'60%'
        }}>
        <OTPInputView
         
          style={{ width: '100%', height: 200 }}
          autoFocusOnLoad={false}
          pinCount={4}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`)
          }}
          secureTextEntry 
          
        />
      </View>
      </View>
      

      <View style={verificationStyle.Flexcenter}>
        <Text
          style={verificationStyle.code}>
          Didn’t receive code?
        </Text>
        <Text
          style={verificationStyle.Resend}>
          Resend
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Verify')}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text
            style={verificationStyle.Verify}>
            VERIFY
          </Text>
        </View>
      </TouchableOpacity>
      
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45
  },
  underlineStyleHighLighted: {
    borderColor: "red", //replace with desired color
    borderBottomWidth: 2, //increase border width for highlighted state
  },

  underlineStyleBase: {
    width: 30,
    borderColor: "#DFDFDF",
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#FF9E2C",
  },
});

export default Verification
