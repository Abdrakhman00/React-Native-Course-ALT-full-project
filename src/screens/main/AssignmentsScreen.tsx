import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation, type NavigationProp } from "@react-navigation/native";
import type { RootStackParamList } from "../../types/navigation";
import Screen from "../../components/Screen";
import BackButton from "../../components/BackButton";
import { assignments, type Assignment } from "../../data/mockData";
import { colors, common } from "../../theme";
type Filter = "all" | Assignment["status"];
const labels: Record<Filter, string> = {
  all: "Все",
  new: "Новые",
  submitted: "Сданы",
  late: "Просрочены",
};
export default function AssignmentsScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [filter, setFilter] = useState<Filter>("all");
  const visible =
    filter === "all"
      ? assignments
      : assignments.filter((a) => a.status === filter);
  return (
    <Screen>
      <BackButton />
      <Text style={common.title}>Задания</Text>
      <Text style={common.subtitle}>Учебные задания по всем предметам</Text>
      <View style={styles.filters}>
        {(Object.keys(labels) as Filter[]).map((item) => (
          <Pressable
            key={item}
            style={[styles.filter, filter === item && styles.active]}
            onPress={() => setFilter(item)}
          >
            <Text
              style={[styles.filterText, filter === item && styles.activeText]}
            >
              {labels[item]}
            </Text>
          </Pressable>
        ))}
      </View>
      {visible.map((item) => (
        <Pressable
          key={item.id}
          style={common.card}
          onPress={() =>
            navigation.navigate("AssignmentDetails", {
              assignmentId: item.id,
              title: item.title,
              subject: item.subject,
              deadline: item.deadline,
            })
          }
        >
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subject}>{item.subject}</Text>
              <Text style={styles.deadline}>{item.deadline}</Text>
            </View>
            <Text
              style={[
                styles.status,
                item.status === "submitted" && styles.done,
              ]}
            >
              {item.status === "submitted" ? "Сдано" : "Новое"}
            </Text>
          </View>
        </Pressable>
      ))}
    </Screen>
  );
}
const styles = StyleSheet.create({
  filters: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 18 },
  filter: {
    paddingHorizontal: 13,
    paddingVertical: 9,
    backgroundColor: colors.field,
    borderRadius: 12,
  },
  active: { backgroundColor: colors.purple },
  filterText: { color: colors.dark },
  activeText: { color: "#fff" },
  row: { flexDirection: "row" },
  title: { color: colors.dark, fontSize: 16, fontWeight: "700" },
  subject: { color: colors.gray, marginTop: 4 },
  deadline: { color: colors.purple, marginTop: 9 },
  status: { color: colors.purple, fontSize: 12, fontWeight: "700" },
  done: { color: colors.green },
});
