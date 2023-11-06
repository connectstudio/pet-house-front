import React from "react";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import Card from "../../components/card";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function ChoiceRegister() {

  const arrCards = [
    {
      icon: <FontAwesome5 name="house-user" size={24} color="black" />,
      title: "Cuidador",
      description:
        "Crie um cadastro como cuidador e seja um guardião para os nossos anfitriões",
      onPress: true,
    },
    {
      icon: <MaterialIcons name="pets" size={24} color="black" />,
      title: "Anfitrião",
      description:
        "Crie um cadastro como anfitrião e encontre um guardião para o seu pet",
      onPress: true,
    },
  ];

  return (
      <View style={styles.cardsView}>
        {arrCards.map((item,i) => {
          return (
            <Card
              {...arrCards[i]}
            />
          );
        })}
      </View>
  );
}
