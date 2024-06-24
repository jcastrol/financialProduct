import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated, DimensionValue } from 'react-native';

interface SkeletonProps {
  width?: DimensionValue;
  height?: DimensionValue;
  radius?: number;
  isCircle?: boolean;
  testID?: string;
}

export default function Skeleton({
  height = 100,
  width = 100,
  isCircle = false,
  radius = 0,
  testID
}: SkeletonProps) {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 500,
        }),
      ]),
    ).start();
  }, [opacity]);

 const stylesdefault = StyleSheet.create({ 
    default: {
        opacity,
        height: height,
        width: width ,
    }

 });
return (
    <Animated.View
        style={[
            styles.skeleton,
            stylesdefault.default,
            {
                borderRadius: isCircle ? Number(width) / 2 : radius,
            },
        ]}
        testID='skeleton-view'
    />
);
}

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: 'grey',
  },
});