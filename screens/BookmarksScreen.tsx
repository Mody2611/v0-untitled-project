import { Text, StyleSheet, SafeAreaView } from "react-native"

const BookmarksScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bookmarks</Text>
      <Text style={styles.subtitle}>Bookmarks screen placeholder</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
})

export default BookmarksScreen
