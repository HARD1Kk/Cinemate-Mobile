import React, { createContext, useState, useContext, ReactNode } from 'react';
import * as auth from '@/services/auth';
import { router } from 'expo-router';
import { User } from '@/services/auth';

interface AuthContextType {
    user: Omit<User, 'password'> | null; // Exclude password from exposed user object
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (email: string, password: string) => {
        const userData = await auth.login(email, password);
        setUser(userData);
        router.replace('/(tabs)');
    };

    const register = async (name: string, email: string, password: string) => {
        const userData = await auth.register(name, email, password);
        setUser(userData);
        router.replace('/(tabs)');
    };

    const logout = async () => {
        await auth.logout();
        setUser(null);
        router.replace('/(auth)/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context as {
        user: User | null;
        login: (email: string, password: string) => Promise<void>;
        register: (name: string, email: string, password: string) => Promise<void>;
        logout: () => Promise<void>;
    };
};
