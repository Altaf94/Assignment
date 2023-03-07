import React from 'react'
import {
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, selectAll } from 'e:/new/react-native-boilerplate/template/src/stores/user.reducer'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import forgetStyle from './forget.style'

const ForgetPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [Email,setEmail]=useState("mikesmith@gmail.com")
  const navigation = useNavigation()

  return (
    <View style={forgetStyle.mainview}>
      <StatusBar backgroundColor={'white'} />

      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Ionicons
              style={{ marginTop: 2, marginRight: 20 }}
              name="arrow-back"
              color={'#1F1F1F'}
              size={30}
            />
          </TouchableOpacity>

          <Text style={forgetStyle.Textdeco}>Forgot Password</Text>
        </View>

        <Text style={forgetStyle.Emaildeco}>Email</Text>
        <TextInput style={forgetStyle.Emailboxdeco} value={Email} />

        <TouchableOpacity onPress={()=>navigation.navigate('PasswordSet')}>
          <Text style={forgetStyle.Loginbutton}>NEXT</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default ForgetPassword
