import React, { createContext, useState, useContext } from 'react';
import * as auth from '@/services/auth';
import { router } from 'expo-router';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        const userData = await auth.login(email, password);
        setUser(userData);
        router.replace('/(tabs)');
    };

    const logout = async () => {
        await auth.logout();
        setUser(null);
        router.replace('/(auth)/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
