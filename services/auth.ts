interface User {
    name: string ;
    email: string ;
    avatar: string | number;
}

const randomNames = [
    'Time Traveller',
    'Cosmic Surfer',
    'Quantum Leap',
    'Star Gazer',
    'Galaxy Rider',
];

export const login = async (email: string, password: string): Promise<User> => {
    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === 'test@test.com' && password === 'password') {
        const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
        const randomImageId = Math.floor(Math.random() * 1000);
        return {
            name: randomName,
            email: 'test@test.com',
            avatar: `https://picsum.photos/seed/${randomImageId}/3000/2000`,
        };
    }

    throw new Error('Invalid email or password');
};

export const logout = async () => {
    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 500));
};
