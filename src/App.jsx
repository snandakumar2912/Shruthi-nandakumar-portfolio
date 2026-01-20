import { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./sections/Home"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Education from "./sections/Education"
import Certifications from "./sections/Certifications"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Home />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />

        <Footer />
      </div>
    </div>
  )
}

export default App