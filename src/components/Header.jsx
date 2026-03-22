import { Mail, Send, Github } from 'lucide-react';

function Header() {
  return (
    // Видалив bg-slate-800, щоб фон успадковувався від App.jsx
    <header className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border-b-4 border-emerald-500 transition-colors duration-300">
      
      {/* Аватар: змінив border-slate-700 та bg-slate-700 на універсальні напівпрозорі класи */}
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)] shrink-0 bg-slate-500/10 transition-colors duration-300">
         <img src="/avatar.jpg" alt="Andrii Andrievsky" className="w-full h-full object-cover" />
      </div>
      
      <div className="text-center md:text-left w-full">
        {/* Градієнт: змінив 400 на 500 для кращого контрасту у світлій темі */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
          Andrii Andrievsky
        </h1>
        
        {/* Видалив text-slate-300, додав opacity-90 */}
        <p className="mt-2 text-xl font-medium opacity-90">Студент / ІТ-Intern(Cybersecurity)</p>
        
        {/* Контакти: змінив bg-slate-900/50 на bg-slate-500/10, text-slate-400 на opacity-80 */}
        <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-5 text-sm font-mono bg-slate-500/10 p-3 rounded-lg border border-slate-500/20 inline-flex transition-colors duration-300 opacity-80 hover:opacity-100">
          
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hpogta@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-500 transition-colors duration-300 whitespace-nowrap">
            <Mail size={16} className="text-emerald-500 shrink-0" /> 
            <span>gmail</span>
          </a>
          
          <a href="https://t.me/hposhan" target="_blank" className="flex items-center gap-2 hover:text-cyan-500 transition-colors duration-300">
            <Send size={16} className="text-cyan-500" /> telegram
          </a>
          
          <a href="https://github.com/hposha" target="_blank" className="flex items-center gap-2 hover:text-emerald-600 transition-colors duration-300">
            {/* Видалив жорсткий text-slate-500 */}
            <Github size={16} className="opacity-70" /> github
          </a>
          
        </div>
      </div>
    </header>
  );
}

export default Header;