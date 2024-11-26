import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  image: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageModal({ image, isOpen, onClose }: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
      >
        <X className="w-8 h-8" />
      </button>
      <img
        src={image}
        alt="Gallery"
        className="max-w-full max-h-[90vh] object-contain"
      />
    </div>
  );
}