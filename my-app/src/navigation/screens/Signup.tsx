import React from 'react'
import { RootView } from '../../components/RootView'
import { Image, Pressable } from 'react-native'
import { getThemeColors, useThemeColors } from '../../hooks/useThemeColors';
import { useNavigation } from '@react-navigation/native';

import arrow from '../../assets/backArrowWeb.png'

export function Signup() {
    const colors = useThemeColors();
    const theme = getThemeColors();
    const navigation = useNavigation();
    return (
        <RootView>
            <Pressable onPress={navigation.goBack}>
                <Image source={arrow} />
            </Pressable>
        </RootView>
    )
}

