import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AuthNavigation from "./AuthNavigation";
// import SafeAreaView from "react-native-safe-area-view";

export default function App() {
  return (
    <View style={styles.container}>
      <AuthNavigation />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 35,
  },
});
