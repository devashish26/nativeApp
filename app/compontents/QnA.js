import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ScrollView, Button } from 'react-native'
import React from 'react'
import Symptom from './Symptom'

const head = ["continuous_sneezing","ulcers_on_tongue","vomiting","cough","sunken_eyes","headache","nausea","pain_behind_the_eyes","yellowing_of_eyes","blurred_and_distorted_vision","phlegm","redness_of_eyes","sinus_pressure","runny_nose","congestion","puffy_face_and_eyes","drying_and_tingling_lips","slurred_speech","loss_of_smell","watering_from_eyes","red_sore_around_nose"]
const mid = ["chest_pain","throat_irritation","swelling_of_stomach","acute_liver_failure","back_pain","indigestion","breathlessness","patches_in_throat","acidity","stomach_pain","stomach_bleeding","belly_pain","stiff_neck","enlarged_thyroid","neck_pain","fast_heart_rate","palpitations"]
const low = ["swollen_legs","irritation_in_anus","knee_pain","bloody_stool","pain_in_anal_region","pain_during_bowel_movements","yellow_urine","diarrhoea","abdominal_pain","constipation","dark_urine","spotting_ urination","burning_micturition","painful_walking","prominent_veins_on_calf","distention_of_abdomen","polyuria","passage_of_gases","continuous_feel_of_urine","foul_smell_of urine","bladder_discomfort"]
const misc = ["family_history","increased_appetite","abnormal_menstruation","altered_sensorium","irritability","depression","toxic_look_(typhos)","extra_marital_contacts","excessive_hunger","brittle_nails","dizziness","fluid_overload","loss_of_appetite","restlessness","mood_swings","anxiety","yellow_crust_ooze","inflammatory_nails","small_dents_in_nails","silver_like_dusting","scurring","blood_in_sputum","history_of_alcohol_consumption","coma","receiving_unsterile_injections","receiving_blood_transfusion","visual_disturbances","lack_of_concentration","rusty_sputum","mucoid_sputum"]


const selectedSymptoms=[]


const QnA = () => {

    function addSymps(symp){
        if(!(selectedSymptoms.includes(symp))){
            selectedSymptoms.push(symp)
        }
    }
    function remSymps(symp){
        if(selectedSymptoms.includes(symp)){
            selectedSymptoms.pop(selectedSymptoms.indexOf(symp))
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
            {/* Add onPress to touchable opacity to toggle symptoms box */}
                <TouchableOpacity>
                    <View style={styles.bigHeaders}>
                        <View style={{display:'flex', justifyContent:'space-between', flexDirection:'row',margin:10}}>
                            <Text>HEAD</Text>  
                            <Text>HEAD Image</Text>  
                            <Image/>
                        </View>                                 
                    </View>
                    <View style={styles.sympBox}>
                        <View>
                            {head.map(symptom=>(
                                <View key={symptom}>
                                    <Symptom Rsymptom={symptom} remSymp = {remSymps} addSymp={addSymps} symptom={(symptom.replace(/_/g," ")).charAt(0).toUpperCase() + symptom.replace(/_/g," ").slice(1)}/>
                                </View>
                            ))}
                        </View>
                    </View>
                </TouchableOpacity> 
                <TouchableOpacity>
                    <View style={styles.bigHeaders}>
                        <View style={{display:'flex', justifyContent:'space-between', flexDirection:'row',margin:10}}>
                            <Text>MIDDLE</Text>  
                            <Text>MIDDLE Image</Text>  
                            <Image/>
                        </View>
                    </View>
                    <View style={styles.sympBox}>
                        <View>
                            {mid.map(symptom=>(
                                <View key={symptom}>
                                    <Symptom Rsymptom={symptom} remSymp = {remSymps} addSymp={addSymps} symptom={(symptom.replace(/_/g," ")).charAt(0).toUpperCase() + symptom.replace(/_/g," ").slice(1)}/>
                                </View>
                            ))}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.bigHeaders}>
                        <View style={{display:'flex', justifyContent:'space-between', flexDirection:'row',margin:10}}>
                            <Text>LOWER</Text>  
                            <Text>LOWER Image</Text>  
                            <Image/>
                        </View>
                    </View>
                    <View style={styles.sympBox}>
                        <View>
                            {low.map(symptom=>(
                                <View key={symptom}>
                                    <Symptom Rsymptom={symptom} remSymp = {remSymps} addSymp={addSymps} symptom={(symptom.replace(/_/g," ")).charAt(0).toUpperCase() + symptom.replace(/_/g," ").slice(1)}/>
                                </View>
                            ))}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.bigHeaders}>
                        <View style={{display:'flex', justifyContent:'space-between', flexDirection:'row',margin:10}}>
                            <Text>MISC</Text>  
                            <Text>MISC Image</Text>  
                            <Image/>
                        </View>
                    </View>
                    <View style={styles.sympBox}>
                        <View>
                            {misc.map(symptom=>(
                                <View key={symptom}>
                                    <Symptom Rsymptom={symptom} remSymp = {remSymps} addSymp={addSymps} symptom={(symptom.replace(/_/g," ")).charAt(0).toUpperCase() + symptom.replace(/_/g," ").slice(1)}/>
                                </View>
                            ))}
                        </View>
                    </View>
                </TouchableOpacity>      
            </View>
            <Button title='submit' onPress={()=>{console.log(selectedSymptoms)}}/>
        </ScrollView>
    )
}

export default QnA

const styles = StyleSheet.create({
    container:{width:Dimensions.get('window').width, display:'flex', alignItems:'center'},
    bigHeaders:{width:Dimensions.get('window').width-10, backgroundColor:'#A0D8B3', marginTop:10, marginBottom:10, height: 50, borderRadius: 10, display:'flex', justifyContent:"center"},
    sympBox:{backgroundColor:'#fff',padding:10, display:'flex', alignItems:'center', justifyContent:'center', width:Dimensions.get('window').width-10}
})