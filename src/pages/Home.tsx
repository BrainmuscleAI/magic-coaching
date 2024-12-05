import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  const handleStartChat = () => {
    navigate('/chat');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">
          Bienvenido a Magic Coaching
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Tu asistente personal para el desarrollo y crecimiento profesional
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 bg-white dark:bg-[#2C2C2C] rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Desarrollo Personal</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Descubre estrategias personalizadas para alcanzar tus metas y maximizar tu potencial.
          </p>
          <button 
            onClick={handleStartChat}
            className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Comenzar <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
        
        <div className="p-6 bg-white dark:bg-[#2C2C2C] rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Coaching Profesional</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Obtén guía experta para avanzar en tu carrera y desarrollar habilidades clave.
          </p>
          <button className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors">
            Explorar <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          ¿Listo para comenzar tu viaje de desarrollo personal?
        </p>
        <button 
          onClick={handleStartChat}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
        >
          Iniciar Consulta
        </button>
      </div>
    </div>
  );
}