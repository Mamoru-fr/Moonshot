import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";

type Props = ViewProps & {
    gap?: number, 
};

export function Row({style, gap, ...rest}: Props) {
    return <View style={[RowStyle, style, gap? {gap: gap}: undefined]} {...rest}/>
}

const RowStyle = {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
} satisfies ViewStyle;