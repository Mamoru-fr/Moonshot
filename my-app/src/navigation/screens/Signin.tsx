// Imports
    // Assets
        // Logos
            import backArrowAndroidB from '../../assets/icons/backArrowAndroid.png'
            import backArrowAndroidW from '../../assets/icons/backArrowAndroidWhite.png'
            import backArrowIOSB from '../../assets/icons/backArrowIOS.png'
            import backArrowIOSW from '../../assets/icons/backArrowIOSWhite.png'
            import backArrowWebB from '../../assets/icons/backArrowWeb.png'
            import backArrowWebW from '../../assets/icons/backArrowWebWhite.png'

    // Components
        import { Button } from '../../components/Button';
        import { Column } from '../../components/Column';
        import { InputBox } from '../../components/InputBox';
        import { RootView } from '../../components/RootView';
        import { Row } from '../../components/Row';
        import { Separator } from '../../components/Separator';
        import { ThemedText } from '../../components/ThemedText';

    // Hooks
        import { getThemeColors, useThemeColors } from '../../hooks/useThemeColors';

    // Navigation
        import { useNavigation } from '@react-navigation/native'
        import { NativeStackNavigationProp } from '@react-navigation/native-stack';
        import { NoAuthStackParamList } from '../../constants/navigationTypes';
        type SigninScreenNavigationProp = NativeStackNavigationProp<NoAuthStackParamList, "Signin">

    // React & React Native Components
        import React, { useState } from 'react'
        import { ActivityIndicator, Image, KeyboardAvoidingView, Platform, Pressable, StyleSheet } from 'react-native';

    // Translation
        import { useTranslation } from 'react-i18next'; 

export function Signin() {
    // Hooks in Function
        // Authentificator
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('')
            const [loading, setLoading] = useState(false)
        // Colors 
            const colors = useThemeColors();
            const theme = getThemeColors();
        // Navigation
            const navigation = useNavigation<SigninScreenNavigationProp>();
        // Translation
            const { t } = useTranslation();
    
    // Conponents in function
        const backArrow = theme === 'light' ? (
            Platform.OS === 'ios' ? backArrowIOSB : Platform.OS === 'android' ? backArrowAndroidB : backArrowWebB
        ) : (
            Platform.OS === 'ios' ? backArrowIOSW : Platform.OS === 'android' ? backArrowAndroidW : backArrowWebW
        );

    const resetPassword = () => {
        setPassword('');
    }
    const singIn = async () => {
        setLoading(true);
        try {
            //const response = await signInWithEmailAndPassword(auth, email, password);
            //console.log(response);
        } catch (error: any) {
            console.error(error);
            resetPassword();
            alert('Sign in failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <RootView>
            <Pressable onPress={navigation.goBack}>
                <Image source={backArrow} style={{ paddingTop: 10 }} />
            </Pressable>
            <KeyboardAvoidingView behavior='padding'>
                <Column style={[styles.container, { borderColor: theme === 'light' ? colors.grayDark : colors.grayLight }]}>
                    <ThemedText variant='headline' style={{ marginBottom: 40 }}>{t('Signin_SigninTitle')}</ThemedText>
                    <InputBox style={[styles.inputBox, { marginBottom: 40 }]}
                        placeholder='Email'
                        autoCompleteType='email'
                        textContentType='emailAddress'
                        onChange={(text) => setEmail(text)}
                        value={email} />
                    <InputBox style={[styles.inputBox, { marginBottom: 10 }]}
                        placeholder='Password'
                        security={true}
                        autoCompleteType='current-password'
                        textContentType='password'
                        value={password}
                        onChange={(text) => setPassword(text)} />
                    <Pressable style={{ marginBottom: 20 }}>
                        <ThemedText style={styles.forgotPasswordSection} color={theme === 'light' ? 'purpleDeep' : 'purpleSoft'}>{t('Signin_ForgotPassword')}</ThemedText>
                    </Pressable>
                    {loading ? (
                        <ActivityIndicator size='large' color={colors.purpleSoft} />
                    ) : (
                        <>
                            <Button style={styles.signinButton} onPress={singIn}>
                                <ThemedText variant='body1'>{t('Signin_SigninButton')}</ThemedText>
                            </Button><Separator textInput='or' style={styles.separator} />
                        </>
                    )}
                    {loading ? (
                        <ActivityIndicator size='large' color={colors.purpleSoft} />
                    ) : Platform.OS === 'ios' ? (
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
                <Row style={{ justifyContent: 'center', alignItems: 'flex-start', gap: 8, marginTop: 20 }}>
                    <ThemedText variant='headline3' style={{ fontWeight: 'normal' }}>{t('Signin_NewUserQuestion')} </ThemedText>
                    <Pressable onPress={() => navigation.navigate('Signup')}>
                        <ThemedText variant='headline3' style={{ fontWeight: 'normal' }} color={theme === 'light' ? 'purpleDeep' : 'purpleSoft'}>{t('Signin_NewUserClickLink')}</ThemedText>
                    </Pressable>
                </Row>
            </KeyboardAvoidingView>
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
        minHeight: 510,
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