import React from 'react'
import { Image, Platform, Pressable, StyleSheet } from 'react-native';

// Assets
    // Logos
    import backArrowAndroidB from '../../assets/icons/backArrowAndroid.png'
    import backArrowIOSB from '../../assets/icons/backArrowIOS.png'
    import backArrowWebB from '../../assets/icons/backArrowWeb.png'
    import backArrowAndroidW from '../../assets/icons/backArrowAndroidWhite.png'
    import backArrowIOSW from '../../assets/icons/backArrowIOSWhite.png'
    import backArrowWebW from '../../assets/icons/backArrowWebWhite.png'

// Components
import { Button } from '../../components/Button';
import { Column } from '../../components/Column';
import { Row } from '../../components/Row';
import { RootView } from '../../components/RootView'
import { Shadows } from '../../constants/Shadows';
import { ThemedText } from '../../components/ThemedText'

// Hook
import { getThemeColors, useThemeColors } from '../../hooks/useThemeColors';

// Navigation
import { useNavigation } from '@react-navigation/native'

// Translation
import { useTranslation } from 'react-i18next';

// Dictionnaire pour les valeurs de style 
const styleConfig = {
    border: {
        radius: 25,
        width: 1,
    },
    button: {
        height: 60,
        width: 200,
    },
    container: {
        padding: 20,
        height: 510,
        width: 400,
        marginTopWeb : 80,
    },
};


export function Welcome() {
    // Hook in function
        // Colors 
            const colors = useThemeColors();
            const theme = getThemeColors();
        // Navigation
            const navigation = useNavigation();
        // Translation
            const { t } = useTranslation();
    // Constants in function
        const backArrow = theme === 'light' ? (
            Platform.OS === 'ios' ? backArrowIOSB : Platform.OS === 'android' ? backArrowAndroidB : backArrowWebB
        ) : (
            Platform.OS === 'ios' ? backArrowIOSW : Platform.OS === 'android' ? backArrowAndroidW : backArrowWebW
        );

    return (
        <RootView>
            <Pressable onPress={navigation.goBack}>
                <Image source={backArrow} style={styles.backArrow} />
            </Pressable>
            <Column style={[styles.container, { borderColor: theme == "light" ? colors.grayDark : colors.grayLight }]}>
                <Row style={styles.headerRow}>
                    <ThemedText variant='headline'>{t('Welcome_Started')}</ThemedText>
                </Row>
                <Column style={styles.buttonContainer}>
                    <Button style={[styles.button, {borderColor: theme == 'light' ? colors.grayLight : colors.grayDark}]} onPress={() => navigation.navigate("Signin")}>
                        <ThemedText variant='subtitle1'>{t('Welcome_SigninButton')}</ThemedText>
                    </Button>
                    <Button style={[styles.button, {borderColor: theme == 'light' ? colors.grayLight : colors.grayDark}]} onPress={() => navigation.navigate('Signup')}>
                        <ThemedText variant='subtitle1'>{t('Welcome_SignupButton')}</ThemedText>
                    </Button>
                </Column>
            </Column>
        </RootView>
    )
}

const styles = StyleSheet.create({
    backArrow : {
        paddingTop: 10
    },
    button: {
        height: styleConfig.button.height,
        width: styleConfig.button.width,
        borderRadius: styleConfig.border.radius,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: styleConfig.border.width,
        ...Shadows.dp2,
    },
    buttonContainer: {
        gap: 10,
        alignItems: 'center',
        minHeight: 'auto',
    },
    container: {
        padding: 20,
        maxHeight: styleConfig.container.height,
        height: styleConfig.container.height,
        borderRadius: styleConfig.border.radius,
        borderWidth: styleConfig.border.width,
        display: "flex",
        flex: 1,
        width: 400,
        maxWidth: '95%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        ...Platform.select({
            web: {
                marginTop: styleConfig.container.marginTopWeb,
            },
            default: {
                marginTop: '15%',
            }
        })
    },
    headerRow: {
        maxHeight: 50,
        justifyContent: 'center'
    },
})

