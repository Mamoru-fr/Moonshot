import { ImageBackground, Platform, Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { getThemeColors, useThemeColors } from "../../hooks/useThemeColors";
import { Shadows } from "../../constants/Shadows";
import { ThemedText } from "../ThemedText";
import LanguageList from '../../services/LanguagesList.json';

type Props = {
    style?: ViewStyle;
    languageName: string;
    changeMethod: void;
}

// Define the type of LanguageList
interface Language {
    name: string;
    nativeName: string;
  }
  
  interface LanguageListType {
    [key: string]: Language;
  }

export function LanguageCard({ style, languageName, changeMethod }: Props) {
    const colors = useThemeColors();
    const theme = getThemeColors();
    const image = require(`../../assets/countryFlags/FrenchFlag.png`);
    return (
        <Pressable style={[style, styles.wrapper]} onPress={() => changeMethod}>
            <View style={[styles.container]}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <View style={[styles.shadow, { shadowColor: theme === 'light' ? colors.grayDark : colors.grayLight }]}/>
                    <ThemedText variant='body1' color={theme === 'light' ? 'grayDark' : 'grayLight'} style={styles.text}>{(LanguageList as LanguageListType)[languageName].nativeName}</ThemedText>
                </ImageBackground>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        borderRadius: 8,
        overflow: 'hidden',
        ...Shadows.dp2
    },
    image: {
        justifyContent: 'center',
        height: 100,
        ...Platform.select({
            default: {
                flex: 1,
            },
            web: {
                flex: 1/4,
            },
        }),
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
        textAlignVertical: 'bottom',
        padding: 5,
    },
    wrapper : {
        padding: 5,
    }
});