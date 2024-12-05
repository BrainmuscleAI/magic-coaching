export const config = {
  openAiKey: import.meta.env.VITE_OPENAI_API_KEY,
  appName: import.meta.env.VITE_APP_NAME || 'Magic Coaching',
  isDev: import.meta.env.VITE_APP_ENV === 'development',
  appUrl: import.meta.env.VITE_APP_URL
} as const;