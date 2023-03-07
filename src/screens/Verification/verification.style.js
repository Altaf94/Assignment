import { StyleSheet } from 'react-native'
import {Gilroy_Medium} from '../../components/fonts'
import {Gilroy_Regular} from '../../components/fonts'
import {Gilroy_Bold} from '../../components/fonts'
import {Gilroy_SemiBold} from '../../components/fonts'

export default StyleSheet.create({
  mainView:{
    flex: 1, 
    backgroundColor: 'white'
  },
  topsetting:{
    marginTop: '30%'
  }, 
  Textdeco:{
    fontSize: 14,
    color: 'rgba(31, 31, 31, 0.5)',
    textAlign: 'center',
    fontFamily:Gilroy_Medium
  },
  Textdecoo:{
    fontSize: 14,
    color: '#1F1F1F',
    textAlign: 'center',
    fontFamily:Gilroy_Regular,
    marginTop:'5%'
  },
  Flexcenter:{
    flexDirection:'row',
    justifyContent:'center'
  },
  code:{
    fontSize: 14,
    color: 'rgba(31, 31, 31, 0.5)',
    textAlign: 'center',
    fontFamily:Gilroy_Bold,
    marginRight:'1%'

  },
  Resend:{
    fontSize: 14,
    color: '#1E8EF5',
    textAlign: 'center',
    fontFamily:Gilroy_Medium
    
  },
  Verify:{
    textAlign:'center',
    backgroundColor:'#FF9E2C',
    borderRadius:5,
    fontSize:14,
    color:'#FFFFFF',
    padding:15,
    marginTop:20, 
    marginBottom:20,
    width:'95%',
    fontFamily: Gilroy_SemiBold
  },
})
