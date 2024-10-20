"use client";
import React, { useState, useRef, useEffect } from "react";
import api from "@/utils/api";
import axios from "axios";
import Image from "next/image";

const HealthMateChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() && !symptoms.trim() && !file) return;

    const formData = new FormData();
    if (input.trim()) formData.append("message", input);
    if (symptoms.trim()) formData.append("symptoms", symptoms);
    if (file) formData.append("report", file);

    const newMessage = {
      text: input || symptoms,
      isUser: true,
      image: file ? URL.createObjectURL(file) : null,
    };
    setMessages([...messages, newMessage]);
    setInput("");
    setSymptoms("");
    setFile(null);
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/ai/health-inquiry",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.chatbot) {
        setMessages((prev) => [
          ...prev,
          { text: response.data.chatbot, isUser: false },
        ]);
      }
      if (response.data.recommendation) {
        setMessages((prev) => [
          ...prev,
          { text: response.data.recommendation, isUser: false },
        ]);
      }
      if (response.data.reportExplanation) {
        setMessages((prev) => [
          ...prev,
          { text: response.data.reportExplanation, isUser: false },
        ]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I encountered an error. Please try again.",
          isUser: false,
        },
      ]);
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

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="bg-blue-600 text-white p-4 text-xl font-bold">
        HealthMate Chat
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.isUser ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.isUser ? "bg-blue-500 text-white" : "bg-white"
              }`}
            >
              {message.text}
              {message.image && (
                <Image
                  src={message.image}
                  alt="Uploaded"
                  width={20}
                  height={20}
                  unoptimized
                  className="mt-2 rounded-lg max-w-full h-auto"
                />
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
      <form onSubmit={handleSubmit} className="p-4 bg-white">
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
  );
};

export default HealthMateChat;
