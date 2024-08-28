import { useState } from 'react';
import { Stack, Link, router } from 'expo-router';
import { Text, TextInput, View, KeyboardAvoidingView, Platform, ScrollView,StatusBar } from 'react-native';
import { Image } from 'expo-image';
import { Button } from 'components/Button';

export default function index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    router.replace({pathname: "/(main)" as any});
  };

  return (
    <>
<StatusBar barStyle="light-content"  />
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <Stack.Screen options={{ headerShown: false }} />
    
        <View className="w-full h-[30vh] bg-primary dark:primary rounded-b-3xl flex items-center justify-center mb-8">
          <Image source={require('../../assets/own/healthcare.png')} 
          style={{ width: 100, height: 100 }} />
          <Text className="text-white text-3xl font-bold">HealthMate</Text>
          <Text className="text-white text-lg mt-2">Your All-in-One Health Solution</Text>
         
        </View>
       
        <View className="w-full h-full flex-1 justify-center bg-background items-center">
          <View className="w-full max-w-sm">
            <Text className="text-2xl font-bold mb-6 dark:text-white text-center">Login</Text>
            <TextInput
              className="w-full bg-white border border-gray-300 rounded-2xl py-3 px-4 mb-4"
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              className="w-full bg-white border border-gray-300 rounded-2xl py-3 px-4 mb-6"
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Button 
            title="Login" onPress={handleLogin} />
            <Link href={"/signup" as any} className="mt-4 text-center text-blue-500">
              <Text>Don't have an account? Sign up</Text>
            </Link>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
    </>
  );
}
