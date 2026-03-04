import { useState } from 'react'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import InfoCards from './components/InfoCards/InfoCards';
import Contact from './components/Contact/Contact'; 
import './App.scss';


function App() {
  const [count, setCount] = useState(0)

return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <InfoCards />
        <Contact /> 
      </main>
      <footer className="footer">
        <div className="container">
          <p>© 2026 fx.snuss. Full-Stack Developer</p>
        </div>
      </footer>
    </div>
  );
}

export default App
