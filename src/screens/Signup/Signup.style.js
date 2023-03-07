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
    fontWeight:'bold',
    fontFamily:Gilroy_Bold,
    marginBottom:15
  },
  Emaildeco:{
    fontSize:12,
    color:'grey',
    margin:10,
    fontFamily: Gilroy_Medium,
  },
  name:{
    fontSize:15,
    backgroundColor:'yellow',
    color:'grey',
    margin:10,
    textAlign:'left',
    fontFamily: Gilroy_Medium,

  },
  namebox:{
    backgroundColor:'#F9F9F9',
    borderRadius:5,
    fontSize:14,
    paddingLeft:15,
    marginRight:10,
    fontFamily: Gilroy_Medium,
  },
  Emailboxdeco:{
    backgroundColor:'#F9F9F9',
    borderRadius:5,
    fontSize:14,
    paddingLeft:15,
    fontFamily: Gilroy_Medium,
  },
  passwordview:{
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    borderRadius: 5,
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
  },
  accountcheck:{
    textAlign:'center',
    color:'#1F1F1F',
    fontSize:14,
    marginBottom:10,
    fontFamily:Gilroy_Regular
  },
  sign:{
    textAlign:'center',
    color:'#1E8EF5',
    fontSize:14,
    marginLeft:5,
    fontFamily:Gilroy_Regular
   
  },
  guest:{
    textAlign:'center',
    color:'#FF9E2C',
    fontSize:16,
    fontFamily: Gilroy_SemiBold,
    marginBottom:"5%"
  },
  LineView:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop:20,
    fontFamily: Gilroy_Medium,
    
  },
  borderline:{
    borderBottomWidth: 1, 
    flex: 1, 
    marginRight: 10, 
    borderColor: 'rgba(31, 31, 31, 0.35)',
   
  },
  borderlineleft:{
    borderBottomWidth: 1, 
    flex: 1, 
    marginLeft: 10, 
    borderColor: 'rgba(31, 31, 31, 0.35)'
  },
  LineText:{
    color:'rgba(31, 31, 31, 0.35)'
  }
})
