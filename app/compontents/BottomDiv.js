import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const BottomDiv = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.imgs} source={require('./../../assets/qa.png')}/>
      <Image style={styles.imgs} source={require('./../../assets/heart-rate.png')}/>
      <Image style={styles.imgs} source={require('./../../assets/update.png')}/>
    </View>
  )
}

export default BottomDiv

const styles = StyleSheet.create({
    container:{display:'flex', justifyContent:'space-around', flexDirection:'row'},
    imgs:{width:30, height:30, marginTop:10}
})