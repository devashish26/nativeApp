import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight } from 'react-native'
import React from 'react'

const width = Dimensions.get('window').width

const TopDiv = ({name, changeStatus}) => {
  return (
    <View style={styles.container}>
      <Text>Hello,{" "+name}</Text>
      <TouchableHighlight onPress={()=>{changeStatus(false)}}><Image style={styles.imgs} source={require('./../../assets/power-off.png')}></Image></TouchableHighlight>
    </View>
  )
}

export default TopDiv

const styles = StyleSheet.create({
  container:{width:width, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:15},
  imgs:{width:30, height:30}
})