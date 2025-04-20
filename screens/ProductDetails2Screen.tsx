import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const ProductDetails2Screen = ({ navigation }) => {
  const renderStars = (count) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(<Ionicons key={i} name={i < count ? "star" : "star-outline"} size={16} color="#FFD700" />)
    }
    return stars
  }

  const recommendedPlants = [
    {
      id: 1,
      name: "Gray Plant",
      image: "https://images.unsplash.com/photo-1545165375-1b744b9ed444?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Yellow Plant",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ]

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-20%20225358-NaAEETEqU2Hx0pbnWAHrvnxDgHbGZL.png",
        }}
        style={styles.plantImage}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.plantName}>Green plants</Text>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.infoLink}>
            <Text style={styles.infoLinkText}>Plant Information</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.choosePlantBtn}>
            <Text style={styles.choosePlantBtnText}>Choose Plant</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.description}>
          Nunc et esse cupidatat duis cillum irure velit sunt adipisicing est. Reprehenderit nulla officia fugiat et
          anim esse officia ut aliquip consequat dolor amet.
        </Text>

        <View style={styles.reviewsContainer}>
          <Text style={styles.sectionTitle}>Reviews</Text>
          <View style={styles.starsContainer}>
            {renderStars(4)}
            <Text style={styles.reviewCount}> (4)</Text>
          </View>
        </View>

        <View style={styles.potColorContainer}>
          <Text style={styles.sectionTitle}>Pot Color</Text>
          <View style={styles.colorOptions}>
            <TouchableOpacity style={[styles.colorOption, styles.colorWhite, styles.colorSelected]} />
            <TouchableOpacity style={[styles.colorOption, styles.colorBlack]} />
            <TouchableOpacity style={[styles.colorOption, styles.colorYellow]} />
          </View>
        </View>

        <TouchableOpacity style={styles.moreInfoContainer}>
          <Text style={styles.sectionTitle}>More Info</Text>
          <Ionicons name="chevron-down" size={20} color="#333" />
        </TouchableOpacity>

        <View style={styles.divider} />

        <View style={styles.recommendedSection}>
          <View style={styles.recommendedHeader}>
            <Text style={styles.sectionTitle}>Recommended for you</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.recommendedGrid}>
            {recommendedPlants.map((plant) => (
              <View key={plant.id} style={styles.recommendedCard}>
                <View style={styles.recommendedImageContainer}>
                  <Image source={{ uri: plant.image }} style={styles.recommendedImage} />
                  <TouchableOpacity style={styles.bookmarkButton}>
                    <Ionicons name="bookmark-outline" size={20} color="#333" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.recommendedName}>{plant.name}</Text>
                <Text style={styles.recommendedDescription}>Perfect for bedroom and Living room.</Text>
                <TouchableOpacity style={styles.choosePlantButton}>
                  <Text style={styles.choosePlantText}>Choose plant</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  plantImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  contentContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    padding: 20,
  },
  plantName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  infoLink: {
    marginBottom: 0,
  },
  infoLinkText: {
    color: "#4169E1",
    fontSize: 16,
  },
  choosePlantBtn: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#4169E1",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  choosePlantBtnText: {
    color: "#4169E1",
    fontSize: 14,
    fontWeight: "500",
  },
  description: {
    color: "#666",
    lineHeight: 22,
    marginBottom: 20,
  },
  reviewsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewCount: {
    color: "#666",
    marginLeft: 5,
  },
  potColorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
  },
  colorOptions: {
    flexDirection: "row",
    gap: 10,
  },
  colorOption: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  colorSelected: {
    borderWidth: 2,
    borderColor: "#4169E1",
  },
  colorWhite: {
    backgroundColor: "white",
  },
  colorBlack: {
    backgroundColor: "black",
  },
  colorYellow: {
    backgroundColor: "#FFC107",
  },
  moreInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  divider: {
    height: 1,
    backgroundColor: "#EFEFEF",
    marginVertical: 15,
  },
  recommendedSection: {
    marginTop: 10,
  },
  recommendedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  viewAllText: {
    color: "#4169E1",
    fontSize: 14,
  },
  recommendedGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recommendedCard: {
    width: "48%",
  },
  recommendedImageContainer: {
    position: "relative",
    marginBottom: 10,
  },
  recommendedImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  bookmarkButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 5,
  },
  recommendedName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  recommendedDescription: {
    fontSize: 12,
    color: "#666",
    marginBottom: 10,
  },
  choosePlantButton: {
    borderWidth: 1,
    borderColor: "#4169E1",
    borderRadius: 20,
    paddingVertical: 8,
    alignItems: "center",
    marginTop: 5,
  },
  choosePlantText: {
    color: "#4169E1",
    fontSize: 14,
    fontWeight: "500",
  },
})

export default ProductDetails2Screen
