import api from "../assets/img/api.png"
import asrs from "../assets/img/asrs.png"
import away from "../assets/img/away.jpeg"
import bill from "../assets/img/bill.jpeg"
import figma from "../assets/img/figma.jpeg"
import house from "../assets/img/house.jpeg"
import todo from "../assets/img/todo.jpeg"
import pre from "../assets/img/pre.png"


export const HERO_CONTENT = `I'm Ayman Khattaby, an aspiring full-stack developer with a strong passion for learning and creating impactful web applications. As I build my skills in front-end technologies like React and Next.js, and back-end tools such as Node.js and MongoDB, I’m focused on gaining hands-on experience and expanding my knowledge. My goal is to contribute to projects that provide meaningful user experiences and drive value.`;

export const ABOUT_TEXT = `A passionate explorer in the world of full-stack development, I’m on a mission to build intuitive and impactful web applications! Although just starting my journey, I’m diving into technologies like React, Next.js, Node.js, and MongoDB with excitement and a hunger to learn. Driven by curiosity, I love uncovering how things work and turning ideas into reality through code. There's nothing more satisfying than solving a complex problem or watching a project come to life. When I’m not coding, I’m usually exploring new tech or finding inspiration for my next creative project.`;

export const EXPERIENCES = [


  {
    year: "2018 - 2023",
    degree: "Bachelor's in Mechatronics Engineering",
    institution: "Future University in Egypt",
    description: `Developed strong analytical and programming skills with hands-on experience in coding, automation, and system integration. Completed projects that required teamwork, technical problem-solving, and a focus on efficiency and innovation.`,
    relevantSkills: ["Programming", "C++", "Python", "Systems Integration", "Technical Problem-Solving"],
  },
  {
    year: "2019 - 2022",
    degree: "Robotics Competitions",
    institution: ["Sumo Robot Competition", "ROV (Remotely Operated Vehicle) Competition"],
    description: `Participated in robotics competitions, including Sumo Robot and ROV, where I gained hands-on experience in robot design, programming, and control systems. Utilized Raspberry Pi and Arduino for robotic control, enhancing my skills in problem-solving, electronics, and team collaboration.`,
    relevantSkills: ["Raspberry Pi", "Arduino", "Robot Design", "Programming", "Control Systems", "Team Collaboration", "Problem-Solving"],
  },
  
  {
    year: "2020 - 2021",
    degree: "Competitive Programming",
    institution: "Egyptian Collegiate Programming Contest (ECPC)",
    description: `Participated twice in the ECPC, where I developed strong problem-solving skills and enhanced my understanding of algorithms and data structures. Collaborated with team members to tackle complex programming challenges under timed conditions, gaining experience in competitive programming.`,
    relevantSkills: ["Problem-Solving", "Algorithms", "Data Structures", "Team Collaboration", "Competitive Programming"],
  },
  
  {
    year: "2024",
    degree: "Meta Full-Stack Engineer Certificate",
    institution: "Coursera",
    description: `Completed a comprehensive program developed by Meta, covering both front-end and back-end development. Gained proficiency in HTML, CSS, JavaScript, React, Python, Django, and MySQL. Engaged in hands-on projects to build responsive web applications, emphasizing best practices in version control, API development, and deployment environments.`,
    relevantSkills: ["HTML", "CSS", "JavaScript", "React", "Python", "Django", "MySQL", "Version Control", "API Development", "Web Application Deployment"],
  },
  {
    year: "2024",
    degree: "Introduction to Linux and Command-Line Interface Certificate",
    institution: "LinkedIn Learning",
    description: `Completed a crash course on Linux basics and command-line interface (CLI) usage. Learned fundamental commands for file navigation, simple file management, and basic Linux operations.`,
    relevantSkills: ["Linux Basics", "Command-Line Interface", "File Navigation", "Basic Commands"],
  },
  {
    year: "2024",
    degree: "PostgreSQL Crash Course Certificate",
    institution: "LinkedIn Learning",
    description: `Completed a crash course on PostgreSQL, covering essential database concepts, basic queries, and data manipulation. Learned how to create, read, update, and delete data in a PostgreSQL database.`,
    relevantSkills: ["PostgreSQL", "Database Basics", "SQL Queries", "Data Manipulation"],
  },
];

export const PROJECTS = [
  {
    title: "House Selling and Renting Platform",
    image: house,
    description:
      "A full-featured MERN stack application designed for listing, selling, and renting houses. Includes user authentication, house listings, and rental management features.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
  },
  {
    title: "Automated Storage and Retrieval System (ASRS)",
    image: asrs,
    description:
      "An embedded project focused on designing and implementing an Automated Storage and Retrieval System (ASRS) for efficient storage solutions. Utilized Flutter for the user interface, alongside system automation, sensor integration, and retrieval operations.",
    technologies: ["Flutter", "Embedded Systems", "Automation", "Sensors", "C/C++"],
  },
  {
    title: "Split the Bill App",
    image: bill,
    description:
      "A React-based app to split bills among friends, with features like adding friends with custom avatars, tracking expenses, and real-time balance updates. Designed with a clean UI and built-in form validation.",
    technologies: ["React", "JavaScript", "CSS", "State Management"],
  },
  {
    title: "Far Away: React Packing List App",
    image: away,
    description:
      "A React app designed to help travelers manage their packing lists. Features modular components, efficient state management, and dynamic event handling for adding, deleting, and toggling items.",
    technologies: ["React", "JavaScript", "useState", "Array Manipulation"],
  },
  {
    title: "Life Goals Backend API",
    image: api,
    description:
      "A MERN stack backend API designed to manage life goals with secure user authentication and authorization. Supports full CRUD functionality, allowing users to create, read, update, and delete personal goals, with personalized data retrieval.",
    technologies: ["MongoDB", "Express.js", "Node.js", "JWT", "API Development"],
  },
  {
    title: "Little Lemon Table Reservation Feature",
    image: figma,
    description:
      "A Figma-designed table reservation feature for Little Lemon, created as part of the Meta Front-End course. The design enhances user experience with a vibrant, user-friendly interface that reflects the welcoming atmosphere of the restaurant.",
    technologies: ["Figma", "UI/UX Design"],
  },
  {
    title: "Simple To-Do List App",
    image: todo,
    description:
      "A sleek web application for managing tasks, built with the MERN stack. Features an intuitive interface, real-time updates, and a responsive design to help users efficiently add, remove, and check off tasks.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "House Price Prediction Model",
    image: pre,
    description:
      "A machine learning project focused on predicting house prices based on various features like location, size, and amenities. Built using data analysis and machine learning techniques to deliver accurate price predictions, aiding users in making informed decisions.",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
  },


];

export const CONTACT = {
  address: "Al Banafseg 3, First Settlement, New Cairo, Cairo, Egypt",
  phoneNo: "+20 109 170 0820",
  email: "aymanibrahim678@gmail.com",
};
