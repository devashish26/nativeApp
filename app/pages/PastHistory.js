import { StyleSheet, TextInput, Button, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { db } from '../firebase'
import {collection, addDoc} from 'firebase/firestore'

const PastHistory = ({ navigation }) => {

    const [details, setDetails] = useState({
        Address: "",
        Age: "",
        Allergy: {},
        BP: "",
        BloodGroup: "",
        Condition: "",
        Curr_Med: {},
        Disease: "",
        Gender: "",
        Height: "",
        Name: "",
        Past_Med: {},
        Pulse: "",
        Symptoms: {},
        Weight: "",
        id: ""
    })
    const handleChange = (e) => {
        let value = e.nativeEvent.text;
        let name = e._dispatchInstances.pendingProps.name;
        if(name === 'Allergy' || name === 'Past_Med' || name === 'Symptoms' || name === 'Curr_Med'){
            let valueArr = value.split(',');
            let a = valueArr.map((e)=>{
                e = e.trim()
                e = e.charAt(0).toUpperCase() + e.slice(1)
                return e
            })
            value = Object.assign({},a)
        }
        setDetails(details => ({
            ...details, [name]: value
        }))
    }
    async function handleSubmit() {
        let ref = await addDoc(collection(db, 'patient_data'),details)
        Alert.alert("Data saved!")
        navigation.navigate('test')
    }
    return (
        <View style={styles.container}>
            <TextInput onChange={handleChange} name='Address' placeholder='Address' inputMode='text' />
            <TextInput onChange={handleChange} name='Age' placeholder='Age' inputMode='numeric' />
            <TextInput onChange={handleChange} name='Allergy' placeholder='Allergies (Comma separated)' inputMode='text' />
            <TextInput onChange={handleChange} name='BP' placeholder='BP(mm/hg)' inputMode='numeric' />
            <TextInput onChange={handleChange} name='BloodGroup' placeholder='Blood Group' inputMode='text' />
            <TextInput onChange={handleChange} name='Condition' placeholder='Condition' inputMode='text' />
            <TextInput onChange={handleChange} name='Curr_Med' placeholder='Current Medications' inputMode='text' />
            <TextInput onChange={handleChange} name='Disease' placeholder='Disease' inputMode='text' />
            <TextInput onChange={handleChange} name='Gender' placeholder='Gender' inputMode='text' />
            <TextInput onChange={handleChange} name='Height' placeholder='Height' inputMode='numeric' />
            <TextInput onChange={handleChange} name='Name' placeholder='Name' inputMode='text' />
            <TextInput onChange={handleChange} name='Past_Med' placeholder='Past Medications (Comma separated)' inputMode='text' />
            <TextInput onChange={handleChange} name='Pulse' placeholder='Pulse' inputMode='text' />
            <TextInput onChange={handleChange} name='Symptoms' placeholder='Symptoms (Comma separated)' inputMode='text' />
            <TextInput onChange={handleChange} name='Weight' placeholder='Weight' inputMode='numeric' />
            <TextInput onChange={handleChange} name='id' placeholder='Device ID' inputMode='text' />
            <View style={styles.container2}>
                <Button title='Save' onPress={() => { handleSubmit() }} />
                <Button title='Skip' onPress={() => { Alert.alert('Please make sure to add details later.'); navigation.navigate('test') }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink', padding: 20, fontSize: 30 },
    container2: { display: 'flex', flexDirection: 'row', gap: 15, paddingTop: 30 }
})

export default PastHistory