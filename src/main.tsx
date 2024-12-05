import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeContext';
import { ChatProvider } from './context/ChatContext';
import { config } from './config/env';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ChatProvider apiKey={config.openAiKey}>
        <App />
      </ChatProvider>
    </ThemeProvider>
  </StrictMode>
);