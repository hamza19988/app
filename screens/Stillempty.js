import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import logo from '../assets/images/logo.png';

const Stillempty = () => {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [pulseAnim]);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Animated.Text style={[styles.text, { transform: [{ scale: pulseAnim }] }]}>
        Sorry, this feature is not yet available.
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Stillempty;
