import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme";
export default function Header({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  header: { marginBottom: 20 },
  title: { color: colors.dark, fontSize: 27, fontWeight: "700" },
  subtitle: { color: colors.gray, fontSize: 16, marginTop: 4 },
});
