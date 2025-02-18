import React, { useState } from "react";
import {
  MessageSquare,
  Users,
  Bookmark,
  Settings,
  Search,
  MoreHorizontal,
  Trash2,
  Star,
} from "lucide-react";

const ChatSidebar = ({
  onChatSelect,
  activeChat,
  conversations,
  onDeleteConversation,
  onToggleFavorite,
}) => {
  const [activeTab, setActiveTab] = useState("messages");
  const [searchQuery, setSearchQuery] = useState("");
  // Pour gérer quel menu d'options est ouvert (on en ouvre un seul à la fois)
  const [openOptionsId, setOpenOptionsId] = useState(null);

  const conversationsList = Object.entries(conversations).map(([id, data]) => ({
    id: parseInt(id),
    name: data.user.name,
    lastMessage: data.messages[data.messages.length - 1]?.text || "",
    time: data.messages[data.messages.length - 1]?.time || "",
    unread: 0,
    avatar: data.user.avatar,
    favorite: data.favorite,
  }));

  const filteredConversations = conversationsList.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // On ferme le menu d'options si ouvert
    setOpenOptionsId(null);
  };

  const handleChatClick = (chatId) => {
    onChatSelect(chatId);
    setOpenOptionsId(null);
  };

  const renderConversationItem = (chat) => (
    <div
      key={chat.id}
      className={`flex items-center space-x-3 p-4 hover:bg-blue-100 hover:rounded-2xl cursor-pointer transition-colors duration-150 ${
        activeChat === chat.id ? "bg-blue-100 rounded-2xl" : ""
      }`}
      onClick={() => handleChatClick(chat.id)}
    >
      {/* Partie gauche : Avatar et infos */}
      <div className="flex items-center space-x-3">
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
          <div className="flex items-center">
            <h3 className="font-medium truncate">{chat.name}</h3>
            {chat.favorite && <Star className="w-4 h-4 ml-1" fill="blue" />}
          </div>
          <div className="flex justify-between items-baseline">
            <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
            <span className="text-xs text-gray-500">{chat.time}</span>
          </div>
        </div>
      </div>

      {/* Partie droite : Bouton d'options (trois points) */}
      <div className="relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpenOptionsId(openOptionsId === chat.id ? null : chat.id);
          }}
        >
          <MoreHorizontal className="w-5 h-5 text-gray-600" />
        </button>
        {openOptionsId === chat.id && (
          <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg p-2 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(chat.id);
                setOpenOptionsId(null);
              }}
              className="block w-full text-left px-2 py-1 hover:bg-blue-100 text-sm"
            >
              {chat.favorite ? "Retirer Favori" : "Favori"}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDeleteConversation(chat.id);
                setOpenOptionsId(null);
              }}
              className="block w-full text-left px-2 py-1 text-red-600 hover:bg-red-100 text-sm"
            >
              Supprimer
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const getTabContent = () => {
    switch (activeTab) {
      case "messages":
        return (
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map(renderConversationItem)}
          </div>
        );
      case "saved":
        const savedConversations = filteredConversations.filter(
          (chat) => chat.favorite
        );
        return (
          <div className="flex-1 overflow-y-auto">
            {savedConversations.length > 0 ? (
              savedConversations.map(renderConversationItem)
            ) : (
              <p className="text-center text-gray-500 p-4">Aucun favori</p>
            )}
          </div>
        );
      case "contacts":
        return (
          <div className="flex-1 flex items-center justify-center text-gray-500 mt-20">
            <p>Contacts view coming soon</p>
          </div>
        );
      case "settings":
        return (
          <div className="flex-1 flex items-center justify-center text-gray-500 mt-20">
            <p>Settings coming soon</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full w-full md:w-80 bg-white flex flex-col fixed top-20 z-10 md:-ml-2">
      {/* Barre de recherche + navigation sticky (sous le header principal) */}
      <div className="sticky top-20 z-10 bg-white">
        <div className="p-4">
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
        <div className="flex justify-around p-2">
          <button
            onClick={() => {
              handleTabClick("messages");
            }}
            className={`p-2 rounded-lg transition-colors duration-150 ${
              activeTab === "messages"
                ? "text-blue-500 bg-blue-50"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            <MessageSquare className="w-6 h-6" />
          </button>
          <button
            onClick={() => {
              handleTabClick("contacts");
            }}
            className={`p-2 rounded-lg transition-colors duration-150 ${
              activeTab === "contacts"
                ? "text-blue-500 bg-blue-50"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            <Users className="w-6 h-6" />
          </button>
          <button
            onClick={() => {
              handleTabClick("saved");
            }}
            className={`p-2 rounded-lg transition-colors duration-150 ${
              activeTab === "saved"
                ? "text-blue-500 bg-blue-50"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            <Bookmark className="w-6 h-6" />
          </button>
          <button
            onClick={() => {
              handleTabClick("settings");
            }}
            className={`p-2 rounded-lg transition-colors duration-150 ${
              activeTab === "settings"
                ? "text-blue-500 bg-blue-50"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </div>
      {getTabContent()}
    </div>
  );
};

export default ChatSidebar;
