// Imports
  // Assets
    // Icons
      import home from '../assets/icons/home.png'
      import profile from '../assets/icons/profile.png'
  // Navigation
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
    import { createNativeStackNavigator } from '@react-navigation/native-stack';
  // React & React Native Components
    import React from 'react';
    import { Image } from 'react-native';
  // Screens
    import { Home } from './screens/Home';
    import { Profile } from './screens/Profile';
    import { NotFound } from './screens/NotFound';
    import { Signin } from './screens/Signin';
    import { Signup } from './screens/Signup';
import { Settings } from './screens/Settings';

const HomeTabs = createBottomTabNavigator({ // Create a bottom tab navigator
  screens: {
    Home: { // Create a screen called Home
      screen: Home,
      options: {
        tabBarIcon: ({ color, size }) => (
          <Image
            source={home}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
        headerShown: false,
      },
    },
    Profile: { // Create a screen called Profile
      screen: Profile,
      options: {
        tabBarIcon: ({ color, size }) => (
          <Image
          source={profile}
          tintColor={color}
          style={{
            width: size,
            height: size,
          }}
          />
        ),
        headerShown: false,
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        headerShown: false,
      },
    },
  NotFound: {
    screen: NotFound,
    options: {
      title: '404',
    },
    linking: {
      path: '*',
    },
  },
  Signin: {
    screen: Signin,
    options: {
      headerShown: false,
    },
  },
  Signup: {
    screen: Signup,
    options: {
      headerShown: false,
    },
  },
  Settings: {
    screen: Settings,
    options: {
      headerShown: false,
    },
  }
},
});

export const RootNavigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
