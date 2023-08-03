// import About from "../Components/About/About"
// import BackToTop from "../Components/BackToTop/BackToTop"
// import Contact from "../Components/Contact/Contact"
// import Footer from "../Components/Footer/Footer"
// import Header from "../Components/Header/Header"
// import Home from "../Components/Home/Home"
// import Project from "../Components/Projects/Project"
// import Qualification from "../Components/Qualification/Qualification"
// import Services from "../Components/Services/Services"
// import Skills from "../Components/Skills/Skills"
// import Testimonials from "../Components/Testimonials/Testimonials"

import { About, BackToTop, Contact, Footer, Header, Home, Project, Qualification, Services, Skills, Testimonials } from "../Components/Index"

export default function Layout(props) {
    const { children } = props
    return (
        <>
            <header className='flex justify-center w-full'>
                <Header />
            </header>
            <main className="main">
                <Home />
                <About />
                <Skills />
                <Services />
                <Project />
                <Qualification />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <BackToTop />
            {children}
        </>
    )
}