import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";

type Props = ViewProps & {
    gap?: number, 
};

export function Column({style, gap, ...rest}: Props) {
    return <View style={[ColumnStyle, style, gap? {gap: gap}: undefined]} {...rest}/>
}

const ColumnStyle = {
    flex: 0,
    flexDirection: 'column',
} satisfies ViewStyle;