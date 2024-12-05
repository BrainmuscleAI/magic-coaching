interface Topic {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  responses: {
    overview: string;
    details: string[];
    examples: string[];
    recommendations: string[];
  };
}

export const knowledgeBase: Topic[] = [
  {
    id: 'business-growth',
    title: 'Crecimiento Empresarial',
    description: 'Estrategias efectivas para el crecimiento de negocios',
    keywords: ['negocio', 'empresa', 'crecimiento', 'clientes', 'ventas'],
    responses: {
      overview: 'El crecimiento empresarial se basa en tres pilares fundamentales: aumentar la base de clientes, maximizar el valor por cliente y fomentar la lealtad para incrementar la frecuencia de compra.',
      details: [
        'Captación de nuevos clientes',
        'Incremento del valor por transacción',
        'Aumento de la frecuencia de visitas',
        'Gestión de la lealtad del cliente',
        'Monitoreo de indicadores clave'
      ],
      examples: [
        'Colaborar con universidades locales para campañas de marketing',
        'Implementar sistemas de seguimiento de clientes',
        'Desarrollar programas de fidelización',
        'Establecer métricas de retención'
      ],
      recommendations: [
        'Mantener contacto regular con los clientes',
        'Monitorear patrones de compra para identificar señales tempranas',
        'Implementar bases de datos de clientela',
        'Desarrollar estrategias de retención proactivas'
      ]
    }
  }, {
    id: 'personal-development',
    title: 'Desarrollo Personal',
    description: 'Estrategias y técnicas para el crecimiento personal',
    keywords: ['autoconocimiento', 'crecimiento', 'objetivos', 'hábitos'],
    responses: {
      overview: 'El desarrollo personal es un proceso continuo de autodescubrimiento y mejora que permite alcanzar nuestro máximo potencial.',
      details: [
        'Identificación de fortalezas y áreas de mejora',
        'Establecimiento de metas SMART',
        'Desarrollo de hábitos positivos',
        'Gestión efectiva del tiempo'
      ],
      examples: [
        'Crear un plan de desarrollo personal a 90 días',
        'Implementar una rutina matutina productiva',
        'Establecer objetivos medibles y alcanzables'
      ],
      recommendations: [
        'Comenzar con pequeños cambios sostenibles',
        'Mantener un diario de progreso',
        'Buscar retroalimentación constante',
        'Celebrar los logros intermedios'
      ]
    }
  },
  {
    id: 'business-etiquette',
    title: 'Etiqueta Empresarial',
    description: 'Guía para el comportamiento profesional y protocolo empresarial',
    keywords: ['etiqueta', 'protocolo', 'reuniones', 'negocios', 'profesional'],
    responses: {
      overview: 'La etiqueta empresarial es fundamental para construir relaciones profesionales sólidas y mantener un ambiente de trabajo productivo.',
      details: [
        'Protocolo en reuniones de negocios',
        'Etiqueta en comidas de trabajo',
        'Comunicación profesional',
        'Gestión de desacuerdos',
        'Comportamiento ejecutivo'
      ],
      examples: [
        'Sincronizar comidas de negocios con el grupo',
        'Manejar desacuerdos de manera diplomática',
        'Mantener la profesionalidad en situaciones difíciles'
      ],
      recommendations: [
        'Priorizar la armonía del grupo en reuniones sociales',
        'Ofrecer alternativas constructivas en desacuerdos',
        'Mantener la diplomacia en situaciones tensas',
        'Respetar jerarquías y protocolos establecidos'
      ]
    }
  },
  {
    id: 'management-incentives',
    title: 'Incentivos Gerenciales',
    description: 'Estrategias de motivación y compensación para gerentes',
    keywords: ['incentivos', 'gerencia', 'compensación', 'motivación', 'beneficios'],
    responses: {
      overview: 'Un sistema efectivo de incentivos combina beneficios tangibles e intangibles para maximizar la motivación y el desarrollo profesional de los gerentes.',
      details: [
        'Compensación económica directa',
        'Beneficios y prestaciones',
        'Oportunidades de desarrollo profesional',
        'Participación en proyectos estratégicos',
        'Programas de capacitación avanzada'
      ],
      examples: [
        'Programas de bonos anuales',
        'Capacitación en universidades prestigiosas',
        'Asignación de proyectos estratégicos'
      ],
      recommendations: [
        'Balancear incentivos monetarios y no monetarios',
        'Ofrecer oportunidades de crecimiento profesional',
        'Implementar programas de desarrollo de liderazgo',
        'Mantener competitividad en el mercado laboral'
      ]
    }
  },
  {
    id: 'professional-growth',
    title: 'Desarrollo Profesional',
    description: 'Estrategias para el avance en la carrera profesional',
    keywords: ['carrera', 'liderazgo', 'habilidades', 'networking'],
    responses: {
      overview: 'El desarrollo profesional implica la adquisición continua de habilidades y conocimientos para avanzar en tu carrera.',
      details: [
        'Desarrollo de habilidades de liderazgo',
        'Construcción de redes profesionales',
        'Gestión de proyectos',
        'Comunicación efectiva'
      ],
      examples: [
        'Crear un plan de desarrollo de carrera a 5 años',
        'Establecer una presencia profesional en línea',
        'Desarrollar habilidades de presentación'
      ],
      recommendations: [
        'Buscar mentores en tu campo',
        'Participar en proyectos desafiantes',
        'Mantenerse actualizado en tendencias de la industria',
        'Construir una marca personal sólida'
      ]
    }
  },
  {
    id: 'emotional-intelligence',
    title: 'Inteligencia Emocional',
    description: 'Desarrollo de competencias emocionales',
    keywords: ['emociones', 'empatía', 'autocontrol', 'relaciones'],
    responses: {
      overview: 'La inteligencia emocional es la capacidad de reconocer y gestionar nuestras emociones y las de los demás.',
      details: [
        'Autoconciencia emocional',
        'Gestión de emociones',
        'Empatía y comprensión social',
        'Habilidades relacionales'
      ],
      examples: [
        'Practicar la escucha activa',
        'Desarrollar técnicas de regulación emocional',
        'Mejorar la comunicación interpersonal'
      ],
      recommendations: [
        'Practicar la mindfulness diariamente',
        'Desarrollar la empatía activamente',
        'Mantener un diario emocional',
        'Buscar feedback sobre habilidades sociales'
      ]
    }
  },
  {
    id: 'work-life-balance',
    title: 'Equilibrio Vida-Trabajo',
    description: 'Estrategias para mantener un equilibrio saludable',
    keywords: ['balance', 'bienestar', 'productividad', 'salud'],
    responses: {
      overview: 'El equilibrio entre la vida personal y profesional es esencial para el bienestar general y el éxito sostenible.',
      details: [
        'Gestión efectiva del tiempo',
        'Establecimiento de límites',
        'Prácticas de autocuidado',
        'Organización y planificación'
      ],
      examples: [
        'Crear rutinas de trabajo efectivas',
        'Establecer límites digitales',
        'Implementar técnicas de productividad'
      ],
      recommendations: [
        'Definir prioridades claras',
        'Establecer horarios de trabajo definidos',
        'Practicar técnicas de desconexión',
        'Mantener hábitos saludables'
      ]
    }
  }
];

export function findRelevantTopic(query: string): Topic | undefined {
  const normalizedQuery = query.toLowerCase();
  return knowledgeBase.find(topic => 
    topic.keywords.some(keyword => 
      normalizedQuery.includes(keyword.toLowerCase())
    )
  );
}

export function generateResponse(topic: Topic, context: string): string {
  // Combine relevant information based on the context
  return `${topic.responses.overview}\n\nPuntos clave:\n${
    topic.responses.details.map(detail => `• ${detail}`).join('\n')
  }\n\nRecomendaciones:\n${
    topic.responses.recommendations.map(rec => `• ${rec}`).join('\n')
  }`;
}