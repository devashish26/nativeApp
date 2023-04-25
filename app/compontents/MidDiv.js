import { StyleSheet, Text, View, ScrollView, Animated, Dimensions } from 'react-native'
import React from 'react'
import QnA from './QnA'
import RealtimeFile from './RealtimeFile'
import UpdateDataForm from './UpdateDataForm'

const height = Dimensions.get('window').height

const MidDiv = () => {
    
    return (
        <View style={styles.cont}>
            <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
                <QnA/>
                <RealtimeFile />
                <UpdateDataForm />
            </ScrollView>
        </View>
    )
}

export default MidDiv

const styles = StyleSheet.create({
    cont:{height: height-150}
})