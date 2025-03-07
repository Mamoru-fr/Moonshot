import { FlatList, Image, Modal, Platform, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import i18next from 'i18next';
import { getThemeColors, useThemeColors } from '../../hooks/useThemeColors';
import { ThemedText } from '../../components/ThemedText';
import { LanguageCard } from '../../components/cards/LanguageCard';
import { languageResources } from '../../services/i18next';
import { RootView } from '../../components/RootView';
import { Column } from '../../components/Column';
import { Row } from '../../components/Row';

// import logos
import languageLogo from '../../assets/language.png';
import backArrowAndroid from '../../assets/backArrowAndroid.png'
import backArrowIOS from '../../assets/backArrowIOS.png'
import backArrowWeb from '../../assets/backArrowWeb.png'
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Settings() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const theme = getThemeColors();
  const colors = useThemeColors();
  const navigation = useNavigation();

  const chgLanguage = (language: string) => {
    i18next.changeLanguage(language);
    setVisible(false);
  };

  const backArrow = Platform.OS === 'ios' ? backArrowIOS : Platform.OS === 'android' ? backArrowAndroid : backArrowWeb; 

  return (
    <RootView style={styles.wrapper}>
      <Modal visible={visible} onRequestClose={() => setVisible(true)} animationType="slide">
        <View style={[styles.languageList, { backgroundColor: theme === 'light' ? colors.purpleSoft : colors.purpleRich }]}>
          <View style={[styles.languageListHeader, { backgroundColor: theme === 'light' ? colors.purplePastel : colors.purpleDeep }]}>
            <ThemedText variant='headline2'>{t("selectLanguage")}</ThemedText>
          </View>
          <FlatList
            data={Object.keys(languageResources)}
            numColumns={Platform.OS === 'web' ? 4 : 2}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.languageButton}>
                <LanguageCard languageName={item} onPress={() => chgLanguage(item)} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </Modal>
      <Row style={[styles.headerRow, {}]}>
        <Pressable onPress={navigation.goBack}>
          <Image source={backArrow}/>
        </Pressable>
        <View style={styles.header}>
          <Image source={require('../../assets/gear.png')} style={styles.settingsLogo} />
          <ThemedText variant='headline2'>{t('settingsScreen')}</ThemedText>
        </View>
        <View style={{width: 30}}/>
      </Row>
      <Column style={styles.container}>
        <Column style={styles.sectionsContainer}>
          <ThemedText variant='headline2'>{t('settingSectionLanguages')}</ThemedText>
          <View>
            <Button onPress={() => setVisible(true)} style={styles.button}>
              <Row style={styles.buttonRow}>
                <Image source={languageLogo} />
                <ThemedText variant='body2' style={{fontWeight: 'bold'}}>{t('changeLanguage')}</ThemedText>
              </Row>
            </Button>
          </View>
        </Column>
      </Column>
    </RootView>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  buttonRow: {
    marginHorizontal: 25,
    gap: 8,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    gap: 10,
    width: '100%',
  },
  header: {
    alignItems: 'center',
  },
  headerRow: {
    justifyContent: 'space-between',
    paddingVertical: 10,
    maxHeight: 100,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  languageButton: {
    flex: 1,
    ...Platform.select({
      web: {
        maxWidth: '25%',
        height: 250,
      },
      default: {
        maxWidth: '50%',
        height: 125,
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
  },
  sectionsContainer: {
    flex: 1,
    gap: 10,
  },
  settingsLogo: {
    height: 50,
    width: 50,
  },
  wrapper: {
    flex: 1,
    gap: 10,
  },
});
