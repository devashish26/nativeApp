import { StyleSheet, Text, TextInput, Pressable, View, Dimensions, Alert } from 'react-native'
import React from 'react'

const Wwidth = Dimensions.get('window').width;
const Wheight = Dimensions.get('screen').height;

const UpdateDataForm = () => {
    const handleChange = (e)=>{
        // setting user input in patientDetails object

        let value = e.nativeEvent.text;
        let name = e._dispatchInstances.pendingProps.name;
        
    

    }


    const handleSubmit=()=>{}
    return (
        <View>
            <Text style={styles.heading}>Enter New details</Text>
            <Text>{'To update as well as to insert as new data.'}</Text>
            <View style={styles.container}>
                <TextInput onChange={handleChange} name='id' placeholder='Device ID' inputMode='text' require />
                <TextInput onChange={handleChange} name='Address' placeholder='Address' inputMode='text' />
                <TextInput onChange={handleChange} name='Age' placeholder='Date of Birth (yyyy-mm-dd)' inputMode='numeric' />
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
                {/* <View style={styles.container2}>
                    <Button title='Save' onPress={() => { handleSubmit() }} />
                </View> */}
                <Pressable onPress={()=>{handleSubmit()}} style={{backgroundColor:'#83764F', width:Wwidth/5, height:Wheight/25, display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'white'}}>SAVE</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default UpdateDataForm

const styles = StyleSheet.create({
    container: {width:Wwidth, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E5F9DB', padding: 20, fontSize: 30 },
    container2: { display: 'flex', flexDirection: 'row', gap: 15, paddingTop: 30 },
    heading:{fontWeight:'bold', fontSize:30}
})

