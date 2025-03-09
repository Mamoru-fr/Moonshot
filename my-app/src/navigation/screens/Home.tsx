import { Button, Text } from '@react-navigation/elements';
import { StyleSheet } from 'react-native';
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
      <ThemedText variant='body1'>{t("homeScreen")}</ThemedText>
      <ThemedText variant='body1'>{t("openApp")}</ThemedText>
      <Button screen="Profile">
        {t('goProfile')}
      </Button>
      <Button screen="Settings">{t('goSettings')}</Button>
      <Button screen="Welcome">Welcome</Button>
      <Button screen="Signup">Sign up</Button>
      <Button screen="Signin">Sign in</Button>
      <ThemedText variant='body1'>{t("description")}</ThemedText>
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
