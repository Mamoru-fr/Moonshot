// Imports
    // Components
        import { Row } from "./Row";
    // Hooks
        import { getThemeColors, useThemeColors } from "../hooks/useThemeColors";
    // React & React Native Components
        import React from "react";    
        import { Image, ImageSourcePropType, Pressable, StyleSheet, View, ViewProps } from "react-native";
// Types
    // Props
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
            <Row style={styles.ButtonRow}>
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
        borderRadius: 10,
        height: 40,
    },
    ButtonImage: {
        marginRight: 8,
    },
    ButtonRow : {
        alignItems: 'center',
    },
})
