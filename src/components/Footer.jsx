import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-100 dark:bg-gray-800">
      <div className="flex justify-center gap-6 text-2xl">
        
        <a href="https://github.com/snandakumar2912/" target="_blank">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/shruthi-nandakumar-4b58452a8/" target="_blank">
          <FaLinkedin />
        </a>

        <a href="mailto:shruthi.n@themailpad.com">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  )
}

export default Footer
