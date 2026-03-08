import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import ExperienceSkills from './components/ExperienceSkills';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Education />
        <ExperienceSkills />
      </main>
      <Footer />
    </div>
  );
}

export default App;