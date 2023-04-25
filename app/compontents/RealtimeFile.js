import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const RealtimeFile = () => {
  return (
    <View style={styles.container}>
      <Text>RealtimeFile</Text>
    </View>
  )
}

export default RealtimeFile

const styles = StyleSheet.create({
    container:{width:Dimensions.get('window').width}
})