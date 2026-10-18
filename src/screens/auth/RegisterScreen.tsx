import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, type NavigationProp } from "@react-navigation/native";
import type { RootStackParamList } from "../../types/navigation";
import Screen from "../../components/Screen";
import BackButton from "../../components/BackButton";
import FormInput from "../../components/FormInput";
import PrimaryButton from "../../components/PrimaryButton";
import { colors, common } from "../../theme";
export default function RegisterScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const submit = () =>
    !name || !phone || !password
      ? Alert.alert("Қате", "Барлық өрісті толтырыңыз.")
      : !accepted
        ? Alert.alert("Қате", "Шарттармен келісіңіз.")
        : navigation.navigate("CitySelect");
  return (
    <Screen>
      <BackButton />
      <Text style={common.title}>Регистрация</Text>
      <Text style={common.subtitle}>
        Создайте учетную запись,{`\n`}чтобы продолжить!
      </Text>
      <FormInput
        icon="person"
        placeholder="Ваше имя"
        value={name}
        onChangeText={setName}
      />
      <FormInput
        icon="call"
        placeholder="Номер телефона"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <FormInput
        icon="lock-closed"
        placeholder="Пароль"
        password
        value={password}
        onChangeText={setPassword}
      />
      <Pressable style={styles.terms} onPress={() => setAccepted((v) => !v)}>
        <View style={[styles.check, accepted && styles.checked]}>
          {accepted && <Ionicons name="checkmark" size={16} color="#fff" />}
        </View>
        <Text style={styles.termsText}>
          Создавая учетную запись, вы соглашаетесь с нашими{" "}
          <Text style={common.link}>Условиями использования.</Text>
        </Text>
      </Pressable>
      <PrimaryButton title="Зарегистрироваться" onPress={submit} />
    </Screen>
  );
}
const styles = StyleSheet.create({
  terms: { flexDirection: "row", marginBottom: 8 },
  check: {
    width: 21,
    height: 21,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 6,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: { backgroundColor: colors.purple, borderColor: colors.purple },
  termsText: { flex: 1, color: colors.dark, lineHeight: 19 },
});
