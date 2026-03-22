import { GraduationCap } from 'lucide-react';

function Education() {
  return (
    <section>
      {/* Значок: text-emerald-600 для світлої, text-emerald-500 для темної */}
      <h2 className="text-sm font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
        <GraduationCap size={20} />
        <span>Освіта</span>
        
        {/* ОНОВЛЕНИЙ ГРАДІЄНТ */}
        <span className="h-[1px] flex-1 bg-gradient-to-r from-emerald-600 to-cyan-100 dark:from-emerald-500/50 dark:to-transparent transition-colors duration-300"></span>
      </h2>
      
      <div className="relative pl-6 border-l-2 border-slate-500/30 hover:border-cyan-500 transition-colors duration-300">
        <div className="absolute w-3 h-3 bg-transparent border-2 border-cyan-500 rounded-full -left-[7px] top-1.5"></div>
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
          <h3 className="text-lg font-bold">Національний університет «Львівська політехніка»</h3>
          {/* text-cyan-700 для світлої, text-cyan-400 для темної */}
          <span className="text-sm font-mono text-cyan-700 dark:text-cyan-400 opacity-80 mt-1 md:mt-0">2023 - 2027</span>
        </div>
        
        {/* text-emerald-600 для світлої, text-emerald-500 для темної */}
        <p className="text-emerald-600 dark:text-emerald-500 font-medium text-sm mb-3">Бакалавріат (Студент)</p>
        
        <p className="leading-relaxed text-sm opacity-80">
          Здобуваю ґрунтовні знання з архітектури комп'ютерних мереж, інформаційної безпеки та сучасних IT-технологій. У рамках навчання виконую практичні лабораторні роботи з налаштування мережевого обладнання, аналізу вразливостей та моніторингу трафіку. Постійно вдосконалюю навички пошуку інформації, роботи з технічною документацією та розв'язання нестандартних інженерних задач.
        </p>
      </div>
    </section>
  );
}

export default Education;