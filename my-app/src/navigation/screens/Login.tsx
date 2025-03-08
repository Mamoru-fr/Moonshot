import React from 'react'
import { RootView } from '../../components/RootView'
import { ThemedText } from '../../components/ThemedText'
import { useNavigation } from '@react-navigation/native'
import { Image, Platform, Pressable, StyleSheet, View } from 'react-native';
import { Row } from '../../components/Row';
import { getThemeColors, useThemeColors } from '../../hooks/useThemeColors';
import { Column } from '../../components/Column';
import { Button } from '../../components/Button';

import backArrowAndroid from '../../assets/backArrowAndroid.png'
import backArrowIOS from '../../assets/backArrowIOS.png'
import backArrowWeb from '../../assets/backArrowWeb.png'
import { useTranslation } from 'react-i18next';
import { InputBox } from '../../components/InputBox';

export function Login() {
    const colors = useThemeColors();
    const theme = getThemeColors();
    const navigation = useNavigation();
    const { t } = useTranslation();
    const backArrow = Platform.OS === 'ios' ? backArrowIOS : Platform.OS === 'android' ? backArrowAndroid : backArrowWeb;

    return (
        <RootView>
            <Pressable onPress={navigation.goBack}>
                <Image source={backArrow} style={{ paddingTop: 10 }} />
            </Pressable>
            <Column style={[styles.container, {borderColor: theme === 'light' ? colors.grayDark : colors.grayLight}]}>
                <ThemedText variant='headline'>{t('Login_LoginTitle')}</ThemedText>
                <InputBox style={styles.inputBox} placeholder='Email' autoCompleteType='email' textContentType='emailAddress'/>
                <InputBox style={styles.inputBox} placeholder='Password' security={true} autoCompleteType='current-password' textContentType='password'/>
            </Column>
        </RootView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        borderRadius: 25,
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 50,
        padding: 25,
        display: 'flex',
        flex: 1,
        gap: 40,
        height: 500,
        width: 500,
        maxWidth: '95%',
        maxHeight: '70%',
    },
    inputBox: {
        marginHorizontal: 5,
        maxWidth: '95%',
        width: 490,
    }
})