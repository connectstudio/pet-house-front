import React from "react";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableHighlight } from "react-native";
import Card from "../../components/card";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function ChoiceRegister() {
  return (
    <SafeAreaView>
      <View style={styles.cardsView}>
        <Card
          icon={<FontAwesome5 name="house-user" size={24} color="black" />}
          title={"Cuidador"}
          description={
            "Crie um cadastro como cuidador e seja um guardião para os nossos anfitriões"
          }
        />
        <Card
          icon={<MaterialIcons name="pets" size={24} color="black" />}
          title={"Anfitrião"}
          description={
            "Crie um cadastro como anfitrião e procure um guardião para cuidar do seu pet"
          }
        />
      </View>
    </SafeAreaView>
  );
}
