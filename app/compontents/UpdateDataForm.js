import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const UpdateDataForm = () => {
  return (
    <View style={styles.container}>
      <Text>UpdateDataForm</Text>
    </View>
  )
}

export default UpdateDataForm

const styles = StyleSheet.create({
    container:{width:Dimensions.get('window').width}
})