import { Pressable, StyleSheet, Text, TextInput, View, ViewProps } from "react-native";
import { Row } from "./Row";
import { useState } from "react";
import { ThemedText } from "./ThemedText";
import { getThemeColors, useThemeColors } from "../hooks/useThemeColors";

type Props = ViewProps & {
    color?: string,
    placeholder?: string,
    security?: boolean,
    textContentType: textContentTypes,
    autoCompleteType: autoCompleteTypes,
}

type textContentTypes = 'emailAddress' | 'password';
type autoCompleteTypes = 'email' | 'current-password' | 'new-password' | 'password' | 'password-new';

export function InputBox({ style, color, placeholder, security = false, textContentType, autoCompleteType, ...rest }: Props) {
    const [visible, setVisibility] = useState(security)
    const colors = useThemeColors();
    const theme = getThemeColors();
    return (
        <View style={[styles.container, { backgroundColor: color ? color : theme === 'light' ? colors.grayLight : colors.grayDark }, style]}>
            <Row style={styles.row}>
                <TextInput
                    placeholder={placeholder ? placeholder : "Placeholder"}
                    style={[styles.text, { color: theme === 'light' ? colors.grayDark : colors.grayLight }]}
                    secureTextEntry={visible}
                    textContentType={textContentType}
                    autoComplete={autoCompleteType}
                    {...rest} />
                {security && (
                    <Pressable onPress={() => setVisibility(!visible)}>
                        <ThemedText variant='body1' color={visible ? 'blue' : 'grayDark'}>Show</ThemedText>
                    </Pressable>
                )}
            </Row>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        width: 200,
        height: 50,
    },
    row: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        gap: 15,
    },
    text: {
        paddingVertical: 15,
        flex: 1,
    },
})