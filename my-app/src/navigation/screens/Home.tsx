import { Button, Text } from '@react-navigation/elements';
import { FlatList, Modal, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { RootView } from '../../components/RootView';
import i18next, { languageResources } from '../../services/i18next';
import { useTranslation } from 'react-i18next';
import { ThemedText } from '../../components/ThemedText';
import { useState } from 'react';
import { getThemeColors, useThemeColors } from '../../hooks/useThemeColors';

export function Home() {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  const theme = getThemeColors();
  const colors = useThemeColors();

  const chgLanguage = (language: string) => {
    i18next.changeLanguage(language);
    setVisible(false);
  };

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
  },
  languageButton: {
    flex: 1,
    ...Platform.select({
      web: {
        maxWidth: '25%',
        height: 200,
      },
      default: {
        maxWidth: '50%',
        height: 100,
      },
    })
  },
  languageList: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  languageListHeader: {
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 50,
    justifyContent: 'center',
  }
});
