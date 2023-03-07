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
import { fetchUser, selectAll } from '../../../src/stores/user.reducer'
import LoginStyle from './Login.style'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'


const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [Email,setEmail]=useState("mikesmith@gmail.com")
  const [password,setPassword]=useState("254256")
  const navigation =useNavigation()

  return (
    <View style={LoginStyle.mainview}>
      <StatusBar backgroundColor={'white'} />
      <View style={LoginStyle.imageview}>
        <Image
          style={{ width: "100%", height: 150 }}
           resizeMode='contain'
          source={require('../Asset/Logo.png')}
        />
      </View>

      <ScrollView>
        <Text style={LoginStyle.Textdeco}>Log In</Text>
        <Text style={LoginStyle.Emaildeco}>Email</Text>
        <TextInput style={LoginStyle.Emailboxdeco} > {Email} </TextInput>
        <Text style={LoginStyle.Emaildeco}>Password</Text>

        <View style={LoginStyle.passwordview}>
          <TextInput
            secureTextEntry={!passwordVisible}
            style={{ flex: 1, borderRadius: 5 }}
          >{password}</TextInput>
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}>
            <Ionicons
              style={{ paddingRight: 20 }}
              name={passwordVisible ? 'eye' : 'eye-off'}
              size={20}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('Forget')}>
          <Text style={LoginStyle.passforgo}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>alert("LOG IN")}>
          <Text style={LoginStyle.Loginbutton}>LOG IN</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={LoginStyle.accountcheck}> Don't have an accout?</Text>
          <TouchableOpacity onPress={() =>navigation.navigate('Signup')}>
            <Text style={LoginStyle.sign}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() =>alert("Continue as guest")}>
          <Text style={LoginStyle.guest}>Continue as guest</Text>
        </TouchableOpacity>

        <View style={LoginStyle.LineView}>
          <View style={LoginStyle.borderline} />
          <Text style={LoginStyle.LineText}>Continue With</Text>
          <View style={LoginStyle.borderlineleft} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 10
          }}>
          <TouchableOpacity onPress={() =>alert("Google")} >
          <Ionicons
            style={{ padding: 15 }}
            size={37}
            name="logo-google"
            color="green"
          />
          </TouchableOpacity>  
          
          <TouchableOpacity onPress={() =>alert("Facebook")} >
          <Ionicons
            style={{ padding: 15 }}
            size={37}
            name="logo-facebook"
            color="skyblue"
          />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() =>alert("Apple")} >
          <Ionicons
            style={{ padding: 15 }}
            size={37}
            name="logo-apple"
            color="black"
          />
          </TouchableOpacity>
          
        </View>
      </ScrollView>
    </View>
  )
}

export default Login
