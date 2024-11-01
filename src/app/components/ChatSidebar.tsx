import React, { FC, useEffect } from "react";
import {
  extractPhoneNumberFromUser,
  formatDateTo24Hour,
} from "../utils/chatUtils"; // Utility functions
import { Conversation } from "../chat-log/page";
import LoadingIndicator from "./LoadingIndicator"; // Import the LoadingIndicator component

interface ChatSidebarProps {
  conversations: Conversation[];
  onSelectConversation: (conversationId: string) => void;
  onLoadMore: () => void;
  isLoading: boolean;
  endOfList: boolean;
  onSearch: (searchTerm: string) => void;
  sidebarRef: React.RefObject<HTMLDivElement>;
}

const ChatSidebar: FC<ChatSidebarProps> = ({
  conversations,
  onSelectConversation,
  onLoadMore,
  isLoading,
  endOfList,
  onSearch,
  sidebarRef,
}) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  // Detect scrolling to the bottom of the sidebar and call onLoadMore
  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = sidebarRef.current;
        if (
          scrollTop + clientHeight >= scrollHeight - 5 &&
          !isLoading &&
          !endOfList
        ) {
          onLoadMore();
        }
      }
    };

    const sidebarElement = sidebarRef.current;
    if (sidebarElement) {
      sidebarElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (sidebarElement) {
        sidebarElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [onLoadMore, isLoading, endOfList, sidebarRef]);

  return (
    <nav
      ref={sidebarRef}
      className="w-full h-full border-r flex-shrink-0 overflow-y-auto"
    >
      {/* Search input */}
      <div className="p-4">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search conversations..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Conversation List */}
      <ul className="space-y-2">
        {conversations.map((conversation, index) => {
          const phoneNumber = extractPhoneNumberFromUser(conversation.messages); // Extract phone number
          const formattedDate = formatDateTo24Hour(
            new Date(conversation.created_at)
          ); // Format creation date

          const conversationTitle = phoneNumber
            ? `WhatsApp: ${phoneNumber}`
            : `${conversation.source}: NA`;

          return (
            <li
              key={`${conversation.id}-${index}`} // Ensure unique keys
              className="p-3 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
              onClick={() => onSelectConversation(conversation.id)}
            >
              <div className="chat-info flex justify-between">
                <span className="created-time text-sm text-gray-500">
                  {formattedDate}
                </span>
                <span className="arrow">{">"}</span>
              </div>
              <div className="chat-name text-lg font-semibold">
                {conversationTitle}
              </div>
              <div className="chat-status text-sm text-gray-500 truncate">
                {conversation.messages[conversation.messages.length - 1]
                  ?.content || "No messages"}
              </div>
            </li>
          );
        })}
      </ul>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="flex justify-center py-4">
          <LoadingIndicator /> {/* Display spinner when loading */}
        </div>
      )}

      {/* End of List Message */}
      {endOfList && (
        <p className="text-center text-gray-400 my-4">No more conversations</p>
      )}
    </nav>
  );
};

export default ChatSidebar;
