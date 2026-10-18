import { StyleSheet } from 'react-native';
export const colors = { purple: '#B000E8', dark: '#1B1923', gray: '#A9A8B1', field: '#F8F8FA', white: '#FFFFFF', green: '#22A06B', red: '#E5484D', border: '#ECECF1' };
export const common = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.white }, page: { flexGrow: 1, paddingHorizontal: 24, paddingTop: 24, paddingBottom: 30 },
  title: { color: colors.dark, fontSize: 27, fontWeight: '700' }, subtitle: { color: colors.gray, fontSize: 16, lineHeight: 23, marginTop: 5, marginBottom: 27 },
  centeredTitle: { color: colors.dark, fontSize: 25, fontWeight: '700', textAlign: 'center' }, centeredSubtitle: { color: colors.gray, fontSize: 16, lineHeight: 23, textAlign: 'center', marginTop: 5, marginBottom: 27 },
  link: { color: colors.purple, fontSize: 16, fontWeight: '500' }, sectionTitle: { color: colors.dark, fontSize: 20, fontWeight: '700', marginTop: 24, marginBottom: 12 },
  card: { backgroundColor: colors.white, borderRadius: 18, padding: 17, marginBottom: 12, borderWidth: 1, borderColor: colors.border },
});
