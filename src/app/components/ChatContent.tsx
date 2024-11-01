import { FC } from "react";
import { Message } from "../chat-log/page";

interface ChatContentProps {
  messages: Message[];
}

const ChatContent: FC<ChatContentProps> = ({ messages }) => {
  return (
    <section className="flex flex-col space-y-4">
      {messages.map((message, index) => (
        <div
          key={`${message.id}-${index}`}
          className={`${message.role === "user" ? "text-right" : "text-left"}`}
        >
          <div
            className={`inline-block max-w-lg p-3 rounded-lg ${
              message.role === "user"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            <div className="font-bold mb-1">
              {message.role === "user" ? "User" : "Assistant"}
            </div>
            <div>{message.content}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ChatContent;
