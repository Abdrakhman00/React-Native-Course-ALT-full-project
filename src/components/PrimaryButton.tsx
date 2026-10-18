import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { colors } from "../theme";
type Props = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};
export default function PrimaryButton({ title, onPress, style }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        style,
        pressed && { opacity: 0.8 },
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    height: 58,
    backgroundColor: colors.purple,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  text: { color: colors.white, fontSize: 17, fontWeight: "700" },
});
