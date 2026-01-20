const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-12">

          {/* Morgan Stanley */}
          <div>
            <h3 className="text-2xl font-semibold">
              Morgan Stanley
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Full Stack Developer | Sep 2024 - Present
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              At Morgan Stanley, I work as a Full Stack Developer on a high-performance trading and portfolio management platform. 
              I designed and implemented a Java Spring Boot backend integrated with real-time market data and client transactions, 
              enabling investment managers to execute over 1,000 trades per day with minimal latency. 
              On the frontend, I developed dynamic React.js dashboards using Material-UI and Chart.js to visualize portfolio analytics, 
              market insights, and risk exposure, reducing manual reporting time from 3 hours to 20 minutes. 
              I optimized MongoDB schemas using Hibernate for high-speed queries and data consistency, 
              while implementing RESTful APIs to automate trade settlements and reconciliations. 
              I integrated Kafka for real-time service communication and configured Prometheus with Grafana for continuous monitoring, 
              maintaining 99.9% uptime during peak trading hours. Using Docker, Kubernetes, and Jenkins pipelines, 
              I ensured zero-downtime deployments. I also enforced secure access control through OAuth2, JWT, and AWS Cognito to meet financial data security standards.
            </p>
          </div>

          {/* LTIMindtree */}
          <div>
            <h3 className="text-2xl font-semibold">
              LTIMindtree
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Full Stack Developer | Feb 2022 - Jul 2023
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              During my tenure at LTIMindtree, I designed and developed a retail inventory and sales management system deployed across 50+ stores. 
              I built scalable RESTful APIs using Spring Boot for loyalty programs, order processing, and coupon validation, 
              enabling managers to process over 500 daily transactions efficiently. I restructured legacy monolithic services into independent Spring Boot microservices, 
              reducing service restart time from 45 minutes to 10 minutes. On the frontend, I created interactive React.js dashboards with Material-UI and Chart.js to track sales trends, 
              stock levels, and supplier activity, cutting report generation time from 4 hours to 45 minutes. 
              By optimizing MySQL performance using Hibernate ORM, indexing, and query tuning, I improved product search and order response time by 40%. 
              I used GitHub Actions for CI/CD and Docker-Kubernetes for containerized deployments. Kafka and WebSockets enabled real-time communication between stores and suppliers, 
              improving restock efficiency and customer satisfaction.
            </p>
          </div>

          {/* Hexaware */}
          <div>
            <h3 className="text-2xl font-semibold">
              Hexaware Technologies
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Full Stack Developer | Sep 2020 - Jan 2022
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              At Hexaware Technologies, I developed and maintained a HIPAA-compliant hospital management platform used by over 200 medical staff. 
              I built a Node.js backend and React.js frontend to streamline appointment scheduling and patient data handling. 
              I implemented FHIR-based APIs for secure EHR exchanges, reducing manual data entry from 2 hours to 30 minutes daily. 
              I migrated legacy Java EE modules to Spring Boot microservices, isolating patient registration, lab reports, and pharmacy workflows, which reduced system rollback incidents by 3x. 
              Using React, Vue, and D3.js, I built real-time dashboards for patient vitals and treatment records, cutting data lookup time from 15 minutes to 4 minutes. 
              PostgreSQL databases were optimized for sub-second responses. Automated testing with Jest and Cypress doubled test coverage, 
              while GitLab CI/CD pipelines ensured smooth multi-environment deployments.
            </p>
          </div>

          {/* Saint Louis University */}
          <div>
            <h3 className="text-2xl font-semibold">
              Saint Louis University
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Teaching Assistant | Aug 2024 - Dec 2024
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              As a Teaching Assistant at Saint Louis University, I supported over 50 students in mastering core programming concepts in Java and Python. 
              I led lab sessions, reviewed assignments, and provided one-on-one guidance to strengthen debugging, object-oriented design, 
              and problem-solving skills. I also assisted professors with workshops and assessments, ensuring smooth academic operations and improved learning outcomes. 
              This role strengthened my mentorship, communication, and technical fundamentals.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
