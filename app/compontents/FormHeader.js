import React from 'react'
import { Text, StyleSheet, View, Image, Animated } from 'react-native'

function FormHeader(props) {
  
    return (
        <View>
            <Image style={{height:300}} source={require('./../../assets/hms.png')}/>
            <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                    <Animated.Text style={[styles.heading, {transform: [{translateX:props.leftHeaderTranslateX}]}]}>{props.leftHeading}{" "}</Animated.Text>
                    <Animated.Text style={[styles.heading, {opacity:props.rightHeaderOpacity, transform: [{translateY:props.rightHeaderTranslateY}]}]}>{props.rightHeading}</Animated.Text>
                </View>
                <Text style={styles.subheading}>{props.subHeading}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{height:100, backgroundColor:'pink', alignItems:'center', justifyContent: 'center'},
    heading:{fontSize:30, fontWeight:'bold', color:'#1b1b33'},
    subheading:{fontSize:18, color:'#1b1b33'}
})


export default FormHeader;