import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  content: string;
  isAI?: boolean;
}

export default function ChatMessage({ content, isAI = false }: ChatMessageProps) {
  return (
    <div className={`flex gap-4 p-4 ${isAI ? 'bg-gray-100 dark:bg-[#2C2C2C]' : ''}`}>
      <div className="flex-shrink-0">
        {isAI ? (
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
        ) : (
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        )}
      </div>
      <div className="flex-1 prose dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
}