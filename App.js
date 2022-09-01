import { StyleSheet, View } from 'react-native'
import React from 'react'
import TabBar from './src/components/TabBar'
import Home from './src/screens/home'
import Upload from './src/screens/upload'
import Chat from './src/screens/chat'
import Settings from './src/screens/settings'


export default function App() {

const [scr, setScr] = React.useState(<Home/>)


function screenCallback(screen) {
  switch (screen) {
    case 'home':
      setScr(<Home/>);
      break;
    case 'upload':
      setScr(<Upload/>);
      break;
    case 'chat':
      setScr(<Chat/>);
      break;
    case 'settings':
      setScr(<Settings/>);
      break;
    default:
      setScr(<Home/>);
      break;
  }
  
}
  return (
    <View style={styles.parent}>
      {
        scr
      }
      <TabBar callbackFn={screenCallback}/>
    </View> 
  )
}

const styles = StyleSheet.create({
  parent: {
    flex:  1,
    backgroundColor: '#694BF8',
  }
})