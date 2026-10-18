import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, type NavigationProp } from "@react-navigation/native";
import type { RootStackParamList } from "../../types/navigation";
import Screen from "../../components/Screen";
import { colors, common } from "../../theme";
export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const logout = () =>
    Alert.alert("Выход", "Вы действительно хотите выйти?", [
      { text: "Отмена", style: "cancel" },
      {
        text: "Выйти",
        style: "destructive",
        onPress: () =>
          navigation.reset({ index: 0, routes: [{ name: "Login" }] }),
      },
    ]);
  return (
    <Screen>
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>Р</Text>
        </View>
        <Text style={styles.name}>Руслан Абдрахман</Text>
        <Text style={styles.group}>Студент • ИС-23-1</Text>
      </View>
      <Text style={common.sectionTitle}>Личная информация</Text>
      <Info label="Специальность" value="Информационные системы" />
      <Info label="Курс" value="3 курс" />
      <Info label="Телефон" value="+7 (700) 555 77 55" />
      <Text style={common.sectionTitle}>Настройки</Text>
      <Menu icon="language" text="Язык приложения" />
      <Menu icon="lock-closed" text="Изменить пароль" />
      <Menu icon="help-circle" text="Помощь" />
      <Pressable style={styles.logout} onPress={logout}>
        <Ionicons name="log-out" size={22} color={colors.red} />
        <Text style={styles.logoutText}>Выйти из аккаунта</Text>
      </Pressable>
    </Screen>
  );
}
function Info({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.info}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}
function Menu({
  icon,
  text,
}: {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  text: string;
}) {
  return (
    <Pressable style={styles.menu}>
      <Ionicons name={icon} size={22} color={colors.purple} />
      <Text style={styles.menuText}>{text}</Text>
      <Ionicons name="chevron-forward" size={20} color={colors.gray} />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  profile: { alignItems: "center", marginTop: 12 },
  avatar: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: colors.purple,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { color: "#fff", fontSize: 34, fontWeight: "700" },
  name: { color: colors.dark, fontSize: 22, fontWeight: "700", marginTop: 13 },
  group: { color: colors.gray, marginTop: 5 },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  label: { color: colors.gray },
  value: {
    color: colors.dark,
    fontWeight: "600",
    maxWidth: "58%",
    textAlign: "right",
  },
  menu: { flexDirection: "row", alignItems: "center", paddingVertical: 15 },
  menuText: { flex: 1, color: colors.dark, fontSize: 16, marginLeft: 13 },
  logout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    marginTop: 22,
    borderRadius: 15,
    backgroundColor: "#FFF0F0",
  },
  logoutText: { color: colors.red, fontWeight: "700", marginLeft: 9 },
});
