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

export default function StaticTabBar({tabs, value}) {
  const tabWidth = width / tabs.length;
  const [currentIcon, setCurrentIcon] = React.useState('home');

  const onPress = (index, name) => {
    setCurrentIcon(name);
    Animated.spring(value, {
      toValue: -width + tabWidth * index,
      useNativeDriver: true,
    }).start();
  };

  console.log(tabs, value);
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
                  ? [styles.iconBg, {bottom: 10}]
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
    borderRadius: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});
