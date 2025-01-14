import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Button, { ButtonTypes } from "./components/Button";
import { useState } from "react";

const Operator = {
  CLEAR: "C",
  EQUAL: "=",
  PLUS: "+",
  MINUS: "-",
};

export default function App() {
  const [result, setResult] = useState(0);
  const [formula, setFormula] = useState([]);

  // 버튼 크기기
  const width = (useWindowDimensions().width - 5) / 4;
  console.log(width);

  // 숫자 버튼
  const onPressNumber = (num) => {
    setResult(result * 10 + num);
  };
  // 수식 계산산
  const onPressOperator = (operator) => {
    switch (operator) {
      case Operator.CLEAR:
        setResult(0);
        setFormula([]);
        break;
      case Operator.EQUAL:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* 결과 */}
      <View style={styles.resultContainer}>{result.toLocaleString()}</View>
      {/* 버튼 */}
      <View style={styles.buttonContainer}>
        <View style={styles.leftPad}>
          <View style={styles.number}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <Button
                key={num}
                title={num.toString()}
                onPress={() => {
                  onPressNumber(num);
                }}
                buttonStyle={{ width, height: width, marginBottom: 1 }}
                buttonType={ButtonTypes.NUMBER}
              />
            ))}
          </View>
          <View style={styles.bottom}>
            <Button
              title="0"
              onPress={() => {
                onPressNumber(0);
              }}
              buttonStyle={{ width: width * 2, height: width, marginBottom: 1 }}
              buttonType={ButtonTypes.NUMBER}
            />
            <Button
              title="="
              onPress={() => {
                onPressOperator(Operator.EQUAL);
              }}
              buttonStyle={{ width, height: width, marginBottom: 1 }}
              buttonType={ButtonTypes.OPERATOR}
            />
          </View>
        </View>
        <View style={styles.rightPad}>
          <View style={styles.operator}>
            <Button
              title={Operator.CLEAR}
              onPress={() => {
                onPressOperator(Operator.CLEAR);
              }}
              buttonStyle={{ width, height: width, marginBottom: 1 }}
              buttonType={ButtonTypes.OPERATOR}
            />
            <Button
              title={Operator.MINUS}
              onPress={() => {
                onPressOperator(Operator.MINUS);
              }}
              buttonStyle={{ width, height: width, marginBottom: 1 }}
              buttonType={ButtonTypes.OPERATOR}
            />
            <Button
              title={Operator.PLUS}
              onPress={() => {
                onPressOperator(Operator.PLUS);
              }}
              buttonStyle={{ width, height: width * 2, marginBottom: 1 }}
              buttonType={ButtonTypes.OPERATOR}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    borderRadius: "50%",
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
    paddingRight: "10%",
    paddingBottom: "10%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "black",
    fontSize: 40,
  },
  leftPad: {
    flex: 3,
  },
  number: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  rightPad: {
    flex: 1,
  },
  operator: {},
});
