import React, { useState, useEffect } from 'react';

function Footer() {
  const [systemInfo, setSystemInfo] = useState('');

  useEffect(() => {
    // 1. Зчитуємо інформацію про платформу та браузер
    const platform = navigator.platform;
    const userAgent = navigator.userAgent;
    const infoString = `OS: ${platform} | Browser: ${userAgent}`;

    // 2. Зберігаємо ці дані в localStorage всередині ефекту
    localStorage.setItem('userSystemInfo', infoString);

    // 3. Отримуємо дані з localStorage для відображення
    const savedInfo = localStorage.getItem('userSystemInfo');
    setSystemInfo(savedInfo);
  }, []);

  return (
    <footer className="p-6 text-center border-t border-slate-500/20 transition-colors duration-300">
      
      <p className="text-xs uppercase tracking-widest mb-2 opacity-60 font-medium">
        &copy; 2026 Andrii Andrievsky.
      </p>
      
      {/* Відображення отриманої інформації */}
      {systemInfo && (
        <p className="text-[10px] mt-2 max-w-2xl mx-auto opacity-50">
          {systemInfo}
        </p>
      )}
      
    </footer>
  );
}

export default Footer;