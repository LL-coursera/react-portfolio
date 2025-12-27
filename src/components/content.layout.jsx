const fullName = "Lewis Luu";

export const content = {
  info: {
    name: fullName,
    email: "loc.luu.1990@gmail.com",
    tel: "+1-281-935-3150",
  },
  nav: {
    skill: "Skills",
    about: "About Me",
    exp: "Experience",
    contact: "Contact",
  },
  landingSection: {
    greeting: `Hi, I am ${fullName} !👋`,
    bio1: "A frontend developer",
    bio2: "specialised in ReactJS",
  },
  exps: [
    {
      title: "Upwork Client. | Personal Finance Tracker   ",
      time: "Jul 2025 – Present",
      description:
        "The Personal Finance Tracker helps users monitor their income, expenses, and budgets with real-time insights into their spending patterns. The app uses interactive charts to visualize financial data, while offering secure user authentication and scalable backend services for seamless data management.",
      responsibility: [
        "Developed a Personal Finance Tracker SPA with ReactJS, enabling users to track income, expenses, and budgets.",
        "Created reusable UI components in ReactJS, optimizing frontend performance and maintaining a modular architecture.",
        "Integrated Chart.js for visualizing spending patterns and budget comparisons, enhancing user insights.",
        "Built a Node.js backend with Express and deployed on AWS EC2 with PostgreSQL on RDS.",
        "Implemented user authentication with Firebase, ensuring secure data storage and personalized user experiences.",
        "Containerized the app using Docker, enabling consistent deployment and scalability across development, staging, and production environments.",
      ],
    },
    {
      title: "Dough Perfection Co. | Digital Onboarding Platform ",
      time: "Jan 2025 – Jun 2025",
      description:
        "The Digital Onboarding Platform simplifies account setup for new users, guiding them through multi-step processes while maintaining accurate progress tracking. It helps employees manage the onboarding workflow efficiently and securely, ensuring a seamless experience even during high traffic periods.",
      responsibility: [
        "Built multi-step onboarding flows for new accounts and profile maintenance in ReactJS with TypeScript, React Router, and Redux, cutting initial load by 30% through route-level code splitting, lazy modules, and prioritized preloading.",
        "Implemented server-driven form schemas, centralized validation rules, and progress persistence with React Hook Form and Yup for better form handling and data validation.",
        "Partnered with API owners in Node.js and Java to define OpenAPI contracts and align pagination, idempotency keys, and correlation IDs with PostgreSQL-backed services, adding retry-safe submissions and audit logging to harden onboarding during traffic spikes.",
        "Delivered internal tools for branch and call-center reviewers, including reviewer queues, search, and decision UIs. Documented component APIs to ease potential React adoption and raised accessibility from 75% to 95% with semantic landmarks, ARIA, and full keyboard flows.",
        "Strengthened quality gates with 80%+ unit coverage (Jest/React Testing Library) and Playwright smoke E2E on critical paths, and enforced Axe checks in CI to prevent accessibility regressions.",
        "Collaborated with Product, Compliance, and Support to translate complex onboarding requirements into simple UIs, ran internal demos, and iterated quickly while balancing user experience with bank-grade reliability requirements.",
      ],
    },
    {
      title: "Antra Inc  | Enterprise Web & Services Platform ",
      time: "Feb 2022 – Sep 2024",
      description:
        "The Enterprise Web & Services Platform improves user experience with optimized enterprise applications that handle data-heavy workflows. It features secure API integrations and role-based access control, helping businesses maintain reliability and smooth service delivery for both internal teams and external users.",
      responsibility: [
        "Built and enhanced enterprise web apps in ReactJS with TypeScript, React Router, and Redux, reducing unnecessary re-renders by 25% through shared components/selectors and memoization.",
        "Optimized responsiveness with lazy loading, React Suspense, and client-side caching to improve UX on data-heavy pages and long-running workflows.",
        "Developed REST services in Spring Boot/Web MVC backed by PostgreSQL, implementing RBAC with Spring Security, structured error handling, and trace/correlation IDs for observability.",
        "Drove API-first delivery with OpenAPI specs, versioning, pagination, and idempotency, and aligned with API gateway rate limits to cut integration rework and stabilize consumer contracts.",
        "Containerized services with Docker and supported Kubernetes rollouts, improving delivery reliability with CI checks, health and readiness probes, and rollback strategies.",
        "Maintained automated tests with Playwright and CucumberJS, ensuring 80%+ unit test coverage with Jest/React Testing Library, and enforced Axe checks in CI to raise baseline WCAG conformance for internal and external users.",
      ],
    },
  ],
  skills: {
    title: "My skills",
    detail: [
      "Programming Languages: JavaScript, TypeScript, Java, Python, PHP",
      "Enterprise & Web Technologies: ReactJs, NextJs, Angular, NestJS, NgRx, RxJS, Bootstrap, HTML5, CSS3, AJAX, Web API",
      "Database Server & IDE: MongoDB, Firebase, MySQL, VS Code, Visual Studio, Android Studio, IntelliJ",
      "Methodologies: Agile (Scrum), Waterfall",
      "Testing/Debugging Tools: Jasmine, Karma, Postman, Jenkins",
      "Version Control & Others: JIRA, Git, Figma",
    ],
  },
};
