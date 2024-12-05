import React from 'react';
import { Briefcase, Brain, Heart, BarChart } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Coaching Ejecutivo',
    description: 'Desarrollo de habilidades de liderazgo y gestión para profesionales.',
    price: '150€/sesión'
  },
  {
    icon: Brain,
    title: 'Desarrollo Personal',
    description: 'Programas personalizados para alcanzar tus metas individuales.',
    price: '120€/sesión'
  },
  {
    icon: Heart,
    title: 'Coaching de Vida',
    description: 'Apoyo para equilibrar y mejorar todos los aspectos de tu vida.',
    price: '100€/sesión'
  },
  {
    icon: BarChart,
    title: 'Coaching de Rendimiento',
    description: 'Optimización de resultados y productividad personal.',
    price: '130€/sesión'
  }
];

export default function Services() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Soluciones personalizadas para tu desarrollo
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white dark:bg-[#2C2C2C] rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center mb-4">
              <service.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                {service.price}
              </span>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Reservar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}