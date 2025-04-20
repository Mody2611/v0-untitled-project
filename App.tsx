import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { StatusBar } from "react-native"
import { Ionicons } from "@expo/vector-icons"

// Screens
import LaunchScreen from "./screens/LaunchScreen"
import SignInScreen from "./screens/SignInScreen"
import HomeScreen from "./screens/HomeScreen"
import SearchScreen from "./screens/SearchScreen"
import BookmarksScreen from "./screens/BookmarksScreen"
import NotificationsScreen from "./screens/NotificationsScreen"
import PlantDetailScreen from "./screens/PlantDetailScreen"
import ProductDetailsScreen from "./screens/ProductDetailsScreen"
import ProductDetails2Screen from "./screens/ProductDetails2Screen"
import ProductDetails3Screen from "./screens/ProductDetails3Screen"
import ProductDetails4Screen from "./screens/ProductDetails4Screen"
import FavoritesScreen from "./screens/FavoritesScreen"
import UserProfileScreen from "./screens/UserProfileScreen"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline"
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline"
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline"
          } else if (route.name === "Bookmarks") {
            iconName = focused ? "bookmark" : "bookmark-outline"
          } else if (route.name === "Notifications") {
            iconName = focused ? "notifications" : "notifications-outline"
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: "#6A5ACD",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={UserProfileScreen} />
      <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Launch">
          <Stack.Screen name="Launch" component={LaunchScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
          <Stack.Screen
            name="PlantDetail"
            component={PlantDetailScreen}
            options={{
              headerTitle: "",
              headerBackTitle: " ",
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
            options={{
              headerTitle: "Product Details",
              headerBackTitle: " ",
            }}
          />
          <Stack.Screen
            name="ProductDetails2"
            component={ProductDetails2Screen}
            options={{
              headerTitle: "Product Details 2",
              headerBackTitle: " ",
            }}
          />
          <Stack.Screen
            name="ProductDetails3"
            component={ProductDetails3Screen}
            options={{
              headerTitle: "Product Details 3",
              headerBackTitle: " ",
            }}
          />
          <Stack.Screen
            name="ProductDetails4"
            component={ProductDetails4Screen}
            options={{
              headerTitle: "Product Details 4",
              headerBackTitle: " ",
            }}
          />
          <Stack.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{
              headerTitle: "Favorite Products",
              headerBackTitle: " ",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
