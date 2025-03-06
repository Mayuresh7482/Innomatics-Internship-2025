// projects.js - Project data
export const projectsData = [
   {
     id: 1,
     title: "Hunger Help Platform",
     description: "A web platform connecting food donors with non-profit organizations, reducing food waste by 30% and adopted by 3 NGOs.",
     image: "/assets/images/projects/hunger-help.jpg",
     technologies: ["React", "Node.js", "Express", "MongoDB", "AWS"],
     liveUrl: "https://hunger-help.example.com",
     repoUrl: "https://github.com/yourusername/hunger-help"
   },
   {
     id: 2,
     title: "Food Ordering System",
     description: "A responsive food ordering application with cart functionality and real-time price calculation.",
     image: "/assets/images/projects/food-ordering.jpg",
     technologies: ["HTML5", "CSS3", "JavaScript", "React"],
     liveUrl: "https://food-order.example.com",
     repoUrl: "https://github.com/yourusername/food-ordering"
   },
   {
     id: 3,
     title: "Portfolio Website",
     description: "A responsive personal portfolio website with 90+ Lighthouse performance score.",
     image: "/assets/images/projects/portfolio.jpg",
     technologies: ["HTML5", "CSS3", "JavaScript", "React", "Netlify"],
     liveUrl: "https://portfolio.example.com",
     repoUrl: "https://github.com/yourusername/portfolio"
   },
   {
     id: 4,
     title: "CRUD Application",
     description: "A web-based CRUD application with intuitive UI and efficient data handling.",
     image: "/assets/images/projects/crud-app.jpg",
     technologies: ["ASP.NET", "SQL Server", "ADO.NET"],
     liveUrl: "https://crud.example.com",
     repoUrl: "https://github.com/yourusername/crud-app"
   }
 ];
 
 // skills.js - Skills data
 export const skillsData = [
   {
     id: 1,
     title: "Programming Languages",
     skills: [
       { name: "JavaScript (ES6+)", level: 90 },
       { name: "Python", level: 75 },
       { name: "Java", level: 70 },
       { name: "C++", level: 65 },
       { name: "C#", level: 60 }
     ]
   },
   {
     id: 2,
     title: "Frontend Development",
     skills: [
       { name: "ReactJS", level: 85 },
       { name: "HTML5", level: 90 },
       { name: "CSS3", level: 85 },
       { name: "Redux", level: 70 },
       { name: "Context API", level: 75 }
     ]
   },
   {
     id: 3,
     title: "Backend Development",
     skills: [
       { name: "Node.js", level: 80 },
       { name: "Express.js", level: 80 },
       { name: "ASP.NET", level: 65 },
       { name: "RESTful APIs", level: 85 }
     ]
   },
   {
     id: 4,
     title: "Databases",
     skills: [
       { name: "MongoDB", level: 80 },
       { name: "MySQL", level: 75 },
       { name: "SQL Server", level: 70 }
     ]
   },
   {
     id: 5,
     title: "Tools & Platforms",
     skills: [
       { name: "Git", level: 85 },
       { name: "VS Code", level: 90 },
       { name: "Postman", level: 85 },
       { name: "AWS", level: 60 },
       { name: "Docker", level: 55 }
     ]
   }
 ];
 
 // experience.js - Experience data
 export const experienceData = [
   {
     id: 1,
     position: "MERN Stack Developer Intern",
     company: "Innomatics Research Labs",
     location: "Pune",
     period: "January 2025 - Present",
     responsibilities: [
       "Developed 3+ full-stack web applications using the MERN stack",
       "Built and optimized 10+ RESTful APIs, reducing response time by 20%",
       "Implemented JWT-based authentication for secure user login",
       "Enhanced UI/UX using React Hooks, Context API, and Redux",
       "Collaborated with a team of 5 developers in an Agile environment"
     ]
   },
   {
     id: 2,
     position: "Quality Engineer",
     company: "Mechanical",
     location: "Pune",
     period: "October 2021 - October 2022",
     responsibilities: [
       "Conducted quality inspections to ensure product compliance",
       "Analyzed quality metrics and implemented process improvements",
       "Collaborated with cross-functional teams to resolve quality issues",
       "Maintained detailed inspection records and documentation",
       "Applied analytical thinking to identify root causes of quality deviations"
     ]
   },
   {
     id: 3,
     position: "Quality Associate",
     company: "GKN Driveline",
     location: "Lonikand",
     period: "September 2020 - December 2020",
     responsibilities: [
       "Supported quality assurance processes for automotive components",
       "Performed routine quality checks and inspections",
       "Maintained accurate documentation of quality control activities",
       "Participated in team discussions to improve quality procedures",
       "Assisted in implementing quality standards across production"
     ]
   }
 ];