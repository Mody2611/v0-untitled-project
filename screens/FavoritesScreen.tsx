import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const FavoritesScreen = ({ navigation }) => {
  const favoriteItems = [
    {
      id: 1,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-20%20225002-nGnStVFcN2e4XugEozJRK6S55nQ6Ot.png",
    },
    {
      id: 2,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-20%20225143-M5gaKhEAA9Bid374oycyaSc40hp8tf.png",
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={24} color="#4CAF50" />
          <Text style={styles.logoText}>GreenTech Pots</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>My favorites</Text>
        <Text style={styles.itemCount}>{favoriteItems.length} items</Text>

        <View style={styles.favoritesGrid}>
          {favoriteItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.favoriteItem}>
              <Image source={{ uri: item.image }} style={styles.favoriteImage} />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Add Item</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#4CAF50",
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemCount: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  favoritesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  favoriteItem: {
    width: "48%",
    aspectRatio: 1,
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  favoriteImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  addButton: {
    backgroundColor: "#5D5FEF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  addButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 8,
  },
})

export default FavoritesScreen
