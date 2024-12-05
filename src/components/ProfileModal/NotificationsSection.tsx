import React from 'react';
import { Bell, Mail, MessageSquare } from 'lucide-react';

export default function NotificationsSection() {
  return (
    <section className="space-y-6">
      <h3 className="text-xl font-semibold text-white">Notificaciones</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-indigo-400" />
            <div>
              <h4 className="font-medium text-white">Notificaciones Push</h4>
              <p className="text-sm text-white/70">Recibe alertas en tiempo real</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-white/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-indigo-400" />
            <div>
              <h4 className="font-medium text-white">Correos Electrónicos</h4>
              <p className="text-sm text-white/70">Recibe actualizaciones por email</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-white/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-indigo-400" />
            <div>
              <h4 className="font-medium text-white">Mensajes Directos</h4>
              <p className="text-sm text-white/70">Recibe mensajes de otros usuarios</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-white/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>
      </div>
    </section>
  );
}