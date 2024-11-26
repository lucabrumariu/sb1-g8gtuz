import React, { useState } from 'react';
import { Mail, Phone, Users, Calendar, MessageSquare } from 'lucide-react';

export default function BookingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    groupSize: '',
    preferredDate: '',
    message: ''
  });

  const eventTypes = [
    { value: 'teambuilding', label: 'Team Building' },
    { value: 'craciun', label: 'Crăciun 2024' },
    { value: 'revelion', label: 'Revelion 2025' },
    { value: 'corporate', label: 'Evenimente Corporate' },
    { value: 'private', label: 'Evenimente Private' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          groupSize: '',
          preferredDate: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Rest of the component remains the same until the form */}
      
      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8">
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Cerere Trimisă cu Succes!</h3>
                  <p className="text-green-700">Vă mulțumim pentru interes. Vă vom contacta în cel mai scurt timp posibil pentru a discuta detaliile rezervării.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Rest of the form fields remain the same */}
                </form>
              )}
            </div>
          </div>

          {/* Contact Information section remains the same */}
        </div>
      </section>
    </div>
  );
}