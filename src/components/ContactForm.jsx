import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';

// 1. Приймаємо theme як пропс з App.jsx
const ContactForm = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Встановлюємо таймер на 1 хвилину (60000 мілісекунд)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 6000); 

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  // 2. Визначаємо стилі залежно від того, яка зараз тема
  const isDark = theme === 'dark';
  
  const overlayBg = isDark ? 'bg-slate-950/80' : 'bg-slate-200/60';
  const modalBg = isDark ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-800 shadow-2xl';
  const inputBg = isDark 
    ? 'bg-slate-800 border-slate-700 text-white focus:border-emerald-500' 
    : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-emerald-600';
  const titleGradient = isDark 
    ? 'from-emerald-400 to-cyan-400' 
    : 'from-emerald-600 to-cyan-600';
  const textMuted = isDark ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className={`fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-colors duration-300 ${overlayBg}`}>
      
      <div className={`border rounded-2xl w-full max-w-md p-6 relative animate-in fade-in zoom-in duration-300 ${modalBg}`}>
        
        {/* Кнопка закриття */}
        <button 
          onClick={() => setIsOpen(false)}
          className={`absolute top-4 right-4 transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-800'}`}
        >
          <X size={24} />
        </button>

        <h2 className={`text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${titleGradient}`}>
          Зв'яжіться зі мною
        </h2>
        <p className={`text-sm mb-6 ${textMuted}`}>
          Залиште свої контакти, і я обов'язково вам відповім!
        </p>

        {/* ФОРМА: Не забудьте вставити свій ендпоінт Formspree! */}
        <form action="https://formspree.io/f/ВАШ_ЕНДПОЙНТ" method="POST" className="space-y-4">
          
          <div>
            <input 
              type="text" 
              name="name" 
              placeholder="Ваше ім'я" 
              required 
              className={`w-full border rounded-lg p-3 text-sm focus:outline-none transition-colors ${inputBg}`}
            />
          </div>
          
          <div>
            <input 
              type="email" 
              name="email" 
              placeholder="Ваш Email" 
              required 
              className={`w-full border rounded-lg p-3 text-sm focus:outline-none transition-colors ${inputBg}`}
            />
          </div>
          
          <div>
            <input 
              type="tel" 
              name="phone" 
              placeholder="Номер телефону" 
              className={`w-full border rounded-lg p-3 text-sm focus:outline-none transition-colors ${inputBg}`}
            />
          </div>
          
          <div>
            <textarea 
              name="message" 
              placeholder="Ваше повідомлення..." 
              rows="4"
              className={`w-full border rounded-lg p-3 text-sm focus:outline-none transition-colors resize-none ${inputBg}`}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold py-3 rounded-lg transition-all flex justify-center items-center gap-2 shadow-lg shadow-emerald-900/20"
          >
            <Send size={18} /> Відправити
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactForm;