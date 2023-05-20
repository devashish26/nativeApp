import { StyleSheet } from 'react-native';
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginSignupContainer from './app/pages/LoginSignupContainer';
import TestPage from './app/pages/TestPage';
import PastHistory from './app/pages/PastHistory';
import Home from './app/pages/Home';

export default function App() {
    const [loginDetails, setloginDetails] = useState({signedIn: false})
    // console.log('details in app.js: ', loginDetails)
    const Stack = createNativeStackNavigator();
    console.log("app executed")
    return (
      <NavigationContainer style={styles.container}>
        {loginDetails.signedIn ? (
          <Stack.Navigator initialRouteName='home' >
              <Stack.Screen name = 'home' component={Home} options={{headerShown:false}} initialParams={{userDetails: loginDetails}}/>
              <Stack.Screen name='PastHistory' component={PastHistory} options={{headerShown:false}}/>
              <Stack.Screen name='test' component={TestPage} options={{headerShown:false}} initialParams={{userDetails: loginDetails}}/>
          </Stack.Navigator>
        ):(
          <Stack.Navigator initialRouteName='LoginSignup'>
              <Stack.Screen name='LoginSignup' options={{headerShown:false}} initialParams={{setloginDetails: setloginDetails}} component={LoginSignupContainer} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    backgroundColor: '#E5F9DB',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    fontFamily: 'Montserrat'
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
