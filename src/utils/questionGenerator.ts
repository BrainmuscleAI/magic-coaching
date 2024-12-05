interface Question {
  text: string;
  type: 'followUp' | 'exploration' | 'practical';
}

export function generateFollowUpQuestions(response: string): Question[] {
  if (!response) return [];

  // Extract key topics from the response
  const topics = response.toLowerCase()
    .split('.')
    .filter(s => s.length > 10)
    .slice(0, 3);

  const questions: Question[] = [
    {
      text: '¿Podrías profundizar más sobre este tema?',
      type: 'followUp'
    },
    {
      text: '¿Qué pasos prácticos recomiendas para implementar esto?',
      type: 'practical'
    },
    {
      text: '¿Cómo se relaciona esto con el desarrollo personal?',
      type: 'exploration'
    }
  ];

  return questions;
}