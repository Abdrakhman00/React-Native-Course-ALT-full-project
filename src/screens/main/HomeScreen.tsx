import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, type NavigationProp } from "@react-navigation/native";
import type { RootStackParamList } from "../../types/navigation";
import Screen from "../../components/Screen";
import Header from "../../components/Header";
import { assignments } from "../../data/mockData";
import { colors, common } from "../../theme";

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const task = assignments[0];
  return (
    <Screen>
      <Header
        title="Добро пожаловать, Руслан!"
        subtitle="Воскресенье, 18 октября"
      />
      <View style={styles.hero}>
        <Text style={styles.heroLabel}>БЛИЖАЙШАЯ ПАРА</Text>
        <Text style={styles.heroTitle}>Мобильная разработка</Text>
        <Text style={styles.heroText}>10:00 – 10:50 • Аудитория 305</Text>
      </View>
      <Text style={common.sectionTitle}>Быстрый доступ</Text>
      <View style={styles.quickRow}>
        <Quick
          icon="clipboard"
          title="Задания"
          onPress={() => navigation.navigate("Assignments")}
        />
        <Quick
          icon="stats-chart"
          title="Оценки"
          onPress={() => navigation.navigate("Grades")}
        />
        <Quick
          icon="book"
          title="Предметы"
          onPress={() => navigation.navigate("MainTabs", { screen: "Courses" })}
        />
      </View>
      <Text style={common.sectionTitle}>Ближайшее задание</Text>
      <Pressable
        style={common.card}
        onPress={() =>
          navigation.navigate("AssignmentDetails", {
            assignmentId: task.id,
            title: task.title,
            subject: task.subject,
            deadline: task.deadline,
          })
        }
      >
        <Text style={styles.cardTitle}>{task.title}</Text>
        <Text style={styles.cardText}>{task.subject}</Text>
        <Text style={styles.deadline}>{task.deadline}</Text>
      </Pressable>
    </Screen>
  );
}

function Quick({
  icon,
  title,
  onPress,
}: {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  title: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.quick} onPress={onPress}>
      <Ionicons name={icon} size={25} color={colors.purple} />
      <Text style={styles.quickText}>{title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  hero: { backgroundColor: colors.purple, borderRadius: 22, padding: 20 },
  heroLabel: { color: "#EFCBFF", fontSize: 12, fontWeight: "700" },
  heroTitle: { color: "#fff", fontSize: 21, fontWeight: "700", marginTop: 9 },
  heroText: { color: "#fff", marginTop: 8 },
  quickRow: { flexDirection: "row", gap: 10 },
  quick: {
    flex: 1,
    height: 95,
    backgroundColor: colors.field,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  quickText: { color: colors.dark, fontSize: 13, marginTop: 8 },
  cardTitle: { color: colors.dark, fontSize: 17, fontWeight: "700" },
  cardText: { color: colors.gray, marginTop: 5 },
  deadline: { color: colors.purple, marginTop: 10, fontWeight: "600" },
});
