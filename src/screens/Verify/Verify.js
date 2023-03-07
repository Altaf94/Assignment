import React from 'react'
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
import { fetchUser, selectAll } from 'e:/new/react-native-boilerplate/template/src/stores/user.reducer'
import OTPInputView from '@twotalltotems/react-native-otp-input'

const Verify = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor={'white'} />
      <View style={{marginTop:"50%"}}>
        <Image
          style={{ width: '100%', height: 300 }}
          resizeMode="cover"
          source={require('../Asset/verfi.png')}
        />
      </View>
      
    
      <Text
        style={{
          fontSize: 20,
          color: 'rgba(31, 31, 31, 0.5)',
          textAlign:'center',
          fontFamily:'Gilroy-Medium'
          

        }}>
        Your password has been
      </Text>

      <Text
        style={{
          fontSize: 20,
          color: 'rgba(31, 31, 31, 0.5)',
          textAlign:'center'
        }}>
       changed successfully
      </Text>
      
 
      
      

  
    </View>
  )
}

export default Verify


