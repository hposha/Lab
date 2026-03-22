import { Briefcase } from 'lucide-react';

function Experience() {
  return (
    <section>
      <h2 className="text-sm font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
        <Briefcase size={20} />
        <span>Досвід роботи</span>
        
        {/* ОНОВЛЕНИЙ ГРАДІЄНТ */}
        <span className="h-[1px] flex-1 bg-gradient-to-r from-emerald-600 to-cyan-100 dark:from-emerald-500/50 dark:to-transparent transition-colors duration-300"></span>
      </h2>
      
      <div className="relative pl-6 border-l-2 border-slate-500/30 hover:border-emerald-500 transition-colors duration-300">
        <div className="absolute w-3 h-3 bg-transparent border-2 border-emerald-500 rounded-full -left-[7px] top-1.5"></div>
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
          <h3 className="text-lg font-bold">McDonald's</h3>
          {/* text-emerald-700 для світлої, text-emerald-400 для темної */}
          <span className="text-sm font-mono text-emerald-700 dark:text-emerald-400 opacity-80 mt-1 md:mt-0">2024 - 2025</span>
        </div>
        
        <p className="font-medium text-sm mb-3 opacity-90">Працівник закладу ресторанного господарства</p>
        
        <p className="leading-relaxed text-sm opacity-80">
          1 рік досвіду. Забезпечення високого рівня обслуговування, робота в інтенсивному темпі, дотримання стандартів якості та ефективна комунікація в команді.
        </p>
      </div>
    </section>
  );
}

export default Experience;