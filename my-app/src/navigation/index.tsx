import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStaticNavigation,
  NavigationContainer,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import useAuth from '../hooks/useAuth';

// Icons
import bell from '../assets/bell.png';
import newspaper from '../assets/newspaper.png';

// Screens
import { Home } from './screens/Home';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';
import { Updates } from './screens/Updates';
import { NotFound } from './screens/NotFound';
import { Welcome } from './screens/Welcome';
import { Login } from './screens/Login';
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
    Login: {
      screen: Login,
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
  }
})

const {user} = useAuth();


export const Navigation = createStaticNavigation(AuthRootStack);

type RootStackParamList = StaticParamList<typeof AuthRootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
