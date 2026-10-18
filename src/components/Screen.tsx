import React, { type ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { common } from "../theme";
type Props = { children: ReactNode; contentStyle?: StyleProp<ViewStyle> };
export default function Screen({ children, contentStyle }: Props) {
  return (
    <SafeAreaView style={common.safe}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={[common.page, contentStyle]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
