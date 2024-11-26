import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  glowing?: boolean;
}

export default function AnimatedButton({ onClick, children, className = '', glowing = false }: AnimatedButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative ${className} ${
        glowing ? 'animate-glow' : ''
      }`}
    >
      {glowing && (
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-75 blur-lg -z-10" />
      )}
      {children}
    </motion.button>
  );
}