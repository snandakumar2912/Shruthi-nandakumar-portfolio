const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Profile Image */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Shruthi Nandakumar"
            className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-gray-200 dark:border-gray-700"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Hi, I&apos;m <span className="text-blue-500">Shruthi Nandakumar</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-5">
            Full Stack Developer
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            A passionate Full Stack Developer with 4+ years of hands-on experience across the complete Software Development Life Cycle (SDLC). 
            Skilled in designing and developing responsive, user-centric web applications using React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Bootstrap, and Tailwind CSS. 
            Proficient in backend development with Java 8/17, Spring Boot 3, Spring MVC, Hibernate, JPA, Node.js, and Express.js, focusing on building RESTful APIs and integrating microservices with Kafka and RabbitMQ. 
            Experienced in PostgreSQL, MySQL, MongoDB, and Redis for efficient schema design, query optimization, and high-performance data handling. Adept in Docker, Kubernetes, and AWS (EC2, S3, RDS, Lambda) 
            with CI/CD pipelines using Jenkins, GitHub Actions, and GitLab, enabling zero-downtime deployments across 20+ microservices per release cycle. Certified by Amazon and IBM in Software Development, Cloud Native, 
            Microservices, and DevOps, with a solid foundation in Agile methodologies, version control (Git), and automated testing (Jest, Postman). Passionate about writing clean, maintainable code, solving complex problems, 
            and continuously learning emerging technologies to deliver scalable and efficient software solutions.
          </p>

          <a
            href="/Shruthi_Nandakumar_Resume.pdf"
            download
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
