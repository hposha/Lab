import { Cpu, Network, ShieldCheck, Languages, Users } from 'lucide-react';

function Skills() {
  const categories = [
    { 
      title: "Мережеві технології", 
      icon: <Network size={16} />,
      items: [
        { n: "Розуміння OSI та TCP/IP", s: "9/10" }, 
        { n: "Cisco Packet Tracer", s: "8/10" }, 
        { n: "Nmap", s: "6/10" }
      ] 
    },
    { 
      title: "Аналіз та безпека", 
      icon: <ShieldCheck size={16} />,
      items: [
        { n: "Wireshark", s: "8/10" }, 
        { n: "Аналіз трафіку", s: "7/10" }, 
        { n: "Діагностика протоколів", s: "7/10" }
      ] 
    },
    { 
      title: "Мови", 
      icon: <Languages size={16} />,
      items: [
        { n: "Українська", s: "C2" }, 
        { n: "English", s: "B1" }
      ] 
    },
    { 
      title: "Soft Skills", 
      icon: <Users size={16} />,
      items: [
        { n: "Комунікабельність", s: "10/10" }, 
        { n: "Робота в команді", s: "9/10" },
        { n: "Стресостійкість", s: "9/10" }
      ] 
    }
  ];

  return (
    <section>
      <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
         <Cpu size={20} />
         <span>Технічні навички</span>
         <span className="h-[1px] flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent"></span>
      </h2>
      
      <div className="space-y-8">
        {categories.map(cat => (
          <div key={cat.title}>
            {/* Трохи приглушив іконки та заголовки категорій, щоб не "кричали" */}
            <h3 className="text-[11px] font-black text-cyan-600 opacity-90 uppercase tracking-widest mb-3 flex items-center gap-2">
              {cat.icon} {cat.title}
            </h3>
            
            <div className="flex flex-col">
              {cat.items.map((skill, idx) => (
                <div 
                  key={idx} 
                  // Замінено border та hover:bg на універсальні напівпрозорі варіанти
                  className="flex justify-between items-center py-2 border-b border-slate-500/20 hover:bg-slate-500/10 hover:px-2 transition-all duration-300 rounded-sm"
                >
                  {/* Видалено text-slate-300, додано opacity */}
                  <span className="text-sm font-medium opacity-90">{skill.n}</span>
                  {/* Замінено text-emerald-400 на text-emerald-600 для контрасту */}
                  <span className="text-xs font-mono text-emerald-600 opacity-90">{skill.s}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;