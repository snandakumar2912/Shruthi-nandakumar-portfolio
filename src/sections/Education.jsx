const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen px-6 py-24 bg-white dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Education
        </h2>

        <div className="space-y-10">

          {/* Saint Louis University */}
          <div className="border rounded-xl p-6 dark:border-gray-800">
            <h3 className="text-2xl font-semibold">
              Saint Louis University
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              St. Louis, MO, USA
            </p>

            <p className="font-medium">
              Master of Science in Computer Science
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Aug 2023 - May 2025
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Focused on advanced software engineering, data analytics, and full-stack application development. 
              Built several hands-on projects integrating Java Spring Boot, React.js, and cloud deployment.
            </p>
          </div>

          {/* East West Institute of Technology */}
          <div className="border rounded-xl p-6 dark:border-gray-800">
            <h3 className="text-2xl font-semibold">
              East West Institute of Technology
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Bengaluru, Karnataka, India
            </p>

            <p className="font-medium">
              Bachelor of Engineering in Computer Science and Engineering
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Aug 2018 - Jun 2022
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Developed a strong foundation in algorithms, database systems, and application development. 
              Completed final-year project on an AI-powered Smart Wheelchair integrating IoT and computer vision.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education
