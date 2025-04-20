"use client"

import { useState } from "react"
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const PlantDetailScreen = ({ route, navigation }) => {
  const { plant } = route.params
  const [expanded, setExpanded] = useState(false)

  const renderStars = (count) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(<Ionicons key={i} name={i < count ? "star" : "star-outline"} size={16} color="#FFD700" />)
    }
    return stars
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: plant.image }} style={styles.plantImage} />

      <View style={styles.contentContainer}>
        <Text style={styles.plantName}>{plant.name}</Text>

        <TouchableOpacity style={styles.infoLink}>
          <Text style={styles.infoLinkText}>Plant Information</Text>
        </TouchableOpacity>

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

        <View style={styles.statusContainer}>
          <Text style={styles.sectionTitle}>Plant Status</Text>
          <Text style={[styles.statusText, plant.status === "Good" ? styles.statusGood : styles.statusNeeds]}>
            {plant.status}
          </Text>
        </View>

        <TouchableOpacity style={styles.moreInfoContainer} onPress={() => setExpanded(!expanded)}>
          <Text style={styles.sectionTitle}>More Info</Text>
          <Ionicons name={expanded ? "chevron-up" : "chevron-down"} size={20} color="#333" />
        </TouchableOpacity>

        {expanded && (
          <View style={styles.expandedInfo}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Water</Text>
              <Text style={[styles.infoValue, { color: "#FF6B6B" }]}>15 (Needs water)</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Temperature</Text>
              <Text style={[styles.infoValue, { color: "#4CAF50" }]}>25 (Good)</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Light</Text>
              <Text style={[styles.infoValue, { color: "#FFA500" }]}>40% (Not Best)</Text>
            </View>
          </View>
        )}
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
  infoLink: {
    marginBottom: 15,
  },
  infoLinkText: {
    color: "#4169E1",
    fontSize: 16,
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
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
  },
  statusText: {
    fontWeight: "500",
  },
  statusGood: {
    color: "#4CAF50",
  },
  statusNeeds: {
    color: "#FF6B6B",
  },
  moreInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 0,
    paddingBottom: 0,
    borderBottomWidth: 0,
    borderBottomColor: "#EFEFEF",
  },
  expandedInfo: {
    marginTop: 10,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 16,
    color: "#333",
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "500",
  },
})

export default PlantDetailScreen
