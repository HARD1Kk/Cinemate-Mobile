export interface User {
    name: string;
    email: string;
    password: string;
    avatar: string;
}

import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = '@movie_app_users';

let users: User[] = [];

// Initialize with test user and load existing users
(async () => {
    try {
        const storedUsers = await AsyncStorage.getItem(USERS_KEY);
        if (storedUsers) {
            users = JSON.parse(storedUsers);
        } else {
            // Seed initial test user
            users = [{
                name: 'Test User',
                email: 'test@test.com',
                password: 'password',
                avatar: 'https://picsum.photos/seed/42/3000/2000'
            }];
            await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
        }
    } catch (error) {
        console.error('Error initializing users:', error);
    }
})();

export const login = async (email: string, password: string): Promise<User> => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        return {
            ...user,
            // Explicitly include password to satisfy TypeScript
            password: user.password
        };
    }

    throw new Error('Invalid email or password');
};

export const register = async (name: string, email: string, password: string): Promise<User> => {
    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (users.some(u => u.email === email)) {
        throw new Error('Email already registered');
    }

    const randomImageId = Math.floor(Math.random() * 1000);
    const newUser = {
        name: name || 'New User',
        email,
        password,
        avatar: `https://picsum.photos/seed/${randomImageId}/200/300`,
    };
   
    users.push(newUser);
    return newUser;
};

export const logout = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
};
