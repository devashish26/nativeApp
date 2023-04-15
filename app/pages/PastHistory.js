import { StyleSheet, TextInput, Button, View, Alert } from 'react-native'
import React from 'react'


const PastHistory = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TextInput placeholder='Address' inputMode='text'/>
        <TextInput placeholder='Age' inputMode='numeric'/>
        <TextInput placeholder='Allergies (Comma separated)' inputMode='text'/>
        <TextInput placeholder='BP(mm/hg)' inputMode='numeric'/>
        <TextInput placeholder='Blood Group' inputMode='text'/>
        <TextInput placeholder='Condition' inputMode='text'/>
        <TextInput placeholder='Current Medications' inputMode='text'/>
        <TextInput placeholder='Disease' inputMode='text'/>
        <TextInput placeholder='Gender' inputMode='text'/>
        <TextInput placeholder='Height' inputMode='numeric'/>
        <TextInput placeholder='Name' inputMode='text'/>
        <TextInput placeholder='Symptoms (Comma separated)' inputMode='text'/>
        <TextInput placeholder='Weight' inputMode='numeric'/>
        <TextInput placeholder='Device ID' inputMode='text'/>
        <View style={styles.container2}>
            <Button title='Save' onPress={()=>{processInputs()}}/>
            <Button title='Skip' onPress={()=>{Alert.alert('Please make sure to add details later.');navigation.navigate('test')}}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{justifyContent:'center', alignItems:'center', backgroundColor:'pink', padding:20, fontSize:30},
    container2:{display:'flex', flexDirection:'row', gap:15, paddingTop:30}
})

export default PastHistory