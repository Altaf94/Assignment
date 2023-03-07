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
  passwordview:{
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    paddingLeft:15,
    borderRadius: 5,
    fontFamily: Gilroy_Medium,
  },
  passforgo:{
    color:'#1E8EF5',
    textAlign:'right',
    margin:5,
    fontSize:14,
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
    fontFamily: Gilroy_SemiBold
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
    width:"100%",
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
