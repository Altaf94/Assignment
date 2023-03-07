import React from 'react'
import {
  SafeAreaView,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/Ionicons'
import LoginStyle from '../screens/Login/Login.style'
import { useState } from 'react'



const PasswordInput = () => {

    const [passwordVisible,setPasswordVisible]=useState(true)

  return (
    <View style={{flexDirection:'row', justifyContent:'center'}}>
     <TextInput
     
     secureTextEntry={!passwordVisible}
     style={{ flex: 1, backgroundColor:'#F9F9F9',  borderRadius: 5, paddingHorizontal: 10 }} />
       <TouchableOpacity onPress={()=>setPasswordVisible(!passwordVisible)}>
       <FontAwesome style={{ padding: 10 }} name={passwordVisible? "eye-slash" : "eye"} color='rgba(31, 31, 31, 0.5)'/>
       </TouchableOpacity>
       
    </View>
   
      
  )
}


export default PasswordInput
