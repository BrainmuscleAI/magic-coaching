import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChatService } from '../services/openai';
import type { Message, Conversation } from '../types/chat';

interface ChatContextType {
  isStreaming: boolean;
  currentConversation: Conversation | null;
  conversations: Conversation[];
  setCurrentConversation: (conversation: Conversation | null) => void;
  sendMessage: (message: string) => Promise<void>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const createNewConversation = (firstMessage: string): Conversation => {
  return {
    id: uuidv4(),
    title: firstMessage.slice(0, 30) + (firstMessage.length > 30 ? '...' : ''),
    messages: [],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
};

export function ChatProvider({ children, apiKey }: { children: React.ReactNode; apiKey: string }) {
  const [isStreaming, setIsStreaming] = useState(false);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);
  const chatService = new ChatService(apiKey);

  useEffect(() => {
    const savedConversations = localStorage.getItem('conversations');
    if (savedConversations) {
      setConversations(JSON.parse(savedConversations));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('conversations', JSON.stringify(conversations));
  }, [conversations]);

  const sendMessage = useCallback(async (message: string) => {
    setIsStreaming(true);
    let conversation = currentConversation;

    if (!conversation) {
      const newConversation = createNewConversation(message);
      conversation = newConversation;
      setCurrentConversation(newConversation);
      setConversations(prev => [...prev, newConversation]);
    }

    const userMessage: Message = {
      id: uuidv4(),
      content: message,
      role: 'user',
      timestamp: Date.now(),
    };

    let assistantMessage = '';
    
    try {
      const updatedConversation = {
        ...conversation,
        messages: [...conversation.messages, userMessage],
      };
      
      setCurrentConversation(updatedConversation);
      setConversations(prev => 
        prev.map(conv => 
          conv.id === conversation.id ? updatedConversation : conv
        )
      );

      await chatService.streamChat(message, conversation.messages, (chunk) => {
        assistantMessage += chunk;
        setCurrentConversation(prev => {
          if (!prev) return null;
          const updatedMessages = [...prev.messages];
          const lastMessage = updatedMessages[updatedMessages.length - 1];
          
          if (lastMessage && lastMessage.role === 'assistant') {
            updatedMessages[updatedMessages.length - 1] = {
              ...lastMessage,
              content: assistantMessage,
            };
          } else {
            updatedMessages.push({
              id: uuidv4(),
              content: assistantMessage,
              role: 'assistant',
              timestamp: Date.now(),
            });
          }
          
          return {
            ...prev,
            messages: updatedMessages,
            updatedAt: Date.now(),
          };
        });
      });
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsStreaming(false);
    }
  }, [currentConversation, chatService]);

  return (
    <ChatContext.Provider value={{ 
      isStreaming, 
      currentConversation, 
      conversations,
      setCurrentConversation,
      sendMessage 
    }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}