import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Button, { ButtonTypes } from "./components/Button";
import { useState } from "react";

export default function App() {
  const [result, setResult] = useState(0);

  const width = useWindowDimensions().width / 4;
  console.log(width);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* 결과 */}
      <View style={styles.resultContainer}>{result}</View>
      {/* 버튼 */}
      <View style={styles.buttonContainer}>
        <Button
          title="1"
          onPress={() => {}}
          buttonStyle={{ width, height: 100 }}
          buttonType={ButtonTypes.NUMBER}
        />
        <Button
          title="0"
          onPress={() => {}}
          buttonStyle={{ width: 200, height: 100 }}
          buttonType={ButtonTypes.NUMBER}
        />
        <Button
          title="="
          onPress={() => {}}
          buttonStyle={{ width: 100, height: 100 }}
          buttonType={ButtonTypes.OPERATOR}
        />
        <Button
          title="+"
          onPress={() => {
            setResult(result + 100);
          }}
          buttonStyle={{ width: 100, height: 100 }}
          buttonType={ButtonTypes.OPERATOR}
        />
        <Button
          title="-"
          onPress={() => {
            setResult(result - 100);
          }}
          buttonStyle={{ width: 100, height: 100 }}
          buttonType={ButtonTypes.OPERATOR}
        />
      </View>
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
  },
  resultContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    color: "white",
    backgroundColor: "black",
    fontSize: 80,
    width: "100%",
    paddingRight: "10%",
    paddingBottom: "10%",
    borderColor: "red",
    borderWidth: 2,
  },
  buttonContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    fontSize: 50,
    width: "100%",
    borderColor: "blue",
    borderWidth: 2,
  },
});
