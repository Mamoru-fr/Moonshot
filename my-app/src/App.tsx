import { Assets as NavigationAssets } from '@react-navigation/elements';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { AuthNavigation, RootNavigation } from './navigation';

Asset.loadAsync([
  ...NavigationAssets,
  require('./assets/icons/newspaper.png'),
  require('./assets/icons/bell.png'),
]);

SplashScreen.preventAutoHideAsync();

export function App() {
  return (
    <RootNavigation
      linking={{
        enabled: 'auto',
        prefixes: [
          // Change the scheme to match your app's scheme defined in app.json
          'myapp://', 
        ],
      }}
      onReady={() => {
        SplashScreen.hideAsync();
      }}
    />
  );
}
