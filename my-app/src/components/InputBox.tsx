// Imports
    // Components
        import { Row } from "./Row";
    
    // Hooks
        import { ThemedText } from "./ThemedText";
        import { getThemeColors, useThemeColors } from "../hooks/useThemeColors";

    // React & React Native Components
        import { Pressable, StyleSheet, TextInput, View, ViewProps } from "react-native";
        import React, { useState } from "react";

// Types
    // Props
        type Props = ViewProps & {
            color?: string,
            placeholder?: string,
            security?: boolean,
            textContentType: textContentTypes,
            autoCompleteType: autoCompleteTypes,
            onChange: (text: string) => void;
            value: string;
        }
    // Types Created
        type textContentTypes = 'emailAddress' | 'password';
        type autoCompleteTypes = 'email' | 'current-password' | 'new-password' | 'password' | 'password-new';

export function InputBox({ style, color, placeholder, security = false, textContentType, autoCompleteType, onChange, value, ...rest }: Props) {
    // Hooks in function
        const colors = useThemeColors();
        const theme = getThemeColors();
        const [visible, setVisibility] = useState(security)
    
    return (
        <View style={[styles.container, { backgroundColor: color ? color : theme === 'light' ? colors.grayLight : colors.grayDark }, style]}>
            <Row style={styles.row}>
                <TextInput
                    value={value}
                    placeholder={placeholder ? placeholder : "Placeholder"}
                    style={[styles.text, { color: theme === 'light' ? colors.grayDark : colors.grayLight }]}
                    secureTextEntry={visible}
                    textContentType={textContentType}
                    autoComplete={autoCompleteType}
                    onChangeText={text => onChange(text)}
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