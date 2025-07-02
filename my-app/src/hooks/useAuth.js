import { onAuthStateChanged } from '@react-native-firebase/auth';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function useAuth(params) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            console.log('got user: ', user);
            user ? setUser(user) : setUser(null)

        })
        return unsub;
    }, [])
    return { user }
}
