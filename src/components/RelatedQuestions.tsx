import React from 'react';
import { Plus } from 'lucide-react';
import { useChat } from '../context/ChatContext';
import type { Message } from '../types/chat';

function generateFollowUpQuestions(message: Message) {
  const questions = [
    '¿Podrías profundizar más sobre este tema?',
    '¿Qué pasos prácticos recomiendas para implementar esto?',
    '¿Cómo puedo medir mi progreso en esta área?',
    '¿Qué obstáculos comunes debo tener en cuenta?'
  ];
  
  return questions.map(text => ({
    text,
    type: 'followUp' as const
  }));
}

export default function RelatedQuestions() {
  const { currentConversation, sendMessage, isStreaming } = useChat();

  if (!currentConversation?.messages.length || isStreaming) return null;

  const lastMessage = currentConversation.messages[currentConversation.messages.length - 1];
  const questions = generateFollowUpQuestions(lastMessage);

  return (
    <div className="bg-gray-100 dark:bg-[#2C2C2C] rounded-xl p-4 transition-colors">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Relacionados</h2>
      <div className="space-y-2">
        {questions.slice(0, 3).map((question, index) => (
          <button
            key={index}
            onClick={() => sendMessage(question.text)}
            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-[#3C3C3C] text-left group transition-colors"
          >
            <span className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-900 dark:group-hover:text-white">{question.text}</span>
            <Plus size={16} className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </button>
        ))}
      </div>
    </div>
  );
}