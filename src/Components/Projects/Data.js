import { aiweb, auth, cat, course, crowdfunding, imggen, softgames, softCard, softtours, uni, landing, portfolio, chatapp, nftapp, weather, softproperties, softmedia } from "../../Assets/Index"

import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript, SiSass, SiReact, SiMui, SiNextdotjs, SiMongodb, SiExpo, SiNodedotjs, SiExpress, SiSupabase, SiVite, SiOpenai, SiFramer, SiSolidity, SiFirebase, SiDart, SiFlutter } from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"
export const projectsData = [
    {
        id: 0,
        image: cat,
        name: "Cats Breeds",
        category: "Full Stack",
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
        id: 1,
        image: softgames,
        name: "Soft Games",
        category: "Frontend",
        githubUrl: "https://github.com/AbdulQuayyum/soft-games.git",
        project: "https://soft-games.vercel.app/",
        description: "A web application using Next.js, tailwind and framer motion to create a landing page for a game platform.",
        tech: [
            < SiJavascript />,
            < SiNextdotjs />,
            < SiFramer />,
            < SiTailwindcss />,
        ]
    },
    {
        id: 2,
        image: aiweb,
        name: "AI Website",
        category: "Frontend",
        githubUrl: "https://github.com/AbdulQuayyum/ai-website.git",
        project: "https://ai-website-rose.vercel.app/",
        description: "An AI Landing page describing the product",
        tech: [
            < SiJavascript />,
            < SiReact />,
            < SiCss3 />,
        ]
    },
    {
        id: 3,
        image: softtours,
        name: "A Tour Guide Site",
        category: "Frontend",
        githubUrl: "https://github.com/AbdulQuayyum/Project-18/tree/main/(Project%2002)Tour%20Guide%20Site",
        project: "https://tour-guide-site.vercel.app/",
        description: "A Tour Guide landing page.",
        tech: [
            <SiHtml5 />,
            < SiCss3 />,
            < SiSass />,
        ]
    },
    {
        id: 4,
        image: landing,
        name: "NFT App Laning Page",
        category: "Frontend",
        githubUrl: "https://github.com/AbdulQuayyum/landing-website.git",
        project: "https://landing-website-xi.vercel.app/",
        description: "A Landing page describing the NFT App I created",
        tech: [
            < SiJavascript />,
            < SiReact />,
            < SiTailwindcss />,
            < SiCss3 />,
        ]
    },
    {
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
        image: softproperties ,
        name: "Soft Properties",
        category: "Full Stack",
        githubUrl: "https://github.com/AbdulQuayyum/soft-properties",
        project: "https://soft-properties.vercel.app/",
        description: "A Real Estate Properties dashboard using Refine, React, Typescript, Apex Charts, mui for the frontend and Cloudinary, cors, Express and MONGO DB",
        tech: [
            < SiJavascript />,
            < SiTypescript />,
            < SiReact />,
            < SiMui />,
            < SiExpress />,
            < SiMongodb />,
        ]
    },
    {
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
        image: imggen,
        name: "Image Generator",
        category: "Full Stack",
        githubUrl: "https://github.com/AbdulQuayyum/project-image-generator.git",
        project: "https://project-image-generator.vercel.app/",
        description: "A text to image web application created using Node.js, Express, Openai, MongoDB, Cloudinary for the Backend and React.js, Vite.js, Tailwind css for the Frontend",
        tech: [
            < SiJavascript />,
            < SiNodedotjs />,
            < SiExpress />,
            < SiOpenai />,
            < SiMongodb />,
            < SiReact />,
            < SiVite />,
            < SiTailwindcss />,
        ]
    },
    {
        id: 13,
        image: chatapp ,
        name: "Chat App",
        category: "Mobile",
        githubUrl: "https://github.com/AbdulQuayyum/dev-stage.git",
        project: "https://github.com/AbdulQuayyum/dev-stage.git",
        description: "A Chatting mobile application using React Native, Expo, Firebase and other dependencies.",
        tech: [
            < SiJavascript />,
            < TbBrandReactNative />,
            < SiFirebase />,
            < SiExpo />,
        ]
    },
    {
        id: 14,
        image: nftapp ,
        name: "Nft App",
        category: "Mobile",
        githubUrl: "https://github.com/AbdulQuayyum/React-Native-NFT-App.git",
        project: "https://github.com/AbdulQuayyum/React-Native-NFT-App.git",
        description: "A NFT mobile application using React Native, Expo and other dependencies.",
        tech: [
            < SiJavascript />,
            < TbBrandReactNative />,
            < SiFirebase />,
        ]
    },
    {
        id: 15,
        image: weather ,
        name: "Weather App",
        category: "Mobile",
        githubUrl: "https://github.com/AbdulQuayyum/weather_app.git",
        project: "https://github.com/AbdulQuayyum/weather_app.git",
        description: "A Weather mobile application using Flutter, Dart and other dependencies.",
        tech: [
            < SiDart />, 
            < SiFlutter />,
        ]
    },
    {
        id: 17,
        image: softmedia ,
        name: "Soft Media",
        category: "Full Stack",
        githubUrl: "https://github.com/AbdulQuayyum/soft-media.git",
        project: "https://soft-media.vercel.app/",
        description: "A social media web application where Images can be shared and enjoyed built using React, sanity, react-oauth/google, react-masonry css, react-loader-spinner and some other packages for the frontend while using sanity for the backend ",
        tech: [
            < SiJavascript />,
            < SiReact />,
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
    {
        name: "Full Stack"
    },
]