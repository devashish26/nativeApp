import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import {ref, onValue} from 'firebase/database'
import { rdb } from '../firebase';

const RealtimeFile = () => {
    const [rtData, setRtData] = useState([]);

    useEffect(()=>{
        const myRef = ref(rdb, 'users/')
        onValue(myRef, (snapshot)=>{
            const data = snapshot.val();
            const allPosts = Object.keys(data).map(key=>({
                id:key, 
                ...data[key]
            }))
            // console.log(allPosts)
            setRtData(allPosts)
        })
    },[])
    return (
        <View style={styles.container}>
            {
                rtData.map((item, index)=>{
                    return(
                        <View key={index}>
                            <Text>{item.bp}</Text>
                            <Text>{item.pulse}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default RealtimeFile

const styles = StyleSheet.create({
    container:{width:Dimensions.get('window').width}
})