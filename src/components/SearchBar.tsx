import React, { useState, useEffect } from 'react';
import { Search, Stars } from 'lucide-react';
import { useChat } from '../context/ChatContext';
import { useLocation } from 'react-router-dom';

export default function SearchBar() {
  const [input, setInput] = useState('');
  const { sendMessage, isStreaming } = useChat();
  const location = useLocation();

  useEffect(() => {
    setInput('');
  }, [location.pathname]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isStreaming) return;
    
    await sendMessage(input);
    setInput('');
  };

  return (
    <div className="max-w-3xl mx-auto w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isStreaming}
          className="block w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-[#2C2C2C] border border-gray-200 dark:border-[#3C3C3C] rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          placeholder="Pregunta lo que quieras..."
        />
        <div className="absolute inset-y-0 right-4 flex items-center gap-2 pointer-events-none">
          <button
            type="submit"
            disabled={!input.trim() || isStreaming}
            className="text-xs text-gray-400 pointer-events-auto px-2 py-1 rounded flex items-center gap-1 transition-colors disabled:opacity-50"
          >
            <Stars size={16} className="text-indigo-500" />
            {isStreaming ? 'Pensando...' : 'Preguntar'}
          </button>
        </div>
      </form>
    </div>
  );
}