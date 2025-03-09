import React from 'react'
import { RootView } from '../../components/RootView'
import { ThemedText } from '../../components/ThemedText'
import { useNavigation } from '@react-navigation/native'
import { Image, Pressable, StyleSheet } from 'react-native';
import { Row } from '../../components/Row';
import { getThemeColors, useThemeColors } from '../../hooks/useThemeColors';
import { Column } from '../../components/Column';
import { Button } from '../../components/Button';
import { useTranslation } from 'react-i18next';

import arrow from '../../assets/icons/backArrowWeb.png'

export function Welcome() {
    const colors = useThemeColors();
    const theme = getThemeColors();
    const navigation = useNavigation();
    const { t } = useTranslation();
    return (
        <RootView color={theme === 'light' ? colors.purpleLight : colors.purpleDeep} style={styles.wrapper}>
            <Row style={styles.headerRow}>
                <ThemedText variant='headline'>{t('Welcome_Started')}</ThemedText>
            </Row>
            <Column style={styles.buttonContainer}>
                <Button style={styles.button} onPress={() => navigation.navigate('Signin')}>
                    <ThemedText variant='subtitle1'>{t('Welcome_SigninButton')}</ThemedText>
                </Button>
                <Button style={styles.button} onPress={() => navigation.navigate('Signup')}>
                    <ThemedText variant='subtitle1'>{t('Welcome_SignupButton')}</ThemedText>
                </Button>
                <Pressable onPress={navigation.goBack}>
                    <Image source={arrow} />
                </Pressable>
            </Column>
        </RootView>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 60,
        width: 200,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        marginTop: 300,
        gap: 10,
        alignItems: 'center',
    },
    headerRow: {
        maxHeight: 50,
        marginTop: 50,
        justifyContent: 'center'
    },
    wrapper: {
    },
})

