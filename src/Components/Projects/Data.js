import { aiweb, auth, cat, clone, course, crowdfunding, imggen, softgames, softCard, softtours, uni, landing, portfolio, chatapp, nftapp, weather } from "../../Assets/Index"

import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript, SiSass, SiReact, SiNextdotjs, SiMongodb, SiExpo, SiNodedotjs, SiExpress, SiSupabase, SiVite, SiOpenai, SiFramer, SiSolidity, SiFirebase, SiDart, SiFlutter } from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"
export const projectsData = [
    {
        id: 1,
        image: cat,
        name: "Cats Breeds",
        category: "Frontend",
        githubUrl: "https://github.com/AbdulQuayyum/Cat-Breeds.git",
        project: "https://cats-amber.vercel.app/",
        description: "A Web Application to showcase some breeds of cats",
        tech: [
            < SiTypescript />,
            < SiJavascript />,
            < SiNextdotjs />,
            < SiCss3 />,
            < SiTailwindcss />,
            < SiSupabase />,
        ]
    },
    {
        id: 2,
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
    {
        id: 3,
        image: aiweb,
        name: "AI Website",
        category: "Frontend",
        githubUrl: "https://github.com/AbdulQuayyum/ai-website.git",
        project: "https://ai-website-rose.vercel.app/",
        description: "An AI Landing page describing the product",
        tech: [
            < SiReact />,
            < SiCss3 />,
        ]
    },
    {
        id: 4,
        image: softtours,
        name: "A Tour Guide Site",
        category: "Frontend",
        githubUrl: "https://github.com/AbdulQuayyum/Tour-guide-site.git",
        project: "https://tour-guide-site.vercel.app/",
        description: "A Tour Guide landing page.",
        tech: [
            <SiHtml5 />,
            < SiCss3 />,
            < SiSass />,
        ]
    },
    {
        id: 5,
        image: landing,
        name: "NFT App Laning Page",
        category: "Frontend",
        githubUrl: "https://github.com/AbdulQuayyum/landing-website.git",
        project: "https://landing-website-xi.vercel.app/",
        description: "A Landing page describing the NFT App I created",
        tech: [
            < SiReact />,
            < SiTailwindcss />,
            < SiCss3 />,
        ]
    },
    {
        id: 6,
        image: portfolio,
        name: "Previous Portfolio Website",
        category: "Frontend",
        githubUrl: "https://github.com/AbdulQuayyum/portfolio.git",
        project: "https://alao-abdul-quayyum-portfolio.vercel.app/",
        description: "A Portfolio website I created",
        tech: [
            < SiNextdotjs />,
            < SiTypescript />,
            < SiTailwindcss />,
            < SiCss3 />,
            < SiFramer />,
        ]
    },
    {
        id: 7,
        image: crowdfunding,
        name: "Soft Crowdfunding Platform",
        category: "Frontend",
        githubUrl: "https://github.com/AbdulQuayyum/crowdfunding_platform.git",
        project: "https://crowdfunding-platform-theta.vercel.app/",
        description: "A web3 application using Vite, Thirdweb to create a cryptocurrency based crowdfunding project (Followed a YouTube Tutorial)",
        tech: [
            < SiVite />,
            < SiReact />,
            < SiTailwindcss />,
            < SiSolidity />,
        ]
    },
    {
        id: 8,
        image: softCard,
        name: "Soft Card",
        category: "Frontend",
        githubUrl: "https://github.com/AbdulQuayyum/soft-card.git",
        project: "https://soft-card-ashen.vercel.app/",
        description: "A web3 application using Vite, Solidity to create a NFT card game (Followed a YouTube Tutorial)",
        tech: [
            < SiVite />,
            < SiReact />,
            < SiTailwindcss />,
            < SiSolidity />,
        ]
    },
    {
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
        image: chatapp ,
        name: "Chat App",
        category: "Mobile",
        githubUrl: "https://github.com/AbdulQuayyum/dev-stage.git",
        project: "https://github.com/AbdulQuayyum/dev-stage.git",
        description: "A Chatting mobile application using React Native, Expo, Firebase and other dependencies.",
        tech: [
            < TbBrandReactNative />,
            < SiFirebase />,
            < SiExpo />,
        ]
    },
    {
        id: 15,
        image: nftapp ,
        name: "Nft App",
        category: "Mobile",
        githubUrl: "https://github.com/AbdulQuayyum/React-Native-NFT-App.git",
        project: "https://github.com/AbdulQuayyum/React-Native-NFT-App.git",
        description: "A NFT mobile application using React Native, Expo and other dependencies.",
        tech: [
            < TbBrandReactNative />,
            < SiFirebase />,
        ]
    },
    {
        id: 16,
        image: weather ,
        name: "Weather App",
        category: "Mobile",
        githubUrl: "https://github.com/AbdulQuayyum/weather_app.git",
        project: "https://github.com/AbdulQuayyum/weather_app.git",
        description: "A Weather mobile application using Flutter, Dart and other dependencies.",
        tech: [
            < SiFlutter />,
            < SiDart />,
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