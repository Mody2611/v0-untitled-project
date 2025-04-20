"use client"

import { useState, useEffect } from "react"
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native"

const SignInScreen = ({ navigation }) => {
  // Add state to control whether to show splash screen or sign-in UI
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    // Auto-hide splash screen after 3 seconds
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Render splash screen if showSplash is true
  if (showSplash) {
    return (
      <View style={splashStyles.container}>
        <View style={splashStyles.content}>
          <View style={splashStyles.logoPlaceholder}>
            <Text style={splashStyles.logoPlaceholderText}>GP</Text>
          </View>
          <Text style={splashStyles.logoText}>GreenTech Pots</Text>
        </View>

        <View style={splashStyles.paginationContainer}>
          <View style={[splashStyles.paginationDot, splashStyles.activeDot]} />
          <View style={splashStyles.paginationDot} />
          <View style={splashStyles.paginationDot} />
        </View>
      </View>
    )
  }

  // Original SignInScreen UI
  return (
    <ImageBackground
      source={{
        uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-20%20224912-PMHpl12j51uyR6CAQQyZbYYUenc2BM.png",
      }}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Sign In</Text>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>GreenTech Pots</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.subtitleText}>
            Sign up or log in to access special discounts, add your favorite items and more.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.signUpButton} onPress={() => {}}>
              <Text style={styles.signUpButtonText}>Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Main")}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

// Styles for the splash screen
const splashStyles = StyleSheet.create({
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

// Original styles for the sign-in screen
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
    paddingBottom: 50,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 16,
    color: "white",
    marginBottom: 30,
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  signUpButton: {
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 25,
    flex: 1,
    alignItems: "center",
  },
  signUpButtonText: {
    color: "#333",
    fontWeight: "600",
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#4169E1",
    paddingVertical: 15,
    borderRadius: 25,
    flex: 1,
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
})

export default SignInScreen
