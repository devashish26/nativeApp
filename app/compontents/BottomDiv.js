import { StyleSheet, Text, View, Image, TouchableHighlight, Dimensions } from 'react-native'
import React,{useRef} from 'react'

const width = Dimensions.get('window').width

const BottomDiv = ({scroll}) => {
  
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={()=>{scroll.current.scrollTo({x:0})}}><Image style={styles.imgs} source={require('./../../assets/qa.png')}/></TouchableHighlight>
      <TouchableHighlight onPress={()=>{scroll.current.scrollTo({x:width})}}><Image style={styles.imgs} source={require('./../../assets/heart-rate.png')}/></TouchableHighlight>
      {/* <Image style={styles.imgs} source={require('./../../assets/update.png')}/> */}
    </View>
  )
}

export default BottomDiv

const styles = StyleSheet.create({
    container:{display:'flex', justifyContent:'space-around', flexDirection:'row'},
    imgs:{width:30, height:30, marginTop:10}
})