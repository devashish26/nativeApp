import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const QnA = () => {
  return (
    <View style={styles.container}>
      <Text>Qna</Text>
    </View>
  )
}

export default QnA

const styles = StyleSheet.create({
    container:{width:Dimensions.get('window').width}
})