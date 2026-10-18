import React from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../theme";
export default function BackButton() {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.goBack()}
      hitSlop={12}
      style={{
        width: 44,
        height: 44,
        justifyContent: "center",
        marginBottom: 30,
      }}
    >
      <Ionicons name="arrow-back" size={28} color={colors.dark} />
    </Pressable>
  );
}
