// WhatsAppButton.jsx
import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "918800541031";
  const message = "Hello! I want to chat with you."; // Default message

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.81 11.81 0 0012 .5C5.65.5.5 5.65.5 12a11.81 11.81 0 002.74 7.84l-1.8 6.57 6.73-1.76A11.82 11.82 0 0012 23.5c6.35 0 11.5-5.15 11.5-11.5a11.81 11.81 0 00-3.98-8.52zM12 21.5a9.45 9.45 0 01-4.84-1.35l-.35-.21-3.97 1.03 1.05-3.91-.23-.36A9.44 9.44 0 012.5 12C2.5 6.2 6.7 2 12 2s9.5 4.2 9.5 9.5S17.3 21.5 12 21.5zm5.11-7.53c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94-.28.18-.52.06c-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65s0-.34.11-.45c.12-.12.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.54-1.3-.74-1.8c-.2-.5-.4-.42-.54-.42-.14 0-.3 0-.46 0s-.42.06-.64.3c-.22.24-.84.82-.84 2s.86 2.34.98 2.5c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.52.58.18 1.11.16 1.53.1.47-.06 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
