import React from "react";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableHighlight } from "react-native";
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
      onPress: "",
    },
    {
      icon: <MaterialIcons name="pets" size={24} color="black" />,
      title: "Anfitrião",
      description:
        "Crie um cadastro como anfitrião e encontre um guardião para o seu pet",
      onPress: "",
    },
  ];
  return (
    <SafeAreaView>
      <View style={styles.cardsView}>
        {arrCards.map((item) => {
          return (
            <Card
              icon={item.icon}
              title={item.title}
              description={item.description}
              onPress={item.onPress}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
}
