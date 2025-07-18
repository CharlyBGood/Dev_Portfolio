import { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export function Modal({ open, onClose, children, className = "" }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 min-h-screen">
      <div className={`bg-portfolio-base rounded-xl shadow-2xl p-4 w-[85vw] md:max-w-md relative ${className}`}>
        <button
          className="absolute top-2 right-6 text-white/90 text-2xl"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
