import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, SafeAreaView } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const SearchScreen = ({ navigation }) => {
  const categories = [
    {
      id: 1,
      name: "Storage & organization",
      image: "https://images.unsplash.com/photo-1545165375-1b744b9ed444?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Home textiles",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Cooking utensil",
      image:
        "https://images.unsplash.com/photo-1594282486552-05a3b6fbfb63?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ]

  const plants = [
    {
      id: 1,
      name: "Green plant",
      image: "https://images.unsplash.com/photo-1545165375-1b744b9ed444?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Red plant",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Pink plant",
      image:
        "https://images.unsplash.com/photo-1594282486552-05a3b6fbfb63?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Blue plant",
      image:
        "https://images.unsplash.com/photo-1594282486552-05a3b6fbfb63?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
        <Text style={styles.title}>Search</Text>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Enter your pot name?" placeholderTextColor="#999" />
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options-outline" size={20} color="#FF6B6B" />
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Available Plants</Text>
          <TouchableOpacity onPress={() => navigation.navigate("AvailablePlants")}>
            <Text style={styles.viewAllButton}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryCard}>
              <Image source={{ uri: category.image }} style={styles.categoryImage} />
              <Text style={styles.categoryName}>{category.name}</Text>
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#EFEFEF",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  filterButton: {
    padding: 5,
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
  viewAllButton: {
    color: "#4CAF50",
    fontWeight: "500",
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryCard: {
    width: "30%",
    alignItems: "center",
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 12,
    textAlign: "center",
    color: "#333",
  },
})

export default SearchScreen
