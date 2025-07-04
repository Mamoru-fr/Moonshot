import { StyleSheet, View, ViewProps } from "react-native";
import { Row } from "./Row";
import { ThemedText } from "./ThemedText";
import React from "react";

type Props = ViewProps & {
    textInput: string,
}


export function Separator({ style, textInput }: Props) {
    return (
        <View style={[style, styles.separatorStyle]}>
            <Row style={styles.separatorRow}>
                <View style={styles.separatorLine} />
                <ThemedText variant='body1' style={styles.separatorText}>{textInput}</ThemedText>
                <View style={styles.separatorLine} />
            </Row>
        </View>
    )
}

const styles = StyleSheet.create({
    separatorLine : {
        flex: 1,
        height: 1,
        backgroundColor: '#DCDCDC'
    },
    separatorRow: {
        justifyContent: 'center'
    },
    separatorStyle: {
        marginVertical: 10,
        height: 30,
    },
    separatorText : {
        padding : 10,
    }
}) 