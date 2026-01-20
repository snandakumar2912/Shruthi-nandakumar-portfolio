import { FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="min-h-screen px-6 py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Certifications
        </h2>

        <div className="space-y-10">

          {/* Amazon Certification */}
          <div className="border rounded-xl p-6 bg-white dark:bg-gray-800 dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-1">
              Amazon - Junior Software Developer Professional Certificate
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Amazon on Coursera · Issued Jul 2025
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Completed a 7-course professional program covering Java, Data Structures & Algorithms, Databases (SQL), 
              Full Stack Development, and Generative AI in Software Engineering. 
              Gained practical experience with Git-based version control, backend logic design, and modern application development.
            </p>

            <a
              href="https://coursera.org/verify/professional-cert/06NN2LQKV7ZV"
              className="inline-flex items-center gap-2 text-blue-500 hover:underline"
            >
              Verify Certificate <FaExternalLinkAlt size={12} />
            </a>
          </div>

          {/* IBM Certification */}
          <div className="border rounded-xl p-6 bg-white dark:bg-gray-800 dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-1">
              IBM - Cloud Native, Microservices, Containers, DevOps, and Agile
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              IBM on Coursera · Issued Jul 2025
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Learned cloud-native architecture principles, microservice development, and containerization using Docker and Kubernetes. 
              Explored CI/CD automation and Agile methodologies for building and deploying scalable cloud-based applications.
            </p>

            <a
              href="https://www.coursera.org/account/accomplishments/verify/MURCI33DC8XT"
              className="inline-flex items-center gap-2 text-blue-500 hover:underline"
            >
              Verify Certificate <FaExternalLinkAlt size={12} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;