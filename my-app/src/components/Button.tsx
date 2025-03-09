import { Image, ImageSourcePropType, Pressable, StyleSheet, View, ViewProps } from "react-native";
import { getThemeColors, useThemeColors } from "../hooks/useThemeColors";
import { Row } from "./Row";

type Props = ViewProps & {
    onPress?: () => void;
    color?: string;
    image?: ImageSourcePropType;
    imageSizeHeight?: number,
    imageSizeWidth?: number,
}


export function Button({ onPress, style, color, image, imageSizeHeight, imageSizeWidth, ...rest }: Props) {
    const colors = useThemeColors();
    const theme = getThemeColors();
    return (
        <Pressable
            onPress={onPress}
            style={[styles.ButtonStyle, {
                backgroundColor: color ? color : theme === 'light' ? colors.purpleSoft : colors.purpleDeep
            }, style
            ]}>
            <Row style={{alignItems: 'center'}}>
                {image && (
                    <Image source={image} style={[styles.ButtonImage, {width: (imageSizeWidth ? imageSizeWidth : 16), height: (imageSizeHeight ? imageSizeHeight: 16)}]}/>
                )}
                <View {...rest} />
            </Row>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    ButtonStyle: {
        padding: 10,
        borderRadius: 10
    },
    ButtonImage: {
        marginRight: 8,

    }
})
