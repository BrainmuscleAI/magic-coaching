import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Compass, Library, Command, Clock, Settings, Sparkles, Plus, Mail, Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import ProfileModal from './ProfileModal';
import MobileMenu from './MobileMenu';
import { useChat } from '../context/ChatContext';

const Sidebar = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { conversations, setCurrentConversation } = useChat();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startNewChat = () => {
    setCurrentConversation(null);
    navigate('/chat');
    setIsMobileMenuOpen(false);
  };

  const SidebarContent = () => (
    <div className="h-full p-4 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-indigo-600 dark:bg-indigo-500 rounded-sm flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-gray-900 dark:text-white font-semibold">Magic Coaching</span>
        </div>
        <ThemeToggle />
      </div>

      <button 
        onClick={startNewChat}
        className="flex items-center gap-2 bg-gray-200 dark:bg-[#2C2C2C] text-gray-900 dark:text-white px-3 py-2 rounded-lg mb-6 transition-colors"
      >
        <Plus size={18} />
        <span>Nueva Consulta</span>
        <div className="flex items-center gap-1 ml-auto">
          <kbd className="px-1.5 py-0.5 text-xs bg-gray-300 dark:bg-[#3C3C3C] rounded">⌘</kbd>
          <kbd className="px-1.5 py-0.5 text-xs bg-gray-300 dark:bg-[#3C3C3C] rounded">N</kbd>
        </div>
      </button>

      <nav className="space-y-1">
        <Link
          to="/"
          className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#2C2C2C] transition-colors w-full text-left"
        >
          <Home size={18} />
          <span>Inicio</span>
        </Link>
        <Link
          to="/about"
          className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#2C2C2C] transition-colors"
        >
          <Compass size={18} />
          <span>Sobre Nosotros</span>
        </Link>
        <Link
          to="/services"
          className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#2C2C2C] transition-colors"
        >
          <Library size={18} />
          <span>Servicios</span>
        </Link>
        <Link
          to="/contact"
          className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#2C2C2C] transition-colors"
        >
          <Mail size={18} />
          <span>Contacto</span>
        </Link>
        <div className="pt-4">
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 px-2 py-2">
            <Library size={18} />
            <span>Biblioteca</span>
          </div>
          <div className="mt-2 space-y-1">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => setCurrentConversation(conversation)}
                className="w-full flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-2 py-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-[#2C2C2C] text-left text-sm transition-colors"
              >
                <Clock size={14} />
                <span className="truncate">{conversation.title}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="mt-auto space-y-4">
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 px-2 py-2">
          <Command size={16} />
          <span className="text-sm">Atajos</span>
        </div>

        <div className="flex items-center justify-between px-2 py-2">
          <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-sm text-gray-900 dark:text-white">melvindave</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Pro</span>
            </div>
          </div>
          <button
            onClick={() => setIsProfileModalOpen(true)}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Settings size={16} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="fixed top-4 left-4 p-2 bg-gray-100 dark:bg-[#1C1C1C] rounded-lg md:hidden z-30"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 bg-gray-100 dark:bg-[#1C1C1C] h-screen transition-colors">
        <SidebarContent />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
        <SidebarContent />
      </MobileMenu>

    <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
    </>
  );
};

export default Sidebar;