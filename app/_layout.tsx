import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "react-native";
import { FavoritesProvider } from "../contexts/FavoritesContext";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import "./globals.css";
import { useEffect } from "react";

const InitialLayout = () => {
  const { user } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      const inAuthGroup = segments[0] === "(auth)";

      if (user && inAuthGroup) {
        router.replace("/(tabs)/profile");
      } else if (!user && !inAuthGroup) {
        router.replace("/(auth)/login");
      }
    }, 1);
  }, [user, segments]);

  return (
    <Stack
      initialRouteName="(auth)/login"
      screenOptions={{
        contentStyle: { backgroundColor: '#0A0A0A' },
        headerStyle: {
          backgroundColor: '#0A0A0A',
        },
        animation: 'slide_from_right',
        animationDuration: 300,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        animationTypeForReplace: 'pop',
      }}
    >
      <Stack.Screen
        name="(auth)/login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="movies/[id]"
        options={{
          headerShown: false,
          animation:'simple_push',
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <StatusBar
          backgroundColor="#0A0A0A"
          barStyle="light-content"
          translucent
        />
        <InitialLayout />
      </FavoritesProvider>
    </AuthProvider>
  );
}
