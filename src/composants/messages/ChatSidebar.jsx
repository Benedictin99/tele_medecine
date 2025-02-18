import React, { useState } from "react";
import { MessageSquare, Users, Bookmark, Settings, Search } from "lucide-react";

const ChatSidebar = ({ onChatSelect, activeChat, conversations }) => {
  const [activeTab, setActiveTab] = useState("messages");
  const [searchQuery, setSearchQuery] = useState("");

  const conversationsList = Object.entries(conversations).map(([id, data]) => ({
    id: parseInt(id),
    name: data.user.name,
    lastMessage: data.messages[data.messages.length - 1].text,
    time: data.messages[data.messages.length - 1].time,
    unread: 0,
    avatar: data.user.avatar,
  }));

  const filteredConversations = conversationsList.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleChatClick = (chatId) => {
    console.log("Chat clicked:", chatId); // Debug log
    onChatSelect(chatId);
  };

  const getTabContent = () => {
    switch (activeTab) {
      case "messages":
        return (
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((chat) => (
              <div
                key={chat.id}
                onClick={() => handleChatClick(chat.id)}
                className={`flex items-center space-x-3 p-4 hover:bg-blue-100 cursor-pointer transition-colors duration-150 ${
                  activeChat === chat.id ? "bg-blue-100 rounded-xl" : ""
                }`}
              >
                <div className="relative">
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full"
                  />
                  {chat.unread > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {chat.unread}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium truncate">{chat.name}</h3>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        );
      case "contacts":
        return (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            <p>Contacts view coming soon</p>
          </div>
        );
      case "saved":
        return (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            <p>Saved messages coming soon</p>
          </div>
        );
      case "settings":
        return (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            <p>Settings coming soon</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-80 h-full bg-white flex flex-col fixed top-0 mt-18 -ml-3">
      {/* Sidebar Header */}
      <div className="p-4 ">
        <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search messages"
            className="bg-transparent focus:outline-none flex-1 text-sm"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-around p-2 ">
        <button
          onClick={() => handleTabClick("messages")}
          className={`p-2 rounded-lg transition-colors duration-150 ${
            activeTab === "messages"
              ? "text-blue-500 bg-blue-50"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          <MessageSquare className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleTabClick("contacts")}
          className={`p-2 rounded-lg transition-colors duration-150 ${
            activeTab === "contacts"
              ? "text-blue-500 bg-blue-50"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          <Users className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleTabClick("saved")}
          className={`p-2 rounded-lg transition-colors duration-150 ${
            activeTab === "saved"
              ? "text-blue-500 bg-blue-50"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          <Bookmark className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleTabClick("settings")}
          className={`p-2 rounded-lg transition-colors duration-150 ${
            activeTab === "settings"
              ? "text-blue-500 bg-blue-50"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          <Settings className="w-6 h-6" />
        </button>
      </div>

      {/* Tab Content */}
      {getTabContent()}
    </div>
  );
};

export default ChatSidebar;
