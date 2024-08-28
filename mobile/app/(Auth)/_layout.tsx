import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
    initialRouteName="login"
  
    >
      <Stack.Screen name="login"
      options={{
        title: "Login",
        headerShown: false,
      }}
      />
      <Stack.Screen name="signup"
      options={{
        title: "Signup",
        headerShown: false,
      }}
      />
    </Stack>
  );
}