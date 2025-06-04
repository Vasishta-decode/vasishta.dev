import Header from './components/header'
import Hero from './components/hero'
import About from './components/About'
import Skills from './components/skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App 