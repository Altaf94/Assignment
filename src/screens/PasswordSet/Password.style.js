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
  imageview:{
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  Textdeco:{
    fontSize:24,
    color:'#1F1F1F',
    fontFamily:Gilroy_Bold,
    marginLeft:10
  },
  Emaildeco:{
    fontSize:12,
    color:'grey',
    marginLeft:10,
    marginBottom:20,
    fontFamily: Gilroy_Medium,
  },
  Emailboxdeco:{
    backgroundColor:'#F9F9F9',
    borderRadius:5,
    fontSize:14,
  },
  passwordview:{
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    borderRadius: 5,
    paddingRight:10
  },
  passforgo:{
    color:'#1E8EF5',
    textAlign:'right',
    margin:5,
    fontSize:14
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
  },
  accountcheck:{
    textAlign:'center',
    color:'#1F1F1F',
    fontSize:14,
    marginBottom:10,
  },
  sign:{
    textAlign:'center',
    color:'#1E8EF5',
    fontSize:14,
    marginLeft:5
   
  },
 

})
