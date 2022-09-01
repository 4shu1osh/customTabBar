import * as React from 'react';
import {
  View,
  Image,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

import images from '../utils/localImages';

export default function StaticTabBar({tabs, value, callbackFn}) {
  const tabWidth = width / tabs.length;
  const [currentIcon, setCurrentIcon] = React.useState('home');

  const onPress = (index, name) => {
    setCurrentIcon(name);
    Animated.spring(value, {
      toValue: -width + tabWidth * index,
      useNativeDriver: true,
    }).start();
    callbackFn(name)
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        {tabs.map((item, key) => {
          return (
            <TouchableOpacity
              onPress={() => onPress(key, item.name)}
              {...{key}}
              style={
                item.name == currentIcon
                  ? [styles.iconBg, styles.activeIconBg]
                  : styles.iconBg
              }>
              <Image
                source={images[item.name]}
                style={
                  item.name == currentIcon
                    ? [styles.icon, {tintColor: '#000'}]
                    : styles.icon
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    tintColor: 'grey',
  },
  iconBg: {
    width: 54,
    height: 54,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  activeIconBg: {
    bottom: 10,
    borderRadius: 50,
    sshadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.85,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});
