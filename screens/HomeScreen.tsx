import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const HomeScreen = ({ navigation }) => {
  const plantData = [
    {
      id: 1,
      name: "Pot 1",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-20%20225002-nGnStVFcN2e4XugEozJRK6S55nQ6Ot.png",
      status: "Good",
    },
    {
      id: 2,
      name: "Pot 2",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-20%20225113-FFeBDY0I7ZcLYLuwxvuauvODc4t4IA.png",
      status: "Needs Water",
    },
    {
      id: 3,
      name: "Pot 3",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-20%20225143-M5gaKhEAA9Bid374oycyaSc40hp8tf.png",
      status: "Good",
    },
    {
      id: 4,
      name: "Pot 4",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-20%20225206-gw3z0W15g6nxMirjQg3szkVFtwu1Kq.png",
      status: "Good",
    },
    {
      id: 5,
      name: "Pot 2",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-20%20225029-Cd6tJ2xgrtl1tL2GgBMNwGzdTrEzYS.png",
      status: "Needs Water",
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
        <Text style={styles.title}>Home</Text>

        <View style={styles.bannerContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            }}
            style={styles.bannerImage}
          />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your Pots</Text>
          <TouchableOpacity>
            <Text style={styles.addButton}>Add +</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.plantsGrid}>
          {plantData.map((plant) => (
            <TouchableOpacity
              key={`${plant.id}-${plant.name}`}
              style={styles.plantCard}
              onPress={() => navigation.navigate("PlantDetail", { plant })}
            >
              <Image source={{ uri: plant.image }} style={styles.plantImage} />
            </TouchableOpacity>
          ))}
        </View>
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
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  bannerContainer: {
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
  },
  bannerImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  addButton: {
    color: "#4CAF50",
    fontWeight: "500",
  },
  plantsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  plantCard: {
    width: "48%",
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  plantImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
})

export default HomeScreen
