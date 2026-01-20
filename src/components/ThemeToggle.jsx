import { FaMoon, FaSun } from "react-icons/fa"

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default ThemeToggle