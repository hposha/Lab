import { User } from 'lucide-react';

function About() {
  return (
    <section className="mb-12 pb-8 border-b border-slate-500/20 relative group">
      <h2 className="text-sm font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
        <User size={20} />
        <span>Про мене</span>
        
        {/* ОНОВЛЕНИЙ ГРАДІЄНТ: 
            Світла тема: від насиченого смарагдового до легкого блакитного.
            Темна тема: ваш оригінальний м'який градієнт. */}
        <span className="h-[1px] flex-1 bg-gradient-to-r from-emerald-600 to-cyan-100 dark:from-emerald-500/50 dark:to-transparent transition-colors duration-300"></span>
      </h2>
      
      <p className="leading-relaxed text-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        Відкритий, комунікабельний та відповідальний. Завдяки досвіду роботи у сфері обслуговування маю чудово розвинені навички роботи в команді та вміння швидко приймати рішення в стресових ситуаціях. Активно вивчаю мережеві технології та кібербезпеку, швидко засвоюю нову інформацію та завжди прагну до професійного розвитку.
      </p>
    </section>
  );
}

export default About;