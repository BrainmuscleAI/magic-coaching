import React from 'react';
import { X } from 'lucide-react';
import ProfileSection from './ProfileSection';
import SecuritySection from './SecuritySection';
import BillingSection from './BillingSection';
import NotificationsSection from './NotificationsSection';
import PreferencesSection from './PreferencesSection';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[20px] border border-white/20"
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(15px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 backdrop-blur-md bg-white/10">
          <h2 className="text-2xl font-semibold text-white">Configuración del Perfil</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          <ProfileSection />
          <SecuritySection />
          <BillingSection />
          <NotificationsSection />
          <PreferencesSection />
        </div>
      </div>
    </div>
  );
}