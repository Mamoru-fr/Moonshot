// Imports
  // Components
    import { Button } from '../../components/Button';
    import { RootView } from '../../components/RootView';
    import { ThemedText } from '../../components/ThemedText';

  // Hook 
    import { getThemeColors, useThemeColors } from '../../hooks/useThemeColors';

  // Navigation
    import { useNavigation } from '@react-navigation/native';

  // React & React Natives Components
    import React from 'react';
    import { Platform, StyleSheet, Text } from 'react-native';

  // Translation
    import { useTranslation } from 'react-i18next';

export function Home() {
  // Hooks in Function
    // Colors
      const theme = getThemeColors();
      const colors = useThemeColors();
    // Navigation
    const navigation = useNavigation();
    //Translation
      const { t } = useTranslation();
    
  return (
    <RootView style={styles.container}>
      <ThemedText variant='body1'>{t("homeScreen")}</ThemedText>
      <ThemedText variant='body1'>{t("openApp")}</ThemedText>
      <Button onPress={() => navigation.navigate('Profile')}>
        <Text>{t('goProfile')}</Text>
      </Button>
      <Button onPress={() => navigation.navigate('Settings')}><Text>{t('goSettings')}</Text></Button>
      <Button onPress={() => navigation.navigate('Welcome')}><Text>Welcome</Text></Button>
      <Button onPress={() => navigation.navigate('Signup')}><Text>Sign up</Text></Button>
      <Button onPress={() => navigation.navigate('Signin')}><Text>Sign in</Text></Button>
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
