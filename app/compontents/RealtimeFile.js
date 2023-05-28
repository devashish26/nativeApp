import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import {ref, onValue} from 'firebase/database'
import { rdb } from '../firebase';

const Wwidth=Dimensions.get('window').width

const RealtimeFile = ({userData}) => {
    const [rtData, setRtData] = useState([]);

    async function sdf(){
        const myRef = ref(rdb, 'users/')
        onValue(myRef, (snapshot)=>{
            const data = snapshot.val();
            const allPosts = Object.keys(data).map(key=>({
                id:key, 
                ...data[key]
            }))
            // console.log('all data: ',allPosts)
            // setRtData(allPosts)
            let vals = allPosts.filter((e)=>{
                return e.id.trim()===userData.id
            })
            setRtData([vals[0].Pulse,vals[0].SpO2])
        })
        
    }
    useEffect(()=>{
        sdf()
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.sympBox}>
                
                    <Text style={styles.textBox}>Pulse: {rtData[0]}</Text>
                    <Text style={styles.textBox}>SpO2: {rtData[1]}</Text>
                
            </View>
        </View>
    )
}

export default RealtimeFile

const styles = StyleSheet.create({
    container:{width:Wwidth, paddingTop:20, flex:1, alignItems:'center', justifyContent:'center'},
    sympBox:{gap:20},
    textBox:{fontSize:42}
})