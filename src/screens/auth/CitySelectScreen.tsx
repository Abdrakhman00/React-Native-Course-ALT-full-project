import React, { useState } from "react";
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, type NavigationProp } from "@react-navigation/native";
import type { RootStackParamList } from "../../types/navigation";
import Screen from "../../components/Screen";
import BackButton from "../../components/BackButton";
import PrimaryButton from "../../components/PrimaryButton";
import { colors, common } from "../../theme";
const cities = ["Алматы", "Астана", "Шымкент", "Қызылорда"];
export default function CitySelectScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [city, setCity] = useState("");
  const [open, setOpen] = useState(false);
  const submit = () =>
    city
      ? navigation.reset({ index: 0, routes: [{ name: "MainTabs" }] })
      : Alert.alert("Қате", "Қаланы таңдаңыз.");
  return (
    <Screen contentStyle={{ minHeight: "100%" }}>
      <BackButton />
      <Text style={common.title}>Выберите город</Text>
      <Text style={common.subtitle}>
        Заведения, которые будут показываться вам, зависят от вашего города.
      </Text>
      <Pressable style={styles.select} onPress={() => setOpen(true)}>
        <Text style={{ color: city ? colors.dark : colors.gray, fontSize: 16 }}>
          {city || "Выбрать город"}
        </Text>
        <Ionicons name="chevron-down" size={21} color={colors.purple} />
      </Pressable>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <PrimaryButton title="Продолжить" onPress={submit} />
      </View>
      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setOpen(false)}>
          <View style={styles.modal}>
            {cities.map((item) => (
              <Pressable
                key={item}
                style={styles.city}
                onPress={() => {
                  setCity(item);
                  setOpen(false);
                }}
              >
                <Text style={{ fontSize: 18, color: colors.dark }}>{item}</Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </Screen>
  );
}
const styles = StyleSheet.create({
  select: {
    height: 58,
    borderRadius: 15,
    backgroundColor: colors.field,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.3)",
    justifyContent: "center",
    padding: 30,
  },
  modal: { backgroundColor: "#fff", borderRadius: 18, padding: 8 },
  city: { padding: 15 },
});
