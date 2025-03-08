import { Dimensions, Image, Platform, Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { getThemeColors, useThemeColors } from "../../hooks/useThemeColors";
import { Shadows } from "../../constants/Shadows";
import { ThemedText } from "../ThemedText";
import LanguageList from '../../services/LanguagesList.json';
import { useEffect, useState } from "react";

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
    // State to hold screen dimensions
    const [dimensions, setDimensions] = useState({
        width: Dimensions.get('window').width,
    });

    useEffect(() => {
        const handleOrientationChange = () => {
            setDimensions({
                width: Dimensions.get('window').width,
            });
        };

        // Add event listener for orientation changes
        Dimensions.addEventListener('change', handleOrientationChange);
    }, []);
    const widthDivisor = Platform.OS === "web" ? 4 : 2
    const screenWidth = (dimensions.width) / widthDivisor;
    const aspectRatio = 366 / 550; // Height / Width from your original dimensions
    const calculatedHeight = screenWidth * aspectRatio;
    const textSize = calculatedHeight * 0.11;

    console.log('languageList', LanguageList,);
    console.log('LanguageName', languageName);
    const colors = useThemeColors();
    const theme = getThemeColors();
    const image = images[(languageName as LanguageKeys)];

    if (!image) {
        console.error(`Image for ${languageName} not found.`);
    }
    return (
        <Pressable style={[style, styles.wrapper, { width: screenWidth, height: calculatedHeight }]} onPress={onPress}>
            <View style={[styles.container]}>
                <Image source={image} style={styles.image} />
                <View style={[styles.shadow, { shadowColor: theme === 'light' ? colors.grayDark : colors.grayLight }]} />
                <ThemedText variant='body1' color={theme === 'light' ? 'grayDark' : 'grayLight'} style={[styles.text, { paddingVertical: (calculatedHeight / 2) - textSize , fontSize: textSize }]}>
                    {(LanguageList as LanguageListType)[languageName].nativeName}
                </ThemedText>
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
        zIndex: -1,
    },
    shadow: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40%',
        borderRadius: 7,
        zIndex: 1,
    },
    text: {
        padding: 5,
        fontWeight: 'bold',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
    },
    wrapper: {
        padding: 5,
        maxHeight: '95%',
        maxWidth: '95%',
        margin: 5,
    }
});