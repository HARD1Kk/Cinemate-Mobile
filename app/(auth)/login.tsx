import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'

const Login = () => {
    const { login } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = async () => {
        setLoading(true)
        try {
            await login(email, password)
        } catch (error) {
            Alert.alert("Login Failed", error.message)
        }
        setLoading(false)
    }

    return (
        <View className='flex-1 bg-primary justify-center items-center p-5'>
            <Text className='text-white text-3xl font-bold mb-10'>Login</Text>
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
            <TouchableOpacity
                className='w-full h-14 bg-accent justify-center items-center rounded-lg'
                onPress={handleLogin}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text className='text-white text-lg font-bold'>Login</Text>
                )}
            </TouchableOpacity>
        </View>
    )
}

export default Login
