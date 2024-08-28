import { useState } from 'react';

import { Text, TextInput, View,SafeAreaView,Button } from 'react-native';


export default function Signup() {
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [name, setName] = useState('');
 
  const [password, setPassword] = useState('');

  const handleSignup =async () => {
    // Handle signup logic here
   try {
    
      
   } catch (error) {
    
   }
  };

  return (
    <>
      
    
        <View className="flex-1 bg-primary">
          <View className="flex-1 justify-center items-center">
            <View className="w-full max-w-sm p-8 rounded-3xl bg-white shadow-lg shadow-primary">
              <Text className="text-3xl font-bold mb-8 text-center text-purple font-pregular">Sign Up</Text>
              <TextInput
                className="w-full bg-gray-100 border border-gray-200 rounded-lg py-3 px-4 mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                className="w-full bg-gray-100 border border-gray-200 rounded-lg py-3 px-4 mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Phone Number"
                keyboardType="phone-pad"
                value={phoneNo}
                onChangeText={setPhoneNo}
              />
              <TextInput
                className="w-full bg-gray-100 border border-gray-200 rounded-lg py-3 px-4 mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
         
              <TextInput
                className="w-full bg-gray-100 border border-gray-200 rounded-lg py-3 px-4 mb-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Set Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <Button title="Sign Up" onPress={handleSignup}  />
            </View>
          </View>
        </View>
    
    </>
  );
}
