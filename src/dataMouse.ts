// Define the Project interface
export interface Project {
  name: string;
  client: string;
  description: string;
  src: string;
  year: number;
}

// Define the projects array with the Project type
export const projects: Project[] = [
  {
    name: "Microservices Architecture",
    client: "Grow",
    description: "I have expertise in Microservices Architecture, where applications are built as a collection of independent services. This approach improves scalability, flexibility, and maintainability, making it ideal for enterprise-level applications. I am skilled in designing, deploying, and managing microservices using modern technologies such as Spring Boot, API Gateway, Docker, and Kubernetes..",
    src: "google.jpg",
    year: 2025,
  },
  {
    name: "Monolithic Architecture",
    client: "Decimal",
    description: "I have experience in Monolithic Architecture, where the entire application is developed as a single, unified codebase. This approach simplifies deployment and development, making it suitable for small to medium-scale applications. I am proficient in designing monolithic applications using industry-standard frameworks and best practices.",
    src: "decimal.jpg",
    year: 2025,
  },
  {
    name: "MAVEN 11",
    client: "analogueagency",
    description: "New web design for the blockchain investment fund Maven 11.",
    src: "maven.jpg",
    year: 2022,
  },
  {
    name: "Wix Playground Homepage",
    client: "Wix Playground",
    description: "Wix Playground is powered by the Wix.com design team.",
    src: "wix.jpg",
    year: 2022,
  },
  {
    name: "POWELL—STUDIO",
    client: "POWELL—STUDIO",
    description: "The online presence for Powell—Studio.",
    src: "powell.jpg",
    year: 2023,
  },
  {
    name: "ROCKETPANDA",
    client: "ET Studio",
    description: "An Italian animation studio.",
    src: "panda.jpg",
    year: 2022,
  },
  {
    name: "C2 Montreal",
    client: "Ingamana",
    description: "C2 Montréal is Canada's premier creative-business event.",
    src: "c2.jpg",
    year: 2021,
  },
  {
    name: "Design Is Funny",
    client: "Shader Studio",
    description: "Funny is the design work of Daniele Buffa.",
    src: "funny.jpg",
    year: 2020,
  }
];
