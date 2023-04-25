import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TopDiv = ({name}) => {
  return (
    <View>
      <Text>Hello,{" "+name}</Text>
    </View>
  )
}

export default TopDiv

const styles = StyleSheet.create({})