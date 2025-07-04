// Imports
  // Assets
    import AMTLogo from '../../assets/AMTCGSGROUPE/LOGO AMTCGSGROUPE - FINAL.png'

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
    import { Image, Platform, StyleSheet, View } from 'react-native';

  // Translation
    import { useTranslation } from 'react-i18next';
import { Header } from '../../components/header';

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
    <RootView>
      <Header></Header>
      <View style={styles.container}>
        <Image source={AMTLogo} style={styles.AMTLogo}/>
        <ThemedText variant={ Platform.OS === 'web' ? 'headline2' : 'subtitle2'} style={styles.text}>{t("Welcome")}</ThemedText>
        <Button>{t("WantBookRide")}</Button>
        <Button>{t("WantBecomeDriver")}</Button>
      </View>
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
  AMTLogo: {
    width: '70%',
    height: "auto",
    aspectRatio: '3424/2212',
    maxWidth: 430,
  },
  text: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: 'center',
    width: "70%",
    maxWidth: 500,
    fontWeight: 'normal',
  },
});
