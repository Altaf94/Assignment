import { StyleSheet } from 'react-native'
import {Gilroy_Medium} from '../../components/fonts'
import {Gilroy_Bold} from '../../components/fonts'
import {Gilroy_SemiBold} from '../../components/fonts'
import {Gilroy_Regular} from '../../components/fonts'

export default StyleSheet.create({
 mainview:{
    flex: 1, 
    padding: 20, 
    backgroundColor: 'white'
 },
  
  Textdeco:{
    fontSize:24,
    color:'#1F1F1F',
    marginBottom:15,
    fontFamily:Gilroy_Bold,
    marginLeft:'2%'
  },
  Emaildeco:{
    fontSize:12,
    color:'grey',
    margin:10,
    fontFamily: Gilroy_Medium,
  },
  Emailboxdeco:{
    backgroundColor:'#F9F9F9',
    borderRadius:5,
    fontSize:14,
    paddingLeft:15,
    fontFamily: Gilroy_Medium,
  },
  Loginbutton:{
    textAlign:'center',
    backgroundColor:'#FF9E2C',
    borderRadius:5,
    fontSize:14,
    color:'#FFFFFF',
    padding:15,
    marginTop:20, 
    marginBottom:20,
    fontFamily: Gilroy_SemiBold
  }
})
