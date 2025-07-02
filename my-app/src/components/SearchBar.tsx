import { Image, StyleSheet } from "react-native"
import { useThemeColors } from "../hooks/useThemeColors"
import { Row } from "./Row"
import { TextInput } from "react-native-gesture-handler";

type Props = {
    value: string, // The current value of the search bar
    onChange: (s: string) => void, // A function to call when the value changes
}

export function SearchBar({ value, onChange }: Props) {
    /* 
    This function is to implement a search bar that allows users to search for items in a list.
    */
    const colors = useThemeColors(); // Get the current theme colors
    return (
        <Row
        gap={8}
        style={[styles.wrapper, {backgroundColor: colors.grayLight}]}
        > {/* The search bar is a row with a logo and an input field */}
            <Image 
            source={require('../assets/search.png')}
            style={styles.logo}/> {/* The logo is a search icon */}
            <TextInput
            onChangeText={onChange}
            value={value}
            style={[styles.input, {color: colors.grayLight}]}
            placeholder="Search"
            placeholderTextColor={colors.grayDark}/> {/* The input field is where the user can type in the search query */}
        </Row>
    )
}


const styles = StyleSheet.create({
    logo: {
        width: 16,
        height: 16,
    }, // The style for the logo
    input: {
        flex: 1,
        height: 16,
        fontSize: 10,
        lineHeight: 12,
    }, // The style for the input field
    wrapper : {
        flex: 1,
        borderRadius: 16,
        height: 32,
        paddingHorizontal: 12,
    }, // The style for the design
})