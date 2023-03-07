import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useState } from 'react'
import {
  SafeAreaView,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchUser,
  selectAll
} from 'e:/new/react-native-boilerplate/template/src/stores/user.reducer'
import PasswordStyle from './Password.style'

const PasswordSet = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [newpasswordVisible, setNewPasswordVisible] = useState(false)
  const [oldpassword, setOldpassword] = useState('')
  const [newpassword, setNewpassword] = useState('')
  const navigation = useNavigation()

  const checkPassword = () => {
    if (oldpassword === newpassword) {
      navigation.navigate('Verify')
    } else {
      console.log('pasword is not same')
    }
  }

  return (
    <View style={PasswordStyle.mainview}>
      <StatusBar backgroundColor={'white'} />

      <ScrollView>
        <Text style={PasswordStyle.Textdeco}>New Password</Text>
        <Text style={PasswordStyle.Emaildeco}>Set your new password!</Text>

        <Text style={PasswordStyle.Emaildeco}>Password</Text>
        <View style={PasswordStyle.passwordview}>
          <TextInput
            onChangeText={e => setNewpassword(e)}
            secureTextEntry={!passwordVisible}
            style={{ flex: 1, borderRadius: 5, marginLeft: 15 }}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}>
            <Ionicons
              style={{ paddingRight: 20 }}
              name={passwordVisible ? 'eye' : 'eye-off'}
              size={20}
            />
          </TouchableOpacity>
        </View>

        <Text style={PasswordStyle.Emaildeco}>Confirm Password</Text>
        <View style={PasswordStyle.passwordview}>
          <TextInput
            onChangeText={e => setOldpassword(e)}
            secureTextEntry={!newpasswordVisible}
            style={{ flex: 1, borderRadius: 5, marginLeft: 15 }}
          />
          <TouchableOpacity
            onPress={() => setNewPasswordVisible(!newpasswordVisible)}>
            <Ionicons
              style={{ paddingRight: 20 }}
              name={newpasswordVisible ? 'eye' : 'eye-off'}
              size={20}
            />
          </TouchableOpacity>
        </View>

        {oldpassword === newpassword ? null : (
          <Text style={{ color: '#DE2C2C' }}>
            Please enter the same password.
          </Text>
        )}

        <TouchableOpacity onPress={checkPassword}>
          <Text style={PasswordStyle.Loginbutton}>NEXT</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default PasswordSet
