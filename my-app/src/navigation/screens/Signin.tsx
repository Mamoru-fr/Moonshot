import React, { useState } from 'react'
import { RootView } from '../../components/RootView'
import { ThemedText } from '../../components/ThemedText'
import { useNavigation } from '@react-navigation/native'
import { Image, Platform, Pressable, StyleSheet, View } from 'react-native';
import { getThemeColors, useThemeColors } from '../../hooks/useThemeColors';
import { Column } from '../../components/Column';
import { Button } from '../../components/Button';
import { useTranslation } from 'react-i18next';
import { InputBox } from '../../components/InputBox';
import { Separator } from '../../components/Separator';

//firebase
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

//logos
import backArrowAndroidB from '../../assets/icons/backArrowAndroid.png'
import backArrowIOSB from '../../assets/icons/backArrowIOS.png'
import backArrowWebB from '../../assets/icons/backArrowWeb.png'
import backArrowAndroidW from '../../assets/icons/backArrowAndroidWhite.png'
import backArrowIOSW from '../../assets/icons/backArrowIOSWhite.png'
import backArrowWebW from '../../assets/icons/backArrowWebWhite.png'

export function Signin() {
    const colors = useThemeColors();
    const theme = getThemeColors();
    const navigation = useNavigation();
    const { t } = useTranslation();
    const backArrow = theme === 'light' ? (
        Platform.OS === 'ios' ? backArrowIOSB : Platform.OS === 'android' ? backArrowAndroidB : backArrowWebB
    ) : (
        Platform.OS === 'ios' ? backArrowIOSW : Platform.OS === 'android' ? backArrowAndroidW : backArrowWebW
    );

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const signIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            if (user) navigation.navigate('HomeTabs')
        } catch (error: any) {
            console.log(error);
            alert('Sign in failed: '+ error.message);
        }
    }

    const signUp = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            if (user) navigation.navigate('Welcome')
        } catch (error: any) {
            console.log(error);
            alert('Sign in failed: '+ error.message);
        }
    }

    return (
        <RootView>
            <Pressable onPress={navigation.goBack}>
                <Image source={backArrow} style={{ paddingTop: 10 }} />
            </Pressable>
            <Column style={[styles.container, { borderColor: theme === 'light' ? colors.grayDark : colors.grayLight }]}>
                <ThemedText variant='headline' style={{ marginBottom: 40 }}>{t('Signin_SigninTitle')}</ThemedText>
                <InputBox style={[styles.inputBox, { marginBottom: 40 }]}
                    placeholder='Email'
                    autoCompleteType='email'
                    textContentType='emailAddress' />
                <InputBox style={[styles.inputBox, { marginBottom: 10 }]}
                    placeholder='Password'
                    security={true}
                    autoCompleteType='current-password'
                    textContentType='password' />
                <Pressable style={{ marginBottom: 20 }}>
                    <ThemedText style={styles.forgotPasswordSection} color={theme === 'light' ? 'purpleDeep' : 'purpleSoft'}>{t('Signin_ForgotPassword')}</ThemedText>
                </Pressable>
                <Button style={styles.signinButton}>
                    <ThemedText variant='body1'>{t('Signin_SigninButton')}</ThemedText>
                </Button>
                <Separator textInput='or' style={styles.separator} />
                {Platform.OS === 'ios' ? (
                    <Column style={{ gap: 8 }}>
                        <Button image={require('../../assets/logos/Apple_logo_black.png')} style={styles.signinButton} imageSizeHeight={20} imageSizeWidth={16}>
                            <ThemedText variant='body1'>{t('Signin_SigninWithApple')}</ThemedText>
                        </Button>
                        <Button image={require('../../assets/logos/Google__G__logo.png')} style={styles.signinButton} imageSizeHeight={20} imageSizeWidth={18}>
                            <ThemedText variant='body1'>{t('Signin_SigninWithGoogle')}</ThemedText>
                        </Button>
                    </Column>
                ) : (
                    <Column style={{ gap: 8 }}>
                        <Button image={require('../../assets/logos/Google__G__logo.png')} style={styles.signinButton} imageSizeHeight={20} imageSizeWidth={18}>
                            <ThemedText variant='body1'>{t('Signin_SigninWithGoogle')}</ThemedText>
                        </Button>
                        <Button image={require('../../assets/logos/Apple_logo_black.png')} style={styles.signinButton} imageSizeHeight={20} imageSizeWidth={16}>
                            <ThemedText variant='body1'>{t('Signin_SigninWithApple')}</ThemedText>
                        </Button>
                    </Column>
                )}
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
        padding: 25,
        display: 'flex',
        flex: 1,
        width: 400,
        maxHeight: 510,
        maxWidth: '95%',
        ...Platform.select({
            web: {
                marginTop: 80
            },
            default: {
                marginTop: '15%'
            },
        })
    },
    forgotPasswordSection: {
        marginHorizontal: 5,
        fontSize: 14,
    },
    inputBox: {
        marginHorizontal: 5,
        maxWidth: '95%',
        width: 490,
    },
    separator: {
        marginVertical: 5,
    },
    signinButton: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
})