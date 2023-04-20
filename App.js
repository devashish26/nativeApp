import { StyleSheet } from 'react-native';
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginSignupContainer from './app/pages/LoginSignupContainer';
import TestPage from './app/pages/TestPage';
import PastHistory from './app/pages/PastHistory';

export default function App() {
    const [isSignedIn, setisSignedIn] = useState(false)
    const Stack = createNativeStackNavigator();
    console.log("app executed")
    return (
      <NavigationContainer>
        {isSignedIn ? (
          <Stack.Navigator initialRouteName='test' >
              <Stack.Screen name='test' component={TestPage} options={{headerShown:false}}/>
              <Stack.Screen name='PastHistory' component={PastHistory} options={{headerShown:false}}/>
          </Stack.Navigator>
        ):(
          <Stack.Navigator initialRouteName='LoginSignup'>
              <Stack.Screen name='LoginSignup' options={{headerShown:false}} initialParams={{setisSignedIn: setisSignedIn}} component={LoginSignupContainer} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },
  inputBox:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'lightgrey',
    width:'100%',
    height:'40%'
  },
  headingText:{
    color:'black',
    fontSize:36,
    fontWeight:600,
    marginBottom:30
  },
  inputField:{
    width:'50%',
    margin:3,
    padding:5,
    fontSize:14,
    borderBottomWidth:0.5
  }
});
