import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableWithoutFeedback, View, Text, ScrollView, Dimensions, Alert  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginSignupContainer from './app/pages/LoginSignupContainer';
import TestPage from './app/pages/TestPage';
import PastHistory from './app/pages/PastHistory';

export default function App() {
    const Stack = createNativeStackNavigator();
    console.log("app executed")
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='PastHistory'>
              <Stack.Screen name='LoginSignup' component={LoginSignupContainer} />
              <Stack.Screen name='test' component={TestPage}/>
              <Stack.Screen name='PastHistory' component={PastHistory}/>
          </Stack.Navigator>
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
