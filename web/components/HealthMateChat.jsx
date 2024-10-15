'use client';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const HealthMateChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() && !symptoms.trim() && !file) return;

    const formData = new FormData();
    if (input.trim()) formData.append('message', input);
    if (symptoms.trim()) formData.append('symptoms', symptoms);
    if (file) formData.append('report', file);

    const newMessage = { 
      text: input || symptoms,
      isUser: true,
      image: file ? URL.createObjectURL(file) : null
    };
    setMessages([...messages, newMessage]);
    setInput('');
    setSymptoms('');
    setFile(null);
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/ai/health-inquiry', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      if (response.data.chatbot) {
        setMessages(prev => [...prev, { text: response.data.chatbot, isUser: false }]);
      }
      if (response.data.recommendation) {
        setMessages(prev => [...prev, { text: response.data.recommendation, isUser: false }]);
      }
      if (response.data.reportExplanation) {
        setMessages(prev => [...prev, { text: response.data.reportExplanation, isUser: false }]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { text: 'Sorry, I encountered an error. Please try again.', isUser: false }]);
    }

    setIsLoading(false);
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const toggleChatWindow = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={toggleChatWindow}
        className="fixed bottom-4 right-4 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Chat
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full">
            <div className="bg-gradient-to-r from-green-300 via-blue-400 to-sky-300 p-4 text-white text-xl font-bold rounded-t-lg">
              HealthMate Chat
              <button onClick={toggleChatWindow} className="float-right text-white text-lg">✖</button>
            </div>
            <div className="flex flex-col h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg text-white ${message.isUser ? 'bg-blue-500' : 'bg-emerald-600'}`}>
                    {message.text}
                    {message.image && (
                      <img src={message.image} alt="Uploaded" className="mt-2 rounded-lg max-w-full h-auto" />
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-300 rounded-lg px-4 py-2">
                    HealthMate is thinking...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-300">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a health question..."
                className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="Describe your symptoms..."
                className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex items-center">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                />
                <button 
                  type="button"
                  onClick={triggerFileInput}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition duration-300 mr-2"
                >
                  📎 Attach Report
                </button>
                <button 
                  type="submit" 
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 flex-grow"
                  disabled={isLoading}
                >
                  Send
                </button>
              </div>
              {file && (
                <div className="mt-2 text-sm text-gray-600">
                  File selected: {file.name}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthMateChat;
