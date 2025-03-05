import { StyleSheet, Text, TextProps } from "react-native";
import { Colors } from "../constants/Colors";
import { getThemeColors, useThemeColors } from "../hooks/useThemeColors";

const styles = StyleSheet.create({
    body1: {
        fontSize: 14,
        lineHeight: 16,
    },
    body2: {
        fontSize: 12,
        lineHeight: 16,
    },
    body3: {
        fontSize: 10,
        lineHeight: 16,
    },
    caption: {
        fontSize: 8,
        lineHeight: 12,
    },
    headline: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "bold",
    },
    headline2: {
        fontSize: 20,
        lineHeight: 26,
        fontWeight: "bold",
    },
    subtitle1: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "bold",
    },
    subtitle2: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "bold",
    },
    subtitle3: {
        fontSize: 10,
        lineHeight: 16,
        fontWeight: "bold",
    },
});

type Props = TextProps & {
    variant?: keyof typeof styles;
    color?: keyof typeof Colors["light"];
}

export function ThemedText({ variant, color, style, ...rest}: Props) {
    const colors = useThemeColors();
    const theme = getThemeColors();
    const colors_used = theme === 'light' ? 'grayDark' : 'grayLight';
    return (<Text style={[styles[variant?? 'body3'], style, {color: colors[color ?? colors_used]}]} {...rest}/>)
};

export function CapitalizeFirstLetter(text: string) {
    if (typeof text !== 'string' || text.length === 0) {
        return text;
    }
    return text.charAt(0).toUpperCase() + text.slice(1);
};