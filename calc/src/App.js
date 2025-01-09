import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.error, styles.text]}>React Native Start</Text>
      <Button
        title="바뀜"
        color="red"
        onPress={() => console.log("콘솔로그 클릭")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    color: "red",
    fontSize: 30,
    fontWeight: "700",
  },
  text: {
    fontSize: 40,
    fontWeight: "700",
    color: "teal",
  },
});
