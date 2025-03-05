import { Platform, StatusBar, ViewProps, ViewStyle } from "react-native";
import { useThemeColors } from "../hooks/useThemeColors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type Props = ViewProps;

export function RootView({style, ...rest}: Props) {
    const colors = useThemeColors();
    return (
        <SafeAreaProvider>
            <StatusBar translucent />
            <SafeAreaView style={[RootStyle , style, {backgroundColor: colors.purpleWhite}]} {...rest}/>
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