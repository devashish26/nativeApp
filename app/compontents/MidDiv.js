import { StyleSheet, Text, View, ScrollView, Animated, Dimensions } from 'react-native'
import React,{useRef} from 'react'
import QnA from './QnA'
import RealtimeFile from './RealtimeFile'
// import UpdateDataForm from './UpdateDataForm'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const MidDiv = ({userData, scroll}) => {
    
    return (
        <View style={styles.cont}>
            <ScrollView ref={scroll} horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
                <QnA userData={userData} />
                <RealtimeFile userData={userData} />
                {/* <UpdateDataForm /> */}
            </ScrollView>
        </View>
    )
}

export default MidDiv

const styles = StyleSheet.create({
    cont:{height: height-150}
})