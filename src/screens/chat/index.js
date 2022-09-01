import {StyleSheet, Text, View} from 'react-native';
import React from 'react';


export default function Chat() {
  return (
    <View style={styles.parent}>
      <Text style={styles.heading}>Chat</Text>
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
  heading: {
    margin: 20,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
