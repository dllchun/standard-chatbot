// app/playground/page.tsx
import React from "react";

const PlaygroundPage = () => {
  return (
    <div className="container mx-auto flex flex-col h-full p-6">
      {/* iFrame Container */}
      <div className="iframe-container flex-grow flex justify-center items-center bg-white rounded-lg shadow-md overflow-hidden">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/Kr1xs3v2UBvEaDnuSxV9F"
          frameBorder="0"
          className="w-full h-full min-h-[700px] rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default PlaygroundPage;
