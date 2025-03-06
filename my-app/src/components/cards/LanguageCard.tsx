import { ImageBackground, Platform, Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { getThemeColors, useThemeColors } from "../../hooks/useThemeColors";
import { Shadows } from "../../constants/Shadows";
import { ThemedText } from "../ThemedText";
import LanguageList from '../../services/LanguagesList.json';

type Props = {
    style?: ViewStyle;
    languageName: string;
    onPress?: () => void;
}

// Define the type of LanguageList
interface Language {
    name: string;
    nativeName: string;
}

interface LanguageListType {
    [key: string]: Language;
}

type LanguageKeys = 'en' | 'es' | 'fr' | 'de' | 'jp' | 'ru';

const images: Record<LanguageKeys, any> = {
    en: require('../../assets/countryFlags/EnglishFlag.png'),
    es: require('../../assets/countryFlags/SpanishFlag.png'),
    fr: require('../../assets/countryFlags/FrenchFlag.png'),
    de: require('../../assets/countryFlags/GermanFlag.png'),
    jp: require('../../assets/countryFlags/JapaneseFlag.png'),
    ru: require('../../assets/countryFlags/RussianFlag.png'),
};

export function LanguageCard({ style, languageName, onPress }: Props) {
    console.log('languageList', LanguageList,);
    console.log('LanguageName', languageName);
    const colors = useThemeColors();
    const theme = getThemeColors();
    const image = images[(languageName as LanguageKeys)];

    if (!image) {
        console.error(`Image for ${languageName} not found.`);
    }

    return (
        <Pressable style={[style, styles.wrapper]} onPress={onPress}>
            <View style={[styles.container]}>
                <ImageBackground source={image} resizeMode='stretch' style={styles.image}>
                    <View style={[styles.shadow, { shadowColor: theme === 'light' ? colors.grayDark : colors.grayLight }]} />
                    <ThemedText variant='body1' color={theme === 'light' ? 'grayDark' : 'grayLight'} style={styles.text}>
                        {(LanguageList as LanguageListType)[languageName].nativeName}
                    </ThemedText>
                </ImageBackground>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        borderRadius: 8,
        overflow: 'hidden',
        ...Shadows.dp2,
    },
    image: {
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        flex: 1,
    },
    shadow: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40%',
        borderRadius: 7,
        zIndex: -1,
    },
    text: {
        textAlign: 'center',
        padding: 5,
        fontWeight: 'bold',
    },
    wrapper: {
        padding: 5,
        height: '100%',
        margin: 5,
    }
});