import React, { useState } from "react";
import { Alert, Text } from "react-native";
import { useNavigation, type NavigationProp } from "@react-navigation/native";
import type { RootStackParamList } from "../../types/navigation";
import Screen from "../../components/Screen";
import BackButton from "../../components/BackButton";
import FormInput from "../../components/FormInput";
import PrimaryButton from "../../components/PrimaryButton";
import { common } from "../../theme";
export default function ResetPasswordScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const submit = () =>
    password.length < 8
      ? Alert.alert("Қате", "Кемінде 8 таңба енгізіңіз.")
      : password !== repeat
        ? Alert.alert("Қате", "Парольдер бірдей емес.")
        : navigation.reset({ index: 0, routes: [{ name: "Login" }] });
  return (
    <Screen>
      <BackButton />
      <Text style={common.centeredTitle}>Сбросить пароль</Text>
      <Text style={common.centeredSubtitle}>
        Не менее 8 символов, с{`\n`}прописными и строчными буквами
      </Text>
      <FormInput
        icon="lock-closed"
        placeholder="Пароль"
        password
        value={password}
        onChangeText={setPassword}
      />
      <FormInput
        icon="lock-closed"
        placeholder="Повторить пароль"
        password
        value={repeat}
        onChangeText={setRepeat}
      />
      <PrimaryButton title="Продолжить" onPress={submit} />
    </Screen>
  );
}
