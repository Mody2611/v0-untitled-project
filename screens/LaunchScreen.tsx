"use client"

import { useEffect } from "react"
import { View, Text, StyleSheet, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import type { StackNavigationProp } from "@react-navigation/stack"

// Define the navigation param list type
type RootStackParamList = {
  Launch: undefined
  SignIn: undefined
  Main: undefined
}

type LaunchScreenNavigationProp = StackNavigationProp<RootStackParamList, "Launch">

const LaunchScreen = () => {
  const navigation = useNavigation<LaunchScreenNavigationProp>()

  useEffect(() => {
    // Auto-navigate to SignIn screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace("SignIn")
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Use a simple View with background color instead of an image to avoid potential issues */}
        <View style={styles.logoPlaceholder}>
          <Text style={styles.logoPlaceholderText}>GP</Text>
        </View>
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
  logoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  logoPlaceholderText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
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
