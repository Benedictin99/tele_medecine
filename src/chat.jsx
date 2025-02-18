// App.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  PaperAirplaneIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/outline";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Salut! 👋", sender: "them", timestamp: "10:42" },
    { id: 2, text: "Hey! Comment ça va?", sender: "me", timestamp: "10:43" },
    { id: 3, text: "Super, et toi?", sender: "them", timestamp: "10:44" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        sender: "me",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center">
        <button className="md:hidden p-2 mr-2">
          <Bars3BottomLeftIcon className="h-6 w-6 text-gray-600" />
        </button>
        <div className="flex items-center">
          <div className="h-10 w-10 bg-blue-500 rounded-full"></div>
          <div className="ml-3">
            <h2 className="font-semibold text-gray-800">Chat Messenger</h2>
            <p className="text-sm text-gray-500">En ligne</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs md:max-w-md p-3 rounded-lg ${
                message.sender === "me"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800 shadow"
              }`}
            >
              <p>{message.text}</p>
              <p
                className={`text-xs mt-1 ${
                  message.sender === "me" ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white p-4 flex items-center space-x-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Écrire un message..."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSend}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <PaperAirplaneIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
