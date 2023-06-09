import { StyleSheet, View, Dimensions } from 'react-native'
import React, {useRef} from 'react'
import MidDiv from '../compontents/MidDiv'
import BottomDiv from '../compontents/BottomDiv'
import TopDiv from '../compontents/TopDiv'

let height = Dimensions.get('window').height

const Home = ({route}) => {
  // console.log(route.params.userDetails)
  let nameU = route.params.userDetails.email

  const scroll = useRef()
  
  return (
    <View style={styles.container}>

      <View style={styles.topDiv}>
        <TopDiv name = {nameU} changeStatus={route.params.setloginDetails}/>
      </View>

      <View style={styles.midDiv} >
        <MidDiv userData={route.params.userDetails} scroll={scroll}/>
      </View>

      <View style={styles.bottomDiv} >
        <BottomDiv scroll={scroll}/>
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{display:'flex', flexDirection:'column', justifyContent:'space-around', backgroundColor:'#E5F9DB'},
  topDiv:{height:50,backgroundColor:'#83764F', marginTop:30, display:'flex', justifyContent:'center'},
  midDiv:{height:height-130,},
  bottomDiv:{height:50, backgroundColor:'#83764F'},
})