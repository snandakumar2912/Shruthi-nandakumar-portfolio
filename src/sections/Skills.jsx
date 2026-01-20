export default function Skills() {
  const skills = [
    "React.js", "Angular (12+)", "JavaScript (ES6+)", "TypeScript",
    "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Responsive UI/UX Design",

    "Java 8/17", "J2EE", "Spring MVC", "JSP", "Hibernate", "Spring Boot 3",
    "JDBC", "GraphQL", "Microservices", "Apache Kafka", "RabbitMQ",

    "AWS Lambda", "EC2", "S3", "RDS", "API Gateway",
    "Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "GitHub Actions",
    "Maven", "Gradle", "CI/CD Pipeline Automation",

    "PostgreSQL", "MySQL", "MongoDB", "Redis", "Stored Procedures",
    "Database Design", "Performance Tuning", "SQL Query Optimization",

    "Spring Security", "OAuth2", "JWT", "RBAC (Role-Based Access Control)",
    "API Gateway Management", "Secure Token Handling",

    "JUnit", "Mockito", "Selenium", "Integration Testing",
    "Load Testing", "Performance Testing", "API Testing (Postman)",

    "Swagger", "Git", "GitHub", "GitLab",
    "IntelliJ IDEA", "Visual Studio Code",

    "Scrum", "Kanban", "JIRA", "Confluence",
    "Sprint Planning", "Code Reviews", "Stand-ups"
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 md:px-20 py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="
                px-4 py-2 rounded-lg text-sm font-medium
                bg-white dark:bg-gray-800
                text-gray-800 dark:text-gray-200
                border border-gray-200 dark:border-gray-700
                hover:bg-blue-50 dark:hover:bg-gray-700
                transition
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
