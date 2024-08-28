import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, FlatList, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import { Container } from 'components/Container'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Chatbot = () => {
  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('')
  const navigation = useNavigation()

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        navigation.setOptions({
          tabBarStyle: { display: 'none' },
        })
      }
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        navigation.setOptions({
          tabBarStyle: { display: 'flex' },
        })
      }
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  const renderMessage = ({ item }: { item: any }) => (
    <View className={`p-3 my-1 rounded-2xl max-w-[80%] ${item.sender === 'user' ? 'bg-primary self-end' : 'bg-gray-100 self-start'}`}>
      <Text className={`${item.sender === 'user' ? 'text-white' : 'text-gray-800'}`}>{item.text}</Text>
    </View>
  )

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { id: Date.now(), text: inputText, sender: 'user' }])
      setInputText('')
      // Here you would typically call your chatbot API and add its response
    }
  }

  return (
    <Container>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View className="flex-1 bg-white rounded-3xl">
          <Text className='text-3xl font-bold text-primary text-center py-4 border-b border-gray-200'>Chatbot</Text>
          <FlatList
            data={messages}
            renderItem={renderMessage}
            keyExtractor={item => item.id.toString()}
            className="flex-1 px-4 pt-4"
            inverted
          />
          <View className="flex-row items-center p-4 border-t border-gray-200">
            <TextInput
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 mr-2"
              placeholder="Type a message..."
              value={inputText}
              onChangeText={setInputText}
            />
            <TouchableOpacity 
              className="bg-primary p-3 rounded-full"
              onPress={handleSend}
            >
              <Ionicons name="send" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Container>
  )
}

export default Chatbot