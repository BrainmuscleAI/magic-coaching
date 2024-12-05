import React from 'react';
import SearchBar from '../components/SearchBar';
import MainContent from '../components/MainContent';
import { useChat } from '../context/ChatContext';

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h2 className="text-2xl font-bold mb-4">Inicia una Nueva Consulta</h2>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      Escribe tu pregunta en la barra de búsqueda para comenzar
    </p>
  </div>
);

export default function Chat() {
  const { currentConversation } = useChat();

  return (
    <>
      <SearchBar />
      {currentConversation ? <MainContent /> : <EmptyState />}
    </>
  );
}