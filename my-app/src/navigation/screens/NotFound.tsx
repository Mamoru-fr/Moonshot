// Imports
  import React from 'react'

  // React & React Native Components
    import { Text } from '@react-navigation/elements';
    import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { useTranslation } from 'react-i18next';

  // Navigations 



export function NotFound() {
  const navigation = useNavigation()
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text>404</Text>
      <Button onPress={() => navigation.navigate("HomeTabs")}> {t("goToHomePage")} </Button>
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
});
