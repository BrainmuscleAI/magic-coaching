import React from 'react';
import { Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Transformando vidas a través del coaching personalizado
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center">
          <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Equipo Experto</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Coaches certificados con años de experiencia en desarrollo personal y profesional.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Enfoque Personalizado</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Programas adaptados a tus objetivos y necesidades específicas.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Resultados Probados</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Miles de clientes satisfechos que han alcanzado sus metas.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#2C2C2C] rounded-xl p-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          En Magic Coaching, nos dedicamos a empoderar a las personas para que alcancen su máximo potencial. 
          Creemos que cada individuo tiene capacidades únicas que, con la guía adecuada, pueden ser 
          desarrolladas para lograr un impacto significativo en su vida personal y profesional.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Nuestro compromiso es proporcionar un acompañamiento de calidad, basado en metodologías 
          probadas y adaptadas a las necesidades individuales de cada cliente.
        </p>
      </div>
    </div>
  );
}