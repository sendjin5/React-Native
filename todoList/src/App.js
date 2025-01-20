import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Form } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>TodoList App Start</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-top",
    paddingTop: 100,
  },
});
