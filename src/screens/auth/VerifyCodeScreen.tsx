import React, { createRef, useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  useNavigation,
  useRoute,
  type NavigationProp,
  type RouteProp,
} from "@react-navigation/native";
import type { RootStackParamList } from "../../types/navigation";
import Screen from "../../components/Screen";
import BackButton from "../../components/BackButton";
import PrimaryButton from "../../components/PrimaryButton";
import { colors, common } from "../../theme";
const refs = Array.from({ length: 4 }, () => createRef<TextInput>());
export default function VerifyCodeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, "VerifyCode">>();
  const [code, setCode] = useState(["", "", "", ""]);
  const change = (value: string, i: number) => {
    const next = [...code];
    next[i] = value.slice(-1);
    setCode(next);
    if (value && i < 3) refs[i + 1].current?.focus();
  };
  return (
    <Screen>
      <BackButton />
      <Text style={common.centeredTitle}>Подтвердить номер</Text>
      <Text style={common.centeredSubtitle}>
        Мы отправили код на{`\n`}
        <Text style={styles.phone}>{route.params.phone}</Text>
      </Text>
      <View style={styles.row}>
        {code.map((v, i) => (
          <TextInput
            key={i}
            ref={refs[i]}
            style={styles.code}
            value={v}
            onChangeText={(text) => change(text, i)}
            keyboardType="number-pad"
            maxLength={1}
            textAlign="center"
          />
        ))}
      </View>
      <PrimaryButton
        title="Продолжить"
        onPress={() =>
          code.every(Boolean)
            ? navigation.navigate("ResetPassword")
            : Alert.alert("Қате", "Кодты толық енгізіңіз.")
        }
      />
      <Pressable onPress={() => Alert.alert("Код қайта жіберілді")}>
        <Text style={styles.resend}>Отправить код еще раз</Text>
      </Pressable>
    </Screen>
  );
}
const styles = StyleSheet.create({
  phone: { color: colors.dark, fontWeight: "700" },
  row: { flexDirection: "row", justifyContent: "space-between" },
  code: {
    width: "22%",
    height: 55,
    borderRadius: 15,
    backgroundColor: colors.field,
    fontSize: 28,
    fontWeight: "700",
    color: colors.dark,
  },
  resend: {
    color: colors.gray,
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 24,
  },
});
