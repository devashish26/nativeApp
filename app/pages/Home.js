import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import MidDiv from '../compontents/MidDiv'
import BottomDiv from '../compontents/BottomDiv'
import TopDiv from '../compontents/TopDiv'

let height = Dimensions.get('window').height

const Home = ({route}) => {
  let nameU = route.params.userDetails.Name
  return (
    <View style={styles.container}>

      <View style={styles.topDiv}>
        <TopDiv name = {nameU}/>
      </View>

      <View style={styles.midDiv}>
        <MidDiv/>
      </View>

      <View style={styles.bottomDiv}>
        <BottomDiv/>
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{display:'flex', flexDirection:'column', justifyContent:'space-around'},
  topDiv:{height:50,backgroundColor:'pink', marginTop:30},
  midDiv:{height:height-130,},
  bottomDiv:{height:50, backgroundColor:'pink'},
})