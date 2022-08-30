import { StyleSheet, Dimensions, View } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const {width} = Dimensions.get("screen")
const height = 64;

export default function TabBar() {
  return (
    <Svg>
         <Path {...{d}} />
    </Svg>
  )
}

const styles = StyleSheet.create({
    tabbar: {
        height: height,
        width: width,
        backgroundColor: '#fff'
    }
})