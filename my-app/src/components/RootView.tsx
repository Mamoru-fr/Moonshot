// Imports
    // Hooks
        import { getThemeColors, useThemeColors } from "../hooks/useThemeColors";
    // React & React Native Components
        import React from "react";
        import { Platform, StatusBar, ViewProps, ViewStyle } from "react-native";
        import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type Props = ViewProps & {
    color?: string,
};

export function RootView({style, color, ...rest}: Props) {
    const colors = useThemeColors();
    const theme = getThemeColors();
    return (
        <SafeAreaProvider>
            <StatusBar translucent />
            <SafeAreaView style={[RootStyle , style, {backgroundColor: color? color : colors.white}]} {...rest}/>
        </SafeAreaProvider>
    )
}

const RootStyle = {
    flex: 1,
    padding: 4,
    ...Platform.select({
        default: {
            gap:2,
        },
        web: {
            gap:8,
        }
    }),
} satisfies ViewStyle;