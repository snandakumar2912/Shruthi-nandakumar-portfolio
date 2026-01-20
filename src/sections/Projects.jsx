import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 bg-white dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Project 1 */}
          <div className="border rounded-xl p-6 shadow-sm dark:border-gray-800">
            <h3 className="text-2xl font-semibold mb-2">
              Custom Onboarding Flow
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Full Stack Web Application
            </p>

            <p className="text-sm text-blue-500 mb-4">
              React.js, Node.js, Express.js, MongoDB, Vite, Tailwind CSS, Axios
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              This project involved designing and developing a dynamic multi-step onboarding platform that supports both user and admin interfaces. 
              The backend, built using Node.js and Express.js, manages form submissions, configuration storage, and data persistence in MongoDB through Mongoose. 
              The frontend, developed with React.js and Tailwind CSS, delivers a responsive and seamless experience across steps using the Context API for state management. 
              The application allows administrators to define onboarding steps and view user progress in real time. 
              It also features efficient API communication via Axios and optimized performance using Vite as the build tool.
            </p>

            <div className="flex gap-6">
              <a href="https://github.com/snandakumar2912/Custom-Onboarding-Flow" className="flex items-center gap-2 hover:text-blue-500">
                <FaGithub /> GitHub
              </a>
              <a href="https://zealthy-custom-onboarding-flow.onrender.com/" className="flex items-center gap-2 hover:text-blue-500">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border rounded-xl p-6 shadow-sm dark:border-gray-800">
            <h3 className="text-2xl font-semibold mb-2">
              NextGenCollab
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Real-Time Collaborative Whiteboard
            </p>

            <p className="text-sm text-blue-500 mb-4">
              Node.js, Express.js, Socket.io, Redis, UUID
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              NextGenCollab is a real-time collaborative whiteboard application that enables multiple users to draw, share, and interact simultaneously. 
              It uses Socket.io to manage bi-directional communication, ensuring that every user's action is broadcast instantly to all connected sessions. 
              Redis was used for state synchronization, allowing persistence and efficient handling of concurrent sessions. 
              The application supports room-based collaboration and conflict-free updates, making it ideal for remote teamwork. 
              This project helped deepen my understanding of web sockets, concurrency control, and distributed session management.
            </p>

            <div className="flex gap-6">
              <a href="https://github.com/snandakumar2912/NextGenCollab" className="flex items-center gap-2 hover:text-blue-500">
                <FaGithub /> GitHub
              </a>
              <a href="https://nextgencollab.onrender.com/" className="flex items-center gap-2 hover:text-blue-500">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="border rounded-xl p-6 shadow-sm dark:border-gray-800">
            <h3 className="text-2xl font-semibold mb-2">
              Mood Tracker
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              React.js Web Application
            </p>

            <p className="text-sm text-blue-500 mb-4">
              React.js, JavaScript (ES6+), HTML5, CSS3, Jest
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The Mood Tracker project is a simple yet meaningful web application that enables users to log their emotions and visualize mood trends over time. 
              Developed using React.js, the app manages dynamic state and component updates efficiently. 
              Conditional rendering and modular UI design create a smooth and responsive experience. J
              est was used for unit testing to ensure reliability and consistent functionality. 
              Through this project, I strengthened my knowledge of React hooks, reusable components, and test-driven development practices.
            </p>

            <div className="flex gap-6">
              <a href="https://github.com/snandakumar2912/mood-tracker" className="flex items-center gap-2 hover:text-blue-500">
                <FaGithub /> GitHub
              </a>
              <a href="https://snandakumar2912.github.io/mood-tracker/" className="flex items-center gap-2 hover:text-blue-500">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="border rounded-xl p-6 shadow-sm dark:border-gray-800">
            <h3 className="text-2xl font-semibold mb-2">
              AI-Powered Smart Wheelchair
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              IoT and Computer Vision Project
            </p>

            <p className="text-sm text-blue-500 mb-4">
              Python, Raspberry Pi, OpenCV, PyAutoGUI, IoT Sensors, Twilio API
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Developed as part of my final-year engineering project, the AI-driven smart wheelchair allows users with limited mobility to control movement using eye-tracking technology. 
              The system uses a Raspberry Pi to process real-time video input through OpenCV and detect pupil movements to determine motion direction. 
              Twilio API integration enables automatic SMS alerts in emergencies, while IoT sensors assist in obstacle detection and automation of home appliances. 
              This project demonstrated the powerful intersection of AI, IoT, and assistive healthcare technologies.
            </p>

            <div className="flex gap-6">
              <span className="text-sm text-gray-500">
                Academic Project
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects
