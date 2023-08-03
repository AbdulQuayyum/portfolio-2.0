import { cat, catfact, catquiz, chatapp, imggen, job, landing, nftapp, pollution, portal, softcodehelper, softgames, softmedia, softmediav2, softtours, tour, video, weather, } from "../../Assets/Index"

import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript, SiSass, SiReact, SiNextdotjs, SiMongodb, SiExpo, SiNodedotjs, SiExpress, SiSupabase, SiVite, SiOpenai, SiFramer, SiFirebase, SiDart, SiFlutter } from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"
import { ImGoogle } from "react-icons/im"
export const projectsData = [
    {
        id: 0,
        image: cat,
        name: "Cats Breeds",
        category: "Full Stack",
        githubUrl: "https://github.com/AbdulQuayyum/Cat-Breeds.git",
        project: "https://cats-amber.vercel.app/",
        description: "A Web Application to showcase some breeds of cats, built using Next.js, Typescript, Tailwind css for the frontend and supabase for the backend",
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
        id: 17,
        image: portal,
        name: "Soft Portal",
        category: "Frontend",
        githubUrl: "https://github.com/AbdulQuayyum/project-3d-03.git",
        project: "https://project-3d-03.vercel.app/",
        description: "A 3D website displaying a Floating Island with a portal door.",
        tech: [
            < SiJavascript />,
            < SiReact />,
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
        id: 7,
        image: video,
        name: "Soft Video Share",
        category: "Full Stack",
        githubUrl: "https://github.com/AbdulQuayyum/project-video-app.git",
        project: "https://project-video-app.vercel.app/",
        description: "A Web Application for video calling",
        tech: [
            < SiJavascript />,
            < SiReact />,
            < SiVite />,
            < SiTailwindcss />,
            < SiNodedotjs />,
            < SiExpress />,
        ]
    },
    {
        id: 5,
        image: softmedia,
        name: "Soft Media",
        category: "Full Stack",
        githubUrl: "https://github.com/AbdulQuayyum/soft-media.git",
        project: "https://soft-media.vercel.app/",
        description: "A social media web application where Images can be shared and enjoyed built using React, sanity, react-oauth/google, react-masonry css, react-loader-spinner and some other packages for the frontend while using sanity for the backend ",
        tech: [
            < SiJavascript />,
            < SiReact />,
            < ImGoogle />
        ]
    },
    {
        id: 6,
        image: softmediav2,
        name: "Soft Media v2",
        category: "Full Stack",
        githubUrl: "https://github.com/AbdulQuayyum/soft-media-2.0.git",
        project: "https://soft-media-2-0.vercel.app/",
        description: "A social media web application where Videos can be shared and enjoyed built using React, sanity, react-oauth/google and some other packages for the frontend while using sanity for the backend ",
        tech: [
            < SiTypescript />,
            < SiNextdotjs />,
            < SiJavascript />,
            < ImGoogle />
        ]
    },
    {
        id: 8,
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
        id: 9,
        image: softcodehelper,
        name: "Soft Code Helper",
        category: "Full Stack",
        githubUrl: "https://github.com/AbdulQuayyum/soft-code-helper.git",
        project: "https://soft-code-helper.vercel.app/",
        description: "Your AI Code Helper built using openai's 'Natural language to OpenAI API'",
        tech: [
            < SiJavascript />,
            < SiNodedotjs />,
            < SiExpress />,
            < SiOpenai />,
            < SiHtml5 />,
            < SiCss3 />,
            < SiVite />,
        ]
    },
    {
        id: 10,
        image: pollution,
        name: "Pollution News API",
        category: "Backend",
        githubUrl: "https://github.com/AbdulQuayyum/pollution-news-api.git",
        project: "https://rapidapi.com/AbdulQuayyum/api/pollution-news-api/",
        description: "An API service returning news articles about pollution in african countries. Try using another project of mine to summarize the articles",
        tech: [
            < SiJavascript />,
            < SiNodedotjs />,
            < SiExpress />
        ]
    },
    {
        id: 11,
        image: catfact,
        name: "Cat Facts API",
        category: "Backend",
        githubUrl: "https://github.com/AbdulQuayyum/random-cat-facts/tree/Source/Server",
        project: "https://rapidapi.com/AbdulQuayyum/api/cat-facts12/",
        description: "An API Service providing random facts about cats",
        tech: [
            < SiJavascript />,
            < SiNodedotjs />,
            < SiExpress />
        ]
    },
    {
        id: 12,
        image: catquiz,
        name: "Cat Quiz API",
        category: "Backend",
        githubUrl: "https://github.com/AbdulQuayyum/soft-cat-quiz/tree/Source/Server",
        project: "https://rapidapi.com/AbdulQuayyum/api/soft-cat-quiz/",
        description: "An API service returning A about cats.",
        tech: [
            < SiJavascript />,
            < SiNodedotjs />,
            < SiExpress />,
            < SiMongodb />,
        ]
    },
    {
        id: 16,
        image: tour,
        name: "Travel Goals App",
        category: "Mobile",
        githubUrl: "https://github.com/AbdulQuayyum/mytravelgoals",
        project: "https://github.com/AbdulQuayyum/mytravelgoals",
        description: "A Cross Platform Application showing some Tourist Attractions in Nigeria.",
        tech: [
            < SiDart />,
            < SiFlutter />,
        ]
    },
    {
        id: 17,
        image: job,
        name: "Job Finder App",
        category: "Mobile",
        githubUrl: "https://github.com/AbdulQuayyum/soft-jobs.git",
        project: "https://expo.dev/@quayyum/soft-jobs?serviceType=classic&dist",
        description: "A Cross Platform Application for Job Finders",
        tech: [
            < SiJavascript />,
            < TbBrandReactNative />,
            < SiFirebase />,
            < SiExpo />,
        ]
    },
    {
        id: 13,
        image: chatapp,
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
        image: nftapp,
        name: "Nft App",
        category: "Mobile",
        githubUrl: "https://github.com/AbdulQuayyum/React-Native-NFT-App.git",
        project: "https://github.com/AbdulQuayyum/React-Native-NFT-App.git",
        description: "A NFT cross platoform application using React Native, Expo and other dependencies.",
        tech: [
            < SiJavascript />,
            < TbBrandReactNative />,
            < SiFirebase />,
        ]
    },
    {
        id: 15,
        image: weather,
        name: "Weather App",
        category: "Mobile",
        githubUrl: "https://github.com/AbdulQuayyum/weather_app.git",
        project: "https://github.com/AbdulQuayyum/weather_app.git",
        description: "A Weather cross platform application using Flutter, Dart and other dependencies.",
        tech: [
            < SiDart />,
            < SiFlutter />,
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