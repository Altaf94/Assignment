import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home/Home.screen'
import Profile from '../screens/Profile/Profile.screen'
import Icon from 'react-native-vector-icons/Ionicons'
import Login from '../screens/Login/Login'
import Signup from '../screens/Signup/Signup'
import ForgetPassword from '../screens/Forgetpassword/ForgetPassword'
import Verification from '../screens/Verification/Verification'
import PasswordSet from '../screens/PasswordSet/PasswordSet'
import Verify from '../screens/Verify/Verify'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator>
         <Tab.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-settings'} size={25} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
         <Stack.Screen
          name="Signup"
          options={{ headerShown: false }}
          component={Signup}
        />
          <Stack.Screen
          name="Forget"
          options={{ headerShown: false }}
          component={ForgetPassword}
        />
          <Stack.Screen
          name="Verification"
          options={{ headerShown: false }}
          component={Verification}
        />
        <Stack.Screen
          name="PasswordSet"
          options={{ headerShown: false }}
          component={PasswordSet}
        />
        <Stack.Screen
          name="Verify"
          options={{ headerShown: false }}
          component={Verify}
        />
        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
