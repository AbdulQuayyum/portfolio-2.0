import project from "../../Assets/Images/project.png"
import user from "../../Assets/Images/user.png"
import clone from "../../Assets/Images/clone.png"
import auth from "../../Assets/Images/auth.png"
import uni from "../../Assets/Images/uni.png"
import course from "../../Assets/Images/course.png"
import uniapi from "../../Assets/Documents/Univerity API.postman_collection.json"
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript, SiThreedotjs, SiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiBootstrap, SiJquery, SiMongodb, SiNodedotjs, SiExpress, } from "react-icons/si"
export const projectsData = [
    {
        id: 1,
        image: project,
        name: "Project 01",
        category: "Frontend",
        githubUrl: "https://github.com/AbdulQuayyum",
        project: "https://github.com/AbdulQuayyum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        tech: [
            <SiHtml5 />,
            < SiCss3 />,
        ]
    },
    {
        id: 2,
        image: project,
        name: "Project 02",
        category: "Frontend",
        githubUrl: "https://github.com/AbdulQuayyum",
        project: "https://github.com/AbdulQuayyum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        tech: [
            <SiHtml5 />,
            < SiCss3 />,
        ]
    },
    {
        id: 3,
        image: project,
        name: "Project 03",
        category: "Frontend",
        githubUrl: "https://github.com/AbdulQuayyum",
        project: "https://github.com/AbdulQuayyum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        tech: [
            <SiHtml5 />,
            < SiCss3 />,
        ]
    },
    {
        id: 4,
        image: clone,
        name: "Netflix Clone",
        category: "Backend",
        githubUrl: "https://github.com/AbdulQuayyum/MERN-Netflix-clone/tree/main/api",
        project: "https://github.com/AbdulQuayyum/MERN-Netflix-clone/tree/main/api",
        description: "An API service for a Netflix clone.",
        tech: [
            < SiNodedotjs />,
            < SiExpress />,
            < SiMongodb />,
        ]
    },
    {
        id: 5,
        image: user,
        name: "A Simple User",
        category: "Backend",
        githubUrl: "https://github.com/AbdulQuayyum/rest-api.git",
        project: "https://github.com/AbdulQuayyum/rest-api.git",
        description: "A simple REST API implementation of User acessing routes.",
        tech: [
            < SiNodedotjs />,
            < SiExpress />,
            < SiMongodb />,
        ]
    },
    {
        id: 6,
        image: auth,
        name: "Authentication API",
        category: "Backend",
        githubUrl: "https://github.com/AbdulQuayyum/Authentication-API",
        project: "https://github.com/AbdulQuayyum/Authentication-API",
        description: "An authentication API service.",
        tech: [
            < SiNodedotjs />,
            < SiExpress />,
            < SiMongodb />,
        ]
    },
    {
        id: 7,
        image: course,
        name: "Course API",
        category: "Backend",
        githubUrl: "https://github.com/AbdulQuayyum/course-api.git",
        project: "https://github.com/AbdulQuayyum/course-api.git",
        description: "An API service to group the courses I am offering in school.",
        tech: [
            < SiNodedotjs />,
            < SiExpress />,
            < SiMongodb />,
        ]
    },
    {
        id: 8,
        image: uni,
        name: "University API",
        category: "Backend",
        githubUrl: "https://github.com/AbdulQuayyum/university-api.git",
        project: "https://github.com/AbdulQuayyum/university-api.git",
        description: "An API service to group some selected universities and more informations.",
        tech: [
            < SiNodedotjs />,
            < SiExpress />,
            < SiMongodb />,
        ]
    },
    {
        id: 9,
        image: project,
        name: "Project 05",
        category: "Mobile",
        githubUrl: "https://github.com/AbdulQuayyum",
        project: "https://github.com/AbdulQuayyum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        tech: [
            <SiHtml5 />,
            < SiCss3 />,
        ]
    },
    {
        id: 10,
        image: project,
        name: "Project 06",
        category: "Mobile",
        githubUrl: "https://github.com/AbdulQuayyum",
        project: "https://github.com/AbdulQuayyum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        tech: [
            <SiHtml5 />,
            < SiCss3 />,
        ]
    },
]

export const projectsNav = [
    {
        name: "All"
    },
    {
        name: "Frontend"
    },
    {
        name: "Backend"
    },
    {
        name: "Mobile"
    },
]