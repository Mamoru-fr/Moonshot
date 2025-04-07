export type AuthStackParamList = {
    HomeTabs: NavigatorScreenParams<HomeTabsParamList>;
    Profile: undefined;
    Settings: undefined;
    NotFound: undefined;
    Welcome: undefined;
    Signin: undefined;
    Signup: undefined;
  }
  
  export type HomeTabsParamList = {
    Home: undefined;
    Updates: undefined;
  }
  
  export type NoAuthStackParamList = {
    Welcome: undefined;
    Signin: undefined;
    Signup: undefined;
  }