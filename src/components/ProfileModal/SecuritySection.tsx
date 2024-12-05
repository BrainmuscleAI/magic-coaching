import React from 'react';
import { Shield, Key } from 'lucide-react';

export default function SecuritySection() {
  return (
    <section className="space-y-6">
      <h3 className="text-xl font-semibold text-white">Seguridad</h3>
      
      <div className="space-y-4">
        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-start gap-4">
            <Key className="w-6 h-6 text-indigo-400" />
            <div className="flex-1">
              <h4 className="text-lg font-medium text-white">Cambiar Contraseña</h4>
              <p className="text-sm text-white/70 mb-4">Actualiza tu contraseña regularmente para mantener tu cuenta segura</p>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Actualizar Contraseña
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-indigo-400" />
            <div className="flex-1">
              <h4 className="text-lg font-medium text-white">Autenticación de Dos Factores</h4>
              <p className="text-sm text-white/70 mb-4">Añade una capa extra de seguridad a tu cuenta</p>
              <button className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                Configurar 2FA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}