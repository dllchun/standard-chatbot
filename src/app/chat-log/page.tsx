"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import ChatSidebar from "../components/ChatSidebar";
import ChatContent from "../components/ChatContent";

const apiKey = "8491d0d0-c047-435c-97b6-e79e5e0cf7ff";
const chatbotId = "Kr1xs3v2UBvEaDnuSxV9F";
const baseUrl = `https://www.chatbase.co/api/v1/get-conversations?chatbotId=${chatbotId}&startDate=2024-01-01&endDate=2024-12-12`;

export interface Message {
  id?: string;
  role: "assistant" | "user";
  content: string;
  score?: number;
}

export interface Conversation {
  id: string;
  source: string;
  messages: Message[];
  created_at: string;
  last_message_at: string;
  country: string;
}

const ChatLog: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [filteredConversations, setFilteredConversations] = useState<
    Conversation[]
  >([]);
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [endOfList, setEndOfList] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleSearch = (searchTerm: string) => {
    const filtered = conversations.filter(
      (conversation) =>
        conversation.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
        conversation.messages.some((message) =>
          message.content.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setFilteredConversations(filtered);
  };

  const fetchConversations = useCallback(
    async (page: number = 1) => {
      if (isLoading || endOfList) return;

      setIsLoading(true);
      try {
        const conversationsListUrl = `${baseUrl}&page=${page}&size=20`;
        const response = await fetch(conversationsListUrl, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.data.length === 0) {
          setEndOfList(true);
        } else {
          setConversations((prev) => {
            const newConversations = data.data.filter(
              (newConv: Conversation) =>
                !prev.some((conv) => conv.id === newConv.id)
            );
            return [...prev, ...newConversations];
          });
        }
      } catch (error) {
        console.error("Error fetching conversations:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, endOfList]
  );

  const handleSelectConversation = useCallback(
    (conversationId: string) => {
      const conversation = conversations.find(
        (conv) => conv.id === conversationId
      );
      setSelectedConversation(conversation || null);
    },
    [conversations]
  );

  useEffect(() => {
    fetchConversations(currentPage);
  }, [currentPage]);

  return (
    <div className="flex h-full w-full justify-center">
      {/* Sidebar with fixed width and margin to move it away from the left */}
      <div className="w-64 flex-shrink-0 h-full overflow-y-auto border-r mr-8">
        <ChatSidebar
          conversations={
            filteredConversations.length > 0
              ? filteredConversations
              : conversations
          }
          onSelectConversation={handleSelectConversation}
          onLoadMore={() => setCurrentPage((prev) => prev + 1)}
          isLoading={isLoading}
          endOfList={endOfList}
          onSearch={handleSearch}
          sidebarRef={sidebarRef}
        />
      </div>

      {/* Chat content (takes the remaining space and is responsive) */}
      <div className="flex-grow flex flex-col h-full max-w-5xl overflow-hidden">
        {selectedConversation ? (
          <div className="flex-grow overflow-y-auto p-4">
            <ChatContent messages={selectedConversation.messages} />
          </div>
        ) : (
          <div className="flex justify-center items-center flex-grow">
            <p className="text-gray-500">
              Select a conversation to view messages
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatLog;
