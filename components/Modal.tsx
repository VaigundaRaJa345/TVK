
import React, { ReactNode } from 'react';
import { CloseIcon } from './icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50" 
      onClick={onClose}
    >
      <div 
        className="bg-tvk-black border-2 border-tvk-yellow/50 rounded-lg shadow-glow-yellow p-4 relative max-w-4xl max-h-[90vh] w-full" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-white hover:text-tvk-red transition-colors z-10"
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>
        <div className="overflow-auto max-h-[calc(90vh-2rem)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
