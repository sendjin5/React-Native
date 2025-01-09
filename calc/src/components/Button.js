import { Pressable, Text } from "react-native";
import PropTypes from "prop-types";

const Button = (title) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => {
        {
          backgroundColor: "red";
        }
      }}
    />
  );
};

Button.defaultProps = {
  title: "default",
};

export default Button;
