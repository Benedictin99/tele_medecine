import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Phone,
  Video,
  MoreVertical,
  Search,
  Paperclip,
  Smile,
  X,
  Image as ImageIcon,
  Film,
  Music,
  Download,
  ArrowLeft,
} from "lucide-react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import ChatMessage from "../../composants/messages/ChatMessage";
import ChatSidebar from "../../composants/messages/ChatSidebar";

const Messages = () => {
  // Exemple de données initiales
  const initialConversations = {
    1: {
      user: {
        name: "Sarah Parker",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
        status: "Online",
      },
      // On ajoute la propriété favorite par défaut à false
      favorite: false,
      messages: [
        { id: 1, text: "Hey there! 👋", sender: "other", time: "10:00 AM" },
        { id: 2, text: "Hi! How are you?", sender: "me", time: "10:01 AM" },
        {
          id: 3,
          text: "I'm doing great! Just working on some new projects.",
          sender: "other",
          time: "10:02 AM",
        },
        {
          id: 4,
          text: "That sounds exciting! What kind of projects?",
          sender: "me",
          time: "10:03 AM",
        },
      ],
    },
    2: {
      user: {
        name: "John Smith",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
        status: "Last seen 2h ago",
      },
      favorite: false,
      messages: [
        {
          id: 1,
          text: "Hey, are we still meeting today?",
          sender: "other",
          time: "9:45 AM",
        },
        { id: 2, text: "Yes, at 2 PM", sender: "me", time: "9:46 AM" },
        {
          id: 3,
          text: "Perfect, see you then!",
          sender: "other",
          time: "9:47 AM",
        },
      ],
    },
    3: {
      user: {
        name: "Emily Wilson",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
        status: "Online",
      },
      favorite: false,
      messages: [
        {
          id: 1,
          text: "I finished reviewing the presentation",
          sender: "other",
          time: "Yesterday",
        },
        {
          id: 2,
          text: "The presentation looks great!",
          sender: "other",
          time: "Yesterday",
        },
        {
          id: 3,
          text: "Thanks! Any suggestions for improvements?",
          sender: "me",
          time: "Yesterday",
        },
      ],
    },
  };

  const [conversations, setConversations] = useState(initialConversations);
  const [activeChat, setActiveChat] = useState(1);
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showFileMenu, setShowFileMenu] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Détection du mode mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pour afficher ou masquer la liste des conversations en mobile
  const [showChatList, setShowChatList] = useState(isMobile);

  // Scroll automatique vers le bas
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [conversations, activeChat]);

  // Sélection d'un chat
  const handleChatSelect = (chatId) => {
    setActiveChat(chatId);
    setShowEmojiPicker(false);
    setShowFileMenu(false);
    setSelectedFile(null);
    if (isMobile) {
      setShowChatList(false);
    }
  };

  // Envoi de message
  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (message.trim() || selectedFile) {
      const newMessage = {
        id: conversations[activeChat].messages.length + 1,
        text: message.trim(),
        sender: "me",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        media: selectedFile
          ? {
              type: selectedFile.type,
              url: selectedFile.preview,
              name: selectedFile.name,
            }
          : null,
      };

      setConversations((prev) => ({
        ...prev,
        [activeChat]: {
          ...prev[activeChat],
          messages: [...prev[activeChat].messages, newMessage],
        },
      }));
      setMessage("");
      setSelectedFile(null);
    }
  };

  // Suppression d'un message (dans la conversation active)
  const handleDeleteMessage = (msgId) => {
    setConversations((prev) => ({
      ...prev,
      [activeChat]: {
        ...prev[activeChat],
        messages: prev[activeChat].messages.filter((msg) => msg.id !== msgId),
      },
    }));
  };

  // Suppression d'une conversation entière
  const handleDeleteConversation = (chatId) => {
    setConversations((prev) => {
      const newConversations = { ...prev };
      delete newConversations[chatId];
      if (activeChat === chatId) {
        const keys = Object.keys(newConversations);
        setActiveChat(keys.length > 0 ? Number(keys[0]) : null);
      }
      return newConversations;
    });
  };

  // Ajout/suppression de favoris pour une conversation
  const handleToggleFavorite = (chatId) => {
    setConversations((prev) => ({
      ...prev,
      [chatId]: {
        ...prev[chatId],
        favorite: !prev[chatId].favorite,
      },
    }));
  };

  // Gestion des emojis
  const handleEmojiSelect = (emoji) => {
    setMessage((prev) => prev + emoji.native);
  };

  // Gestion des fichiers
  const handleFileSelect = (type) => {
    if (fileInputRef.current) {
      fileInputRef.current.accept =
        type === "image" ? "image/*" : type === "video" ? "video/*" : "audio/*";
      fileInputRef.current.click();
    }
    setShowFileMenu(false);
  };
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      const fileType = file.type.split("/")[0];
      setSelectedFile({
        preview: fileUrl,
        type: fileType,
        name: file.name,
      });
    }
    e.target.value = "";
  };
  const cancelFileUpload = () => {
    setSelectedFile(null);
  };

  const activeConversation = conversations[activeChat];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar : affichée toujours en desktop, ou si showChatList est true en mobile */}
      {(!isMobile || showChatList) && (
        <ChatSidebar
          onChatSelect={handleChatSelect}
          activeChat={activeChat}
          conversations={conversations}
          onDeleteConversation={handleDeleteConversation}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {/* Zone de chat : affichée toujours en desktop, ou si showChatList est false en mobile */}
      {(!isMobile || !showChatList) && activeConversation && (
        <div className="flex-1 flex flex-col relative md:ml-78">
          {/* Chat Header (sticky sous le Header principal) */}
          <div className="sticky top-20 z-0 bg-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {isMobile && (
                <button
                  onClick={() => setShowChatList(true)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
              )}
              <img
                src={activeConversation.user.avatar}
                alt={activeConversation.user.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="font-semibold">
                  {activeConversation.user.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {activeConversation.user.status}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Phone className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Video className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Zone des messages (scrollable) */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 mt-20"
            ref={chatContainerRef}
          >
            {activeConversation.messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg}
                onDeleteMessage={handleDeleteMessage}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Aperçu du fichier sélectionné */}
          {selectedFile && (
            <div className="bg-gray-50 p-4 border-t">
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  {selectedFile.type === "image" && (
                    <img
                      src={selectedFile.preview}
                      alt="Preview"
                      className="max-w-xs rounded-lg"
                    />
                  )}
                  {selectedFile.type === "video" && (
                    <video
                      src={selectedFile.preview}
                      controls
                      className="max-w-xs rounded-lg"
                    />
                  )}
                  {selectedFile.type === "audio" && (
                    <audio
                      src={selectedFile.preview}
                      controls
                      className="w-full"
                    />
                  )}
                  <p className="mt-2 text-sm text-gray-600">
                    {selectedFile.name}
                  </p>
                </div>
                <button
                  onClick={cancelFileUpload}
                  className="p-1 hover:bg-gray-200 rounded-full"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          )}

          {/* Zone de saisie */}
          <div className="sticky bottom-0">
            {showEmojiPicker && (
              <div className="absolute bottom-16 right-4 mb-2 z-10">
                <Picker
                  data={data}
                  onEmojiSelect={handleEmojiSelect}
                  theme="light"
                  set="native"
                />
              </div>
            )}
            {showFileMenu && (
              <div className="absolute bottom-16 left-16 mb-2 bg-white rounded-lg shadow-lg p-2 border z-10">
                <div className="space-y-2">
                  <button
                    onClick={() => handleFileSelect("image")}
                    className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100 rounded"
                  >
                    <ImageIcon className="w-5 h-5 text-blue-500" />
                    <span>Image</span>
                  </button>
                  <button
                    onClick={() => handleFileSelect("video")}
                    className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100 rounded"
                  >
                    <Film className="w-5 h-5 text-purple-500" />
                    <span>Vidéo</span>
                  </button>
                  <button
                    onClick={() => handleFileSelect("audio")}
                    className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100 rounded"
                  >
                    <Music className="w-5 h-5 text-green-500" />
                    <span>Audio</span>
                  </button>
                </div>
              </div>
            )}
            <form onSubmit={handleSendMessage} className="p-4">
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowFileMenu(!showFileMenu);
                    setShowEmojiPicker(false);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-full relative"
                >
                  <Paperclip className="w-5 h-5 text-gray-600" />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tapez un message..."
                  className="flex-1 p-2 border rounded-full focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => {
                    setShowEmojiPicker(!showEmojiPicker);
                    setShowFileMenu(false);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <Smile className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
