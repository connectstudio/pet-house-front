import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  cardsView: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    gap: 10
  },
});

export default styles;
