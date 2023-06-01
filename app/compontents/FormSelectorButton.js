import React from 'react'
import { Text, StyleSheet, View, Animated } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'

function FormSelectorButton(props) {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <Animated.View style={[styles.container, {backgroundColor:props.bgCol}]}>
                <Text>{props.title}</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
  
}

export default FormSelectorButton
const styles = StyleSheet.create({
    container:{height:45, width:'50%',  alignItems:'center', justifyContent:'center', padding:5, borderTopColor:'rgba(131, 184, 150, 1)', borderTopWidth:1,borderBottomColor:'rgba(131, 184, 150, 1)', borderBottomWidth:0}
})
