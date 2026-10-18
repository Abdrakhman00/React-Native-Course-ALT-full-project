import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, type RouteProp } from "@react-navigation/native";
import type { RootStackParamList } from "../../types/navigation";
import Screen from "../../components/Screen";
import BackButton from "../../components/BackButton";
import PrimaryButton from "../../components/PrimaryButton";
import { colors, common } from "../../theme";
export default function AssignmentDetailsScreen() {
  const route = useRoute<RouteProp<RootStackParamList, "AssignmentDetails">>();
  const [file, setFile] = useState(false);
  const { title, subject, deadline } = route.params;
  return (
    <Screen>
      <BackButton />
      <Text style={common.title}>{title}</Text>
      <Text style={common.subtitle}>{subject}</Text>
      <View style={styles.info}>
        <Ionicons name="time" size={22} color={colors.purple} />
        <View>
          <Text style={styles.label}>Срок сдачи</Text>
          <Text style={styles.value}>{deadline}</Text>
        </View>
      </View>
      <Text style={common.sectionTitle}>Описание</Text>
      <Text style={styles.description}>
        Выполните задание согласно требованиям преподавателя. Прикрепите готовый
        файл и отправьте его до указанного срока.
      </Text>
      <Text style={common.sectionTitle}>Ваша работа</Text>
      <Pressable style={styles.upload} onPress={() => setFile(true)}>
        <Ionicons
          name={file ? "document-attach" : "cloud-upload-outline"}
          size={30}
          color={colors.purple}
        />
        <Text style={styles.uploadText}>
          {file ? "student-work.zip" : "Прикрепить файл"}
        </Text>
      </Pressable>
      <PrimaryButton
        title="Отправить работу"
        onPress={() =>
          file
            ? Alert.alert("Сәтті", "Жұмыс жіберілді.")
            : Alert.alert("Қате", "Алдымен файлды тіркеңіз.")
        }
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: colors.field,
    padding: 17,
    borderRadius: 16,
  },
  label: { color: colors.gray },
  value: { color: colors.dark, fontWeight: "700", marginTop: 3 },
  description: { color: colors.dark, fontSize: 16, lineHeight: 24 },
  upload: {
    height: 105,
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: colors.purple,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  uploadText: { color: colors.purple, marginTop: 7, fontWeight: "600" },
});
