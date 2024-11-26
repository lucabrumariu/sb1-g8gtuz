import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function BookingPopup({ isOpen, onClose, title }: BookingPopupProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.style.overflow = 'unset';
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-start justify-center overflow-y-auto pt-4 px-4 pb-20 sm:pt-8">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Popup Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl z-10 max-h-[90vh] flex flex-col mt-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {title}
          </h3>
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto" style={{ height: '500px' }}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/lEl26ItQ6MhyGvX15HVf"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '0 0 0.75rem 0.75rem'
            }}
            id="inline-lEl26ItQ6MhyGvX15HVf" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form webiste Rezervari"
            data-height="500"
            data-layout-iframe-id="inline-lEl26ItQ6MhyGvX15HVf"
            data-form-id="lEl26ItQ6MhyGvX15HVf"
            title="Form webiste Rezervari"
          />
        </div>
      </div>
    </div>
  );
}