import {
  View,
  Animated,
  Dimensions,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import * as shape from 'd3-shape';
import {Path, Svg,} from 'react-native-svg';
import StaticTabBar from '../components/StaticTabBar'


const height = 64;
const backgroundColor = '#fff';
const {width} = Dimensions.get('screen');
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const tabs = [
  {
    name: 'home',
  },
  {
    name: 'upload',
  },
  {
    name: 'chat',
  },
  {
    name: 'settings',
  },
];

const tabWidth = width / tabs.length;

const getPath = () => {
  const left = shape
    .line()
    .x(d => d.x)
    .y(d => d.y)([
    {x: 0, y: 0},
    {x: width, y: 0},
  ]);
  const tab = shape
    .line()
    .x(d => d.x)
    .y(d => d.y)
    .curve(shape.curveBasis)([
    {x: width, y: 0},
    {x: width + 5, y: 0},
    {x: width + 10, y: 10},
    {x: width + 15, y: height},
    {x: width + tabWidth - 15, y: height},
    {x: width + tabWidth - 10, y: 10},
    {x: width + tabWidth - 5, y: 0},
    {x: width + tabWidth, y: 0},
  ]);
  
  const right = shape
    .line()
    .x(d => d.x)
    .y(d => d.y)([
    {x: width + tabWidth, y: 0},
    {x: width * 2, y: 0},
    {x: width * 2, y: height},
    {x: 0, y: height},
    {x: 0, y: 0},
  ]);
  return `${left} ${tab} ${right}`;
};

const d = getPath();

export default function TabBar() {
  const value = React.useRef(new Animated.Value(0)).current;
  const transX = value.interpolate({
    inputRange: [0, width],
    outputRange: [-width, 0],
  });

  return (
    <React.Fragment>
      <View {...{height, width}}>
        <AnimatedSvg
          width={width * 2}
          {...{height}}
          style={{
            transform: [
              {
                translateX: transX
              },
            ],
          }}>
          <Path fill={backgroundColor} {...{d}} />
        </AnimatedSvg>
        <View style={StyleSheet.absoluteFill}>
          <StaticTabBar {...{ tabs, value }} />
        </View>
      </View>
      <SafeAreaView style={styles.container} />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
  },
});
