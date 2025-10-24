export const defaultData = {
  personalInfo: {
    firstName: 'Sam',
    lastName: 'D.',
    phone: '+1 3845891299',
    email: 'samjustinit@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sam-the-dev/',
    github: 'https://github.com/samDev',
    portfolio: 'https://samdev.vercel.app/',
  },

  education: [
    {
      id: crypto.randomUUID(),
      university: 'National University of Saint Augustine',
      degree: 'Bachelor of Computer Science',
      description:
        'Courses: Software Engineering Practice, Applied Machine Learning, Operating Systems, Computer Architecture, Model-Based Programming, Algorithms and Data Structures, Databases.',
      startDate: 'Jun 2020',
      endDate: 'Aug 2025',
      location: 'Arequipa, Peru',
    },
  ],

  workExperience: [
    {
      id: crypto.randomUUID(),
      company:
        'Faculty of Systems Engineering, National University of Saint Augustine',
      position: 'Backend Developer Intern',
      description:
        'Contributed to a software development team building a web application for streamlining software requirements documentation. \n Responsible for backend API development (Node.js, Express, TypeScript), database management (PostgreSQL, PrismaORM), and deployment to Supabase.',
      startDate: 'Aug 2024',
      endDate: 'Apr 2025',
      location: 'Arequipa, Peru',
    },
    {
      id: crypto.randomUUID(),
      company: 'National University of Saint Augustine',
      position: 'Artificial Intelligence Research Assistant ',
      description:
        'Collaborated on a government-funded research project to build a framework from scratch for real-time anomaly detection in transportation units. \n Implemented an LSTM-Autoencoder model using Python and AI libraries to identify anomalous data patterns.',
      startDate: 'May 2025',
      endDate: 'Sep 2025',
      location: 'Arequipa, Peru',
    },
  ],

  projects: [
    {
      id: crypto.randomUUID(),
      name: 'Personal Portfolio',
      website: 'https://portfolio-khaki-seven-93.vercel.app/',
      sourceCode: 'https://github.com/Alex-Huaracha/portfolio',
      description:
        'Responsive portfolio built with Next.js and Tailwind CSS to showcase projects, blog posts, and contact info. Supports SSG, SEO optimizations, and dark mode.',
      technologies: 'Next.js, React, Tailwind CSS, Vercel',
    },
    {
      id: crypto.randomUUID(),
      name: 'Expense Tracker API',
      website: '',
      sourceCode: 'https://github.com/Alex-Huaracha/expense-tracker-api',
      description:
        'RESTful API for tracking personal expenses with user authentication, transaction categories, and monthly reports. Includes unit tests and Docker setup for local development.',
      technologies: 'Django, PostgreSQL, Docker, pytest',
    },
  ],

  technicalSkills: [
    {
      id: crypto.randomUUID(),
      title: 'Languages',
      skills: 'Python, Java, SQL, HTML5, CSS, JavaScript',
    },
    {
      id: crypto.randomUUID(),
      title: 'Developer Tools',
      skills: 'Git, Docker, Postman, JIRA, AWS, Azure',
    },
    {
      id: crypto.randomUUID(),
      title: 'Libraries/Frameworks',
      skills: 'React, Node.js, Next.js, Django, PostgreSQL',
    },
  ],
};
