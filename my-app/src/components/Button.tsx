import { Pressable, View, ViewProps } from "react-native";
import { getThemeColors, useThemeColors } from "../hooks/useThemeColors";

type Props = ViewProps & {
    onPress?: () => void;
    color?: string;
}

export function Button({ onPress, style, color, ...rest }: Props) {
    const colors = useThemeColors();
    const theme = getThemeColors();
    return (
        <Pressable onPress={onPress} style={[style, { backgroundColor: color? color : colors.purpleSoft }]}>
            <View {...rest} />
        </Pressable>
    )
}

const ButtonStyle = {
    padding: 10,
    borderRadius: 10
}