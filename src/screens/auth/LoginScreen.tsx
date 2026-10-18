import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation, type NavigationProp } from "@react-navigation/native";
import type { RootStackParamList } from "../../types/navigation";
import Screen from "../../components/Screen";
import BackButton from "../../components/BackButton";
import FormInput from "../../components/FormInput";
import PrimaryButton from "../../components/PrimaryButton";
import { colors, common } from "../../theme";
export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const login = () =>
    !phone.trim() || !password.trim()
      ? Alert.alert("Қате", "Барлық өрісті толтырыңыз.")
      : navigation.reset({ index: 0, routes: [{ name: "MainTabs" }] });
  return (
    <Screen>
      <BackButton />
      <Text style={common.title}>Привет, с возвращением!</Text>
      <Text style={common.subtitle}>Войдите в свой аккаунт.</Text>
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
      <Pressable
        style={styles.forgot}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Text style={common.link}>Забыли пароль?</Text>
      </Pressable>
      <PrimaryButton title="Войти" onPress={login} />
      <View style={styles.register}>
        <Text style={styles.gray}>У вас нет аккаунта?</Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={[common.link, { marginTop: 4 }]}>
            Зарегистрироваться
          </Text>
        </Pressable>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  forgot: { alignSelf: "flex-end", marginTop: -4, marginBottom: 22 },
  register: { alignItems: "center", marginTop: 26 },
  gray: { color: colors.gray, fontSize: 16 },
});
