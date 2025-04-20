"use client"

import { useEffect } from "react"
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"

const LaunchScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    // Auto-navigate to SignIn screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate("SignIn")
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={require("../assets/logo.png")} style={styles.logo} resizeMode="contain" />
        <Text style={styles.logoText}>GreenTech Pots</Text>
      </View>

      <View style={styles.paginationContainer}>
        <View style={[styles.paginationDot, styles.activeDot]} />
        <View style={styles.paginationDot} />
        <View style={styles.paginationDot} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4CAF50",
  },
  paginationContainer: {
    flexDirection: "row",
    marginBottom: 40,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#CCCCCC",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#4CAF50",
    width: 16,
  },
})

export default LaunchScreen
