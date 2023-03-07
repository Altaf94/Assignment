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
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, selectAll } from '../../../src/stores/user.reducer'
import SignupStyle from './Signup.style'
import { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox';


const Signup = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [firtname,setFirstName]=useState('Mike')
  const [lastname,setLastName]=useState('Smith')
  const [Email,setEmail]=useState("mikesmith@gmail.com")
  const [password,setPassword]=useState("254256")
  const [contact,setContact]=useState("03342713078")
  const countries = ['Facebook', 'Instagram', 'Friend', 'Other']
  const [selected, setSelected] = useState('')
  // const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const navigation= useNavigation()

  return (
    <View style={SignupStyle.mainview}>
      <ScrollView  showsVerticalScrollIndicator={false}>
     <View style={SignupStyle.imageview}>
        <Image
          style={{ width: "100%", height: 150 }}
           resizeMode='contain'
          source={require('../Asset/Logo.png')}
        />
      </View>

      
        <Text style={SignupStyle.Textdeco}>Sign Up</Text>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ marginBottom: 5 }}>First Name</Text>
            <TextInput style={SignupStyle.namebox} value={firtname} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ marginBottom: 5 }}>Last Name</Text>
            <TextInput style={SignupStyle.namebox} value={lastname} />
          </View>
        </View>

        <Text style={SignupStyle.Emaildeco}>Email</Text>
        <TextInput style={SignupStyle.Emailboxdeco} value={Email} />
        <Text style={SignupStyle.Emaildeco} >Password</Text>

        <View style={SignupStyle.passwordview}>
          <TextInput
            secureTextEntry={!passwordVisible}
            style={{ flex: 1, borderRadius: 5 }}
            value={password}
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

        <Text style={SignupStyle.Emaildeco}>Contact Number</Text>
        <TextInput style={SignupStyle.Emailboxdeco} value={contact} />

        <Text style={SignupStyle.Emaildeco}>How did you find us?</Text>

        <SelectList
          placeholder="Select"
    
          arrowicon={
            <FontAwesome name="chevron-down" size={15} color={'#FF9E2C'} />
          }
          searchicon={false}
          setSelected={val => setSelected(val)}
          boxStyles={{
            backgroundColor: '#F9F9F9',
            borderWidth: 0
          }}
          dropdownStyles={{
            borderWidth: 0,
            elevation: 5,
            borderRadius: 8,
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOffset: {
              width: -50,
              height: 0
            },
            shadowOpacity: 0.1,
            shadowRadius: 3.84
          }}
          data={countries}
          save="value"
          onSelect={() => alert(selected)}
          label="Categories"
        />

       

        <View style={{flexDirection:"row", marginTop:10}}>
         <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        /> 
        <Text style={{fontSize:14, marginTop:5}}>Keep me updated with special offers, exciting products and news</Text>

        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('Verification')}>
          <Text style={SignupStyle.Loginbutton}>SIGN UP</Text>
        </TouchableOpacity>
        
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={SignupStyle.accountcheck}> Don't have an accout?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={SignupStyle.sign}>Log In</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() =>alert("hello")}>
          <Text style={SignupStyle.guest}>Continue as guest</Text>
        </TouchableOpacity>

        <View style={SignupStyle.LineView}>
          <View style={SignupStyle.borderline} />
          <Text style={SignupStyle.LineText}>Continue With</Text>
          <View style={SignupStyle.borderlineleft} />
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

export default Signup
