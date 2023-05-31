import { StyleSheet, Text, TextInput, Dimensions, Alert, Pressable } from 'react-native'
import React, {useState} from 'react'
import FormContainer from './FormContainer'

import { db } from '../firebase'
import { doc, setDoc, getDocs, collection } from 'firebase/firestore'


const Wwidth = Dimensions.get('window').width;
const Wheight = Dimensions.get('screen').height;


export default function Signup({navigation}) {
    const [seed, setSeed] = useState(1)

    const reset = ()=>{
        setSeed(Math.random())
    }

    // const isFocused = useIsFocused()
    const [patientDetails, setPatientDetails] = useState({
        email:"",
        id:"",
        password:"",
        cpassword:""
    })
    let patIds=[]

    let patIds2
    const validate2 =async (xid)=>{     //checking if id already exists or not
        const myRef = collection(db,"patient_login")
        const myColl = await getDocs(myRef)
        allEntries = myColl.docs.map((doc)=>({
            ...doc.data()
        }))
        patIds2 = allEntries.map((e)=>{return e.id})
        // console.log('pat 2 ids', patIds2)
        if(patIds2.includes(xid)){
            Alert.alert('User already exists, kindly login')
            return false
        }
        return true
    }
    
    const validate= async (pD)=>{
        // first get patient_data collection entries
        let valChecked = false
        const myRef = collection(db,"patient_data")
        const myColl = await getDocs(myRef)
        allEntries = myColl.docs.map((doc)=>({
            ...doc.data()
        }))
        // allEntries is an array which contains all entries of patient_login collection
        patIds = allEntries.map((e)=>{return e.id})
        // console.log('pat ids: ', patIds)
        if(patIds.includes(pD.id)){
            if(pD.email.includes('@')){
                if(pD.password.length>=8){
                    if(pD.password === pD.cpassword){
                        valChecked = true
                    }else{
                        Alert.alert("Passwords do not match")
                        return false
                    }
                }else{
                    Alert.alert("Password must be atleast 8 characters long")
                    return false
                }
            }else{
                Alert.alert(`Enter valid email id (should contain '@' symbol)`)
                return false
            }
        }else{
            Alert.alert("Device ID does not exist")
            return false
        }
        if(await validate2(pD.id)){
            return valChecked
        }
        return false
    }
    const handleChange = (e)=>{
        // setting user input in patientDetails object

        let value = e.nativeEvent.text;
        let name = e._dispatchInstances.pendingProps.name;
        setPatientDetails(details => ({
                ...details, [name]: value
            }))

        // now we have to validate entries and add them in database
        // validate: **the device id should exist in paitent_data collection
    }
    const handlePress = async () =>{
        if(await validate(patientDetails)){
            //code to add patientDetails into database
            await setDoc(doc(db, "patient_login", patientDetails.id), {
                id: patientDetails.id.trim(),
                email: patientDetails.email.trim(),
                password: patientDetails.password
            });
            reset()
            Alert.alert("Signed in successfully!")
        }else{
            // Alert.alert("")
        }
    }
    return (
        <FormContainer key={seed}>
            <TextInput onChange={handleChange} name='id' placeholder='Enter device ID' />
            <TextInput onChange={handleChange} name='email' placeholder='Enter email' inputMode='email' />
            <TextInput onChange={handleChange} name='password' placeholder='Enter password' secureTextEntry={true} />
            <TextInput onChange={handleChange} name='cpassword' placeholder='Confirm password' secureTextEntry={true} />
            {/* <Button style={styles.btn} color={'#83764F'} title='Submit' onPress={()=>{handlePress()}}/> */}
            <Pressable onPress={()=>{handlePress()}} style={{backgroundColor:'#83764F', width:Wwidth/5, height:Wheight/25, display:'flex', justifyContent:'center', alignItems:'center', marginLeft:(Wwidth/2 - Wwidth/7)}}>
                <Text style={{color:'white'}}>SIGNUP</Text>
            </Pressable>
        </FormContainer>
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'white'
    }
})