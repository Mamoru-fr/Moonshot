import { Image, StyleSheet, View, ViewProps } from "react-native";
import { Row } from "./Row";
import logo from "../assets/AMTCGSGROUPE/LOGO AMTCGSGROUPE - FINAL.png";
import React from "react";
import { Colors } from "../constants/Colors";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";
import { useThemeColors } from "../hooks/useThemeColors";
import { ThemedText } from "./ThemedText";

type Props = ViewProps & {
    color?: string
}

export function Header({style, color, ...rest}: Props) {
    const colors = useThemeColors()
    const { t } = useTranslation(); 
    return (
        <Row style={styles.header}>
            <View style={styles.titleSide}>
                <Image source={logo} style={styles.logo}/>
                <ThemedText variant='headline3'>TaxiPlan</ThemedText>
            </View>
            <View style={styles.signButtons}>
            <Button>{t("signIn")}</Button>
            <Button color={colors.grayLight}>{t("signUp")}</Button>
            </View>
        </Row>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        maxHeight: 60,
        backgroundColor: Colors.light.grayWhite,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    logo: {
        width: 48,
        height: 48,
        borderRadius: 15,
    },
    signButtons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 7,
    },
    titleSide: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
    },
})