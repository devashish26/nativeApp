import { StyleSheet, Dimensions, Text, TextInput, Pressable, Button } from 'react-native'
import React, { useState } from 'react'
import FormContainer from './FormContainer'
import { Alert } from 'react-native'

import { db } from './../firebase'
import { getDocs, collection } from 'firebase/firestore'


const Wwidth = Dimensions.get('window').width;
const Wheight = Dimensions.get('screen').height;

export default function Login({changeStatus}) {
  const [userMail, setUserMail] = useState('')
  const [pwd, setPwd] = useState('')
  let allEntries=[]
  let usrs=[]
  
  async function validate(){
    let allEntV = await showData()  
    let completeData = await showAllData()
    let details = {}
    for(let i in allEntV){
      if(allEntV[i].email === userMail){
        details = allEntV[i]
        break
      }
    }
    for(let i in completeData){
      if(completeData[i].email === details.email){
        details = completeData[i]
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
  async function showAllData(){
    const allRef = collection(db, "patient_data")
    const allDataColl = await getDocs(allRef)
    let allAllEntries = allDataColl.docs.map((e)=>({
      ...e.data(), id:e.id
    }))
    console.log(`all patient data = `, allAllEntries)
    return allAllEntries
  }
  return (
    <>
        <FormContainer>
            <TextInput style={styles.inputstyle} inputMode='email' placeholder='example@email.com' keyboardType='email-address' value={userMail} onChangeText={(e)=>{setUserMail(e)}}/>
            <TextInput style={styles.inputstyle} placeholder='Enter Password' secureTextEntry={true} value={pwd} onChangeText={(e)=>{setPwd(e)}}/>
            <Pressable onPress={()=>{validate()}} style={{backgroundColor:'#83764F', width:Wwidth/5, height:Wheight/25, display:'flex', justifyContent:'center', alignItems:'center', marginLeft:(Wwidth/2 - Wwidth/7)}}>
                <Text style={{color:'white'}}>LOGIN</Text>
            </Pressable>
            {/* <Button title='Submit' color={'#83764F'} onPress={()=>{validate()}}/> */}
        </FormContainer>
            
    </>
  )
}

const styles = StyleSheet.create({
    container:{justifyContent:'center', alignItems:'center', backgroundColor:'#E5F9DB', height:300, width:Dimensions.get('window').width},
    inputstyle:{ borderRadius:15, paddingLeft:10},
    btnstyle:{}
})