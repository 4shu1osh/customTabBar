import { StyleSheet, View } from 'react-native'
import React from 'react'
import TabBar from './src/components/TabBar'

export default function App() {
  return (
    <View style={styles.parent}>
      <TabBar/>
    </View> 
  )
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#694BF8',
    flex:  1,
    alignItems :'center',
    justifyContent: 'flex-end',
  }
})