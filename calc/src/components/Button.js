import { Text } from "react-native";
import PropTypes from "prop-types";

const Button = (title) => {
  return <Text>{title.title}</Text>;
};

Button.defaultProps = {
  title: "default",
};

export default Button;
