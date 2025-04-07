// Imports
  import React from 'react'

  // React & React Native Components
    import { Text, Button } from '@react-navigation/elements';
    import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

  // Navigations 



export function NotFound() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>404</Text>
      <Button>Go to Home</Button>
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
