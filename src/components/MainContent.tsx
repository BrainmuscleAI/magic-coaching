import React from 'react';
import ChatMessage from './ChatMessage';
import RelatedQuestions from './RelatedQuestions';
import FollowUpInput from './FollowUpInput';
import { useChat } from '../context/ChatContext';
import { Message } from '../types/chat';

export default function MainContent() {
  const { currentConversation, isStreaming } = useChat();

  const renderMessages = (messages: Message[]) => {
    return messages.map((message) => (
      <ChatMessage
        key={message.id}
        content={message.content}
        isAI={message.role === 'assistant'}
      />
    ));
  };

  return (
    <div className="max-w-3xl mx-auto w-full mt-8 space-y-6">
      <div className="space-y-4 min-h-[200px]">
        {currentConversation && renderMessages(currentConversation.messages)}
        {isStreaming && (
          <div className="flex justify-center">
            <div className="animate-pulse text-gray-400">Generando respuesta...</div>
          </div>
        )}
      </div>

      {currentConversation?.messages.length > 0 && <RelatedQuestions />}
      <FollowUpInput />
    </div>
  );
}