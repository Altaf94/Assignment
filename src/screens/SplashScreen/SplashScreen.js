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
import SplashStyle from './Splash.style'
import Icon from 'react-native-vector-icons/Ionicons'


const SplashScreen = () => {



  return (
    <View style={SplashStyle.LogoView}>
      <StatusBar backgroundColor={'white'}/>
   <Image style={{width:"50%", height:'50%'}} resizeMode='contain' source={require('../Asset/Logo.png')} />
    </View>
      
  )
}


export default SplashScreen
