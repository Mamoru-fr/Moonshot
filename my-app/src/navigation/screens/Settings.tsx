import { Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from "react-i18next";


export function Settings() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
});
