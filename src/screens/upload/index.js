import {StyleSheet, Text, View} from 'react-native';
import React from 'react';


export default function Upload() {
  return (
    <View style={styles.parent}>
      <Text style={{color: '#fff'}}>Upload</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#694BF8',
  },
});
