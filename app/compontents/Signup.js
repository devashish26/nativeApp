import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'
import React, {useState} from 'react'
import FormContainer from './FormContainer'

import { db } from '../firebase'
import { addDoc, getDocs, collection } from 'firebase/firestore'

export default function Signup({navigation}) {
  const [emailid, setEmailid] = useState('')
  const [deviceID, setDeviceID] = useState('')
  const [mobileno, setMobileno] = useState('')
  const [paswd, setPaswd] = useState('')
  const [cpaswd, setCpaswd] = useState('')

  let usrs = []
  function validate(){
    if(emailid.includes('@')){
      if(mobileno.length===10){
        if(paswd === cpaswd){
          if(!usrs.includes(emailid)){
            return true;
          }else{
            Alert.alert('Email already exists')
            return false;
          }
        }else{
          Alert.alert('Passwords do not match')
          return false;
        }
      }else{
        Alert.alert('Enter valid mobile number')
        return false;
      }
    }else{
      Alert.alert('Enter valid email')
      return false;
    }
  }
  async function handlePress(){
    {/*
      1. 
      2. check correctness of email
      3. length of mobile no
      4. figure out device id
      5. if user already exists
      6. check passwords match or not
    */}
    await fetchData()
    if(validate()){
      await saveData()
      navigation.navigate('PastHistory')
    }
  }
  async function fetchData(){
    let loginRef = collection(db, 'login')
    let loginCollection = await getDocs(loginRef)
    let allEntries = loginCollection.docs.map((doc)=>({
      ...doc.data(), id: doc.id
    }))
    for(let i in allEntries){
      usrs.push(allEntries[i].email)
    }
    console.log(allEntries)
    console.log(usrs)
  }
  async function saveData(){
    const addRef = await addDoc(collection(db,'login'),{
      email:emailid,
      devid:deviceID,
      mobile:mobileno,
      password:paswd,
      userid:emailid
    });
    console.log('doc id is: ', addRef.id)
    Alert.alert("Signup successful! You may login")
  }
  return (
    <FormContainer>
        <TextInput placeholder='Enter email' inputMode='email' value={emailid} onChangeText={(e)=>{setEmailid(e)}}/>
        <TextInput placeholder='Enter device ID' value={deviceID} onChangeText={(e)=>{setDeviceID(e)}}/>
        <TextInput placeholder='Enter mobile number' value={mobileno} onChangeText={(e)=>{setMobileno(e)}}/>
        <TextInput placeholder='Enter password' secureTextEntry={true} value={paswd} onChangeText={(e)=>{setPaswd(e)}}/>
        <TextInput placeholder='Confirm password' secureTextEntry={true} value={cpaswd} onChangeText={(e)=>{setCpaswd(e)}}/>
        <Button style={styles.btn} title='Submit' onPress={()=>{handlePress()}}/>
    </FormContainer>
  )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'white'
    }
})