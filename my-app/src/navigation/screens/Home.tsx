import { Button, Text } from '@react-navigation/elements';
import { Platform, StyleSheet } from 'react-native';
import { RootView } from '../../components/RootView';
import { useTranslation } from 'react-i18next';
import { ThemedText } from '../../components/ThemedText';
import { getThemeColors, useThemeColors } from '../../hooks/useThemeColors';

export function Home() {
  const { t } = useTranslation();
  const theme = getThemeColors();
  const colors = useThemeColors();
  return (
    <RootView style={styles.container}>
      <Text>{t("homeScreen")}</Text>
      <Text>{t("openApp")}</Text>
      <Button screen="Profile" params={{ user: 'jane' }}>
        {t('goProfile')}
      </Button>
      <Button screen="Settings">{t('goSettings')}</Button>
      <ThemedText>{t("description")}</ThemedText>
    </RootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  }
});
