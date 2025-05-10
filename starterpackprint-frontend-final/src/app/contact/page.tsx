"use client";
import React, { useState } from 'react';
import Head from 'next/head';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder for actual form submission logic (e.g., API call to Strapi or email service)
    console.log('Form data submitted:', formData);
    // Simulate successful submission
    setIsSubmitted(true);
    // Reset form after a delay or on successful API response
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false); 
    }, 3000);
  };

  return (
    <div className="py-12">
      <Head>
        <title>Contactez-Nous - Starter Pack Print</title>
        <meta name="description" content="Contactez l'équipe de Starter Pack Print pour toute question ou demande." />
      </Head>

      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">Contactez-Nous</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Une question, une suggestion, ou besoin d'aide ? Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.
        </p>
      </section>

      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg p-8 md:p-10 rounded-xl shadow-2xl">
        {isSubmitted ? (
          <div className="text-center py-10">
            <h2 className="text-3xl font-semibold text-green-400 mb-4">Message Envoyé !</h2>
            <p className="text-lg text-gray-200">Merci de nous avoir contactés. Nous reviendrons vers vous rapidement.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-white mb-1">Nom Complet</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none placeholder-gray-500"
                placeholder="Votre nom complet"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-white mb-1">Adresse Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none placeholder-gray-500"
                placeholder="votre.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg font-medium text-white mb-1">Sujet</label>
              <input 
                type="text" 
                name="subject" 
                id="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none placeholder-gray-500"
                placeholder="Sujet de votre message"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-white mb-1">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows={6} 
                value={formData.message}
                onChange={handleChange}
                required 
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none placeholder-gray-500"
                placeholder="Écrivez votre message ici..."
              />
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full bg-brand-purple hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg text-xl transition-colors duration-300 shadow-lg transform hover:scale-105"
              >
                Envoyer le Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

