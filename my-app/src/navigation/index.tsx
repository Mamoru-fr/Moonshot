// Imports
  // Assets
    // Icons
      import bell from '../assets/icons/bell.png';
      import newspaper from '../assets/icons/newspaper.png';
  // Firebase
    import { User } from '@firebase/auth'
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
    import { Settings } from './screens/Settings';
    import { Updates } from './screens/Updates';
    import { NotFound } from './screens/NotFound';
    import { Welcome } from './screens/Welcome';
    import { Signin } from './screens/Signin';
    import { Signup } from './screens/Signup';

const HomeTabs = createBottomTabNavigator({ // Create a bottom tab navigator
  screens: {
    Home: { // Create a screen called Home
      screen: Home,
      options: {
        tabBarIcon: ({ color, size }) => (
          <Image
            source={newspaper}
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
    Updates: { // Create a screen called Updates
      screen: Updates,
      options: {
        tabBarIcon: ({ color, size }) => (
          <Image
            source={bell}
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

const AuthRootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        headerShown: false,
      },
    },
    Profile: { // Create a screen called Profile
      screen: Profile,
      options: {
        headerShown: false,
      },
    },
  Settings: { // Create a screen called Settings
    screen: Settings,
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
  Welcome: {
    screen: Welcome,
    options: {
      headerShown: false,
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
},
});
  
const NoneAuthRootStack = createNativeStackNavigator({
  screens: {
    Welcome: {
      screen: Welcome,
      options: {
        headerShown: false,
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
    NotFound: {
      screen: NotFound,
      options: {
        title: '404',
      },
      linking: {
        path: '*',
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
    Profile: { // Create a screen called Profile
      screen: Profile,
      options: {
        headerShown: false,
      },
    },
  Settings: { // Create a screen called Settings
    screen: Settings,
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
  Welcome: {
    screen: Welcome,
    options: {
      headerShown: false,
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
},
});

export const AuthNavigation = createStaticNavigation(AuthRootStack);
export const NoneAuthNavigation = createStaticNavigation(NoneAuthRootStack);
export const RootNavigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
