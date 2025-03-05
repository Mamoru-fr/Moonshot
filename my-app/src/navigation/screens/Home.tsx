import { Button, Text } from '@react-navigation/elements';
import { FlatList, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
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
      <Modal visible={visible} onRequestClose={() => setVisible(true)} animationType="slide">
        <View style={[styles.languageList, { backgroundColor: theme === 'light' ? colors.purpleSoft : colors.purpleRich }]}>
          <FlatList data={Object.keys(languageResources)} renderItem={({ item }) => (
            <TouchableOpacity style={styles.languageButton} onPress={() => chgLanguage(item)}>
              <Text>Nothing</Text>
            </TouchableOpacity>
          )} />
        </View>
      </Modal>
      <Text>{t("key")}</Text>
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

  },
  languageList: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  }
});
