// import auth from "../../Assets/Images/auth.png"
// import cat from "../../Assets/Images/cat.png"
// import clone from "../../Assets/Images/clone.png"
// import course from "../../Assets/Images/course.png"
// import crowdfunding from "../../Assets/Images/crowdfunding.png"
// import imggen from "../../Assets/Images/img-gen.png"
// import project from "../../Assets/Images/project.png"
// import softgames from "../../Assets/Images/softgames.png"
// import user from "../../Assets/Images/user.png"
// import uni from "../../Assets/Images/uni.png"

import { auth, cat, clone, course, crowdfunding, imggen, project, softgames, user, uni } from "../../Assets/Index"

import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript, SiThreedotjs, SiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiBootstrap, SiJquery, SiMongodb, SiNodedotjs, SiExpress, SiSupabase, SiVite, SiOpenai, SiFramer } from "react-icons/si"
export const projectsData = [
    {
        id: 1,
        image: project,
        name: "Project 01",
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
        id: 2,
        image: project,
        name: "Project 02",
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
        id: 3,
        image: project,
        name: "Project 03",
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
        id: 4,
        image: project,
        name: "A Simple User",
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
        id: 5,
        image: clone,
        name: "Netflix Clone",
        category: "Backend",
        githubUrl: "https://github.com/AbdulQuayyum/MERN-Netflix-clone/tree/main/api",
        project: "https://github.com/AbdulQuayyum/MERN-Netflix-clone/tree/main/api",
        description: "An API service for a Netflix clone.",
        tech: [
            < SiJavascript />,
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
            < SiJavascript />,
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
            < SiJavascript />,
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
            < SiJavascript />,
            < SiNodedotjs />,
            < SiExpress />,
            < SiMongodb />,
        ]
    },
    {
        id: 9,
        image: cat,
        name: "Cats Breeds",
        category: "Frontend",
        githubUrl: "https://github.com/AbdulQuayyum/Cat-Breeds.git",
        project: "https://cats-amber.vercel.app/",
        description: "A Web Application to showcase some breeds of cats",
        tech: [
            < SiJavascript />,
            < SiTypescript />,
            < SiNextdotjs />,
            < SiCss3 />,
            < SiTailwindcss />,
            < SiSupabase />,
        ]
    },
    {
        id: 10,
        image: project,
        name: "Project 06",
        category: "Frontend",
        githubUrl: "https://github.com/AbdulQuayyum",
        project: "https://github.com/AbdulQuayyum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        tech: [
            < SiHtml5 />,
            < SiCss3 />,
        ]
    },
    {
        id: 11,
        image: imggen,
        name: "Image Generator",
        category: "Backend",
        githubUrl: "https://github.com/AbdulQuayyum/image-generator.git",
        project: "https://image-generator-jade.vercel.app/Frontend/Index.html",
        description: "A web application using Node.js, Express, Openai",
        tech: [
            < SiNodedotjs />,
            < SiExpress />,
            < SiOpenai />,
            < SiHtml5 />,
            < SiTailwindcss />,
        ]
    },
    {
        id: 12,
        image: crowdfunding,
        name: "Soft Crowdfunding Platform",
        category: "Frontend",
        githubUrl: "https://github.com/AbdulQuayyum/crowdfunding_platform.git",
        project: "https://github.com/AbdulQuayyum/crowdfunding_platform.git",
        description: "A web application using Vite, Thirdweb to create a web3 based crowdfunfing project",
        tech: [
            < SiVite />,
            < SiReact />,
            < SiTailwindcss />,
        ]
    },
    {
        id: 13,
        image: softgames,
        name: "Soft Games",
        category: "Frontend",
        githubUrl: "https://github.com/AbdulQuayyum/soft-games.git",
        project: "https://soft-games.vercel.app/",
        description: "A web application using Next.js, tailwind and framer motion to create a landing page for a game platform.",
        tech: [
            < SiNextdotjs />,
            < SiFramer />,
            < SiTailwindcss />,
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