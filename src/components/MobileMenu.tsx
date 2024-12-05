import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function MobileMenu({ isOpen, onClose, children }: MobileMenuProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-40 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-100 dark:bg-[#1C1C1C] transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-200 dark:hover:bg-[#2C2C2C] rounded-lg transition-colors"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  );
}