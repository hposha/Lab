import React, { useState, useEffect } from 'react';
import Reviews from './components/Reviews';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm'; // ✅ Підключили модальне вікно

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark'); 
    }
  }, []); 

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const bgClass = theme === 'dark' 
    ? 'bg-slate-950 text-slate-300' 
    : 'bg-slate-100 text-slate-800';
    
  const containerClass = theme === 'dark' 
    ? 'bg-slate-900 shadow-emerald-900/10 border-slate-800' 
    : 'bg-white shadow-xl border-slate-200';

  return (
    <div className={`min-h-screen py-10 px-4 font-sans transition-colors duration-500 ${bgClass}`}>
      
      <div className="max-w-5xl mx-auto mb-4 flex justify-end">
        <button 
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-md ${
            theme === 'dark' 
              ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700' 
              : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-300'
          }`}
        >
          {theme === 'dark' ? '☀️ Світла тема' : '🌙 Темна тема'}
        </button>
      </div>

      <div className={`max-w-5xl mx-auto rounded-2xl overflow-hidden border transition-colors duration-500 ${containerClass}`}>
        <Header />
        
        <main className="p-8 md:p-12">
          <About />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-10">
            <aside className="md:col-span-5">
              <Skills />
            </aside>
            
            <section className="md:col-span-7 space-y-12">
              <Education />
              <Experience />
            </section>
          </div>

          <div className={`mt-16 pt-10 border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
            <Reviews />
          </div>
        </main>
        
        <Footer />
      </div>

      {/* ✅ Відображаємо модальне вікно поверх усього сайту */}
      <ContactForm theme={theme} />
      
    </div>
  );
}

export default App;