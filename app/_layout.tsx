import { Stack } from "expo-router";
import "./globals.css";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          animation: 'fade'
        }}
      />
      <Stack.Screen
        name="movies/[id]"
        options={{
          headerShown: false,
          presentation: 'modal',
          animation: 'slide_from_bottom'
        }}
      />
    </Stack>
  );
}
