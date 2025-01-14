import { Pressable, StyleSheet, Text } from "react-native";
import PropTypes, { object } from "prop-types";

export const ButtonTypes = {
  NUMBER: "NUMBER",
  OPERATOR: "OPERATOR",
};

const Colors = {
  NUMBER: ["#71717a", "#3f3f46"],
  OPERATOR: ["#f59e0b", "#b45309"],
};

const Button = ({ title, onPress, buttonStyle, buttonType }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: Colors[buttonType][0],
        },
        pressed && {
          backgroundColor: Colors[buttonType][1],
        },
        buttonStyle,
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

Button.defaultProps = {
  title: "default",
  buttonType: ButtonTypes.NUMBER,
};

Button.prototype = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  buttonType: PropTypes.oneOf(Object.values(ButtonTypes)),
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 40,
    fontWeight: "700",
  },
  title: {
    fontSize: 40,
    color: "#fff",
  },
});

export default Button;
