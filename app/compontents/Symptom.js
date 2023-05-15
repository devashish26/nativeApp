import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Checkbox from 'expo-checkbox'



const Symptom = (props) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style={styles.container}>
            <Text>{props.symptom}</Text>
            <Checkbox 
            value={toggleCheckBox} 
            onValueChange={()=>{setToggleCheckBox(!toggleCheckBox);
                                {/*what happens after checkbox is clicked.*/}
                                if(!toggleCheckBox){
                                    props.addSymp(props.Rsymptom)
                                }else{
                                    props.remSymp(props.Rsymptom)
                                }
                            }} 
            onChange={()=>{
                console.log('onchange triggered')
            }} 
            />
        </View>
    )
}

export default Symptom

const styles = StyleSheet.create({
    container:{display:'flex', flexDirection:'row', justifyContent:'space-between', gap:40, marginVertical:5}
})