import About from "../Components/About/About";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import Services from "../Components/Services/Services";
import Skills from "../Components/Skills/Skills";

export default function Layout(props) {
    const { children } = props;
    return (
        <div>
            <Header />
            <main className="main">
                <Home />
                <About />
                <Skills />
                <Services />
            </main>
            {children}
        </div>
    );
}