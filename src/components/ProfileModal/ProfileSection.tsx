import React from 'react';
import { Camera, Upload } from 'lucide-react';

export default function ProfileSection() {
  return (
    <section className="space-y-6">
      <h3 className="text-xl font-semibold text-white">Información Personal</h3>
      
      <div className="relative group w-32 h-32 mx-auto">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=faces"
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />
        <button className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <Camera className="w-8 h-8 text-white" />
        </button>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white/80">Nombre</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Tu nombre completo"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-white/80">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="tu@email.com"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-white/80">Usuario</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="@usuario"
          />
        </div>
      </div>
    </section>
  );
}