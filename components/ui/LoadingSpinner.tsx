// LoadingSpinner.tsx
import React, { useEffect, useRef } from "react";
import { StyleSheet, Animated } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function LoadingSpinner() {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Continuously rotate the spinner
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000, // 1 second for a full rotation
        useNativeDriver: true, // Use native driver for smoother animations
      })
    ).start();
  }, [spinValue]);

  // Map the animated value [0..1] to [0..360 degrees]
  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View style={{ transform: [{ rotate }] }}>
      <AnimatedCircularProgress
        size={120} // Diameter of the ring
        width={11} // Thickness of the ring
        fill={25} // fill at 25%
        tintColor="#FFFFFF" // Color of the ring
        backgroundColor="rgba(255, 255, 255, 0.5)" // Under-ring color
        rotation={0} // Start angle
        arcSweepAngle={360} // Arc angle (full circle)
        lineCap="butt" // straight edges
      />
    </Animated.View>
  );
}
