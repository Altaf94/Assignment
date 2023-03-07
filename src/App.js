import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './stores/index'
import SplashScreen from './screens/SplashScreen/SplashScreen'
import { StatusBar } from 'react-native'


const App = () => {

  const [isSplash,setIssplash]=useState(false)

  setTimeout(() => {
    setIssplash(true)
  }, 4000);


  return (
    <Provider store={store}>
      {isSplash?   <MainNavigation /> : <SplashScreen />}
      
    </Provider>
  )
}

export default App
