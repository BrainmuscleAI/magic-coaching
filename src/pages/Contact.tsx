import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contacto</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Estamos aquí para ayudarte
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">contacto@magiccoaching.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Teléfono</h3>
                <p className="text-gray-600 dark:text-gray-300">+34 900 123 456</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Dirección</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Calle Principal 123<br />
                  28001 Madrid, España
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#2C2C2C] rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mensaje</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}