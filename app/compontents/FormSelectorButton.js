import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'

function FormSelectorButton(props) {
    return (
        <TouchableWithoutFeedback>
            <View style={[styles.container, {backgroundColor:props.bgCol}]}>
                <Text>{props.title}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
  
}

export default FormSelectorButton
const styles = StyleSheet.create({
    container:{height:45, width:'50%', backgroundColor:'lightgrey', alignItems:'center', justifyContent:'center', padding:5, }
})
