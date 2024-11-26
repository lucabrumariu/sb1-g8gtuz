import React from 'react';

interface MobileOptimizedButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function MobileOptimizedButton({
  onClick,
  children,
  className = '',
  disabled = false,
  type = 'button'
}: MobileOptimizedButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`mobile-touch-target ${className}`}
      style={{ touchAction: 'manipulation' }}
    >
      {children}
    </button>
  );
}