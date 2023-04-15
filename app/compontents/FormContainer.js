import React, { Component } from 'react'
import {StyleSheet, Text, View, Dimensions } from 'react-native'

function FormContainer({children}) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{padding:20, backgroundColor:'pink', height:300, width:Dimensions.get('window').width, gap:20}
})

export default FormContainer
