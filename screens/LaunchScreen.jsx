import { View, Text, StyleSheet } from "react-native"

// Extremely simplified launch screen with no dependencies
const LaunchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
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
    </View>
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
