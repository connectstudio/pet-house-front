import React from "react";
import styles from "./styles";
import { View, Text, TouchableHighlight } from "react-native";
import darkenColor from "../../utils/darkenColor";

export default function Card({
  icon,
  bgColor,
  title,
  description,
  children,
  onPress,
}) {
  const [isPressed, setIsPressed] = React.useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed);
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableHighlight
      style={[
        styles.cardContainer,
        {
          backgroundColor: isPressed ? darkenColor(bgColor, 0.5) : bgColor,
        },
      ]}
      onPress={handlePress}
      underlayColor={bgColor}
    >
      <View>
        {icon && <View style={styles.viewIcon}>{icon}</View>}
        {title && (
          <View style={styles.contentTitle}>
            <Text style={styles.textTitle}>{title}</Text>
          </View>
        )}
        {description && (
          <View style={styles.contentDescription}>
            <Text style={styles.textDescription}>{description}</Text>
          </View>
        )}
        {children}
      </View>
    </TouchableHighlight>
  );
}
