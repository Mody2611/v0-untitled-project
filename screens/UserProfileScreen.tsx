import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const UserProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={24} color="#4CAF50" />
          <Text style={styles.logoText}>GreenTech Pots</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.profileHeader}>
          <Image
            source={{
              uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-20%20225517-nJIjGn7ZAcgEDmMisMVXe9LOL8Tlay.png",
            }}
            style={styles.profileBackground}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.greeting}>Hi, Mohamed</Text>
            <Text style={styles.welcomeText}>Welcome to GreenTech Pots. Have the Tech touch in your house.</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Plant Selected</Text>
            <TouchableOpacity>
              <Text style={styles.sectionAction}>Green Plant</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Styleka</Text>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.menuItemIcon}>
                <Ionicons name="leaf" size={18} color="#5D5FEF" />
              </View>
              <Text style={styles.menuItemText}>GreenTech Pots subscription</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.scanButton}>
          <Ionicons name="scan" size={20} color="white" style={styles.scanIcon} />
          <Text style={styles.scanButtonText}>Scan Now</Text>
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
  },
  profileHeader: {
    position: "relative",
    height: 180,
    marginBottom: 20,
  },
  profileBackground: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  profileInfo: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  welcomeText: {
    fontSize: 14,
    color: "white",
    lineHeight: 20,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  sectionAction: {
    fontSize: 14,
    color: "#5D5FEF",
  },
  divider: {
    height: 1,
    backgroundColor: "#EFEFEF",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F0F0FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  menuItemText: {
    fontSize: 16,
    color: "#333",
  },
  scanButton: {
    backgroundColor: "#5D5FEF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  scanIcon: {
    marginRight: 8,
  },
  scanButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
})

export default UserProfileScreen
