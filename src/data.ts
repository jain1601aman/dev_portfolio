export const resumeData = {
  basics: {
    name: "Aman Jain",
    title: "Software Engineer",
    summary: "Software Engineer with 4+ years of experience designing distributed, event-driven systems at scale. Led high-throughput backend platforms with focus on reliability, cost optimization, and low-latency API design. Strong in Java, AWS, and microservices architecture.",
    location: "Bengaluru, IND",
    email: "jain1601aman@gmail.com",
    phone: "9826538773",
    links: [
      { name: "GitHub", url: "https://github.com/jain1601aman" },
      { name: "LinkedIn", url: "https://linkedin.com/in/aman-jain-1601" },
      { name: "LeetCode", url: "https://leetcode.com/jain1601aman" }
    ]
  },
  experience: [
    {
      company: "Amazon",
      role: "Software Development Engineer 2",
      dates: "Apr 2025 - Dec 2025",
      location: "Bengaluru, India",
      bullets: [
        "Designed and implemented a distributed, rules-driven enrichment engine using event-driven architecture, improving processing latency by 25% while enabling idempotent reprocessing and audit traceability.",
        "Redesigned ManifestInfra, scaling max throughput 6x (70 -> 420 TPS) through DB optimization and async pipelines.",
        "Owned backend platforms for financial, order, and audit data serving third-party sellers and external auditors.",
        "Migrated EC2 workloads to AWS Lambda, cutting infra costs by 80% while improving scalability and reliability.",
        "Technologies: Java, AWS (Lambda, EC2, S3, CloudWatch, SNS, SQS, CDK, DynamoDB), Git, Microservices, Event-Driven Architecture, Design Patterns (Command Chain)"
      ]
    },
    {
      company: "TriNet Zenefits",
      role: "Software Development Engineer 1",
      dates: "Aug 2022 - Dec 2024",
      location: "Bengaluru, India",
      bullets: [
        "Rearchitected new-client onboarding flow, reducing onboarding time by 25% and accelerating customer activation.",
        "Delivered revenue and operations features across core HR and Contractor Payments platforms, including a contractor management dashboard projected to increase revenue by 15%.",
        "Led quality and reliability improvements, cutting production client issues by 75% (40 -> 10/month) and reducing support queries by 50% through UX enhancements and automated front-end testing.",
        "Technologies: Python, SQL, REST APIs, GitHub, GraphQL, PostgreSQL, JavaScript, Cypress, Ember, JIRA"
      ]
    },
    {
      company: "Poshmark",
      role: "Software Development Engineer 1",
      dates: "Aug 2021 - Jul 2022",
      location: "Chennai, India",
      bullets: [
        "Contributed to the Orders & Offers team, maintaining and enhancing the order engine's backend business logic.",
        "Focused mainly on two projects: 1099-K for tax system compliance and LIFO for sellers to accept a buyer's last offer.",
        "Boosted offer-to-order conversion ratio by 35% and daily GMV by 5% through Project LIFO, while reducing average offer-to-order conversion time by 10%.",
        "Technologies: Ruby, MongoDB, REST APIs, Elasticsearch, Cucumber, GitHub"
      ]
    }
  ],
  achievements: [
    {
      item: "Improving processing latency by 25%",
      context: "Designed and implemented a distributed, rules-driven enrichment engine using event-driven architecture"
    },
    {
      item: "Scaling max throughput 6x (70 -> 420 TPS)",
      context: "Redesigned ManifestInfra through DB optimization and async pipelines"
    },
    {
      item: "Cutting infra costs by 80%",
      context: "Migrated EC2 workloads to AWS Lambda while improving scalability and reliability"
    },
    {
      item: "Reducing onboarding time by 25%",
      context: "Rearchitected new-client onboarding flow, accelerating customer activation"
    },
    {
      item: "Projected to increase revenue by 15%",
      context: "Delivered contractor management dashboard"
    },
    {
      item: "Cutting production client issues by 75% (40 -> 10/month)",
      context: "Led quality and reliability improvements"
    },
    {
      item: "Reducing support queries by 50%",
      context: "Through UX enhancements and automated front-end testing"
    },
    {
      item: "Boosted offer-to-order conversion ratio by 35% and daily GMV by 5%",
      context: "Through Project LIFO"
    },
    {
      item: "Reducing average offer-to-order conversion time by 10%",
      context: "Through Project LIFO"
    }
  ],
  projects: [
    {
      title: "Dictionary (Chrome Extension)",
      stack: "REST APIs, JavaScript, HTML, CSS",
      bullets: [
        "Designed a JavaScript browser extension to find word meanings with examples directly from any web page, using API calls to fetch JSON data from dictionaryapi.dev and displaying it in a modal box."
      ],
      links: ["https://github.com/jain1601aman/Dictionary"]
    },
    {
      title: "Secure-chat",
      stack: "Node.js, Socket.io, JavaScript, MongoDB",
      bullets: [
        "Developed a web app using Node.js, Socket.io, and MongoDB for encrypted chat between two parties, utilizing 2048-bit asymmetric key encryption on the client side."
      ],
      links: ["https://github.com/jain1601aman/secure-chat"]
    }
  ],
  skills: [
    {
      group: "Programming Languages",
      skills: ["C/C++", "Java", "Python", "Node.js"]
    },
    {
      group: "Databases",
      skills: ["MongoDB", "SQL"]
    },
    {
      group: "Technologies & Tools",
      skills: ["AWS", "EC2", "DynamoDB", "S3", "SQS", "SNS", "Lambda", "CloudWatch", "Kafka", "Elasticsearch", "Redis", "Git", "Mockito", "Cypress", "Cucumber", "GraphQL", "Design Patterns", "Microservices", "Monolithic Systems"]
    }
  ],
  education: [
    {
      institution: "Institute of Engineering & Technology, DAVV, Indore",
      degree: "Bachelor of Engineering (B.E.) in Information Technology",
      dates: "Aug 2017 - Jul 2021",
      gpa: "CGPA: 8.4/10",
      coursework: "Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, DBMS, Web Technologies"
    }
  ],
  certifications: [],
  awards: [
    "Received Team Star Award in 2 quarters at Trinet Zenefits, Appreciation Award for project LIFO at Poshmark.",
    "Secured 2nd position among 200+ participants in code-a-thon (INVENTO 2019).",
    "Personal Best of 1800+ rating(4*) on CodeChef. Certification and badges in DSA(6*), JAVA(5*), Python, C++, and SQL on HackerRank."
  ],
  extra: []
};
