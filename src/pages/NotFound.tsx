import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Lo sentimos, la página que buscas no existe.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors flex items-center gap-2"
      >
        <Home className="w-5 h-5" />
        Volver al Inicio
      </Link>
    </div>
  );
}