import React from "react";
import { Download, Trash2 } from "lucide-react";

const ChatMessage = ({ message, onDeleteMessage }) => {
  const isMe = message.sender === "me";

  const renderMedia = () => {
    if (!message.media) return null;

    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = message.media.url;
      link.download = message.media.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return (
      <div className="relative group">
        {message.media.type === "image" && (
          <img
            src={message.media.url}
            alt={message.media.name}
            className="max-w-xs rounded-lg cursor-pointer"
            onClick={() => window.open(message.media.url, "_blank")}
          />
        )}
        {message.media.type === "video" && (
          <video
            src={message.media.url}
            controls
            className="max-w-xs rounded-lg"
          />
        )}
        {message.media.type === "audio" && (
          <audio src={message.media.url} controls className="w-full" />
        )}
        <button
          onClick={handleDownload}
          className="absolute top-2 right-2 p-2 bg-black bg-opacity-50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <Download className="w-4 h-4" />
        </button>
      </div>
    );
  };

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"} relative`}>
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-2 relative ${
          isMe
            ? "bg-blue-500 text-white rounded-br-none"
            : "bg-white text-gray-800 rounded-bl-none"
        }`}
      >
        {renderMedia()}
        {message.text && <p className="mb-1 mt-2">{message.text}</p>}
        <p className={`text-xs ${isMe ? "text-blue-100" : "text-gray-500"}`}>
          {message.time}
        </p>
        {/* Bouton pour supprimer le message */}
        <button
          onClick={() => onDeleteMessage(message.id)}
          className="absolute top-1 right-1 p-1 hover:bg-red-100 rounded-full"
        >
          <Trash2 className="w-4 h-4 text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default ChatMessage;
