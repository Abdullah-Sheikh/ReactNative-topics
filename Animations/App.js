import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Animated, View } from "react-native";

export default function App() {
  const translation = useRef(new Animated.Value(-50)).current;
  

  useEffect(() => {
   
    Animated.timing(translation, {
      toValue: 50,
      useNativeDriver: true,
    }).start();
    
  
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "orange",
          transform: [{ translateX: translation }],
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
