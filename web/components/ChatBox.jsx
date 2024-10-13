'use client';
// ChatBox.js
import React, { useState } from 'react';
import axios from 'axios';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return; // Ignore empty messages

    const newMessage = {
      text: inputMessage,
      sender: 'user',
    };

    // Update messages state with the new user message
    setMessages((prev) => [...prev, newMessage]);
    setInputMessage('');
    setLoading(true);

    try {
      // Replace with your API endpoint
      const response = await axios.post('https://your-api-url.com/chat', {
        message: inputMessage,
      });

      const aiMessage = {
        text: response.data.reply,
        sender: 'ai',
      };

      // Update messages state with the AI response
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        text: 'Sorry, something went wrong. Please try again.',
        sender: 'ai',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const toggleChatBox = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        onClick={toggleChatBox}
        className="fixed bottom-4 right-4 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Chat
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-amber-50 rounded-3xl shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center p-4 border-b bg-gradient-to-r from-green-300 via-blue-400 to-sky-300 rounded-3xl shadow-md shadow-blue-200 ">
              <h2 className="text-lg font-bold text-">Chat with AI</h2>
              <button onClick={toggleChatBox}>
                <FaTimes className="text-gray-800 hover:text-gray-600 text-lg" />
              </button>
            </div>
            <div className="flex flex-col h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-xs p-2 rounded-lg text-white ${
                      msg.sender === 'user' ? 'bg-blue-500' : 'bg-emerald-600'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="max-w-xs p-2 rounded-lg text-gray-700 bg-emerald-400">
                    Typing...
                  </div>
                </div>
              )}
            </div>
            <form
              onSubmit={handleSendMessage}
              className="flex p-4 border-t border-gray-300"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="ml-2 p-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <FaPaperPlane className='text-xl'/>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
