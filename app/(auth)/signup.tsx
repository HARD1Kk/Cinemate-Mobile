import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { router } from 'expo-router'

const Signup = () => {
    const { register } = useAuth()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords don't match")
            return
        }

        setLoading(true)
        try {
            await register(name, email, password)
            router.replace('/(tabs)')
        } catch (error) {
            Alert.alert("Signup Failed", error instanceof Error ? error.message : 'Registration failed')
        }
        setLoading(false)
    }

    return (
        <View className='flex-1 bg-primary justify-center items-center p-5'>
            <Image
                source={require('../../assets/icons/logo.png')}
                className="w-32 h-32 mb-8"
                resizeMode="contain"
            />
            <Text className='text-white text-3xl font-bold mb-10'>Sign Up</Text>
            <TextInput
                className='w-full h-14 bg-gray-800 text-white px-5 rounded-lg mb-5'
                placeholder='Name'
                placeholderTextColor='#ccc'
                value={name}
                onChangeText={setName}
            />
            <TextInput
                className='w-full h-14 bg-gray-800 text-white px-5 rounded-lg mb-5'
                placeholder='Email'
                placeholderTextColor='#ccc'
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                className='w-full h-14 bg-gray-800 text-white px-5 rounded-lg mb-5'
                placeholder='Password'
                placeholderTextColor='#ccc'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                className='w-full h-14 bg-gray-800 text-white px-5 rounded-lg mb-5'
                placeholder='Confirm Password'
                placeholderTextColor='#ccc'
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
                className='w-full h-14 bg-accent justify-center items-center rounded-lg'
                onPress={handleSignup}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text className='text-white text-lg font-bold'>Sign Up</Text>
                )}
            </TouchableOpacity>
            
            <TouchableOpacity 
                className="mt-4"
                onPress={() => router.push('/(auth)/login')}
            >
                <Text className="text-gray-400 text-center">
                    Already have an account?{' '}
                    <Text className="text-accent font-bold">Login</Text>
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Signup