import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation, type NavigationProp } from "@react-navigation/native";
import type { RootStackParamList } from "../../types/navigation";
import Screen from "../../components/Screen";
import Header from "../../components/Header";
import { courses } from "../../data/mockData";
import { colors, common } from "../../theme";
export default function CoursesScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Screen>
      <Header title="Мои предметы" subtitle="3 активных предмета" />
      {courses.map((course) => (
        <Pressable
          key={course.id}
          style={common.card}
          onPress={() =>
            navigation.navigate("CourseDetails", {
              courseId: course.id,
              title: course.title,
              teacher: course.teacher,
            })
          }
        >
          <View style={styles.row}>
            <View style={[styles.icon, { backgroundColor: course.color }]}>
              <Text style={styles.letter}>{course.title[0]}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{course.title}</Text>
              <Text style={styles.teacher}>{course.teacher}</Text>
            </View>
            <Text style={styles.percent}>{course.progress}%</Text>
          </View>
          <View style={styles.track}>
            <View
              style={[
                styles.progress,
                { width: `${course.progress}%`, backgroundColor: course.color },
              ]}
            />
          </View>
        </Pressable>
      ))}
    </Screen>
  );
}
const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center" },
  icon: {
    width: 47,
    height: 47,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },
  letter: { color: "#fff", fontSize: 20, fontWeight: "700" },
  title: { color: colors.dark, fontSize: 16, fontWeight: "700" },
  teacher: { color: colors.gray, marginTop: 4 },
  percent: { color: colors.dark, fontWeight: "700" },
  track: {
    height: 6,
    borderRadius: 5,
    backgroundColor: colors.field,
    marginTop: 15,
    overflow: "hidden",
  },
  progress: { height: "100%", borderRadius: 5 },
});
