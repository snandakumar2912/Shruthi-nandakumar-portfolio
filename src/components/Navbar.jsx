import ThemeToggle from "./ThemeToggle"

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="font-bold text-xl">Shruthi Nandakumar</h1>

        <div className="flex gap-6 items-center">
          {["Home", "Experience", "Projects", "Skills", "Education", "Certifications"].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-500"
            >
              {item}
            </a>
          ))}

          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
