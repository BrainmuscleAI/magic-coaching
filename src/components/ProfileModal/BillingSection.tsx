import React from 'react';
import { CreditCard, Receipt, Star } from 'lucide-react';

export default function BillingSection() {
  return (
    <section className="space-y-6">
      <h3 className="text-xl font-semibold text-white">Facturación</h3>
      
      <div className="p-4 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-lg border border-white/10">
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="text-lg font-medium text-white">Plan Pro</span>
        </div>
        <p className="text-sm text-white/70 mb-4">Tu suscripción se renovará el 1 de enero de 2025</p>
        <button className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
          Gestionar Suscripción
        </button>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-start gap-4">
            <CreditCard className="w-6 h-6 text-indigo-400" />
            <div className="flex-1">
              <h4 className="text-lg font-medium text-white">Métodos de Pago</h4>
              <p className="text-sm text-white/70 mb-4">Gestiona tus tarjetas y métodos de pago</p>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Añadir Método de Pago
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-start gap-4">
            <Receipt className="w-6 h-6 text-indigo-400" />
            <div className="flex-1">
              <h4 className="text-lg font-medium text-white">Historial de Facturas</h4>
              <p className="text-sm text-white/70 mb-4">Descarga tus facturas anteriores</p>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-left">
                  Factura - Diciembre 2024
                </button>
                <button className="w-full px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-left">
                  Factura - Noviembre 2024
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}