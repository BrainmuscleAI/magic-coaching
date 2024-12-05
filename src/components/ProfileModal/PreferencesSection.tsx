import React from 'react';
import { Globe, Moon } from 'lucide-react';

export default function PreferencesSection() {
  return (
    <section className="space-y-6">
      <h3 className="text-xl font-semibold text-white">Preferencias</h3>
      
      <div className="space-y-4">
        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-start gap-4">
            <Globe className="w-6 h-6 text-indigo-400" />
            <div className="flex-1">
              <h4 className="text-lg font-medium text-white">Idioma y Región</h4>
              <p className="text-sm text-white/70 mb-4">Personaliza tu experiencia regional</p>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white/80">Idioma</label>
                  <select className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="es">Español</option>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white/80">Zona Horaria</label>
                  <select className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="utc-5">UTC-05:00 Eastern Time</option>
                    <option value="utc-8">UTC-08:00 Pacific Time</option>
                    <option value="utc+1">UTC+01:00 Central European Time</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-start gap-4">
            <Moon className="w-6 h-6 text-indigo-400" />
            <div className="flex-1">
              <h4 className="text-lg font-medium text-white">Apariencia</h4>
              <p className="text-sm text-white/70 mb-4">Personaliza el aspecto de la aplicación</p>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">Tema</label>
                <select className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="system">Según el Sistema</option>
                  <option value="light">Claro</option>
                  <option value="dark">Oscuro</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}