import { StyleSheet, Dimensions, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import FormContainer from './FormContainer'
import { Alert } from 'react-native'

import { db } from './../firebase'
import { getDocs, collection } from 'firebase/firestore'

export default function Login({changeStatus}) {
  const [userMail, setUserMail] = useState('')
  const [pwd, setPwd] = useState('')
  let allEntries=[]
  let usrs=[]
  
  async function validate(){
    let allEntV = await showData()  
    let details = {}
    for(let i in allEntV){
      if(allEntV[i].email === userMail){
        details = allEntV[i]
        break
      }
    }
    console.log('details in validate: ', details)
    if(usrs.includes(userMail) && pwd === allEntries[usrs.indexOf(userMail)].password){
      Alert.alert("Successfully logged in.")
      changeStatus({...details,signedIn: true})
      // have to add condition to check if past history exists or not 
      // if yes then redirect to home else redirect to past history page
    }else{
      Alert.alert("Invalid credentials")
    }
  }
  async function showData(){
    const loginRef = collection(db,"patient_login")
    const logindataCollection = await getDocs(loginRef)
    allEntries = logindataCollection.docs.map((doc)=>({
      ...doc.data(), id:doc.id
    }))
    // console.log(`new arr: `,allEntries) //all data of all users
    for(let i in allEntries){
      usrs.push(allEntries[i].email)
    }
    return allEntries
    // console.log('users: ', usrs) // all emails
  }
  return (
    <FormContainer>
        <TextInput inputMode='email' placeholder='example@email.com' keyboardType='email-address' value={userMail} onChangeText={(e)=>{setUserMail(e)}}/>
        <TextInput placeholder='Enter Password' secureTextEntry={true} value={pwd} onChangeText={(e)=>{setPwd(e)}}/>
        <Button title='Submit' onPress={()=>{validate()}}/>
    </FormContainer>
  )
}

const styles = StyleSheet.create({
    container:{justifyContent:'center', alignItems:'center', backgroundColor:'pink', height:300, width:Dimensions.get('window').width}
})